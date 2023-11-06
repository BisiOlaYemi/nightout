import '@testing-library/jest-dom';

import { render, screen, fireEvent } from '@testing-library/react';

import SignUpPage from '@/app/(Unauthenticated)/auth/signup/page';

describe('SignUp', () => {
  it('renders all input fields and updates when typed in respectively', () => {
    render(<SignUpPage />);
    const fullnameInput = screen.getByPlaceholderText('enter your name');
    const emailInput = screen.getByPlaceholderText('example123@gmail.com');
    const passwordInput = screen.getByPlaceholderText('enter password');
    const confirmPasswordInput =
      screen.getByPlaceholderText('re-enter password');

    expect(fullnameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(confirmPasswordInput).toBeInTheDocument();

    const fullname = 'john doe';
    const email = 'test@example.com';
    const password = 'password123';

    fireEvent.change(fullnameInput, { target: { value: fullname } });
    expect(fullnameInput).toHaveValue(fullname);

    fireEvent.change(emailInput, { target: { value: email } });
    expect(emailInput).toHaveValue(email);

    fireEvent.change(passwordInput, { target: { value: password } });
    expect(passwordInput).toHaveValue(password);

    fireEvent.change(confirmPasswordInput, { target: { value: password } });
    expect(confirmPasswordInput).toHaveValue(password);
  });

  it('submits the form when the "Sign In" button is clicked', () => {
    const handleSignUpMock = jest.fn();
    render(<SignUpPage handleSignUp={handleSignUpMock} />);
    const signUpButton = screen.getByRole('button', { name: 'Sign Up' });
    fireEvent.click(signUpButton);

    expect(handleSignUpMock).toHaveBeenCalledTimes(1);
  });
});
