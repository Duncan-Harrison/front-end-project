'use strict';
/* exported data */
/* exported data */
const dataKey = 'front-end-project-data';
const data = readData();
if (!data) throw new Error('readData() failure');
const $recipe1 = document.querySelector('.recipe-1');
if (!$recipe1) throw new Error('$recipe1 query failed');
const $rone = document.querySelector('.r-one');
if (!$rone) throw new Error('Dialog $rone not found');
const $recipe2 = document.querySelector('.recipe-2');
if (!$recipe2) throw new Error('$recipe2 query failed');
const $rtwo = document.querySelector('.r-two');
if (!$rtwo) throw new Error('Dialog $rtwo not found');
const $recipe3 = document.querySelector('.recipe-3');
if (!$recipe3) throw new Error('$recipe3 query failed');
const $rthree = document.querySelector('.r-three');
if (!$rthree) throw new Error('Dialog $rthree not found');
const $recipe4 = document.querySelector('.recipe-4');
if (!$recipe4) throw new Error('$recipe4 query failed');
const $rfour = document.querySelector('.r-four');
if (!$rfour) throw new Error('Dialog $rfour not found');
const $recipe5 = document.querySelector('.recipe-5');
if (!$recipe5) throw new Error('$recipe5 query failed');
const $rfive = document.querySelector('.r-five');
if (!$rfive) throw new Error('Dialog $rfive not found');
const $recipe6 = document.querySelector('.recipe-6');
if (!$recipe6) throw new Error('$recipe6 query failed');
const $rsix = document.querySelector('.r-six');
if (!$rsix) throw new Error('Dialog $rsix not found');
const $recipe7 = document.querySelector('.recipe-7');
if (!$recipe7) throw new Error('$recipe7 query failed');
const $rseven = document.querySelector('.r-seven');
if (!$rseven) throw new Error('Dialog $rseven not found');
const $recipe8 = document.querySelector('.recipe-8');
if (!$recipe8) throw new Error('$recipe8 query failed');
const $reight = document.querySelector('.r-eight');
if (!$reight) throw new Error('Dialog $reight not found');
const $recipe9 = document.querySelector('.recipe-9');
if (!$recipe9) throw new Error('$recipe1 query failed');
const $rnine = document.querySelector('.r-nine');
if (!$rnine) throw new Error('Dialog $rnine not found');
const $recipe10 = document.querySelector('.recipe-10');
if (!$recipe10) throw new Error('$recipe10 query failed');
const $rten = document.querySelector('.r-ten');
if (!$rten) throw new Error('Dialog $rten not found');
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
function flush(ri, nu, mi) {
  ri.classList.remove('hidden');
  ri.children[0].innerHTML = data.entries[nu].title;
  const imgOneAndTwo = document.querySelectorAll(`.recipe-${nu + 1} img`);
  const imgOne = imgOneAndTwo[0];
  const imgTwo = imgOneAndTwo[1];
  imgOne.src = data.entries[nu].ingredientImage[0];
  imgTwo.src = data.entries[nu].ingredientImage[1];
  ri.children[1].classList.remove('hidden');
  ri.children[2].innerHTML = data.entries[nu].ingredients;
  ri.children[3].innerHTML = data.entries[nu].instructions;
  mi.children[0].innerHTML = ri.children[0].innerHTML;
  mi.children[1].innerHTML = ri.children[2].innerHTML;
  mi.children[2].innerHTML = ri.children[3].innerHTML;
  return ri;
}
function fillFeed() {
  const divList = [
    $recipe1,
    $recipe2,
    $recipe3,
    $recipe4,
    $recipe5,
    $recipe6,
    $recipe7,
    $recipe8,
    $recipe9,
    $recipe10,
  ];
  const talkList = [
    $rone,
    $rtwo,
    $rthree,
    $rfour,
    $rfive,
    $rsix,
    $rseven,
    $reight,
    $rnine,
    $rten,
  ];
  for (let i = 0; i < data.entries.length; i++) {
    flush(divList[i], i, talkList[i]);
  }
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
