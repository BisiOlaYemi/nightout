import '@testing-library/jest-dom';

import { render, screen, fireEvent } from '@testing-library/react';

import SignInPage from '@/app/(Unauthenticated)/auth/signin/page';

describe('SignIn', () => {
  it('updates the email input field when typed in', () => {
    render(<SignInPage />);
    const emailInput = screen.getByPlaceholderText('example123@gmail.com');
    const passwordInput = screen.getByPlaceholderText('enter password');
    const rememberMeCheckbox = screen.getByLabelText('Remember me');

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();

    const email = 'test@example.com';
    const password = 'password123';

    fireEvent.change(emailInput, { target: { value: email } });
    expect(emailInput).toHaveValue(email);

    fireEvent.change(passwordInput, { target: { value: password } });
    expect(passwordInput).toHaveValue(password);

    expect(rememberMeCheckbox.checked).toBe(false);
    fireEvent.click(rememberMeCheckbox);
    expect(rememberMeCheckbox.checked).toBe(true);
  });

  it('submits the form when the "Sign In" button is clicked', () => {
    const handleSignInMock = jest.fn();
    render(<SignInPage handleSignIn={handleSignInMock} />);
    const signInButton = screen.getByRole('button', { name: 'Sign In' });

    fireEvent.click(signInButton);

    expect(handleSignInMock).toHaveBeenCalledTimes(1);
  });
});
