import './style.css';
import { Header } from './components/header';
import { Main } from './components/main';
import { Details } from './components/details';
import { Footer } from './components/footer';

new Header('#app');
new Main('#app');
new Details('.main');
new Footer('#app');
