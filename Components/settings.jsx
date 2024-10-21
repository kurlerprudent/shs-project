"use client"

import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Paper, Grid, Avatar } from '@mui/material';

const Settings = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [profilePicture, setProfilePicture] = useState(null);
    const [preview, setPreview] = useState('');

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfilePicture(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = () => {
        // Handle save logic here (e.g., display a message)
        console.log('Settings saved:', { username, email, password, profilePicture });
    };

    const handleCancel = () => {
        // Reset the form fields
        setUsername('');
        setEmail('');
        setPassword('');
        setProfilePicture(null);
        setPreview('');
    };

    return (
        <Box sx={{ width:{md:'80%',xs:'100%'}, margin: '0 auto', padding: '20px' }}>
          
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Paper elevation={3} sx={{ padding: '20px' }}>
                        <Typography variant="h6">Profile Information</Typography>
                        <Avatar
                            alt="Profile Picture"
                            src={preview}
                            sx={{ width: 100, height: 100, marginBottom: 2 }}
                        />
                        <input
                            accept="image/*"
                            style={{ display: 'none' }}
                            id="profile-picture-upload"
                            type="file"
                            onChange={handleFileChange}
                        />
                        <label htmlFor="profile-picture-upload">
                            <Button variant="contained" component="span" sx={{ marginBottom: 2 }}>
                                Upload Profile Picture
                            </Button>
                        </label>
                        <TextField
                            label="Username"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            label="Password"
                            type="password"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Box sx={{ marginTop: '20px' }}>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleSave}
                                sx={{ marginRight: '10px' }}
                            >
                                Save Changes
                            </Button>
                            <Button
                                variant="outlined"
                                color="secondary"
                                onClick={handleCancel}
                            >
                                Cancel
                            </Button>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Settings;
