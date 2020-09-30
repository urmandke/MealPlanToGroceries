# MealPlanToGroceries
An application that converts your meal plan to a list of Grocies to purchase at Walmart. In the final form it will have the following features(still work in progress):

1. User login and authentication
2. Ability for users to create recipies
3. Ability for user to create ingredients
4. Ability for users to create meal plans for current week
5. Backend logic to calculate the most efficient basket of the walmart store from the given meal plan.


## Dependencies

1. MongoDB: Mongodb should be installed on your machine and mongod service should be running. Please refer to (for MongoDB community version):
https://docs.mongodb.com/manual/administration/install-community/

2. Node: node libraries should be installed. Please refer to:
https://nodejs.org/en/

3. npm: npm package manage manager will with installed with node 


## Install

use npm install to install node dependacies:

```
npm install
```

## Run
In-order to start the http-server:

```
npm start
```
and make requests to address:

```
 http://localhost:3000/
```
3000 is the default port. The app is designed to read environment variable for PORT

## Build
Please use the follow to build the application:
```
npm build
```

## Current Status
A model of ingredients is created and Routes to perform the following HTTP requests are defined:

### Endpoint: //localhost:3000/ingredients ###
    *GET*   
    Returns a list of all ingredients added to server (in json) in the body of the response
    
    
    *HEAD*
    Similar to GET but returns the header only as response.
    
    
    *POST*   
    Requires a json object in the body in the form of:

    {}
      "name": "Test_Ingredient2",
      "servingSize": 100,
      "protein": 25,
      "date": "2011-12-02T17:57:28.556094Z"
    }

    *OPTIONS*   
    Returns the methods supported at the end-point in the header of the response (Allow header)

    *PUT*

    PUT method is not supported at this end point. If request will return a response with the same information in the body.

    *DELETE*

    DELETES method deletes all documents in the ingredients collection.


    
### Endpoint: //localhost:3000/ingredients/:ingredientId ###


    Supported Methods:

    *GET*   
    Returns a json object of the ingredient correponding to the ingredientId in the route.
    
    
    *HEAD*
   
    Similar to GET but returns the header only as response.
    
    
    *POST*   
    PUT method is not supported at this end point. If request will return a response with the same information in the body.
    
    *OPTIONS*   
    Returns the methods supported at the end-point in the header of the response (Allow header)

    *PUT*

    Updates the ingredient corresponding to the *ingredientId* in the route. Expects the body of the request to contain a json object like so:
    
    {
      "name": "Test_Ingredient2",
      "servingSize": 100,
      "protein": 25,
      "date": "2011-12-02T17:57:28.556094Z"
    }


    *DELETE*

    DELETES method deletes all documents in the ingredients collection.

    *TRACE*

    Returns a response that the object with the ID(provided in the route) exsist on the server if true. Else returns error.