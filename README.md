# mern-shops-app

A MERN stack app that lists shops nearby.

## How to run:

1. First, make sure you have prerequisites installed:
  - [NodeJS](https://nodejs.org)
  - [MongoDB](https://mongodb.com)

2. Then clone the repository and install npm modules for both the server and the client:

```shell script
git clone https://github.com/MohamedElidrissi/mern-shops-app.git
cd mern-shops-app
npm i
cd client
npm i
```

3. Now, you need to create a copy of `.env.example` file:

```shell script
cp .env.example .env
```
And change the environment variables to reflect your own.

**Note**: make sure you don't set the `PORT` to 3000 since React runs by default on that same port.

4. Optionally, you can seed the database with dummy shops by downloading the [dump-shops.zip](dump-shops.zip),
unzipping it, and using `mongorestore` to restore it to the `shops` database:

```shell script
unzip dump-shops.zip
mongorestore dump-shops
```

5. Now you should be set to go, you can run either the server, the client, or both at the same time using npm scripts:
```shell script
# Run the API
npm run start:api

# Run the react client
npm run start:client

# Run API and client concurrently
npm run dev
```

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
