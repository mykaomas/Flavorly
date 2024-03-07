const db = require('../config/connection');
const { User, Recipe } = require('../models');
const cleanDB = require('./cleanDB');

const userData = require('./userData.json');
const recipeData = require('./recipeData.json');

db.once('open', async () => {
  await cleanDB('User', 'users');
  await cleanDB('Recipe', 'recipes');

  await User.insertMany(userData);
  await Recipe.insertMany(recipeData);

  console.log('Database seeded!');
  process.exit(0);
});
