const video_arr = [
  "./images/rock.webm",
  "./images/paper.webm",
  "./images/scissors.webm",
];

const main = document.querySelector(".main");

const result = document.createElement("div");
result.classList.add("result");

result.innerHTML = `
    <p>Player: <span class="player_score">0</span> | Computer: <span class="computer_score">0</span></p>
    <p>Winner: <span class="winner">—</span></p>
  `;
main.append(result);

const game = document.createElement("div");
game.classList.add("game");
main.append(game);

game.innerHTML = `
    <div class="player">
      <img src="./images/default.png">
    </div>
    <div class="computer">
      <img src="./images/default.png">
    </div>
  `;

const player = document.querySelector(".player");
const computer = document.querySelector(".computer");

const buttons = document.createElement("div");
buttons.classList.add("buttons");
main.append(buttons);

const btn_arr = [
  `<button class="rock">Rock</button>`,
  `<button class="paper">Paper</button>`,
  `<button class="scissors">Scissors</button>`,
];

btn_arr.forEach((btn) => {
  buttons.innerHTML += btn;
});

let playerScore = 0;
let computerScore = 0;

buttons.addEventListener("click", (e) => {
  const choosen = e.target.className;

  if (!["rock", "paper", "scissors"].includes(choosen)) return;

  const playerIndex = ["rock", "paper", "scissors"].indexOf(choosen);
  const compIndex = Math.floor(Math.random() * 3);

  handPosition(player, video_arr[playerIndex]);
  handPosition(computer, video_arr[compIndex]);

  let Winner = "Draw";

  if (playerIndex === compIndex) {
    Winner = "Draw";
  } else if (
    (playerIndex === 0 && compIndex === 2) ||
    (playerIndex === 1 && compIndex === 0) ||
    (playerIndex === 2 && compIndex === 1)
  ) {
    playerScore++;
    Winner = "Player";
  } else {
    computerScore++;
    Winner = "Computer";
  }

  document.querySelector(".player_score").textContent = playerScore;
  document.querySelector(".computer_score").textContent = computerScore;

  const winnerSpan = document.querySelector(".winner");
  winnerSpan.textContent = "…";

  setTimeout(() => {
    winnerSpan.textContent = Winner;
  }, 1400);
});

function handPosition(div, src) {
  div.innerHTML = `<video src="${src}" autoplay muted></video>`;
}
