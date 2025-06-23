/* exported data */
/* exported data */

interface Meal {
  strMeal: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  strMeasure11: string;
  strMeasure12: string;
  strMeasure13: string;
  strMeasure14: string;
  strMeasure15: string;
  strMeasure16: string;
  strMeasure17: string;
  strMeasure18: string;
  strMeasure19: string;
  strMeasure20: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
  strIngredient16: string;
  strIngredient17: string;
  strIngredient18: string;
  strIngredient19: string;
  strIngredient20: string;
  strInstructions: string;
}

interface Re {
  title: string;
  ingredients: string;
  ingredientImage: string[];
  instructions: string;
}

interface Data {
  entries: Re[];
  thumbnails: string[];
}

const dataKey = 'front-end-project-data';

const data = readData();
if (!data) throw new Error('readData() failure');

const $recipe1 = document.querySelector('.recipe-1') as HTMLDivElement;
if (!$recipe1) throw new Error('$recipe1 query failed');
const $rone = document.querySelector('.r-one') as HTMLDialogElement;
if (!$rone) throw new Error('Dialog $rone not found');
const $recipe2 = document.querySelector('.recipe-2') as HTMLDivElement;
if (!$recipe2) throw new Error('$recipe2 query failed');
const $rtwo = document.querySelector('.r-two') as HTMLDialogElement;
if (!$rtwo) throw new Error('Dialog $rtwo not found');
const $recipe3 = document.querySelector('.recipe-3') as HTMLDivElement;
if (!$recipe3) throw new Error('$recipe3 query failed');
const $rthree = document.querySelector('.r-three') as HTMLDialogElement;
if (!$rthree) throw new Error('Dialog $rthree not found');
const $recipe4 = document.querySelector('.recipe-4') as HTMLDivElement;
if (!$recipe4) throw new Error('$recipe4 query failed');
const $rfour = document.querySelector('.r-four') as HTMLDialogElement;
if (!$rfour) throw new Error('Dialog $rfour not found');
const $recipe5 = document.querySelector('.recipe-5') as HTMLDivElement;
if (!$recipe5) throw new Error('$recipe5 query failed');
const $rfive = document.querySelector('.r-five') as HTMLDialogElement;
if (!$rfive) throw new Error('Dialog $rfive not found');
const $recipe6 = document.querySelector('.recipe-6') as HTMLDivElement;
if (!$recipe6) throw new Error('$recipe6 query failed');
const $rsix = document.querySelector('.r-six') as HTMLDialogElement;
if (!$rsix) throw new Error('Dialog $rsix not found');
const $recipe7 = document.querySelector('.recipe-7') as HTMLDivElement;
if (!$recipe7) throw new Error('$recipe7 query failed');
const $rseven = document.querySelector('.r-seven') as HTMLDialogElement;
if (!$rseven) throw new Error('Dialog $rseven not found');
const $recipe8 = document.querySelector('.recipe-8') as HTMLDivElement;
if (!$recipe8) throw new Error('$recipe8 query failed');
const $reight = document.querySelector('.r-eight') as HTMLDialogElement;
if (!$reight) throw new Error('Dialog $reight not found');
const $recipe9 = document.querySelector('.recipe-9') as HTMLDivElement;
if (!$recipe9) throw new Error('$recipe1 query failed');
const $rnine = document.querySelector('.r-nine') as HTMLDialogElement;
if (!$rnine) throw new Error('Dialog $rnine not found');
const $recipe10 = document.querySelector('.recipe-10') as HTMLDivElement;
if (!$recipe10) throw new Error('$recipe10 query failed');
const $rten = document.querySelector('.r-ten') as HTMLDialogElement;
if (!$rten) throw new Error('Dialog $rten not found');

