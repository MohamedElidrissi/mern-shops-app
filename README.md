# mern-shops-app

This is a part of my #100DaysOfCode challenge, its a Fullstack application built with the MERN stack
and consists of the following features:

 - User can sign up with a username, email, and password.
 - User can sign in with email and password.
 - User can see the list of shops sorted by distance from his current location in the "Nearby Shops" page.
   - **Note**: this will not work in Google Chrome while serving the app through http, use Firefox browser instead.
 - User can like a shop and have it added to his preferred shops.
   - Liked shops are not displayed in the "Nearby Shops" page
 - User can dislike a shop, this will hide the shop from the "Nearby Shops" page for the next 2 hours.
 - User can see his preferred shops in the "Preferred Shops" page.
 - User can remove a shop from his preferred shops.
 - User can log out.

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

## What could be improved:

This is by no mean a perfect app, but trying to make it perfect from the first try can be an endless loop.
With that said, here are some things that I think I can improve in the future:

 - JWT tokens *should* have an expiry time and thus should be refresh-able.
 - Storing tokens in the front-end using `localStorage` is not safe,
   an alternative I learnt about recently is `HttpOnly` cookies.
 - No tests! testing a functionality manually after each change can get tedious.
 - On the frontend, requesting for location permission on component-mount is not the best way out there,
   instead I should've asked the location on user signup and use it for each request,
   and then provide the user a way to update his location whenever he wishes to.

## Helpful resources
Starting a new project can be fun, especially when getting to learn new things in the process.
Below are some resources that helped me create this project:

 - [Best practices for designing a pragmatic RESTful API](https://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api)
 - [MongoDB TTL (time-to-live) indexes](https://docs.mongodb.com/manual/core/index-ttl/)
 - [MongoDB partial indexes](https://docs.mongodb.com/manual/core/index-partial/)

## License
Licensed under [MIT License](LICENSE)
