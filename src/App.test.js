import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Filter by year link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Filter by year/i);
  expect(linkElement).toBeInTheDocument();
});
