import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '@/theme';

// Styled components for header and button
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
}));



const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.error.main,
  color: theme.palette.common.white,
  '&:hover': {
    backgroundColor: theme.palette.grey[700],
  },
}));

const data = [
  {
    from: 'John Doe',
    email: 'johndoe@gmail.com',
    message: 'Registration for the upcoming academic year is now open. Please submit your applications by the end of the month.',
  },
  {
    from: 'Jane Smith',
    email: 'janesmith@gmail.com',
    message: 'Placement opportunities for graduates are available. Check the career services office for more details.',
  },
];

const MessageTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow sx={{bgcolor:theme.palette.primary.main}}>
            <StyledTableCell>From</StyledTableCell>
            <StyledTableCell>Contact Email</StyledTableCell>
            <StyledTableCell>Message</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.from}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.message}</TableCell>
              <TableCell>
                <StyledButton variant="contained">
                  Edit
                </StyledButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MessageTable;
