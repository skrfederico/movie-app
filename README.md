# ## DaMaFe Movie Reviews

## Introduction

Dawn, Matthew and Fede have acquired a movie theater and they are showcasing all the lessons learnt in unit 3 with a MERN stack application that allows different users to create, read, update and delete reviews in a web app using react.

## Description (EXTRA)

DaMaFe movie theater invites their guests to leave a review after watching one of the four movies they are screening right now.

## Getting started

- https://plogger.herokuapp.com/
- sign up if you are a new user or use your existing name and password.

## Technologies Used

- MongoDB
- express
- JSX
- JavaScript
- TailWind
- brcryptjs
- express-session
- jsx-view-engine
- Morgan
- react

## Background info (EXTRA)

The creation of this app was inspired by the fruits app modeled for students of SEIR Flex at GA and my personal experience managing a school of languages in Buenos Aires, Argentina.

## Features (EXTRA)

- Landing Page

  - The main page displays 4 movie posters and their titles in a smooth caroussel

- Movie Page

  - Each movie page is divided in two divs, the top one fetchs information from an API and displays a card with detailed information about the selected movie. The bottom div displays all the reviews written about that movie and only allows authors to delete or edit their own reviews.

- Nav bar

  - A header navigation bar with links to the main page, and a list of reviews

## Screenshots

[LandingPage Top]
<a href="https://imgur.com/QwXfOhY"><img src="https://imgur.com/QwXfOhY.png" title="source: imgur.com" /></a>

[LandingPage Bottom]
<a href="https://imgur.com/u2aexP4"><img src="https://imgur.com/u2aexP4.png" title="source: imgur.com" /></a>

[MoviePage top]
<a href="https://imgur.com/l4UFAlr"><img src="https://imgur.com/l4UFAlr.png" title="source: imgur.com" /></a>

[MoviePage button]
<a href="https://imgur.com/gobJUyZ"><img src="  
https://imgur.com/gobJUyZ.png" title="source: imgur.com" /></a>

[Reviews by user]
<a href="https://imgur.com/v6DpLMD"><img src="  
https://imgur.com/v6DpLMD.png" title="source: imgur.com" /></a>

## Future Enhancements (Ice Box Features)

- Community - accesing a list of all the users registered and seeing their comments. Contacting them and interacting with other movie fans.

## Wire Frame and ERD

ERD
<a href="https://imgur.com/LLnwMlk"><img src="https://i.imgur.com/LLnwMlk.png" title="source: imgur.com" /></a>

wireframe
<a href="https://imgur.com/uHBO8LZ"><img src="https://i.imgur.com/uHBO8LZ.png" title="source: imgur.com" /></a>

## Restful routes table ( NOT REQUIRED)

|       URL       | HTTP VERB | Mongoose model function |
| :-------------: | --------: | ----------------------: |
|     /plogs/     |       GET |                   .find |
|   /plogs/new    |       GET |                     N/A |
|     /plogs      |      POST |                 .create |
|   /plogs/:id    |       GET |               .findById |
| /plogs/:id/edit |       GET |               .findById |
|   /plogs/:id    |       PUT |      .findByIdAndUpdate |
|   /plogs/:id    |    DELETE |      .findByIdAndDelete |
