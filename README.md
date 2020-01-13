# mern-shops-app

A MERN stack app that lists shops nearby.

## Technologies/Libraries used:

- backend:
  - **express-generator**: used to generate a boilerplate express server.
  - **cors**: used to enable CORS on express server.
  - **mongoose**: used to connect with MongoDB.
  - **bcrypt**: used to encrypt user passwords before storing them in the database.
  - **celebrate**: used to validate the request body and query.
  - **jsonwebtoken**: used to create and validate jwt tokens.
  - **passport-jwt**: a passport strategy, used to protect routes that require authentication.
  - **passport-local**: a passport strategy, used to authenticate the user with a username and password.
  - **concurrently**: used to run the backend and frontend concurrently.
  - **nodemon**: used to watch the .js files and restart the server.

- frontend:
  - **material-ui**
  - **react-router**: used to handle routing.
  - **react-infinite-scroller**: used to paginate nearby shops.
  - **parse-link-header**: used to parse the `Link` header from the API.
  - **axios**: used to send requests to the API.
