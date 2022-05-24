# BOOGLE

## Description
As an avid reader I wanted to be able to search for new books and save them to a list for future reference. Using the Google Books API an authenticated user is able to search for a book and add/remove the book from their list. This app was build using the MERN stack. The user interacts with a front-end UI build with React while their data is stored in a MongoDB database. This application runs on a Node.js/Express.js server and API. 

The project allowed for me to explore Apollo Server to use GraphQL queries and mutations to fetch and modify data. The authentication middleware also interacts with GraphQL API. This application has been deployed to Heroku: https://boogle2022052101.herokuapp.com/

## Installation
- `git clone git@github.com:gemsjohn/BOOGLE.git`
- Open the cloned folder in Visual Studio
- Right click the /client folder and select Open in Integrated Terminal
- Run `npm start` in the Integrated Terminal. This will Run the front-end app.
- Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
- Right click the /server folder and select Open in Integrated Terminal
- Run `npm start` in the Integrated Terminal. This will Run the back-end app and provide access to Apollo Server.
- Open [http://localhost:3001](http://localhost:3001) to view it in your browser.

## Functionality
- Ability to search for books leveraging the Google Books API
- Ability to Login/Signup using an email and password
- Ability to search for books and add them to a list
- Ability to remove books from your list

## Images

