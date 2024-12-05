import { render, screen } from '@testing-library/react';
import Welcome from '../components/Welcome';
import { describe, expect, it } from 'vitest';

describe('Welcome component', () => {
  it('renders the Alert with the correct content', () => {
    
    render(<Welcome />);

    
    const heading = screen.getByText(/Benvenuto nel nostro shop!/i);
    const paragraph = screen.getByText(/Esplora i nostri libri!/i);

    expect(heading).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
  });
});