_NOTE: The deployment of this project is currently down. I am currently in the process of researching deployment options and appreciate your patience in the meantime! I will continue to keep this code available, so feel free to have a look around and reach out if you have questions or would like to chat further._

# book-search-engine
Homework 21 MERN: Book Search Engine

Code refactored to update RESTful API to use MongoDB/Mongoose/Apollo written per acceptance criteria in [W21-hw_README.md](/W21-hw_README.md).

## Work Done
* When a user loads the book search engine, they are presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
* When a user clicks on the Search for Books menu option, they are presented with an input field to search for books and a submit button
* When a user is not logged in and they enter a search term in the input field and click the submit button, they are presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
* When a user clicks on the Login/Signup menu option, a modal appears on the screen with a toggle between the option to log in or sign up
* When the toggle is set to Signup, the user is presented with three inputs for a username, an email address, and a password, and a signup button
* When the toggle is set to Login, the user is presented with two inputs for an email address and a password and login button
* When a user enters a valid email address and create a password and click on the signup button, their user account is created and they are logged in to the site
* When a user enters their account’s email address and password and click on the login button, the modal closes and they are logged in to the site
* When a user is logged in to the site, the menu options change to Search for Books, an option to see my saved books, and Logout
* When a user is logged in and enters a search term in the input field and click the submit button, they are presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
* When a user clicks on the Save button on a book, that book’s information is saved to my account
* When a user clicks on the option to see my saved books, they are presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
* When a user clicks on the Remove button on a book, that book is deleted from their saved books list
* When a user clicks on the Logout button, they are logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button  

## Links
URL for GitHub repo: https://github.com/thenickedwards/book-search-engine
URL for live application deployed on Heroku: https://booksearch-thenickedwards.herokuapp.com/

Thank you for reading the readme!

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
