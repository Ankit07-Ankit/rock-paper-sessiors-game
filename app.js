const imgs = document.querySelectorAll(".img");
const message = document.getElementById("msg");
const userScoreCount = document.getElementById("user-score");
const campScoreCount = document.getElementById("camp-score");

let userScore = 0;
let campScore = 0;

const genComputerChoice = () => {
    let imgArray = ["rock", "paper", "scissors"];
    let randomNum =  Math.floor(Math.random() * 3);
    return imgArray[randomNum];
}

const drawGame = () => {
    message.innerText = "Game was draw. Play again.";
    message.style.backgroundColor = "#081b31";
    // message.style.color = "black";
}

const showWinner = (winUser, userChoice, campChoice) => {
    if (winUser) {
        userScore++;
        userScoreCount.innerText = userScore;
        message.innerText = `You win!, Your ${userChoice} beats ${campChoice}.`;
        message.style.backgroundColor = "green";
    } else {
        campScore++;
        campScoreCount.innerText = campScore;
        message.innerText = `You lost. ${campChoice} beats your ${userChoice}.`;
        message.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choise = ", userChoice);
    //Generate computer choise
    let campChoice = genComputerChoice();
    console.log("camp choice = ", campChoice);

    if (userChoice === campChoice) {
        drawGame();
    } else {
        let winUser = true;
        if (userChoice === "rock") {
            winUser = campChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            winUser = campChoice === "scissors" ? false : true;
        } else {
            winUser = campChoice === "rock" ? false : true;
        }
        showWinner(winUser, userChoice, campChoice);
    }
}


imgs.forEach((img) => {
    img.addEventListener("click", () => {
        const userChoice = img.getAttribute("id");
        // console.log("img was clicked!", userChoice)
        playGame(userChoice);
    })
})