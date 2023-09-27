# PeerPrep Question Service

Handles the storing retrieving, updating and deleting of questions.

The `docker-compose.yml` file starts 2 Docker containers.
- `mongo-db` - NoSQL Database for storing question repository.
- `api` - REST API for interacting with the database.

## Table of Contents

- [PeerPrep Question Service](#peerprep-question-service)
    - [Quickstart Guide](#quickstart-guide)
    - [Environment Variables](#environment-variables)
        - [Common](#common)
        - [Database](#database)
        - [API](#api)
    - [REST API](#rest-api)
        - [Retrieve all questions](#retrieve-all-questions)
        - [Retrieve a question by ID](#retrieve-question-by-id)
        - [Update a question by ID](#update-question)
        - [Add a question to database](#add-question)
        - [Delete a question by ID](#delete-question)


## Quickstart Guide

1. Clone the repository.
2. Create `.env` file with specified variables. Refer to [Environment Variables](#environment-variables) for a list of configs.
3. Run `npm install` to install necessary dependencies.
4. Create and start Docker containers by running command `docker compose up -d`.

## Environment Variables

### Common

These environment variables are used by both the API and database images.

* `MONGODB_PASSWORD` - Password of the database.
* `MONGODB_USER` - User on the database host.
* `MONGODB_HOST` - Name of the database.
* `HASH_COST` - Cost factor of the password hashing algorithm.

### Database

* `MONGODB_DOCKER_PORT` - Docker Port for Database.
* `MONGODB_LOCAL_PORT` - Local Port for Database.

### API

* `EXPRESS_DOCKER_PORT` - Docker Port for REST API.
* `EXPRESS_LOCAL_PORT` - Local Port for REST API.

## REST API

### Response Format

**Response Format Successful**

```json
{
  "status": "successful",
  "data": {},
  "message": null
}
```

**Response Format Error**

```json
{
  "status": "error",
  "code": 404,
  "data": null,
  "message": "Error Message"
}
```


### Retrieve All Questions

> [GET] `/question-service/questions`

Retrieves all questions in the database.

**Response**

- `200` - Success.
  - Returns questions as an Array of JSON objects
  - Each question has the following fields
    - id
    - title
    - complexity
    - description
  - Example Response Body
    ```json
    {
      "status": "success",
      "data": [{
          "id": "123",
          "title": "Example Question",
          "description": "Placeholder Description",
          "complexity": "Easy",
          "categories": ["Arrays"]   
        },
        {
          "id": "234",
          "title": "Example Question 2",
          "description": "Placeholder Description",
          "complexity": "Easy",
          "categories": ["Arrays", "Algorithms"]
      }],
      "message": null
    }
    ```
- `500` - Error
  - Unexpected error occurred on the server.


### Retrieve Question by ID

> [GET] `/question-service/questions/:id`

Retrieves a question by its ID.

**Response**

- `200` - Success.
    - Returns question with matching ID as JSON Object with the following fields:
      - id
      - title
      - description
      - complexity
      - categories
    - Example Response Body
      ```json
      {
        "status": "success",
        "data": {
          "id": "123",
          "title": "Example Question",
          "description": "Placeholder Description",
          "complexity": "Easy",
          "categories": ["Arrays"]   
        },
        "message": null
      }
      ```

- `404` - Error
  - Question ID not found in Database.

- `500` - Error
    - Unexpected error occurred on the server.


### Update Question

> [PUT] `/question-service/questions/:id`
 
Updates a question in the database by ID.

The data for the new question is passed in the request body with the following fields:
- `title` - The title of the question
- `description` - The question description
- `complexity` - The difficulty level of the question
- `categories` - The different topics applicable to the question

**Response**

- `201` - Success.
    - Question is successfully added to the database.
    - The `data` field in the response contains the newly added question.
    - Example Response Body
      ```json
      {
        "status": "success",
        "data": {
          "id": "123",
          "title": "Example Question",
          "description": "Placeholder Description",
          "complexity": "Easy",
          "categories": ["Arrays"]   
        },
        "message": "Question updated successfully"
      }
      ```
- `404` - Error
  - The question could not be found in the database.
- `500` - Error
    - Unexpected error occurred on the server.

### Add Question

> [POST] `/question-service/questions`

Adds a question to the database.

The data for the new question is passed in the request body with the following fields:
- `title` - The title of the question 
- `description` - The question description
- `complexity` - The difficulty level of the question
- `categories` - The different topics applicable to the question

**Response**

- `201` - Success.
    - Question is successfully added to the database
    - The `data` field in the response contains the newly added question
    - Example Response Body
      ```json
      {
        "status": "success",
        "data": {
          "id": "123",
          "title": "Example Question",
          "description": "Placeholder Description",
          "complexity": "Easy",
          "categories": ["Arrays"]   
        },
        "message": "Question added successfully"
      }
      ```

- `500` - Error
    - Unexpected error occurred on the server.

### Delete Question

> [DELETE] `/question-service/questions/:id`

Deletes a question in the database by ID.

**Response**

- `201` - Success.
    - Question is successfully deleted from the database.
    - Example Response Body
      ```json
      {
        "status": "success",
        "data": null,
        "message": "Question deleted successfully"
      }
      ```
- `404` - Error
    - The question could not be found in the database.
- `500` - Error
    - Unexpected error occurred on the server.

## Features Under Development

### Implementing User Roles into API Endpoints

- Only users of the **maintainer** and **admin** role should have authorisation to add, update or delete questions.
- Unauthorised users will receive a `403` status when calling these endpoints


### Adding Endpoint for retrieval of Question for Matching Service 

- An endpoint for the retrieval of a random question when called by the matching service
- The question should be able to be filtered by both complexity and category



