import '@testing-library/jest-dom';

import { render, screen, fireEvent } from '@testing-library/react';

import Search from '@/components/Homepage/searchComponent';

describe('SignIn', () => {
  it('updates the email input field when typed in', () => {
    render(<Search />);
    const searchInput = screen.getByPlaceholderText(
      'Search for places or events',
    );

    expect(searchInput).toBeInTheDocument();

    const searchText = 'abuja';

    fireEvent.change(searchInput, { target: { value: searchText } });
    expect(searchInput).toHaveValue(searchText);
  });

  it('submits the form when the "Sign In" button is clicked', () => {
    const handleSearchMock = jest.fn();
    render(<Search handleSearch={handleSearchMock} />);
    const searchButton = screen.getByRole('button', { name: 'Search' });

    fireEvent.click(searchButton);

    expect(handleSearchMock).toHaveBeenCalledTimes(1);
  });
});
