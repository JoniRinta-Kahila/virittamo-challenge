# MERN Stack Application for Recording Issued Devices
### Virittämö - Recruitment challenge

## Overview
Welcome, Developer! In this document, we'll guide you on creating a web application using the MERN (MongoDB, Express.js, React.js, Node.js)  stack for recording devices issued by the ICT team to other departments within the company. The application should include features to capture information such as the date of issue, device details (name, manufacturer, device number), recipient details (name, department), and returning date.

## Project Installation and Setup

### General Requirements

- Node.js (at least version 18)
- npm (Node Package Manager)
- Docker (for MongoDB in the back-end)

### Installation

1. Clone the repository locally:

    ```bash
    git clone https://github.com/JoniRinta-Kahila/virittamo-challenge.git
    cd repo
    ```

2. Install dependencies for both projects:

    ```bash
    npm install
    ```

#### Back-end (back)

3. Navigate to the `back` project directory:

    ```bash
    cd back
    ```

4. Install dependencies for the `back` project:

    ```bash
    npm install
    ```

#### Front-end (front)

3. Navigate to the `front` project directory:

    ```bash
    cd front
    ```

4. Install dependencies for the `front` project:

    ```bash
    npm install
    ```

## Running the Projects

You can start both projects simultaneously using the following command from the root directory:

  ```bash
  npm start
  ```

This will launch both projects concurrently.

### Back-end (back)

If you want to start only the `back` project separately, use the following command in the root directory:

  ```bash
  npm run dev:back
  ```

### Front-end (front)

If you want to start only the `front` project separately, use the following command in the root directory:

  ```bash
  npm run dev:front
  ```