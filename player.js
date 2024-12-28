export default class Player {
  constructor() {
    this.element = null;
    this.currentPosition = -50;
    this.moveSpeed = 200;
  }

  generateBody() {
    const svg = `
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-person-standing">
              <circle cx="12" cy="5" r="1"/>
              <path d="m9 20 3-6 3 6"/>
              <path d="m6 8 6 2 6-2"/>
              <path d="M12 10v4"/>
            </svg>
          `;

    this.element = document.createElement("div");
    this.element.style.position = "absolute";
    this.element.style.bottom = "0";
    this.element.style.color = "white";
    this.element.style.left = "50%";
    this.element.style.transform = `translateX(-50%)`;
    this.element.innerHTML = svg;
    return this.element;
  }

  enterIn(container) {
    if (!this.element) {
      this.generateBody();
    }
    container.appendChild(this.element);
    this.setupMovement();
  }

  setupMovement() {
    document.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "ArrowLeft":
          this.move("left");
          break;
        case "ArrowRight":
          this.move("right");
          break;
      }
    });
  }

  move(direction) {
    if (direction === "left") {
      this.currentPosition = Math.max(
        -250,
        this.currentPosition - this.moveSpeed
      );
    } else if (direction === "right") {
      this.currentPosition = Math.min(
        150,
        this.currentPosition + this.moveSpeed
      );
    }
    this.element.style.transform = `translateX(${this.currentPosition}%)`;
  }
}
