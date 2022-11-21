# P3-easy-rent

## Description
Easy Rent is a third party platform that allows house owners to post their rooms information for renting and allows potential tenants to check room info and send query. It is easy to use - no complicated registration and verification process.

## User Story
```
AS A tenant
I WANT to search for sharing room infomation on the market
SO THAT I can find a room meeting my requirement

AS AN Owner
I WANT a platform to post my sharing room infomation
SO THAT I can find tenant for my room
```

## Acceptance Criteria
```
GIVEN a share room renting platform
WHEN I load the Home Page
THEN I am presented with a list with all the rooms info have been post before with room’s owner contact info, description, image, total number of rooms and tenants, parking space, price, furniture info, sharing bill or not, and location.
WHEN I am not logged in, I can click the send message button to send a message to the room owner, after I click the button
THEN I am presented with a form with three inputs for name, email, and message to send message to owner
WHEN I filled the form and submit, a message will be send to the owner's email
WHEN I click on the Login/Signup menu option
THEN a page appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button
WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site
WHEN I enter my account’s email address and password and click on the login button
THEN I am logged in to the site and redriect to the home page
WHEN I am logged in to the site
THEN I am presented with the Dashboard page which is a list of the rooms I have post, and a Post Room button
THEN the menu options change to Logout
WHEN I am logged in and click Post a Room button
THEN I am presented with the post a room page contents a form with inputs to add a new room info.
WHEN I filled all inputs and click submit button
THEN I am redircted to my dashboard page and the new room card that I just added will show up with a update and delete button
WHEN I click on the update button
THEN I am presented with the update a room page, that content a form with inputs to update room info that I selected
WHEN I filled all inputs and click submit button
THEN I am redirected to my dashboard and the updated room info showed up 
WHEN I click on the delete button
THEN the room card will be deleted
THEN I am logged out of the site and redirect to home page  
```

## Installation and Start
* To Install this application, run `git clone` command, to clone the main branch.

* Once cloned, run the following command to install dependencies
```
npm install
```

* To run this app on your local browser, go to the root directory and run following command:
```
npm run develop
```

## Technical
* MERN Stack
* React
* Node.js
* JavaScript
* MongoDB
* GraphQL
* Stripe
* Chakra UI


## Screenshots
![Screenshot](https://github.com/Fredbian/p3-easy-renting/blob/main_new/client/public/screenshots/p3-easy-rent.herokuapp.com_%20(1).png)
![Screenshot](https://github.com/Fredbian/p3-easy-renting/blob/main_new/client/public/screenshots/p3-easy-rent.herokuapp.com_%20(2).png)
![Screenshot](https://github.com/Fredbian/p3-easy-renting/blob/main_new/client/public/screenshots/p3-easy-rent.herokuapp.com_%20(3).png)
![Screenshot](https://github.com/Fredbian/p3-easy-renting/blob/main_new/client/public/screenshots/p3-easy-rent.herokuapp.com_%20(4).png)
![Screenshot](https://github.com/Fredbian/p3-easy-renting/blob/main_new/client/public/screenshots/p3-easy-rent.herokuapp.com_%20(5).png)
![Screenshot](https://github.com/Fredbian/p3-easy-renting/blob/main_new/client/public/screenshots/p3-easy-rent.herokuapp.com_%20(6).png)
![Screenshot](https://github.com/Fredbian/p3-easy-renting/blob/main_new/client/public/screenshots/p3-easy-rent.herokuapp.com_.png)


## URLs
* Github: https://github.com/Fredbian/easy-rent
* Heroku deployed link: https://easy-rent-2022.herokuapp.com/
