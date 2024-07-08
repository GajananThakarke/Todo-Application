# Todo-Application

Todo application with Node.js, React, and Docker

## Overview

This is a Todo application with a Node.js backend and a React frontend. The application is containerized using Docker Compose.

## Features

- Add a new todo item
- Edit an existing todo item
- Delete a todo item
- Mark a todo item as complete/incomplete
- View a list of all todo items
- Search for todo items
- Authenticate using Google

## Technology Used

### Backend
- **Node.js**
- **Express.js**
- **MySQL 8**
- **Sequelize (ORM)**
- **Google OAuth**

### Frontend
- **React.js**
- **TypeScript**
- **HTML**
- **CSS**

### Containerization
- **Docker**
- **Docker Compose**

## Setup and Run

### Prerequisites

- Docker
- Docker Compose

### Running the Application

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd <repository-name>
    ```

2. Install dependencies for both the frontend and backend:

    ```bash
    # Navigate to backend directory and install dependencies
    cd todo-backend
    npm install

    # Navigate to frontend directory and install dependencies
    cd ../todo-frontend
    npm install
    ```

3. Start the application using Docker Compose:
    ```bash
    docker-compose up
    ```

4. Access the application:
   - Frontend: `http://localhost:3000`
   - Backend: `http://localhost:3001`

## Approach and Challenges

- **Approach**: The application was developed using Node.js with Express.js for the backend and React with TypeScript for the frontend. Docker Compose was used to containerize the application.
- **Challenges**: Handling authentication with Google OAuth was challenging. Ensuring seamless communication between the frontend and backend in a Dockerized environment required careful configuration.

## License

This project is licensed under the MIT License.
