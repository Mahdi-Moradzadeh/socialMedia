# socialMedia
This is an backend API engine to provide access to unstructured database using MongoDB

## Installation
1. Install MongoDB
2. Install NodeJS
3. Install NPM
4. Install Git
5. Clone this repository
6. Run `npm install` to install all dependencies
7. Run `npm start` to start the server

## API Documentation
1. [User](#user)
2. [Thought](#thought)
3. [Reaction](#reaction)
4. [Friend](#friend)

## Routes
### User
1. [Get all users: api/user/](http://localhost:3000/api/user/)
2. [Create a user: api/user/](http://localhost:3000/api/user/)
3. [Get a user: api/user/:userId](http://localhost:3000/api/user/:userId)
4. [Update a user: api/user/:userId](http://localhost:3000/api/user/:userId)
5. [Delete a user: api/user/:userId](http://localhost:3000/api/user/:userId)

### Thought
1. [Get all thoughts: api/thought/](http://localhost:3000/api/thought/)
2. [Create a thought: api/thought/](http://localhost:3000/api/thought/)
3. [Get a thought: api/thought/:thoughtId](http://localhost:3000/api/thought/:thoughtId)
4. [Update a thought: api/thought/:thoughtId](http://localhost:3000/api/thought/:thoughtId)
5. [Delete a thought: api/thought/:thoughtId](http://localhost:3000/api/thought/:thoughtId)

### Reaction
1. [Create a reaction: api/thought/:thoughtId/reaction](http://localhost:3000/api/thought/:thoughtId/reaction)
2. [Delete a reaction: api/thought/:thoughtId/reaction/:reactionId](http://localhost:3000/api/thought/:thoughtId/reaction/:reactionId)

### Friend
1. [Create a friend: api/user/:userId/friend](http://localhost:3000/api/user/:userId/friend)
2. [Delete a friend: api/user/:userId/friend/:friendId](http://localhost:3000/api/user/:userId/friend/:friendId)

## Demo
Use the following video as a guide demo to application's functionality:
[![Demo](https://img.youtube.com/vi/9Q1qXx7X3ZU/0.jpg)](https://drive.google.com/file/d/1gGoNI7mBNevOYuv0kmGJb6_YJZFMcGDT/view?usp=sharing)

## Questions
If you have any questions, please contact me at the following:
* GitHub: [MMoradzadeh](https://github.com/Mahdi-Moradzadeh)

## License
This project is licensed under the MIT license.
