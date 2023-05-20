import { Component } from './component';

export class Footer extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `<footer class="footer">
              <img class="footer__img" src="/footer-pic.png" alt="Pokeball image" width=50 height=50>
            </footer>`;
  }
}
