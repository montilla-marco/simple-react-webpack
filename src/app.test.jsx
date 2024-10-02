import { render, screen } from '@testing-library/react';
import App from './app';

describe('App tests', () => {
  it('should contains the heading 1', () => {
    render(<App />);

    const text = screen.getByText(/App Yeah!!!/i);
    expect(text).toBeInTheDocument();

    const logo = screen.getByAltText(/Logo.*?/i)
    expect(logo).toBeInTheDocument();

  });
});
