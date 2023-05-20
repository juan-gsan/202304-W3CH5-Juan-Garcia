/* eslint-disable no-new */
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Footer } from './footer';

describe('Given the component Header', () => {
  document.body.innerHTML = '<slot></slot>';
  new Footer('slot');
  const element = screen.getByRole('heading');
  describe('When it is instantiate', () => {
    test('It should be in the document', () => {
      expect(element).toBeInTheDocument();
    });
  });
});
