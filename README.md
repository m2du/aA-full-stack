# Disboard

[Live Demo](https://aa-disboard.herokuapp.com/)

Disboard is a live chat website targetting gamers, inspired by Discord. It makes use of a Rails/PostgreSQL backend with React.js and Redux on the frontend. ActionCable is used to implement websocket connections for live chat updates.

The project was designed and built within a 10-day timeframe.

## Features
 * Secure frontend to backend user authentication using BCrypt.
 * Users can create an account to access the chat application.
 * Once logged in, users may create servers or join existing servers.
 * Servers may be created with an optional image icon.
 * Users may invite others to their servers by generating an Instant Invite link which will allow users to join with a single click.
 * Servers may contain multiple chat channels, each with their individual live feed of messages.

 ## Project Design
 
 Disboard was designed to be as close to the original as possible with a basic suite of features considering the short development window. The goal was to have implemented features run smoothly and bug-free. Keeping code manageable was prioritized over cloning every major feature of the target app.

 ## Technologies

Rails was chosen due to its out-of-the-box support for relational databases and RESTful architecture. Given the smaller scale of this project, convenience and speed were prioritized over scalability.

Frontend Redux states are set up to have separate reducers and actions for users, servers, channels, messages, and various UI interactions. This keeps the global state normalized, simplifying the task of keeping information up-to-date with changes in the database.

S3 from Amazon Web Services is used for image uploading.