import '@testing-library/jest-dom';

import { render, screen, fireEvent } from '@testing-library/react';

import ForgotPasswordPage from '@/app/(Unauthenticated)/auth/forgot-password/page';

describe('Forgot Password Page', () => {
  it('renders and updates the email input field when typed in', () => {
    render(<ForgotPasswordPage />);
    const emailInput = screen.getByPlaceholderText('example123@gmail.com');

    expect(emailInput).toBeInTheDocument();

    const email = 'test@example.com';

    fireEvent.change(emailInput, { target: { value: email } });
    expect(emailInput).toHaveValue(email);
  });

  it('submits the form when the "Request reset link" button is clicked ', () => {
    const handleRequestResetLinkMock = jest.fn();
    render(
      <ForgotPasswordPage handleRequestResetLink={handleRequestResetLinkMock} />,
    );
    const signInButton = screen.getByRole('button', {
      name: 'Request reset link',
    });

    fireEvent.click(signInButton);

    expect(handleRequestResetLinkMock).toHaveBeenCalledTimes(1);
  });
});
