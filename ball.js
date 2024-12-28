export default class Ball {
  constructor() {
    this.element = null;
    this.currentPosition = this.getRandomPosition();
    this.verticalPosition = 0;
    this.speed = 1;
    this.isMoving = false;
    this.horizontalSpeed = 50;
    this.isRedirected = false;
    this.gameOverCallback = null;
  }

  generateBody() {
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volleyball">
        <path d="M11.1 7.1a16.55 16.55 0 0 1 10.9 4"/>
        <path d="M12 12a12.6 12.6 0 0 1-8.7 5"/>
        <path d="M16.8 13.6a16.55 16.55 0 0 1-9 7.5"/>
        <path d="M20.7 17a12.8 12.8 0 0 0-8.7-5 13.3 13.3 0 0 1 0-10"/>
        <path d="M6.3 3.8a16.55 16.55 0 0 0 1.9 11.5"/>
        <circle cx="12" cy="12" r="10"/>
      </svg>
    `;

    this.element = document.createElement("div");
    this.element.style.position = "absolute";
    this.element.style.top = "0";
    this.element.style.color = "white";
    this.element.style.left = "50%";
    this.element.style.transform = `translateX(${this.currentPosition}%) translateY(0%)`;
    this.element.innerHTML = svg;
    return this.element;
  }

  getRandomPosition() {
    const positions = [-325, -50, 225];
    return positions[Math.floor(Math.random() * positions.length)];
  }

  // getRandomDirection() {
  //   const directions = [50, -50, 50];
  //   return directions[Math.floor(Math.random() * directions.length)];
  // }

  enterIn(container) {
    if (!this.element) {
      this.generateBody();
    }
    container.appendChild(this.element);
    this.container = container;
    this.setupMovement();
    this.startMoving();
  }

  setGameOverCallback(callback) {
    this.gameOverCallback = callback;
  }

  setupMovement() {
    this.element.addEventListener("transitionend", () => {
      if (this.verticalPosition >= 100) {
        this.stopMoving();
        if (this.gameOverCallback) {
          this.gameOverCallback();
        }
      }
    });
  }

  startMoving() {
    if (!this.isMoving) {
      this.isMoving = true;
      this.element.style.transition = "transform 0.016s linear";
      this.animate();
    }
  }

  animate() {
    if (!this.isMoving) return;

    if (this.isRedirected) {
      this.currentPosition += this.horizontalSpeed;
      this.verticalPosition -= this.speed;

      // Check boundaries for redirected movement
      if (this.currentPosition >= 500 || this.verticalPosition <= 0) {
        this.resetPosition();
        return;
      }
    } else {
      this.verticalPosition += this.speed;

      // Check boundaries for normal movement
      if (this.verticalPosition >= 100) {
        this.verticalPosition = 100;
        this.isMoving = false;
      }
    }


    this.element.style.transform = `translateX(${this.currentPosition}%) translateY(${this.verticalPosition}vh)`;

    if (this.isMoving) {
      requestAnimationFrame(() => this.animate());
    }
  }

  resetPosition() {
    this.element.style.transition = "none";
    this.verticalPosition = 0;
    this.currentPosition = this.getRandomPosition();
    this.isRedirected = false;
    this.element.style.transform = `translateX(${this.currentPosition}%) translateY(0)`;
    this.element.offsetHeight; // Force reflow to reset transition
    this.element.style.transition = "transform 0.016s linear";
    this.isMoving = true;
    this.animate();
  }

  stopMoving() {
    this.isMoving = false;
  }

  redirect() {
    this.isRedirected = true;
  }
}
