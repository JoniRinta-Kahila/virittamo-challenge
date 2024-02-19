import { Response, Request, NextFunction } from 'express';
import { Error as MongooseError } from 'mongoose';

const handleAsyncError = (fn: (req: Request, res: Response, next: NextFunction) => Promise<void>) => 
  (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((error) => {
      handleError(error, res);
    });
  };

const handleError = (error: unknown, res: Response) => {
  let statusCode = 500;
  let errorMessage = 'Internal Server Error';

  if (error instanceof MongooseError || (error instanceof Error && error.name === 'CastError')) {
    // MongooseError - MongoDB-tietokantaan liittyvä virhe
    console.error('MongoDB Error:', error.message);
  } else if (error instanceof Error) {
    // Yleiset virheet
    console.error('Error:', error.message);
    statusCode = 500;
    errorMessage = error.message;
  } else {
    // Muut virheet
    console.error('Unknown Error:', error);
    statusCode = 500;
    errorMessage = 'Unknown error';
  }

  res.status(statusCode).json({ message: errorMessage, error });
};

export { handleError, handleAsyncError };
