import '@testing-library/jest-dom';

import { render, fireEvent, screen } from '@testing-library/react';

import { useRouter } from 'next/navigation';

import Navbar from '@/components/Layout/navbar';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('MyComponent', () => {
  it('clicking on the hamburger menu toggles the sidebar', () => {
    render(<Navbar />);
    const hamburgerButton = screen.getByRole('Menu');
    fireEvent.click(hamburgerButton);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    fireEvent.click(hamburgerButton);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('should navigate to "/auth/signin" when the button is clicked', () => {
    const pushMock = jest.fn();
    useRouter.mockReturnValue({ push: pushMock });

    render(<Navbar />);
    const button = screen.getByRole('button', { name: 'Login' });
    fireEvent.click(button);

    expect(pushMock).toHaveBeenCalledWith('/auth/signin');
  });

  it('should navigate to "/auth/signup" when the button is clicked', () => {
    const pushMock = jest.fn();
    useRouter.mockReturnValue({ push: pushMock });

    render(<Navbar />);
    const button = screen.getByRole('button', { name: 'Sign up' });
    fireEvent.click(button);

    expect(pushMock).toHaveBeenCalledWith('/auth/signup');
  });
});
