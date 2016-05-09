# Project4 - Climb On!

## Overview:
 This is a web app that teaches you how to rock climb and provides basic resources and motivational climbing videos.

## Project Links:
* Heroku: https://climb-on-frontend.herokuapp.com
* GitHub (front-end): https://github.com/tnewell5/project4-frontend
* GitHub (back-end):
https://github.com/tnewell5/project4-backend

## Installation:
* Front-end: npm install
* Back-end: bundle install / requirements: PostgreSQL

## Technologies Used:
Javascript, React.js, Ruby on Rails, PostgreSQL, HTML, CSS.

## Styling Library:
http://materializecss.com/

## Process Overview:
On the main app page the user is asked if they want to learn how to climb. Once the user clicks the 'Sure!' button, the next page loads and makes an ajax call to the backend, which in turn accesses the database for the youtube videos links. The backend then chooses a random video link and sends it to the front-end. The video is then loaded to the page. While simple, it was a good exercise for a full stack app.

I've also incorporated a google directions api for the user's convenience, which allows them to search for a climbing gym in their area of interest.

Also, I have incorporated Materialize styling like Modals and Parallax. This was quite challenging since I had to find the npm modules for using those components with React and I needed to figure out how to use them in a way that was not shown in the documentation examples. This took a lot of trial and error but was worth it at the end!
