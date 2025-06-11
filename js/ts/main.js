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
const $saveButton = document.querySelector('.save');
if (!$saveButton) throw new Error('$saveButton query failed');
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
function showButton(bu) {
  if (bu.classList.contains('hidden')) {
    bu.classList.replace('hidden', 'seen');
  } else {
    bu.classList.replace('seen', 'hidden');
  }
}
function showFeedOrMenu() {
  if (
    $recipeFeed.classList.contains('view') &&
    $recipeColumns.classList.contains('hidden')
  ) {
    $recipeFeed.classList.replace('view', 'hidden');
    $recipeColumns.classList.replace('hidden', 'view');
  } else if (
    $recipeColumns.classList.contains('view') &&
    $recipeFeed.classList.contains('hidden')
  ) {
    $recipeColumns.classList.replace('view', 'hidden');
    $recipeFeed.classList.replace('hidden', 'view');
  }
}
$newButton.addEventListener('click', () => {
  if ($newButton.classList.contains('full')) return;
  showFeedOrMenu();
});
function fillButton(bu) {
  if (data.entries.length >= 10) {
    bu.classList.replace('work', 'full');
  } else if (data.entries.length < 10) {
    bu.classList.replace('full', 'work');
  }
}
function clearMeals() {
  $recipeTitle.innerText = '';
  $recipeIngredients.innerText = '';
  $recipeInstructions.innerText = '';
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
    const elim = blockade.indexOf(div.classList[1]);
    blockade.splice(elim, 2);
    if ($saveButton.classList.contains('seen')) {
      clearMeals();
      showButton($saveButton);
    }
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
    console.log(pairID);
    const rando = [];
    if (pairID[15] === '53067') rando.push('53067');
    for (let i = 0; i < pairID.length - 1; i++) {
      if (pairID[i] === pairID[i + 1]) rando.push(pairID[i]);
    }
    if (rando.length < 1 || rando[0] === '53067') {
      rando.push('52867');
    }
    const recipeRandom = Math.floor(Math.random() * rando.length);
    const recipeOfChoice = await fetchTestMeal(rando[recipeRandom]);
    mealTextSource = recipeOfChoice;
    $recipeTitle.innerText = mealTextSource.strMeal;
    $recipeIngredients.innerText = translateIngredients(mealTextSource);
    $recipeInstructions.innerText = mealTextSource.strInstructions;
    showButton($saveButton);
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
  const entry = {
    title: $recipeTitle.innerText,
    ingredients: $recipeIngredients.innerText,
    ingredientImage: [],
    instructions: $recipeInstructions.innerText,
    EntryId: data.nextEntryId,
  };
  if (data.entries.length < 10) {
    data.entries.push(entry);
    writeData();
  }
  fillFeed();
  fillButton($saveButton);
  fillButton($newButton);
  showButton($saveButton);
  clearMeals();
  blockade.length = 0;
  scrubSelections();
  showFeedOrMenu();
});
