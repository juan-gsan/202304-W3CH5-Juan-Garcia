import { Component } from './component';

export class Header extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `<header class="header">
              <img class="title" src="/pokemon-logo.svg" alt="Pokemon logo" width=250 height=250>
            </header>`;
  }
}
