"use client";

import * as React from 'react';
import { AppProvider } from '@toolpad/core/AppProvider';
import { SignInPage } from '@toolpad/core/SignInPage';
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Alert } from '@mui/material';

const providers = [{ id: 'credentials', name: 'Username and Password' }];

export default function LoginPage() {
  const theme = useTheme();
  const router = useRouter();
  const [error, setError] = useState('');

  const signIn = async (provider, formData) => {
    // You can extract the username and password if needed
    const username = formData.get('username');
    const password = formData.get('password');

    // Directly navigate to the dashboard without validation
    try {
      // Simulate a delay if needed
      await new Promise((resolve) => setTimeout(resolve, 300));
      alert(`Signing in with "${provider.name}" and credentials: ${username}, ${password}`);
      router.push('/dashboard'); // Redirect to the dashboard on sign-in
    } catch (err) {
      setError('An error occurred during sign-in'); // Handle any potential errors
    }
  };

  return (
    <AppProvider theme={theme}>
      {error && <Alert severity="error">{error}</Alert>}
      <SignInPage 
        signIn={signIn} 
        providers={providers} 
        fields={[ 
          { name: 'username', label: 'Username', type: 'text' },
          { name: 'password', label: 'Password', type: 'password' }
        ]}
      />
    </AppProvider>
  );
}
