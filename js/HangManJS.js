const CATEGORIES = {
  fruits: ["APPLE","BANANA","ORANGE","MANGO","PINEAPPLE","STRAWBERRY","GRAPES","WATERMELON","KIWI","PAPAYA"],
  vegetables: ["CARROT","POTATO","TOMATO","ONION","CABBAGE","SPINACH","BROCCOLI","CAULIFLOWER","LETTUCE","PEAS"],
  cars: ["TOYOTA","HONDA","FORD","BMW","MERCEDES","AUDI","NISSAN", "HYUNDAI",  "KIA",  "TESLA"],
  countries: ["MOROCCO","FRANCE","SPAIN","ITALY","GERMANY","BRAZIL","CANADA","JAPAN","EGYPT","INDIA"],
  cities: ["PARIS","LONDON","TOKYO","NEWYORK","MADRID","ROME","DUBAI","SYDNEY","ISTANBUL","CAIRO"],
  animals: ["LION","TIGER","ELEPHANT","GIRAFFE","ZEBRA","MONKEY","KANGAROO","DOLPHIN","BEAR","RABBIT"],
  sports: ["FOOTBALL","BASKETBALL","TENNIS","CRICKET","BASEBALL","HOCKEY","GOLF","RUGBY","SWIMMING","BOXING"],
  movies: ["TITANIC","AVATAR","INCEPTION","GLADIATOR","FROZEN","JOKER","MATRIX","SHREK","ROCKY","MOANA"],
  professions: ["DOCTOR","TEACHER","ENGINEER","LAWYER","NURSE","PILOT","FARMER","CHEF","ARTIST","SOLDIER"],
  colors: ["RED","BLUE","GREEN","YELLOW","PURPLE","ORANGE","BLACK","WHITE","PINK","BROWN"]
};

const div_letters = document.getElementById("letters");
const categories = document.getElementById("categories");
const message = document.getElementById("message");
const complete_missing_letters = document.getElementById("complete-word");
const choiceButton = document.getElementById("confirmChoice");
const submitLetterButton = document.getElementById("checkChoice");
const repeatButton = document.getElementById("repeatButton");

let selectedCategory = [];
let target = [];

function confirmChoice() {
    let userChoice = categories.value.toLowerCase();

    if (CATEGORIES[userChoice]) {
      selectedCategory = CATEGORIES[userChoice];
      target = [...getRandomWord()];
      message.textContent = "You've chosen your category successfully";
      message.style.color = "#0b07f0";
      choiceButton.style.display = "none";
      submitLetterButton.style.display = "inline";
    }
}

function play() {
    for (let x = 0; x < target.length; x++) {
          let letter = document.createElement("p");
          letter.textContent = target[x];
          letter.style.borderBottom = "5px";

          document.getElementById("letters").append(letter);
    }
}

function repeat() {

}

// Get a random word from the select category.
function getRandomWord() {
    const index = Math.floor(Math.random() * selectedCategory.length);
    return selectedCategory[index];
}

function getRandomLetter(target) {
    return Math.floor(Math.random() * target.length);
}