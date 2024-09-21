export default class Silde {
  constructor(display, slide) {
    this.slide = document.querySelector(slide);
    this.display = document.querySelector(display);
  }

  onStart(event) {
    event.preventDefault();
    this.display.addEventListener("mousemove", this.onMove);
  }

  onMove(event) {}

  onEnd(event) {
    console.log("acabou");
    this.display.removeEventListener("mousemove", this.onMove);
  }

  addSlideEvents() {
    this.display.addEventListener("mousedown", this.onStart);
    this.display.addEventListener("mouseup", this.onEnd);
  }

  bindEvents() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
  }

  init() {
    this.bindEvents();
    this.addSlideEvents();
    return this;
  }
}
