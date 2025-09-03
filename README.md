# 📜 Habit Tracker Application - Project Documentation 📜

## 🔷 Introduction

This is the front-end part of the Habit Tracker application, built with React.

It is responsible for the user interface, allowing interaction with the backend API to manage habits, register users, and visualize progress.

## 🔷 Technologies Used

The project was built using the following technologies:

### 🔹 Core Libraries

**React**: The main library for building the user interface.

**React DOM**: Responsible for rendering components to the DOM.

**React Router DOM**: For managing navigation between the application's pages.

**Axios**: An HTTP client for making requests to the backend API.

**React Toastify**: For displaying notifications and feedback messages to the user.

**Recharts**: For creating interactive charts on the dashboard.

**ESLint and Prettier**: Tools for maintaining code consistency and quality.

## 🔷 Project Setup

To set up and run the project locally, follow the steps below.

### 1. Install Dependencies

First, navigate to the project's root folder (where the package.json file is located) and install all the necessary dependencies using the Node Package Manager (NPM):

```
npm install
```

### 2. Start the Development Server

After installing the dependencies, you can start the React development server. Run the following command in the terminal:

```
npm start
```

This command will start the application on a local server, usually at **http://localhost:3000**, and will automatically open it in your default browser.

Your **package.json** file already has a proxy configuration that directs all application requests to your backend, running on **http://127.0.0.1:5000**.

Make sure your backend is active and running before starting the frontend for everything to work correctly.

## 🔷 Execution Scripts

Here are the scripts available in your package.json and what they do:

- **npm start**: Starts the development server.

- **npm run build**: Creates an optimized version of the application for production.

- **npm test**: Runs the unit tests configured in the project.

- **npm run eject**: Removes the react-scripts dependency and copies all configurations into your project, giving you full control over them.

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature.
