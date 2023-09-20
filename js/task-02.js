const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");

const fragment = document.createDocumentFragment();

ingredients.forEach((ingredient) => {
  const listItem = document.createElement("li");
  listItem.classList.add("item");
  listItem.textContent = ingredient;

  fragment.appendChild(listItem);
});

ingredientsList.appendChild(fragment);