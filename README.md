# E-commerce Application (AmarStore)

AmarStore is a comprehensive e-commerce application comprising a frontend and backend. The frontend is built with React, while the backend utilizes Node.js and Express.

## Backend

The backend, built with Node.js and Express, provides API endpoints for user authentication, product management, and shopping cart operations. It integrates with MongoDB for data storage and Stripe for payment processing.

### Prerequisites

Ensure the neccesary dependencies should be installed before running the backend:

- Node.js
- MongoDB
- Stripe API Key (You need to set it up in a .env file)

### Installation

1. Clone the repository:

2. Install dependencies:

3. Start the server:

The backend server will be running on http://localhost:4000.

### Configuration

- You need to set up environment variables in a `.env` file. 


## Frontend

The frontend is dist with React and is designed to interact with the backend API. It provides a user-friendly interface for browsing products, adding them to the cart, and completing the checkout process.

### Prerequisites

Before running the frontend, make sure you have the following dependencies installed:

- Node.js

### Installation

1. Clone the repository (if you haven't already):

2. Install dependencies:

3. Start the development server:

The frontend development server will be running on http://localhost:5173.

## Usage

- Visit http://localhost:5173 in your web browser to access the frontend.
- You can use the API endpoints provided by the backend for various operations.

## Folder Structure

- `backend/`: Backend code.
- `frontend/`: Frontend code.
- `dist/`: Frontend production build.

## Frontend Technologies
-  `React`: For building the user interface.
-  `Redux Toolkit`: For state management.
-  `Tailwind CSS`: For styling.
-  `UI components`: Using shadcn/ui for UI components.


## Acknowledgments

- Thanks to [Stripe](https://stripe.com) for their payment processing services.



