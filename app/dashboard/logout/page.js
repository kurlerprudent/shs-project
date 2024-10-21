"use client"

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Typography, Button, Card, CardContent, CardActions, Grid } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    const logout = () => {
      // Clear user session or token
      // localStorage.removeItem('userToken'); // Example
      // Redirect to home or login page after logout
      router.push('/');
    };

    logout();
  }, [router]);

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}
    >
      <Grid item xs={12} sm={8} md={4}>
        <Card elevation={3}>
          <CardContent>
            <Box display="flex" justifyContent="center" mb={2}>
              <LogoutIcon style={{ fontSize: 60, color: '#1976d2' }} />
            </Box>
            <Typography variant="h5" align="center" gutterBottom>
              Logout
            </Typography>
            <Typography variant="body1" align="center">
              Are you sure you want to logout?
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" width="100%">
              <Button
                variant="contained"
                color="primary"
                onClick={() => router.push('/')}
                sx={{ width: '100%' }}
              >
                Yes, Logout
              </Button>
            </Box>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Page;
