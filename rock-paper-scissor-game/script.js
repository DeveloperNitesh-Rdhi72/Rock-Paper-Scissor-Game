let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
const userscores = document.querySelector(".curr-user-score");
const compscores = document.querySelector(".curr-computer-score");
let userSelection = document.querySelector(".user-selected-choice");
let compSelection = document.querySelector(".c-s-c");

const gencompchoice = () => {
    let options = ["rock", "paper", "scissors"];
    let randindx = Math.floor(Math.random() * 3);
    return options[randindx];
}

const drawgame = (src) => {
    msg.innerText = "Game was draw";
    msg.style.backgroundColor = "rgb(10, 10, 27)";
    compSelection.innerHTML = `<img src = "${src}">`
}

const playgame = (userchoice, src) => {
    const compchoice = gencompchoice();

    if (userchoice === compchoice) {
        drawgame(src);
    } else {
        if (userchoice === "rock") {
            if (compchoice === "paper") {
                msg.innerText = "You lose!";
                msg.style.backgroundColor = "red";
                compscore++;
                compscores.innerText = compscore
                compSelection.innerHTML = `<img src = "images/paper.png">`;
            } else {
                msg.innerText = "You win!";
                msg.style.backgroundColor = "green";
                userscore++;
                userscores.innerText = userscore;
                compSelection.innerHTML = `<img src = "images/scissors.png">`;
            }
        } else if (userchoice === "paper") {
            if (compchoice === "rock") {
                msg.innerText = "You win!";
                msg.style.backgroundColor = "green";
                userscore++;
                userscores.innerText = userscore;
                compSelection.innerHTML = `<img src = "images/rock.png">`;
            } else {
                msg.innerText = "You lose!";
                msg.style.backgroundColor = "red";
                compscore++;
                compscores.innerText = compscore;
                compSelection.innerHTML = `<img src = "images/scissors.png">`;
            }
        } else {
            if (compchoice === "rock") {
                msg.innerText = "You lose!";
                msg.style.backgroundColor = "red";
                compscore++;
                compscores.innerText = compscore;
                compSelection.innerHTML = `<img src = "images/rock.png">`;
            } else {
                msg.innerText = "You win!";
                msg.style.backgroundColor = "green";
                userscore++;
                userscores.innerText = userscore;
                compSelection.innerHTML = `<img src = "images/paper.png">`;
            }
        }
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", (event) => {
        const userchoice = choice.getAttribute("id");
        userSelection.style.visibility = "visible";
        compSelection.style.visibility = "visible"
        userSelection.src = event.target.src;
        src = event.target.src;
        playgame(userchoice, src);
    })
})

