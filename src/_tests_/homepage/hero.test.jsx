import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import HeroContent from '@/components/Homepage/hero/heroContent';

describe('HeroContent', () => {
  it('should show category menu on button click', () => {
    render(<HeroContent />);
    const categoryButton = screen.getByText('Categories');
    fireEvent.click(categoryButton);
    const categoryMenu = screen.getByRole('menu');
    expect(categoryMenu).toBeInTheDocument();
  });

  it('should update search input value on change', () => {
    render(<HeroContent />);
    const searchText = 'New York';
    const searchInput = screen.getByPlaceholderText(
      'Search for places or events',
    );
    fireEvent.change(searchInput, { target: { value: searchText } });
    expect(searchInput).toHaveValue(searchText);
  });

  it('should call handleSearch function on search button click', () => {
    const handleSearch = jest.fn();
    render(<HeroContent handleSearch={handleSearch} />);
    const searchButton = screen.getByText('Search');
    fireEvent.click(searchButton);
    expect(handleSearch).toHaveBeenCalled();
  });
});
