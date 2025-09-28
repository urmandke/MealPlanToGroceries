# MealPlanToGroceries Backend

This is the backend for the MealPlanToGroceries application, built using Node.js, Express, and TypeScript. The backend is responsible for handling API requests related to meal planning and ingredient management.

## Features

- User authentication and management
- CRUD operations for ingredients
- Integration with MongoDB for data storage
- RESTful API for frontend consumption

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory:

   ```
   cd MealPlanToGroceries/backend
   ```

3. Install the dependencies:

   ```
   npm install
   ```

### Configuration

- Create a `.env` file in the backend directory to store environment variables such as database connection strings and port numbers.

### Running the Application

To start the backend server, run:

```
npm start
```

The server will be running at `http://localhost:3000`.

### API Endpoints

The backend exposes several API endpoints for managing ingredients. Below are the main endpoints:

- `GET /ingredients`: Retrieve all ingredients
- `GET /ingredients/:id`: Retrieve a specific ingredient by ID
- `POST /ingredients`: Create a new ingredient
- `PUT /ingredients/:id`: Update an existing ingredient
- `DELETE /ingredients/:id`: Delete an ingredient

### Testing

To run tests, use:

```
npm test
```

### License

This project is licensed under the MIT License. See the LICENSE file for details.