const $delete1 = document.querySelector('.delete-1') as HTMLButtonElement;
if (!$delete1) throw new Error('Cannot delete the first recipe');
const $delete2 = document.querySelector('.delete-2') as HTMLButtonElement;
if (!$delete2) throw new Error('Cannot delete the second recipe');
const $delete3 = document.querySelector('.delete-3') as HTMLButtonElement;
if (!$delete3) throw new Error('Cannot delete the third recipe');
const $delete4 = document.querySelector('.delete-4') as HTMLButtonElement;
if (!$delete4) throw new Error('Cannot delete the fourth recipe');
const $delete5 = document.querySelector('.delete-5') as HTMLButtonElement;
if (!$delete5) throw new Error('Cannot delete the fifth recipe');
const $delete6 = document.querySelector('.delete-6') as HTMLButtonElement;
if (!$delete6) throw new Error('Cannot delete the sixth recipe');
const $delete7 = document.querySelector('.delete-7') as HTMLButtonElement;
if (!$delete7) throw new Error('Cannot delete the first recipe');
const $delete8 = document.querySelector('.delete-8') as HTMLButtonElement;
if (!$delete8) throw new Error('Cannot delete the first recipe');
const $delete9 = document.querySelector('.delete-9') as HTMLButtonElement;
if (!$delete9) throw new Error('Cannot delete the first recipe');
const $delete10 = document.querySelector('.delete-10') as HTMLButtonElement;
if (!$delete10) throw new Error('Cannot delete the first recipe');

const $modalDelete1 = document.querySelector(
  '.modal-delete-1',
) as HTMLButtonElement;
if (!$modalDelete1) throw new Error('Cannot delete the first recipe');
const $modalDelete2 = document.querySelector(
  '.modal-delete-2',
) as HTMLButtonElement;
if (!$modalDelete2) throw new Error('Cannot delete the second recipe');
const $modalDelete3 = document.querySelector(
  '.modal-delete-3',
) as HTMLButtonElement;
if (!$modalDelete3) throw new Error('Cannot delete the third recipe');
const $modalDelete4 = document.querySelector(
  '.modal-delete-4',
) as HTMLButtonElement;
if (!$modalDelete4) throw new Error('Cannot delete the fourth recipe');
const $modalDelete5 = document.querySelector(
  '.modal-delete-5',
) as HTMLButtonElement;
if (!$modalDelete5) throw new Error('Cannot delete the fifth recipe');
const $modalDelete6 = document.querySelector(
  '.modal-delete-6',
) as HTMLButtonElement;
if (!$modalDelete6) throw new Error('Cannot delete the sixth recipe');
const $modalDelete7 = document.querySelector(
  '.modal-delete-7',
) as HTMLButtonElement;
if (!$modalDelete7) throw new Error('Cannot delete the first recipe');
const $modalDelete8 = document.querySelector(
  '.modal-delete-8',
) as HTMLButtonElement;
if (!$modalDelete8) throw new Error('Cannot delete the first recipe');
const $modalDelete9 = document.querySelector(
  '.modal-delete-9',
) as HTMLButtonElement;
if (!$modalDelete9) throw new Error('Cannot delete the first recipe');
const $modalDelete10 = document.querySelector(
  '.modal-delete-10',
) as HTMLButtonElement;
if (!$modalDelete10) throw new Error('Cannot delete the first recipe');

function readData(): Data {
  let data: Data;
  const localData = localStorage.getItem(dataKey);
  if (localData) {
    data = JSON.parse(localData) as Data;
  } else {
    data = {
      entries: [],
      thumbnails: [],
    };
  }
  return data;
}

function flush(
  rec: HTMLDivElement,
  num: number,
  di: HTMLDialogElement,
  button: HTMLButtonElement,
): HTMLDivElement {
  rec.classList.add('seen');
  button.classList.remove('hidden');
  rec.children[0].innerHTML = data.entries[num].title;
  const imgOneAndTwo: NodeList = document.querySelectorAll(
    `.recipe-${num + 1} img`,
  );
  const imgOne: HTMLImageElement = imgOneAndTwo[0] as HTMLImageElement;
  const imgTwo: HTMLImageElement = imgOneAndTwo[1] as HTMLImageElement;
  const imgThree: HTMLImageElement = imgOneAndTwo[2] as HTMLImageElement;
  imgOne.src = data.entries[num].ingredientImage[0];
  imgTwo.src = data.entries[num].ingredientImage[1];
  imgThree.src = data.thumbnails[num];
  rec.children[1].classList.remove('hidden');
  rec.children[2].innerHTML = data.entries[num].ingredients;
  rec.children[3].innerHTML = data.entries[num].instructions;
  di.children[0].innerHTML = rec.children[0].innerHTML;
  di.children[1].innerHTML = rec.children[2].innerHTML;
  di.children[2].innerHTML = rec.children[3].innerHTML;
  return rec;
}

