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
        - [Retrieve a question by Params](#retrieve-question-by-params)
        - [Update a question by ID](#update-question)
        - [Add a question to database](#add-question)
        - [Delete a question by ID](#delete-question)


## Quickstart Guide

1. Clone the repository.
2. Create `.env` file with specified variables. Refer to [Environment Variables](#environment-variables) for a list of configs.
3. Change directory to `api` directory and run `npm install` to install necessary dependencies.
4. Create and start Docker containers by running command `docker compose up -d`.

## Environment Variables

### Common

These environment variables are used by both the API and database images.

* `MONGODB_PASSWORD` - Password of the database.
* `MONGODB_USER` - User on the database host.
* `MONGODB_HOST` - Name of the database.

### Database

* `MONGODB_DOCKER_PORT` - Docker Port for Database.
* `MONGODB_LOCAL_PORT` - Local Port for Database.

### API

* `EXPRESS_DOCKER_PORT` - Docker Port for REST API.
* `EXPRESS_LOCAL_PORT` - Local Port for REST API.
* `USER_SERVICE_HOST` - Hostname of User Service.

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

**Parameters**

- `limit` - The max number of questions in response (Optional)
- `offset` - The offset for the first question in response (Optional)

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

### Retrieve Question by Params

> [GET] `/question-service/question-matching/question`

Retrieves a random question by matching params.

**Parameters**

- `complexity` - The complexity of the question (Required)
- `categories[]` - The categories of the question (Optional)

**Response**

- `200` - Success.
    - Returns question with matching filters as JSON Object with the following fields:
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

- `400` - Error
    - URL is missing complexity parameter.

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

**Cookies**

- `session_token` - Session Token

**Response**

- `201` - Success.
    - Question is successfully added to the database.
      - Only users of user role `admin` or `maintainer` can update questions.
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
      
- `403` - Error 
  - The user does not have authorization to update questions in the database.
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

**Cookies**

- `session_token` - Session Token

**Response**

- `201` - Success.
    - Question is successfully added to the database
        - Only users of user role `admin` or `maintainer` can add questions.
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
- `403` - Error
    - The user does not have authorization to add questions to the database.
- `500` - Error
    - Unexpected error occurred on the server.

### Delete Question

> [DELETE] `/question-service/questions/:id`

Deletes a question in the database by ID.

**Cookies**

- `session_token` - Session Token

**Response**

- `201` - Success.
    - Question is successfully deleted from the database.
      - Only users of user role `admin` or `maintainer` can delete questions.
      
    - Example Response Body
      ```json
      {
        "status": "success",
        "data": null,
        "message": "Question deleted successfully"
      }
      ```
- `403` - Error
    - The user does not have authorization to delete questions from the database.
- `404` - Error
    - The question could not be found in the database.
- `500` - Error
    - Unexpected error occurred on the server.


### Get Categories

> [GET] `/question-service/categories`

Retrieves all unique categories in the database.

**Response**

- `200` - Success.
  - Returns categories as an Array of strings
  - Example Response Body
    ```json
    {
      "status": "success",
      "data": [
        "Algorithms",
        "Arrays",
        "Bit Manipulation",
        "Data Structure",
        "Data Structures",
        "Dynamic Programming",
        "Recursion",
        "Searching",
        "Sorting",
        "Strings"
      ],
      "message": null
    }
    ```
- `500` - Error
    - Unexpected error occurred on the server.



