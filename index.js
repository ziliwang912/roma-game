// Lapis, Papyrus, Scalpellus
const choices = ["Lapis", "Papyrus", "Scalpellus"];
const winners = ["Tie", "You", "Computer"];
let userChoice;
let computereChoice;
let numOfGames = 0; 
let numOfWins = 0; 
let numOfTies = 0; 


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

function addResult (gameNumber, choice1, choice2, winner) {
    const resultTable = document.querySelector("table");

    if (resultTable.rows[1].cells[0].innerText == 0) {
        resultTable.deleteRow(1); 
    } else {
        let row = resultTable.insertRow(-1);
        row.insertCell(0).innerText = gameNumber;
        row.insertCell(1).innerText = choice1;
        row.insertCell(2).innerText = choice2;
        row.insertCell(3).innerText = winner;
    }
}

// compare two choices and show the result
function compareChoices(choice1, choice2) {
    if (choice1 === "Lapis") {
        if (choice2 === "Lapis") {
            alert ("Lapis Vs. Lapis! It's a tie!");
            numOfTies++;
            addResult(++numOfGames,choice1,choice2,winners[0]);
        } else if (choice2 === "Papyrus") {
            alert ("Lapis Vs. Papyrus! Computer wins!");
            addResult(++numOfGames,choice1,choice2,winners[2]);
        } else {
            alert ("Lapis Vs. Scalpellus! You win!");
            numOfWins++;
            addResult(++numOfGames,choice1,choice2,winners[1]);
        }
    } else if (choice1 === "Papyrus") {
        if (choice2 === "Lapis") {
            alert ("Papyrus Vs. Lapis! You win!");
            addResult(++numOfGames,choice1,choice2,winners[1]);
            numOfWins++;
        } else if (choice2 === "Papyrus") {
            alert ("Papyrus Vs. Papyrus! It's a tie!");
            numOfTies++;
            addResult(++numOfGames,choice1,choice2,winners[0]);
        } else {
            alert ("Papyrus Vs. Scalpellus! Computer wins!");
            addResult(++numOfGames,choice1,choice2,winners[2]);
        }
    } else {
        if (choice2 === "Lapis") {
            alert ("Scalpellus Vs. Lapis! Computer wins!");
            addResult(++numOfGames,choice1,choice2,winners[2]);
        } else if (choice2 === "Papyrus") {
            alert ("Scalpellus Vs. Papyrus! You win!");
            numOfWins++;
            addResult(++numOfGames,choice1,choice2,winners[1]);
        } else {
            alert ("Scalpellus Vs. Scalpellus! It's a tie!");
            numOfTies++;
            addResult(++numOfGames,choice1,choice2,winners[0]);
        }
    }
};

document.querySelector('#win_rate').onclick = function () {
    if (numOfGames == 0) {
        alert ("You haven't play any game yet!");
    } else {
        let winRate = numOfWins / (numOfGames - numOfTies) * 100;
        alert ("Ignoring ties, Your win rate against computer is " + winRate.toFixed(2) + "%.");
    }
};
