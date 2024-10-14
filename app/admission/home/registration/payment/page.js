"use client"

import React, { useState } from 'react';
import { Container, TextField, Button, Typography, MenuItem, Box, Alert, Tabs, Tab } from '@mui/material';
import { blue } from '@mui/material/colors';

const operators = [
  { value: 'MTN', label: 'MTN' },
  { value: 'Telecel', label: 'Telecel' },
  { value: 'AirtelTigo', label: 'AirtelTigo' }
];

const Page = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [operator, setOperator] = useState('');
  const [amount, setAmount] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [error, setError] = useState('');

  const  handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tabIndex === 0 && (!phoneNumber || !operator || !amount)) {
      setError('All fields are required for Mobile Money');
      return;
    } else if (tabIndex === 1 && (!accountNumber || !amount)) {
      setError('All fields are required for Bank Payment');
      return;
    } else if (tabIndex === 2 && (!cardNumber || !expiryDate || !cvv || !amount)) {
      setError('All fields are required for Credit Card Payment');
      return;
    }
    setError('');
    alert(`Payment of GHS ${amount} initiated`);
  };

  const instructions = [
  
    <Box key={0}>
      <Typography variant="body2" color="textSecondary">
        1. Enter your mobile number.<br />
        2. Select your network operator.<br />
        3. Enter the amount you want to pay.<br />
        4. Click Confirm Payment.
      </Typography>
    </Box>,
  
    <Box key={1}>
      <Typography variant="body2" color="textSecondary">
        1. Enter your bank account number.<br />
        2. Enter the amount you want to pay.<br />
        3. Click Confirm Payment. (Additional steps might be required by your bank)
      </Typography>
    </Box>,
   
    <Box key={2}>
      <Typography variant="body2" color="textSecondary">
        1. Enter your credit card number.<br />
        2. Enter the expiry date of your credit card.<br />
        3. Enter the CVV code on the back of your card.<br />
        4. Enter the amount you want to pay.<br />
        5. Click Confirm Payment. (Your bank may ask for additional verification)
      </Typography>
    </Box>,
  ];

  return (
    <Container sx={{width:{xs:'97%'}, mt: { xs: '40%', md: '10%' }, bgcolor: '#FEFEFE', p: 2 ,borderRadius:3}}>
      <Box mt={4}>
      
        <Typography sx={{textAlign:'center',fontSize:24,color:blue[700]}} variant="h4" gutterBottom>
          Payment Methods
        </Typography>
        <Tabs value={tabIndex} onChange={handleTabChange}>
          <Tab label="Mobile Money" />
          <Tab label="Bank" />
          <Tab label="Credit Card" />
        </Tabs>
        <form onSubmit={handleSubmit}>
          {tabIndex === 0 && (
            <Box>
              <TextField
                label="Phone Number"
                variant="outlined"
                fullWidth
                margin="normal"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <TextField   
                select
                label="Operator"
                variant="outlined"
                fullWidth
                margin="normal"
                value={operator}
                onChange={(e) => setOperator(e.target.value)}
              >
                {operators.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
          )}
          {tabIndex === 1 && (
            <Box>
              <TextField
                label="Account Number"
                variant="outlined"
                fullWidth
                margin="normal"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
              />
            </Box>
          )}
          {tabIndex === 2 && (
            <Box>
              <TextField
                label="Card Number"
                variant="outlined"
                fullWidth
                margin="normal"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
              <TextField
                label="Expiry Date"
                variant="outlined"
                fullWidth
                margin="normal"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
              />
              <TextField
                label="CVV"
                variant="outlined"
                fullWidth
                margin="normal"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
              />
            </Box>
          )}
          <TextField
            label="Amount (GHS)"
            variant="outlined"
            fullWidth
            margin="normal"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}
          <Button disableRipple type="submit" variant="contained" color="primary" fullWidth>
            Confirm Payment
          </Button>
        </form>
        <Box mt={4}>
          {instructions[tabIndex]}
        </Box>
      </Box>
    </Container>
  );
};

export default Page;