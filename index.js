// Lapis, Papyrus, Scalpellus
const choices = ["Lapis", "Papyrus", "Scalpellus"];
let userChoice;
let computereChoice;

// if Lapis is chosen
document.querySelector('#click_Lapis').onclick = function () {
    userChoice = choices[0];
    computereChoice = computerChooses();
    compareChoices(userChoice, computereChoice);
};

// if Papyrus is chosen
document.querySelector('#click_Papyrus').onclick = function () {
    userChoice = choices[1];
    computereChoice = computerChooses();
    compareChoices(userChoice, computereChoice);
};

// if Scalpellus is chosen
document.querySelector('#click_Scalpellus').onclick = function () {
    userChoice = choices[2];
    computereChoice = computerChooses();
    compareChoices(userChoice, computereChoice);
};

// returns a random integer from 0 to 2 for computer
function computerChooses() {
    return choices[Math.floor(Math.random() * 3)]; 
};

// compare two choices and show the result
function compareChoices(choice1, choice2) {
    if (choice1 === "Lapis") {
        if (choice2 === "Lapis") {
            alert ("Lapis Vs. Lapis! It's a tie!");
        } else if (choice2 === "Papyrus") {
            alert ("Lapis Vs. Papyrus! Computer wins!");
        } else {
            alert ("Lapis Vs. Scalpellus! You win!");
        }
    } else if (choice1 === "Papyrus") {
        if (choice2 === "Lapis") {
            alert ("Papyrus Vs. Lapis! You win!");
        } else if (choice2 === "Papyrus") {
            alert ("Papyrus Vs. Papyrus! It's a tie!");
        } else {
            alert ("Papyrus Vs. Scalpellus! Computer wins!");
        }
    } else {
        if (choice2 === "Lapis") {
            alert ("Scalpellus Vs. Lapis! Computer wins!");
        } else if (choice2 === "Papyrus") {
            alert ("Scalpellus Vs. Papyrus! You win!");
        } else {
            alert ("Scalpellus Vs. Scalpellus! It's a tie!");
        }
    }
};
