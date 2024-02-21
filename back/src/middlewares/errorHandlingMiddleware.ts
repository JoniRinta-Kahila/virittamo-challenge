import { Response, Request, NextFunction } from 'express';
import { Error as MongooseError } from 'mongoose';

// Middleware to handle asynchronous errors
const handleAsyncError = (fn: (req: Request, res: Response, next: NextFunction) => Promise<void>) =>
  (req: Request, res: Response, next: NextFunction) => {
    // Resolve the asynchronous function and handle any potential errors
    Promise.resolve(fn(req, res, next)).catch((error) => {
      handleError(error, res);
    });
  };

// Generic error handler function
const handleError = (error: unknown, res: Response) => {
  // Default values for status code and error message
  let statusCode = 500;
  let errorMessage = 'Internal Server Error';

  // Check if the error is related to Mongoose or a CastError
  if (error instanceof MongooseError || (error instanceof Error && error.name === 'CastError')) {
    // MongooseError - MongoDB database-related error
    console.error('MongoDB Error:', error.message);
  } else if (error instanceof Error) {
    // General errors
    console.error('Error:', error.message);
    statusCode = 500;
    errorMessage = error.message;
  } else {
    // Other types of errors
    console.error('Unknown Error:', error);
    statusCode = 500;
    errorMessage = 'Unknown error';
  }

  // Respond with the appropriate status code and error message
  res.status(statusCode).json({ message: errorMessage, error });
};

export { handleError, handleAsyncError };
