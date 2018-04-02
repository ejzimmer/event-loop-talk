export class Browser extends HTMLElement {
  constructor() {
    super();

    console.log('browser');

    const shadow = this.attachShadow({ mode: 'closed' });

    const chrome = this.createDiv('chrome');

    const titlebar = this.createDiv('titlebar');
    chrome.appendChild(titlebar);
    for (let i = 0; i < 3; i++) {
      const control = this.createDiv('window-control');
      titlebar.appendChild(control);
    }

    const page = this.createDiv('page');
    chrome.appendChild(page);
    const slot = document.createElement('slot');
    page.appendChild(slot);

    const style = document.createElement('style');
    style.textContent = `
      :host {
        display: flex;
        --control-colour: #aaa;
        --control-highlight: #ccc;
				--control-shadow: #888;
      }
			.chrome {
				width: 100%;
				height: 100%;
				border: 2px solid var(--control-colour);
				border-left: 4px ridge var(--control-colour);
        position: relative;
				display: flex;
				flex-direction: column;
      }			
      .chrome::before {
				content: '';
				width: calc(100% + 3px);
				height: calc(100% + 3px);
				border: 2px solid;
				left: -4px;
				top: -4px;
				border-color: var(--control-highlight);
				border-right-color: var(--control-shadow);
				position: absolute;
				z-index: -1;
      }			
      .titlebar {
				height: 20px;
				margin: -3px -2px -2px -2px;
				border-bottom: 4px ridge #aaa;
				background-color: #aaa;
				position: relative;
				display: flex;
				flex: 0 0 auto;
      }
      .page {
				background: white;
				flex-grow: 1;
      }
      .window-control {
				width: 10px;
				height: 10px;
				border-radius: 50%;
				background-image: linear-gradient(hsl(1, 100%, 90%), hsl(1, 100%, 50%));
				margin: 5px 2px;
				border: 1px solid #666;
			}
			.window-control:nth-child(2) {
				background-image: linear-gradient(hsl(40, 100%, 90%), hsl(40, 100%, 50%));
			}
			.window-control:last-child {
				background-image: linear-gradient(lightgreen,green);
			}`;
    
    shadow.appendChild(chrome);
    shadow.appendChild(style);
  }

  createDiv(className) {
    const div = document.createElement('div');
    div.classList.add(className);

    return div;
  }
}