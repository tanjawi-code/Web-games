const CATEGORIES = {
    fruits: ["Apple","Banana","Orange","Mango","Pineapple","Strawberry","Grapes","Watermelon","Kiwi","Papaya"],
    vegetables: ["Carrot","Potato","Tomato","Onion","Cabbage","Spinach","Broccoli","Cauliflower","Lettuce","Peas"],
    cars: ["Toyota","Honda","Ford","BMW","Mercedes","Audi","Nissan","Hyundai","Kia","Tesla"],
    countries: ["Morocco","France","Spain","Italy","Germany","Brazil","Canada","Japan","Egypt","India"],
    cities: ["Paris","London","Tokyo","NewYork","Madrid","Rome","Dubai","Sydney","Istanbul","Cairo"],
    animals: ["Lion","Tiger","Elephant","Giraffe","Zebra","Monkey","Kangaroo","Dolphin","Bear","Rabbit"],
    sports: ["Football","Basketball","Tennis","Cricket","Baseball","Hockey","Golf","Rugby","Swimming","Boxing"],
    movies: ["Titanic","Avatar","Inception","Gladiator","Frozen","Joker","Matrix","Shrek","Rocky","Moana"],
    professions: ["Doctor","Teacher","Engineer","Lawyer","Nurse","Pilot","Farmer","Chef","Artist","Soldier"],
    colors: ["Red","Blue","Green","Yellow","Purple","Orange","Black","White","Pink","Brown"]
}

const categories = document.getElementById("categories");
const message = document.getElementById("message");
let selectedCategory = [];

function confirmChoice() {
    let userChoice =  categories.value.toLowerCase();

    if (CATEGORIES[userChoice]) {
        selectedCategory = CATEGORIES[userChoice];
        message.textContent = "You've chosen your category successfully";
        message.style.color = "#0b07f0";
    }
}

function play() {
    if (selectedCategory.length === 0) {

    }
    else {
        let target = getRandomWord();
    }
}

// Get a random word from the select category.
function getRandomWord() {
    const index = Math.floor(Math.random() * selectedCategory.length);
    return selectedCategory[index];
}