# AmarStore

AmarStore is a comprehensive e-commerce application that includes a frontend built with React and a backend using Node.js and Express. It provides functionalities such as user authentication, product management, and shopping cart operations, integrating with MongoDB for data storage and Stripe for payment processing.

## Table of Contents

- [Features](#features)
- [Backend](#backend)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Frontend](#frontend)
  - [Prerequisites](#prerequisites-1)
  - [Installation](#installation-1)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Technologies](#technologies)
- [Acknowledgments](#acknowledgments)
- [License](#license)

## Features

- User authentication
- Product management
- Shopping cart
- Payment processing with Stripe
- Responsive UI

## Backend

The backend, built with Node.js and Express, provides API endpoints for user authentication, product management, and shopping cart operations. It integrates with MongoDB for data storage and Stripe for payment processing.

### Prerequisites

Ensure the necessary dependencies are installed before running the backend:

- Node.js
- MongoDB
- Stripe API Key (You need to set it up in a `.env` file)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/AmarStore.git
    cd AmarStore/backend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the server:
    ```sh
    npm start
    ```

The backend server will be running on [http://localhost:4000](http://localhost:4000).

### Configuration

You need to set up environment variables in a `.env` file. Below is an example of the variables required:
MONGO_URI=your_mongodb_connection_string
STRIPE_SECRET_KEY=your_stripe_secret_key
JWT_SECRET=your_jwt_secret

## Frontend

The frontend is built with React and is designed to interact with the backend API. It provides a user-friendly interface for browsing products, adding them to the cart, and completing the checkout process.

### Prerequisites

Before running the frontend, make sure you have the following dependencies installed:

- Node.js

### Installation

1. Clone the repository (if you haven't already):
    ```sh
    git clone https://github.com/your-username/AmarStore.git
    cd AmarStore/frontend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the development server:
    ```sh
    npm start
    ```

The frontend development server will be running on [http://localhost:5173](http://localhost:5173).

## Usage

- Visit [http://localhost:5173](http://localhost:5173) in your web browser to access the frontend.
- You can use the API endpoints provided by the backend for various operations.

## Folder Structure

- `backend/`: Backend code.
- `frontend/`: Frontend code.
- `dist/`: Frontend production build.

## Technologies

### Backend Technologies
- `Node.js`: JavaScript runtime environment.
- `Express`: Web framework for Node.js.
- `MongoDB`: NoSQL database.
- `Stripe`: Payment processing.

### Frontend Technologies
- `React`: For building the user interface.
- `Redux Toolkit`: For state management.
- `Tailwind CSS`: For styling.
- `shadcn/ui`: UI components.

## Acknowledgments

- Thanks to [Stripe](https://stripe.com) for their payment processing services.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
