// Lapis, Papyrus, Scalpellus
const choices = ["Lapis", "Papyrus", "Scalpellus"];
let userChoice;
let computereChoice;

document.querySelector('#click_Lapis').onclick = function () {
    userChoice = choices[0];
    computereChoice = computerChooses();
    compareChoices(userChoice, computereChoice);
};

document.querySelector('#click_Papyrus').onclick = function () {
    userChoice = choices[1];
    computereChoice = computerChooses();
    compareChoices(userChoice, computereChoice);
};

document.querySelector('#click_Scalpellus').onclick = function () {
    userChoice = choices[2];
    computereChoice = computerChooses();
    compareChoices(userChoice, computereChoice);
};

function computerChooses() {
    return choices[Math.floor(Math.random() * 3)]; // returns a random integer from 0 to 2
};

function compareChoices(choice1, choice2) {
    if (choice1 === "Lapis") {
        if (choice2 === "Lapis") {
            document.getElementById("result").innerHTML = "Lapis Vs. Lapis! It's a tie!";
        } else if (choice2 === "Papyrus") {
            document.getElementById("result").innerHTML = "Lapis Vs. Papyrus! Computer wins!";
        } else {
            document.getElementById("result").innerHTML = "Lapis Vs. Scalpellus! You win!";
        }
    } else if (choice1 === "Papyrus") {
        if (choice2 === "Lapis") {
            document.getElementById("result").innerHTML = "Papyrus Vs. Lapis! You win!";
        } else if (choice2 === "Papyrus") {
            document.getElementById("result").innerHTML = "Papyrus Vs. Papyrus! It's a tie!";
        } else {
            document.getElementById("result").innerHTML = "Papyrus Vs. Scalpellus! Computer wins!";
        }
    } else {
        if (choice2 === "Lapis") {
            document.getElementById("result").innerHTML = "Scalpellus Vs. Lapis! Computer wins!";
        } else if (choice2 === "Papyrus") {
            document.getElementById("result").innerHTML = "Scalpellus Vs. Papyrus! You win!";
        } else {
            document.getElementById("result").innerHTML = "Scalpellus Vs. Scalpellus! It's a tie!";
        }
    }
};

