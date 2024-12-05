import {render, screen} from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import BookList from '../components/BookList';
import books from '../data/fantasy.json'



describe('BookList component', () => {
  it('renders the correct number of cards based on the book list', () => {
    
    render(<BookList books={books} />);

    
    const bookCards = screen.getAllByRole('img'); 
    expect(bookCards).toHaveLength(books.length);
  });
});