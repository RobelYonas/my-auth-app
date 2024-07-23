# Simple Authentication Form with Next.js and Flask

## Project Overview

This project demonstrates a basic implementation of an authentication system using Next.js for the frontend and Flask for the backend. The goal is to understand how to integrate a Python backend with a JavaScript frontend to handle user authentication through signup and login forms.

## Project Structure

The project is divided into two main parts:

1. **Frontend (Next.js)**
2. **Backend (Flask)**

### Frontend (Next.js)

The frontend is built using Next.js, a React framework that enables server-side rendering and static site generation. The frontend contains the following key files:

- **pages/login.js**: Contains the login form and handles user input for email and password, sending the data to the backend for authentication.
- **pages/signup.js**: Contains the signup form and handles user input for email and password, sending the data to the backend for user registration.

### Backend (Flask)

The backend is built using Flask, a lightweight WSGI web application framework in Python. It handles user registration and authentication. Key files include:

- **main.py**: Contains the Flask application with endpoints for user signup (`/signup`) and login (`/login`). The backend uses an in-memory list to store user data for simplicity. Flask-CORS is used to handle Cross-Origin Resource Sharing (CORS) to allow requests from the frontend.

## Technologies Used

- **Next.js**: For the frontend application, providing server-side rendering and a robust framework for building React applications.
- **React**: For building user interfaces.
- **Axios**: For making HTTP requests from the frontend to the backend.
- **Flask**: For the backend application, providing a simple and flexible framework for building web applications in Python.
- **Flask-CORS**: For handling CORS to allow communication between the frontend and backend running on different ports.

## Running the Project

To run this project, you will need to start both the Next.js frontend and the Flask backend. Detailed setup and running instructions are provided in the respective directories (`my-auth-app` for the frontend and `backend` for the backend).

## Purpose

The main purpose of this project is to provide a hands-on example of how to create a simple authentication system using Python as the backend language and Next.js for the frontend. It serves as a learning tool for those new to full-stack development and integrating different technologies.

## Future Improvements

- **Database Integration**: Replace the in-memory user list with a database like SQLite, PostgreSQL, or MongoDB for persistent storage.
- **Enhanced Security**: Implement password hashing and other security measures.
- **Session Management**: Add session management to maintain user authentication state.
- **Form Validation**: Improve form validation on both the frontend and backend.

## Conclusion

This project serves as a basic example to understand the integration between a Python backend and a Next.js frontend. It provides a foundation upon which more complex and secure authentication systems can be built.
