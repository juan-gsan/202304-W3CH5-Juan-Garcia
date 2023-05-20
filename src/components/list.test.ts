/* eslint-disable no-new */
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { List } from './list';

describe('Given the component List', () => {
  document.body.innerHTML = '<slot></slot>';
  new List('slot');
  const element = screen.getByRole('list');
  describe('When it is instantiate', () => {
    test('It should be in the document', () => {
      expect(element).toBeInTheDocument();
    });
  });
});
