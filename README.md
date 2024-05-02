# Movie Database API 🔧

This is created to securely interact with the external API [The Movie Database](https://www.themoviedb.org/). It provides endpoints to fetch data, search for data, and fetch details.

Accordingly, instead of exposing the API key to the client, the server will handle the requests and responses to the external API. This way, the API key is kept secure and the client can still access the data.

You can see the corresponding client code [here](https://github.com/fidotheprince/flixx-api).

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

Searches content type, movies, tv, via external API based on the `type` parameter and the `query` and `page` query parameters.

### GET /details/:type/:id

Fetches content details from the external API based on the `type` and `id` parameters.

## Error Handling

If an error occurs during a request, the server will respond with a 500 status code and a message of 'Something broke!'.