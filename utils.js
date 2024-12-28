export function saveScore(point) {
  const currentScore = point;
  let points = JSON.parse(localStorage.getItem("scores")) || [];
  points.push(currentScore);
  localStorage.setItem("scores", JSON.stringify(points));
  console.log(`Scores saved: ${points}`);
}

export function displayBestScore() {
  let points = JSON.parse(localStorage.getItem("scores")) || [];
  if (points.length === 0) {
    alert("No scores available yet!");
    return;
  }
  const maxScore = Math.max(...points);
  alert(`Best Score: ${maxScore}`);
}

export function displayHelp() {
    alert(`Never let the ball fails ! \n Move left and right key to hit the ball`);
}
