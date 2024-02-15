import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import App from './App';

test('renders game title', () => {
  const { getByText } = render(<App />);
  const title = getByText('Sten, Sax, Påse');
  expect(title).toBeTruthy();
});

test('user can select a choice', () => {
  const { getByText } = render(<App />);
  const choiceButton = getByText('Sten');
  fireEvent.press(choiceButton);
  const userChoice = getByText('Du valde: Sten');
  expect(userChoice).toBeTruthy();
});