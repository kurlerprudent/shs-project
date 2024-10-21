"use client"

import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import { Bar, Pie, Line, Radar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    LineElement,
    PointElement,
    Filler,
    RadarController,
    RadialLinearScale
} from 'chart.js';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    LineElement,
    PointElement,
    Filler,
    RadarController,
    RadialLinearScale
);

const Analytics = () => {
 
    const visitedData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Visited',
                data: [150, 200, 250, 300, 350, 400],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const registeredData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Students Registered',
                data: [50, 70, 90, 130, 160, 200],
                backgroundColor: 'rgba(153, 102, 255, 0.6)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1,
            },
        ],
    };

    const placedData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Students Placed',
                data: [30, 40, 60, 80, 100, 120],
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
        ],
    };

    const pieData = {
        labels: ['Visited', 'Registered', 'Placed'],
        datasets: [
            {
                data: [1500, 600, 400],
                backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
            },
        ],
    };

    const mixedData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Visited',
                data: [150, 200, 250, 300, 350, 400],
                type: 'bar',
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
            {
                label: 'Registered',
                data: [50, 70, 90, 130, 160, 200],
                type: 'line',
                fill: false,
                borderColor: 'rgba(153, 102, 255, 1)',
                tension: 0.1,
            },
        ],
    };

    const radarData = {
        labels: ['Math', 'Science', 'English', 'History', 'Art'],
        datasets: [
            {
                label: 'Student A',
                data: [80, 90, 70, 85, 95],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
            {
                label: 'Student B',
                data: [70, 60, 80, 75, 85],
                backgroundColor: 'rgba(153, 102, 255, 0.6)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div style={{ padding: '20px' }}>
           

            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={3} style={{ padding: '20px', height: '300px' }}>
                        <Typography variant="h6">Visited Over Time</Typography>
                        <Bar data={visitedData} options={options} />
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={3} style={{ padding: '20px', height: '300px' }}>
                        <Typography variant="h6">Students Registered Over Time</Typography>
                        <Line data={registeredData} options={options} />
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={3} style={{ padding: '20px', height: '300px' }}>
                        <Typography variant="h6">Students Placed Over Time</Typography>
                        <Bar data={placedData} options={options} />
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={3} style={{ padding: '20px', height: '300px' }}>
                        <Typography variant="h6">Overall Metrics</Typography>
                        <Pie data={pieData} />
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={3} style={{ padding: '20px', height: '300px' }}>
                        <Typography variant="h6">Mixed Chart (Visited & Registered)</Typography>
                        <Bar data={mixedData} options={options} />
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={3} style={{ padding: '20px', height: '300px' }}>
                        <Typography variant="h6">Student Performance Radar</Typography>
                        <Radar data={radarData} options={options} />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default Analytics;