function fillFeed(): void {
  const divList: HTMLDivElement[] = [
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
  const talkList: HTMLDialogElement[] = [
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
  const buttonList: HTMLButtonElement[] = [
    $delete1,
    $delete2,
    $delete3,
    $delete4,
    $delete5,
    $delete6,
    $delete7,
    $delete8,
    $delete9,
    $delete10,
  ];
  for (let i = 0; i < data.entries.length; i++) {
    flush(divList[i], i, talkList[i], buttonList[i]);
  }
}

fillFeed();

async function fetchTestMeal(id: string): Promise<Meal> {
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
async function fetchIngredient(id: string): Promise<void> {
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

function deleteRecipe(number: number): void {
  data.entries.splice(number, 1);
  writeData();
  fillFeed();
  location.reload();
}

$delete1.addEventListener('click', () => {
  deleteRecipe(0);
  if (data.entries.length < 1) $delete1.classList.add('hidden');
});

$modalDelete1.addEventListener('click', () => {
  deleteRecipe(0);
  if (data.entries.length < 1) $delete1.classList.add('hidden');
});

$delete2.addEventListener('click', () => {
  deleteRecipe(1);
  if (data.entries.length < 2) $delete2.classList.add('hidden');
});

$modalDelete2.addEventListener('click', () => {
  deleteRecipe(1);
  if (data.entries.length < 2) $delete2.classList.add('hidden');
});

$delete3.addEventListener('click', () => {
  deleteRecipe(2);
  if (data.entries.length < 3) $delete3.classList.add('hidden');
});

$modalDelete3.addEventListener('click', () => {
  deleteRecipe(2);
  if (data.entries.length < 3) $delete3.classList.add('hidden');
});

$delete4.addEventListener('click', () => {
  deleteRecipe(3);
  if (data.entries.length < 4) $delete4.classList.add('hidden');
});

$modalDelete4.addEventListener('click', () => {
  deleteRecipe(3);
  if (data.entries.length < 4) $delete4.classList.add('hidden');
});

$delete5.addEventListener('click', () => {
  deleteRecipe(4);
  if (data.entries.length < 5) $delete5.classList.add('hidden');
});

$modalDelete5.addEventListener('click', () => {
  deleteRecipe(4);
  if (data.entries.length < 5) $delete5.classList.add('hidden');
});

$delete6.addEventListener('click', () => {
  deleteRecipe(5);
  if (data.entries.length < 6) $delete6.classList.add('hidden');
});

$modalDelete6.addEventListener('click', () => {
  deleteRecipe(5);
  if (data.entries.length < 6) $delete6.classList.add('hidden');
});

$delete7.addEventListener('click', () => {
  deleteRecipe(6);
  if (data.entries.length < 7) $delete7.classList.add('hidden');
});

$modalDelete7.addEventListener('click', () => {
  deleteRecipe(6);
  if (data.entries.length < 7) $delete7.classList.add('hidden');
});

$delete8.addEventListener('click', () => {
  deleteRecipe(7);
  if (data.entries.length < 8) $delete8.classList.add('hidden');
});

$modalDelete8.addEventListener('click', () => {
  deleteRecipe(7);
  if (data.entries.length < 8) $delete8.classList.add('hidden');
});

$delete9.addEventListener('click', () => {
  deleteRecipe(8);
  if (data.entries.length < 9) $delete9.classList.add('hidden');
});

$modalDelete9.addEventListener('click', () => {
  deleteRecipe(8);
  if (data.entries.length < 9) $delete9.classList.add('hidden');
});

$delete10.addEventListener('click', () => {
  deleteRecipe(9);
  if (data.entries.length < 10) $delete10.classList.add('hidden');
});

$modalDelete10.addEventListener('click', () => {
  deleteRecipe(9);
  if (data.entries.length < 10) $delete10.classList.add('hidden');
});

fetchIngredient('potatoes');
fetchTestMeal('53000');
