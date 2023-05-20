/* eslint-disable no-new */
import './style.css';
import { Header } from './components/header';
import { Main } from './components/main';
import { Card } from './components/card';
import { Footer } from './components/footer';

new Header('#app');
new Main('#app');
new Card('.main');
new Footer('#app');
