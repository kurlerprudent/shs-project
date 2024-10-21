"use client"
import React, { useState } from 'react';
import { useTable } from 'react-table';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField, Box } from '@mui/material';

const ViewStudents = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const data = React.useMemo(
        () => [
            { name: 'John Doe', id: '12345', region: 'Region A', school: 'School XYZ' },
            { name: 'Jane Smith', id: '67890', region: 'Region B', school: 'School ABC' },
            // Add more student data here
        ],
        []
    );

    // Filter data based on search query
    const filteredData = data.filter(student =>
        student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.id.includes(searchQuery)
    );

    const columns = React.useMemo(
        () => [
            { Header: 'Name', accessor: 'name' },
            { Header: 'ID', accessor: 'id' },
            { Header: 'Region', accessor: 'region' },
            { Header: 'School', accessor: 'school' },
            {
                Header: 'Actions',
                Cell: ({ row }) => (
                    <div>
                        <Button variant="contained" color="primary" onClick={() => handleEdit(row.original)}>Edit</Button>
                        <Button variant="contained" color="secondary" onClick={() => handleDelete(row.original.id)} style={{ marginLeft: '10px' }}>Delete</Button>
                    </div>
                ),
            },
        ],
        []
    );

    const handleEdit = (student) => {
        console.log('Edit student:', student);
        // Implement edit functionality
    };

    const handleDelete = (id) => {
        console.log('Delete student with ID:', id);
        // Implement delete functionality
    };

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data: filteredData });

    return (
        <div style={{ padding: '20px' }}>
            <h1>View Students</h1>
            <Box display="flex" justifyContent="flex-end" marginBottom="20px">
                <TextField
                    variant="outlined"
                    placeholder="Search by name or ID"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button variant="contained" color="primary" style={{ marginLeft: '10px' }}>Search</Button>
            </Box>
            <TableContainer component={Paper}>
                <Table {...getTableProps()}>
                    <TableHead>
                        {headerGroups.map(headerGroup => (
                            <TableRow {...headerGroup.getHeaderGroupProps()} style={{ backgroundColor: '#1976d2', color: 'white' }}>
                                {headerGroup.headers.map(column => (
                                    <TableCell {...column.getHeaderProps()} style={{ color: 'white' }}>{column.render('Header')}</TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableHead>
                    <TableBody {...getTableBodyProps()}>
                        {rows.map(row => {
                            prepareRow(row);
                            return (
                                <TableRow {...row.getRowProps()}>
                                    {row.cells.map(cell => (
                                        <TableCell {...cell.getCellProps()}>{cell.render('Cell')}</TableCell>
                                    ))}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>Add Student</Button>
        </div>
    );
};

export default ViewStudents;
