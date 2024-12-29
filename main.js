import Player from "./player.js";
import Ball from "./ball.js";
import { saveScore, displayBestScore, displayHelp } from "./utils.js";

document.addEventListener("DOMContentLoaded", function () {
  console.log("Hello");
  
  const game = () => {
    let player = new Player();
    let ball = new Ball();

    const gameZone = document.querySelector(".game-grid");
    const initButton = document.querySelector("#init");
    const playButton = document.querySelector("#play");
    const pauseButton = document.querySelector("#pause");
    const score = document.querySelector("h3 > span");
    const bestScoreButton = document.querySelector("#max-score");
    const helpButton = document.querySelector("#help");


    let point = 0;
    let sound = new Audio();
    sound.src = "ballSound.wav"

    function checkCollision() {
      if (!player.element || !ball.element) return;

      const playerRect = player.element.getBoundingClientRect();
      const playerCenter = playerRect.left + playerRect.width / 2;

      const ballRect = ball.element.getBoundingClientRect();
      const ballCenter = ballRect.left + ballRect.width / 2;

      const distance = Math.abs(playerCenter - ballCenter);

      const collisionRange = 10;

      const isInVerticalRange =
        ball.verticalPosition >= 70 && ball.verticalPosition <= 75;

      if (distance < collisionRange && isInVerticalRange) {
        sound.play();
        point++;
        score.innerHTML = point;

        ball.redirect();
      }
    }

    function handleGameOver() {
      alert("Game over!");
      ball.stopMoving();
      ball.resetPosition();
      saveScore(point);
      point = 0;
      score.innerHTML = point;
    }

    function gameLoop() {
      checkCollision();
      requestAnimationFrame(gameLoop);
    }

    if (gameZone) {
      initButton.addEventListener("click", () => {
        player.enterIn(gameZone);
        score.innerHTML = point;
        ball.setGameOverCallback(handleGameOver);

        playButton.addEventListener("click", () => {
          ball.enterIn(gameZone);
          gameLoop();
        });
        pauseButton.addEventListener("click", () => {
          ball.stopMoving();
        });
      });
    } else {
      console.error("Game zone not found!");
    }

    bestScoreButton.addEventListener("click", () => {
      displayBestScore();
    });

    helpButton.addEventListener("click", () => {
      displayHelp();
    });
  };

  game();
});
