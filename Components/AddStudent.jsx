"use client";

import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Grid,
  Input,
  Alert,
} from '@mui/material';

const AddStudent = () => {
  const [studentData, setStudentData] = useState({
    name: '',
    id: '',
    region: '',
    school: '',
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Submitted Data:', studentData);
    
    // Show success message
    setSuccessMessage('Success! Student added.');

    // Clear the success message after 5 seconds
    setTimeout(() => {
      setSuccessMessage('');
    }, 5000);

    // Optionally, reset the form
    setStudentData({
      name: '',
      id: '',
      region: '',
      school: '',
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    // Handle file upload logic here
    console.log('Uploaded File:', file);
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Add Student
      </Typography>
      <Paper elevation={3} sx={{ padding: 3 }}>
        {successMessage && (
          <Alert severity="success" sx={{ mb: 2 }}>
            {successMessage}
          </Alert>
        )}
        <form onSubmit={handleSubmit} style={{ width: '100%', minHeight: '60vh' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                name="name"
                value={studentData.name}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="ID"
                variant="outlined"
                fullWidth
                name="id"
                value={studentData.id}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Region"
                variant="outlined"
                fullWidth
                name="region"
                value={studentData.region}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="School"
                variant="outlined"
                fullWidth
                name="school"
                value={studentData.school}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} mt={3}>
              <Typography variant="h6" gutterBottom>
                Upload CSV/Excel File
              </Typography>
              <Input
                type="file"
                inputProps={{ accept: '.csv, .xls, .xlsx' }}
                onChange={handleFileChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" type="submit">
                Add Student
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default AddStudent;
