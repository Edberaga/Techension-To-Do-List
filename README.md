# To-Do Application

## Description

A simple To-Do application for Techension Online Test. built with React and Vite for the front-end, Express.js for the back-end, and MongoDB for the database. The application allows users to add, view, update, delete, and search tasks.

## Features

- **Add a Task**: Users can add new to-do tasks with a status (e.g., pending, completed).
- **View Tasks**: Users can view all to-do tasks.
- **Update a Task**: Users can update the details and status of an existing task.
- **Delete a Task**: Users can delete a task.
- **Search Tasks**: Users can search for tasks based on keywords.

## Additional Features

- **User Registration**: Users require to register in order to use the web app.
- **User Login**:

## Setup Instructions

### Front-end

1. Navigate to the front-end directory:
    cd frontend

2. Install dependencies:
    npm install

3. Run the development server: 
    npm run dev

### Back-end

1. Navigate to the back-end directory: 
    cd backend

2. Install dependencies: 
    npm install

3. Create a `.env` file in the `backend` and place the MongoDB compass URL I have attached. Example:
    MONGO_URI="mongodb+srv://<username>:<password>@cluster0.<random-id>.mongodb.net/"