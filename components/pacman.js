export class Loop extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'closed' });

    const loop = this.createDiv('loop');
    const spin = this.createDiv('spin');
    const pacman = this.createDiv('pacman');

    loop.appendChild(spin);
    spin.appendChild(pacman);

    const style = document.createElement('style');
    style.textContent = `
    .loop {
      width: 60vw;
      height: 60vw;
      border: 10px solid white;
      border-right-color: red;
      border-radius: 50%;
      margin: auto;
      margin-top: -30%;
      transform: rotateX(80deg);
      transform-style: preserve-3d;
    }
    .spin {
      height: 60vw;
      position: relative;
      animation: spin-da-loop 8s linear infinite;
      transform-style: preserve-3d;
      margin: auto;
    }
    .pacman {
      --pacman-colour: goldenrod;
      width: 80px;
      height: 80px;
      box-sizing: border-box;
      display: block;
      border-radius: 50%;
      border: 40px solid var(--pacman-colour);
      border-top-color: transparent;
      position: absolute;
      left: -50px;
      top: 50%;
      transform: rotateY(90deg);
    }
    .pacman::before, .pacman::after {
      content: '';
      width: 40px;
      height: 40px;
      background-color: var(--pacman-colour);
      display: block;
      position: absolute;
      bottom: 0;
      animation: chomp .5s linear infinite alternate;
    }
    .pacman::before {
      right: 0;
      border-top-left-radius: 40px;
      transform-origin: bottom right;
      transform: rotate(-45deg);
    }
    .pacman::after {
      left: 0;
      border-top-right-radius: 40px;
      transform-origin: bottom left;
      transform: rotate(45deg);
    }
    @keyframes spin-da-loop {
      to { transform: rotateZ(1turn); }
    }
    @keyframes chomp {
      to { transform: rotate(0); }
    }`;
    
    shadow.appendChild(loop);
    shadow.appendChild(style);
  }

  createDiv(className) {
    const div = document.createElement('div');
    div.classList.add(className);

    return div;
  }
}