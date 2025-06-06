'use strict';
/* exported data */
/* exported data */
const dataKey = 'front-end-project-data';
const data = readData();
if (!data) throw new Error('readData() failure');
const $recipe1 = document.querySelector('.recipe-1');
if (!$recipe1) throw new Error('$recipe1 query failed');
const $recipe2 = document.querySelector('.recipe-2');
if (!$recipe2) throw new Error('$recipe2 query failed');
const $recipe3 = document.querySelector('.recipe-3');
if (!$recipe3) throw new Error('$recipe3 query failed');
const $recipe4 = document.querySelector('.recipe-4');
if (!$recipe4) throw new Error('$recipe4 query failed');
const $recipe5 = document.querySelector('.recipe-5');
if (!$recipe5) throw new Error('$recipe5 query failed');
const $recipe6 = document.querySelector('.recipe-6');
if (!$recipe6) throw new Error('$recipe6 query failed');
const $recipe7 = document.querySelector('.recipe-7');
if (!$recipe7) throw new Error('$recipe7 query failed');
const $recipe8 = document.querySelector('.recipe-8');
if (!$recipe8) throw new Error('$recipe8 query failed');
const $recipe9 = document.querySelector('.recipe-9');
if (!$recipe9) throw new Error('$recipe1 query failed');
const $recipe10 = document.querySelector('.recipe-10');
if (!$recipe10) throw new Error('$recipe10 query failed');
function readData() {
  let data;
  const localData = localStorage.getItem(dataKey);
  if (localData) {
    data = JSON.parse(localData);
  } else {
    data = {
      entries: [],
      nextEntryId: 1,
    };
  }
  return data;
}
function flush(ri, nu) {
  ri.children[0].innerHTML = data.entries[nu].title;
  ri.children[2].innerHTML = data.entries[nu].ingredients;
  ri.children[3].innerHTML = data.entries[nu].instructions;
  return ri;
}
function fillFeed() {
  console.log('Hello');
  if (data.entries.length >= 1) flush($recipe1, 0);
  if (data.entries.length >= 2) flush($recipe2, 1);
  if (data.entries.length >= 3) flush($recipe3, 2);
  if (data.entries.length >= 4) flush($recipe4, 3);
  if (data.entries.length >= 5) flush($recipe5, 4);
  if (data.entries.length >= 6) flush($recipe6, 5);
  if (data.entries.length >= 7) flush($recipe7, 6);
  if (data.entries.length >= 8) flush($recipe8, 7);
  if (data.entries.length >= 9) flush($recipe9, 8);
  if (data.entries.length >= 10) flush($recipe10, 9);
}
fillFeed();
async function fetchbroccoli() {
  try {
    const response = await fetch(
      'https://www.themealdb.com/api/json/v1/1/filter.php?i=broccoli',
    );
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const meal = await response.json();
    return meal;
  } catch (error) {
    console.error('Error: ', error);
  }
}
async function fetchpotatoes() {
  try {
    const response = await fetch(
      'https://www.themealdb.com/api/json/v1/1/filter.php?i=potatoes',
    );
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const meal = await response.json();
    return meal;
  } catch (error) {
    console.error('Error: ', error);
  }
}
async function fetchredPepper() {
  try {
    const response = await fetch(
      'https://www.themealdb.com/api/json/v1/1/filter.php?i=red_pepper',
    );
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const meal = await response.json();
    return meal;
  } catch (error) {
    console.error('Error: ', error);
  }
}
async function fetchblackBeans() {
  try {
    const response = await fetch(
      'https://www.themealdb.com/api/json/v1/1/filter.php?i=black_beans',
    );
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const meal = await response.json();
    return meal;
  } catch (error) {
    console.error('Error: ', error);
  }
}
async function fetchTestMeal(id) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
    );
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const meal = await response.json();
    const realMeal = meal.meals[0];
    return realMeal;
  } catch (error) {
    console.error('Error: ', error);
    const noMeal = {
      strMeal: '',
      strMeasure1: '',
      strMeasure2: '',
      strMeasure3: '',
      strMeasure4: '',
      strMeasure5: '',
      strMeasure6: '',
      strMeasure7: '',
      strMeasure8: '',
      strMeasure9: '',
      strMeasure10: '',
      strMeasure11: '',
      strMeasure12: '',
      strMeasure13: '',
      strMeasure14: '',
      strMeasure15: '',
      strMeasure16: '',
      strMeasure17: '',
      strMeasure18: '',
      strMeasure19: '',
      strMeasure20: '',
      strIngredient1: '',
      strIngredient2: '',
      strIngredient3: '',
      strIngredient4: '',
      strIngredient5: '',
      strIngredient6: '',
      strIngredient7: '',
      strIngredient8: '',
      strIngredient9: '',
      strIngredient10: '',
      strIngredient11: '',
      strIngredient12: '',
      strIngredient13: '',
      strIngredient14: '',
      strIngredient15: '',
      strIngredient16: '',
      strIngredient17: '',
      strIngredient18: '',
      strIngredient19: '',
      strIngredient20: '',
      strInstructions: '',
    };
    return noMeal;
  }
}
async function fetchIngredient(id) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${id}`,
    );
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const meal = await response.json();
    return meal;
  } catch (error) {
    console.error('Error: ', error);
  }
}
fetchIngredient('potatoes');
fetchbroccoli();
fetchpotatoes();
fetchredPepper();
fetchblackBeans();
fetchTestMeal('53000');
