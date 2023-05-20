import { Component } from './component';

export class List extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `
    <ul class="pokemon-list"></ul>`;
  }
}
