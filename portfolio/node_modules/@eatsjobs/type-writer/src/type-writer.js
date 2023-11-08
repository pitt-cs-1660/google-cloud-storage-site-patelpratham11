const h = document.createElement.bind(document);
async function delay(ms = 0) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * A type-writer web component
 * @fires done - Dispatched when type-writing naturally finish 
 * @element type-writer
 * @attr {Boolean} autostart - start on mount
 * @attr {Number} typingdelay - the delay between each word in ms
 * @attr {Number} linebreakdelay - the delay between after linebreak \n 
 * @cssprop --playground-background - the background of the container
 * @cssprop --playground-background - the background of the container 
 * @cssprop --text-color - the color of the text
 * @cssprop --font-family - font-family
 * @cssprop --font-size - font-size
 * @cssprop --cursor-width - the width of the cursor
 * @cssprop --cursor-height - the height of the cursor; 
 */
export class TypeWriter extends HTMLElement {
  static get template() {
    const template = h("template");
    template.innerHTML = `
      <div class="container">
        <div>
          <span> > </span>
          <span id="type-write"></span>
          <span class="cursor" />
        </div>
      </div>
    `;
    return template;
  }

  static get styles() {
    const style = h("style");
    style.innerHTML = `
      .container {
        display: flex;
        flex-direction: row;
        align-items: baseline;
        flex-wrap: wrap;

        font-size: var(--font-size,3rem);
        font-family: var(--font-family, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif);
        background: var(--playground-background, #222);
        color: var(--text-color, lime);
        height: 100%;
        width: 100%;
      }
      #type-write {
        line-height: 1.3;
      }
      .cursor {
        display: inline-flex;
        background-color: var(--text-color, lime);
        animation: blink 0.8s infinite;
        width: var(--cursor-width, 1rem);
        height: var(--cursor-height, 2rem);
      }
      @keyframes blink {
        0% {
          opacity: 0.2;
        }
        50% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
    `;
    return style;
  }

  set autoStart(val) {
    if (!val) {
      this.removeAttribute("autostart");
      return;
    }
    this.setAttribute("autostart", val);
  }

  get autoStart() {
    const val = this.getAttribute("autostart");
    if (val === "true" || val === "") return true;
    else return false;
  }

  set typingDelay(val) {
    if (val && !isNaN(val)) {
      this.setAttribute("typingdelay", val);
    }
  }

  get typingDelay() {
    return parseInt(this.getAttribute("typingdelay"), 10);
  }

  set lineBreakDelay(val) {
    if (val && !isNaN(val)) {
      this.setAttribute("linebreakdelay", val);
    }
  }

  get lineBreakDelay() {
    return parseInt(this.getAttribute("linebreakdelay"), 10);
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(TypeWriter.styles);
    this.shadowRoot.appendChild(TypeWriter.template.content.cloneNode(true));

    this.start = this.start.bind(this);
    this.restart = this.restart.bind(this);
    this.stop = this.stop.bind(this);
    this.clean = this.clean.bind(this);
    this.pause = this.pause.bind(this);
    this.resume = this.resume.bind(this);

    this._ref = this.shadowRoot.querySelector("#type-write");    
    this._startPromise = null;
    this._isRunning = false;
  }

  connectedCallback() {    
    if (this.autoStart) {
      this.start();
    }
  }

  disconnectedCallback() {
    this._startPromise = null;
  }

  clean() {    
    this._ref.innerHTML = "";
  }

  *createLetterGenerator() {    
    const letters = this.textContent.trim()
      .split('\n')
      .map(sentence => sentence.trim())
      .join('\n');
    for (const letter of letters) {
      yield letter;
    }
    return 'finished';
  }

  async _start() {       
    let result;
    while (this._isRunning && !(result = this._letterGenerator.next()).done) {
      if (result.value === "\n") {
        this._ref.appendChild(h("br"));
        await delay(this.lineBreakDelay);        
        continue;
      }
      this._ref.innerHTML += result.value;
      await delay(this.typingDelay);      
    }
    if (result.value === 'finished') {
      this.dispatchEvent(new CustomEvent('done'));
    }
  }

  async start() {
    if (this._isRunning) {
      return this._startPromise;
    }
    this._isRunning = true;
    this._letterGenerator = this.createLetterGenerator();
    this._startPromise = this._start();
    return this._startPromise;
  }

  async restart() {
    await this.stop();
    this.clean();
    return this.start();   
  }

  async stop() {
    if (!this._isRunning) { return }
    this._letterGenerator.return();
    await this._startPromise;
    this._isRunning = false;
  }

  async pause() {    
    this._isRunning = false;
    await this._startPromise;
  }

  resume() {
    if (this._isRunning) { return }
    this._isRunning = true;
    this._start();
  }
}
