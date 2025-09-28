# MealPlanToGroceries

This project is a MERN (MongoDB, Express, React, Node.js) application built with TypeScript that converts your meal plan into a list of groceries to purchase at Walmart. The application is structured into two main parts: the backend and the frontend.

## Project Structure

```
MealPlanToGroceries
├── backend
│   ├── src
│   │   ├── app.ts
│   │   ├── controllers
│   │   │   └── ingredientController.ts
│   │   ├── models
│   │   │   └── ingredientModel.ts
│   │   ├── routes
│   │   │   └── ingredientRoutes.ts
│   │   ├── services
│   │   │   └── ingredientService.ts
│   │   └── types
│   │       └── index.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
├── frontend
│   ├── src
│   │   ├── App.tsx
│   │   ├── components
│   │   │   └── IngredientList.tsx
│   │   ├── pages
│   │   │   └── HomePage.tsx
│   │   ├── services
│   │   │   └── apiService.ts
│   │   └── types
│   │       └── index.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
├── .gitignore
└── README.md
```

## Features

1. User login and authentication
2. Ability for users to create recipes
3. Ability for users to create ingredients
4. Ability for users to create meal plans for the current week
5. Backend logic to calculate the most efficient basket of the Walmart store from the given meal plan

## Dependencies

### Backend

- MongoDB: Ensure MongoDB is installed and the `mongod` service is running. Refer to the MongoDB community version documentation for installation instructions: https://docs.mongodb.com/manual/administration/install-community/
- Node.js: Install Node.js from the official website: https://nodejs.org/en/
- TypeScript: The backend is built using TypeScript, so ensure you have TypeScript installed.

### Frontend

- React: The frontend is built using React and TypeScript. Ensure you have the necessary dependencies installed.

## Installation

To install the backend dependencies, navigate to the `backend` directory and run:

```
npm install
```

To install the frontend dependencies, navigate to the `frontend` directory and run:

```
npm install
```

## Running the Application

### Backend

To start the backend server, navigate to the `backend` directory and run:

```
npm start
```

The backend server will be available at:

```
http://localhost:3000/
```

### Frontend

To start the frontend application, navigate to the `frontend` directory and run:

```
npm start
```

The frontend application will be available at:

```
http://localhost:3001/
```

## Building the Application

To build the backend application, navigate to the `backend` directory and run:

```
npm run build
```

To build the frontend application, navigate to the `frontend` directory and run:

```
npm run build
```

## Current Status

The backend has a model for ingredients and routes to perform various HTTP requests related to ingredients. The frontend is set up to display and manage ingredients through a user-friendly interface.

## Contribution

Contributions are welcome! Please feel free to submit issues or pull requests.