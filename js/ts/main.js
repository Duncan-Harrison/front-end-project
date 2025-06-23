'use strict';
function writeData() {
  const dataJSON = JSON.stringify(data);
  localStorage.setItem(dataKey, dataJSON);
}
const blackBeans = document.querySelector('.beans');
if (!blackBeans) throw new Error('There are no black beans here.');
const broccoli = document.querySelector('.broccoli');
if (!broccoli) throw new Error('There is no broccoli here.');
const potatoes = document.querySelector('.potatoes');
if (!potatoes) throw new Error('There are no potatoes here.');
const redPepper = document.querySelector('.pepper');
if (!redPepper) throw new Error('There are no potatoes here.');
const blockade = [];
const $recipeTitle = document.querySelector('.recipe-title');
if (!$recipeTitle) throw new Error('recipeTitle query failed');
const $recipeIngredients = document.querySelector('.recipe-ingredients');
if (!$recipeIngredients) throw new Error('recipeIngredients query failed');
const $recipeInstructions = document.querySelector('.recipe-task');
if (!$recipeInstructions) throw new Error('recipeInstructions query failed');
const $recipeThumb = document.querySelector('.recipe-thumb');
if (!$recipeThumb) throw new Error('recipeThumb query failed');
const $saveButton = document.querySelector('.save');
if (!$saveButton) throw new Error('$saveButton query failed');
const $cancelButton = document.querySelector('.cancel');
if (!$cancelButton) throw new Error('$cancelButton query failed');
const $closeModal1 = document.querySelector('.modal-close-1');
if (!$closeModal1) throw new Error('Could not find $closeModal1');
const $closeModal2 = document.querySelector('.modal-close-2');
if (!$closeModal2) throw new Error('Could not find $closeModal2');
const $closeModal3 = document.querySelector('.modal-close-3');
if (!$closeModal3) throw new Error('Could not find $closeModal3');
const $closeModal4 = document.querySelector('.modal-close-4');
if (!$closeModal4) throw new Error('Could not find $closeModal4');
const $closeModal5 = document.querySelector('.modal-close-5');
if (!$closeModal5) throw new Error('Could not find $closeModal5');
const $closeModal6 = document.querySelector('.modal-close-6');
if (!$closeModal6) throw new Error('Could not find $closeModal6');
const $closeModal7 = document.querySelector('.modal-close-7');
if (!$closeModal7) throw new Error('Could not find $closeModal7');
const $closeModal8 = document.querySelector('.modal-close-8');
if (!$closeModal8) throw new Error('Could not find $closeModal8');
const $closeModal9 = document.querySelector('.modal-close-9');
if (!$closeModal9) throw new Error('Could not find $closeModal9');
const $closeModal10 = document.querySelector('.modal-close-10');
if (!$closeModal10) throw new Error('Could not find $closeModal10');
let mealTextSource = {
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
const $recipeColumns = document.querySelector('.recipe-columns');
if (!$recipeColumns) throw new Error('Cannot Find Recipe Columns');
const $recipeFeed = document.querySelector('.recipe-feed');
if (!$recipeFeed) throw new Error('Cannot Find Recipe Feed');
const $newButton = document.querySelector('.new-recipe-button');
if (!$newButton) throw new Error('We cannot create a new recipe at this time');
function showButton(bttn) {
  if (bttn.classList.contains('hidden')) {
    bttn.classList.replace('hidden', 'seen');
  } else {
    bttn.classList.replace('seen', 'hidden');
  }
}
function showFeedOrMenu() {
  if (
    $recipeFeed.classList.contains('view') &&
    $recipeColumns.classList.contains('hidden')
  ) {
    $recipeFeed.classList.replace('view', 'hidden');
    $newButton.classList.replace('view', 'hidden');
    $recipeColumns.classList.replace('hidden', 'view');
  } else if (
    $recipeColumns.classList.contains('view') &&
    $recipeFeed.classList.contains('hidden')
  ) {
    $recipeColumns.classList.replace('view', 'hidden');
    $newButton.classList.replace('hidden', 'view');
    $recipeFeed.classList.replace('hidden', 'view');
  }
}
$newButton.addEventListener('click', () => {
  if ($newButton.classList.contains('full')) return;
  showFeedOrMenu();
});
function fillButton(bttn) {
  if (data.entries.length >= 10) {
    bttn.classList.replace('work', 'full');
  } else if (data.entries.length < 10) {
    bttn.classList.replace('full', 'work');
  }
}
function clearMeals() {
  $recipeTitle.innerText = '';
  $recipeIngredients.innerText = '';
  $recipeInstructions.innerText = '';
  $recipeThumb.src = '';
}
async function imageClick(div, id) {
  if (div.classList.contains('img-contain')) {
    if (blockade.length >= 4) return;
    div.classList.replace('img-contain', 'img-clicked');
    const food = await fetchIngredient(id);
    blockade.push(div.classList[1], food);
    fillButton($saveButton);
  } else if (div.classList.contains('img-clicked')) {
    div.classList.replace('img-clicked', 'img-contain');
    const eliminate = blockade.indexOf(div.classList[1]);
    blockade.splice(eliminate, 2);
    if ($saveButton.classList.contains('seen')) {
      clearMeals();
      showButton($saveButton);
      showButton($cancelButton);
    }
  }
}
function fetchPhoto(id) {
  if (id === 'beans') {
    return 'https://www.themealdb.com/images/ingredients/black_beans.png';
  } else if (id === 'broccoli') {
    return 'https://www.themealdb.com/images/ingredients/broccoli.png';
  } else if (id === 'potatoes') {
    return 'https://www.themealdb.com/images/ingredients/potatoes.png';
  } else if (id === 'pepper') {
    return 'https://www.themealdb.com/images/ingredients/red_pepper.png';
  } else {
    return 'no results found';
  }
}
async function fetchMealPhoto(id) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
    );
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const meal = await response.json();
    const realMeal = meal.meals[0];
    if (realMeal.strMealThumb) return realMeal.strMealThumb;
  } catch (error) {
    console.error('Error: ', error);
    return 'noMeal';
  }
}
function translateIngredients(foo) {
  const ingred = [
    `${foo.strMeasure1} ${foo.strIngredient1}`,
    `${foo.strMeasure2} ${foo.strIngredient2}`,
    `${foo.strMeasure3} ${foo.strIngredient3}`,
    `${foo.strMeasure4} ${foo.strIngredient4}`,
    `${foo.strMeasure5} ${foo.strIngredient5}`,
    `${foo.strMeasure6} ${foo.strIngredient6}`,
    `${foo.strMeasure7} ${foo.strIngredient7}`,
    `${foo.strMeasure8} ${foo.strIngredient8}`,
    `${foo.strMeasure9} ${foo.strIngredient9}`,
    `${foo.strMeasure10} ${foo.strIngredient10}`,
    `${foo.strMeasure11} ${foo.strIngredient11}`,
    `${foo.strMeasure12} ${foo.strIngredient12}`,
    `${foo.strMeasure13} ${foo.strIngredient13}`,
    `${foo.strMeasure14} ${foo.strIngredient14}`,
    `${foo.strMeasure15} ${foo.strIngredient15}`,
    `${foo.strMeasure16} ${foo.strIngredient16}`,
    `${foo.strMeasure17} ${foo.strIngredient17}`,
    `${foo.strMeasure18} ${foo.strIngredient18}`,
    `${foo.strMeasure19} ${foo.strIngredient19}`,
    `${foo.strMeasure20} ${foo.strIngredient20}`,
  ];
  let instruct = '';
  for (let i = 0; i < ingred.length; i++) {
    if (
      ingred[i] === ' null' ||
      ingred[i] === '  ' ||
      ingred[i] === '' ||
      ingred[i] === ' '
    ) {
      break;
    } else {
      instruct += `${ingred[i]} \n`;
    }
  }
  return instruct;
}
async function pullMeals() {
  if (blockade.length === 4) {
    const pair1 = blockade[1].meals;
    const pair2 = blockade[3].meals;
    const pairID = [];
    for (let i = 0; i < pair1.length; i++) {
      pairID.push(pair1[i].idMeal);
    }
    for (let i = 0; i < pair2.length; i++) {
      pairID.push(pair2[i].idMeal);
    }
    pairID.sort();
    const rando = [];
    if (pairID[15] === '53067') rando.push('53067', '52830', '52941', '52867');
    if (pairID[49] === '53078') rando.push('53078', '52941', '52867');
    if (pairID[47] === '53048') rando.push('53048');
    if (pairID[20] === '53085' && pairID.length === 21) rando.push('52772');
    if (pairID[61] === '53070' && pairID[62] === '53070')
      rando.push('53036', '52971', '52941', '52867');
    for (let i = 0; i < pairID.length - 1; i++) {
      if (pairID[i] === pairID[i + 1]) rando.push(pairID[i]);
    }
    if (rando.length < 1 || rando[0] === '53067') {
      rando.push('52867');
    }
    const recipeRandom = Math.floor(Math.random() * rando.length);
    const recipeOfChoice = await fetchTestMeal(rando[recipeRandom]);
    const mealThumb = await fetchMealPhoto(rando[recipeRandom]);
    mealTextSource = recipeOfChoice;
    $recipeTitle.innerText = mealTextSource.strMeal;
    $recipeIngredients.innerText = translateIngredients(mealTextSource);
    $recipeInstructions.innerText = mealTextSource.strInstructions;
    $recipeThumb.src = mealThumb;
    showButton($saveButton);
    showButton($cancelButton);
    fillButton($saveButton);
  }
}
blackBeans.addEventListener('click', async () => {
  await imageClick(blackBeans, 'black_beans');
  await pullMeals();
});
broccoli.addEventListener('click', async () => {
  await imageClick(broccoli, 'broccoli');
  await pullMeals();
});
potatoes.addEventListener('click', async () => {
  await imageClick(potatoes, 'potatoes');
  await pullMeals();
});
redPepper.addEventListener('click', async () => {
  await imageClick(redPepper, 'red_pepper');
  await pullMeals();
});
function scrubSelections() {
  const arr = [blackBeans, broccoli, potatoes, redPepper];
  for (const h of arr) {
    if (h.classList.contains('img-clicked'))
      h.classList.replace('img-clicked', 'img-contain');
  }
}
$saveButton.addEventListener('click', () => {
  if ($saveButton.classList.contains('full')) return;
  const imgOne = fetchPhoto(blockade[0]);
  const imgTwo = fetchPhoto(blockade[2]);
  const imgThree = $recipeThumb.src;
  const entry = {
    title: $recipeTitle.innerText,
    ingredients: $recipeIngredients.innerText,
    ingredientImage: [imgOne, imgTwo],
    instructions: $recipeInstructions.innerText,
  };
  if (data.entries.length < 10) {
    data.entries.push(entry);
    data.thumbnails.push(imgThree);
    writeData();
  }
  fillFeed();
  fillButton($saveButton);
  fillButton($newButton);
  showButton($saveButton);
  showButton($cancelButton);
  clearMeals();
  blockade.length = 0;
  scrubSelections();
  showFeedOrMenu();
});
$cancelButton.addEventListener('click', () => {
  showButton($saveButton);
  showButton($cancelButton);
  clearMeals();
  blockade.length = 0;
  scrubSelections();
  showFeedOrMenu();
});
$recipe1.children[0].addEventListener('click', (event) => {
  if (event) $rone.showModal();
});
$recipe1.children[1].addEventListener('click', (event) => {
  if (event) $rone.showModal();
});
$recipe2.children[0].addEventListener('click', (event) => {
  if (event) $rtwo.showModal();
});
$recipe2.children[1].addEventListener('click', (event) => {
  if (event) $rtwo.showModal();
});
$recipe3.children[0].addEventListener('click', (event) => {
  if (event) $rthree.showModal();
});
$recipe3.children[1].addEventListener('click', (event) => {
  if (event) $rthree.showModal();
});
$recipe4.children[0].addEventListener('click', (event) => {
  if (event) $rfour.showModal();
});
$recipe4.children[1].addEventListener('click', (event) => {
  if (event) $rfour.showModal();
});
$recipe5.children[0].addEventListener('click', (event) => {
  if (event) $rfive.showModal();
});
$recipe5.children[1].addEventListener('click', (event) => {
  if (event) $rfive.showModal();
});
$recipe6.children[0].addEventListener('click', (event) => {
  if (event) $rsix.showModal();
});
$recipe6.children[1].addEventListener('click', (event) => {
  if (event) $rsix.showModal();
});
$recipe7.children[0].addEventListener('click', (event) => {
  if (event) $rseven.showModal();
});
$recipe7.children[1].addEventListener('click', (event) => {
  if (event) $rseven.showModal();
});
$recipe8.children[0].addEventListener('click', (event) => {
  if (event) $reight.showModal();
});
$recipe8.children[1].addEventListener('click', (event) => {
  if (event) $reight.showModal();
});
$recipe9.children[0].addEventListener('click', (event) => {
  if (event) $rnine.showModal();
});
$recipe9.children[1].addEventListener('click', (event) => {
  if (event) $rnine.showModal();
});
$recipe10.children[0].addEventListener('click', (event) => {
  if (event) $rten.showModal();
});
$recipe10.children[1].addEventListener('click', (event) => {
  if (event) $rten.showModal();
});
$closeModal1.addEventListener('click', (event) => {
  if (event) $rone.close();
});
$closeModal2.addEventListener('click', (event) => {
  if (event) $rtwo.close();
});
$closeModal3.addEventListener('click', (event) => {
  if (event) $rthree.close();
});
$closeModal4.addEventListener('click', (event) => {
  if (event) $rfour.close();
});
$closeModal5.addEventListener('click', (event) => {
  if (event) $rfive.close();
});
$closeModal6.addEventListener('click', (event) => {
  if (event) $rsix.close();
});
$closeModal7.addEventListener('click', (event) => {
  if (event) $rseven.close();
});
$closeModal8.addEventListener('click', (event) => {
  if (event) $reight.close();
});
$closeModal9.addEventListener('click', (event) => {
  if (event) $rnine.close();
});
$closeModal10.addEventListener('click', (event) => {
  if (event) $rten.close();
});
fillButton($newButton);
