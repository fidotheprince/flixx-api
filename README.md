# My API

This is an API built with Node.js and Express. It uses the `fetch` API to make requests to an external API.

## Setup

1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Create a `.env` file in the root directory and set the following environment variables:
    - `API_URL`: The base URL of the external API.
    - `API_KEY`: Your API key for the external API.
    - `PORT`: The port number for the Express server (optional).
    - Get your variables [developer.themoviedb.org](https://developer.themoviedb.org/docs/getting-started)
4. Run `npm start` to start the server.

## Endpoints

### GET /resource/:type/:status

Fetches data from the external API based on the `type` and `status` parameters.

### GET /search/:type

Searches the external API based on the `type` parameter and the `query` and `page` query parameters.

### GET /details/:type/:id

Fetches details from the external API based on the `type` and `id` parameters.

## Error Handling

If an error occurs during a request, the server will respond with a 500 status code and a message of 'Something broke!'.