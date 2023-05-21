import { Component } from './component';

export class Navigation extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `
      <div class="buttons">
        <button class="previous"><i data-id="previous" class="fa-solid fa-arrow-left"></i></button>
        <button class="next"><i data-id="next" class="fa-solid fa-arrow-right"></i></button>
      </div>
      `;
  }
}
