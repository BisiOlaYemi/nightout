import '@testing-library/jest-dom';

import { render, screen, fireEvent } from '@testing-library/react';

import ResetPasswordPage from '@/app/(Unauthenticated)/auth/reset-password/page';

describe('Forgot Password Page', () => {
  it('updates all input field when typed in', () => {
    render(<ResetPasswordPage />);
    const passwordInput = screen.getByPlaceholderText('New password');
    const confirmPasswordInput =
      screen.getByPlaceholderText('Confirm Password');

    expect(passwordInput).toBeInTheDocument();
    expect(confirmPasswordInput).toBeInTheDocument();

    const password = 'test@example.com';

    fireEvent.change(passwordInput, { target: { value: password } });
    expect(passwordInput).toHaveValue(password);

    fireEvent.change(confirmPasswordInput, { target: { value: password } });
    expect(confirmPasswordInput).toHaveValue(password);
  });

  it('submits the form when the "Set password" button is clicked ', () => {
    const handleResetPasswordMock = jest.fn();
    render(<ResetPasswordPage handleResetPassword={handleResetPasswordMock} />);
    const signInButton = screen.getByRole('button', {
      name: 'Set password',
    });

    fireEvent.click(signInButton);

    expect(handleResetPasswordMock).toHaveBeenCalledTimes(1);
  });
});
