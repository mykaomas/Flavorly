# Flavorly [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 

## Description
The Flavorly application is a platform designed to help users discover and explore a vast collection of recipes from various cuisines and difficulty levels. Whether you're a seasoned chef looking for new culinary challenges or a novice cook searching for simple and delicious recipes, Flavorly has something for everyone.

## Table of Contents
[Images](#images)  <br />
[Features](#features) <br />
[Technologies](#technologies) <br />
[Installation](#setup-instructions)  <br />
[Usage](#usage) <br />
[Code Overview](#code-overview)  <br />
[License](#license)  <br />
[Credits](#credits) 

## Images

## Features
### User Authentication
Flavorly provides secure user authentication, allowing users to sign up and log in to their accounts. This feature ensures that each user has a personalized experience and can access their saved recipes and preferences.

### Recipe Search and Filtering
Users can search for recipes using the search bar feature, enabling them to find recipes based on specific ingredients, cooking time, difficulty level, and user ratings. Recipe Finder offers a comprehensive filtering system, making it easy for users to narrow down their search results and discover recipes that meet their preferences.

### Profile Management
The application includes a profile page where users can manage their saved recipes, view their cooking preferences, and update their profile information. This feature provides users with a personalized dashboard to track their culinary journey and explore new recipes.

## Technologies
Flavorly utilizes a modern tech stack to deliver a seamless user experience:

- *Frontend*: React.js, React Router, Apollo Client, CSS
- *Backend*: Node.js, Express.js, GraphQL, MongoDB
- *Authentication*: JSON Web Tokens (JWT), bcrypt
- *Deployment*: Heroku for backend, React build for frontend


## Setup Instructions
To set up Flavorly on your local machine, follow these steps:

1. Clone the repository to your local machine.
2. Install dependencies for both frontend and backend using npm install.
3. Set up MongoDB and configure the connection in ./config/connection.js.
4. Run the server using npm run dev in the client directory.
5. Access the application in your browser at http://localhost:3000.


## Code Overview

### Frontend
- *Homepage*: Displays a background image and a search bar for searching recipes.
- *SearchBar*: Allows users to input their search query and submit the search request.
- *Signup/Login Pages*: Provides forms for user authentication.
- *Profile Page*: Displays the user's saved recipes and profile information.
- *Search List Page*: Displays search results with options to filter recipes.

### Backend
- *GraphQL Server*: Sets up an Apollo Server to handle GraphQL queries and mutations.
- *Data Models*: Defines data models for users and recipes.
- *Resolvers*: Defines resolvers for GraphQL queries and mutations.
- *Type Definitions*: Defines GraphQL type definitions.
- *Authentication Middleware*: Verifies JWT tokens for user authentication.

## Licenses
This application uses the [MIT LICENSE](./LICENSE), please refer to the link for more details

## Credits
Flavorly was developed by a team of passionate developers dedicated to creating a user-friendly platform for food enthusiasts. The application's frontend and backend were built with careful attention to detail, ensuring a smooth and enjoyable user experience.

Please reach out to any of us for questions or comments about Flavorly. <br />
[Cody Stepp](https://github.com/codystepp1006) <br />
[DBrush](https://github.com/coldnebraska) <br />
[gyerkes](https://github.com/gyerkes) <br />
[Mykaomas](https://github.com/mykaomas) <br />
[YvetteCarbajal](https://github.com/YvetteCarbajal) <br />

