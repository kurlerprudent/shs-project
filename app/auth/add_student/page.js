"use client"

import { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import * as XLSX from 'xlsx';
import { blue, grey } from '@mui/material/colors';
import SideBar from '@/Components/SideBar';

const Page = () => {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [region, setRegion] = useState('');
  const [school, setSchool] = useState('');

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(firstSheet);
      setStudents(jsonData);
    };
    reader.readAsArrayBuffer(file);
  };

  const handleSubmit = () => {
    const newStudent = { name, id, region, school };
    setStudents([...students, newStudent]);
    setName('');
    setId('');
    setRegion('');
    setSchool('');
  };

  return (
    <Box sx={{display:'flex',gap:5,mt:'6%',px:2}}>
      <SideBar/>
    <Container sx={{flex:{lg:4,xs:1},bgcolor:'#CED1D5',borderRadius:3,p:5}}>
      <Typography sx={{color:'#547587'}} textAlign='center' variant="h4" gutterBottom>
        Admin Site
      </Typography>
      <Box component="form" noValidate sx={{ mt: 1 }}>
        <TextField 
          margin="normal"
          fullWidth
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          
        />
        <TextField 
          margin="normal"
          fullWidth
          label="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <TextField 
          margin="normal"
          fullWidth
          label="Region"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        />
        <TextField 
          margin="normal"
          fullWidth
          label="School"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
        />
        <Box sx={{display:'flex' ,justifyContent:'center',flexDirection:{xs:'column',md:'row'},gap:{xs:0,md:5}, width:'50%'}}>
        <Button 
          type="button" 
          variant="contained" 
          color="primary" 
          sx={{ mt:{xs:1,md: 3}, mb: 1,width:{xs:310,md:300} }}
          onClick={handleSubmit}
        >
          Add Student
        </Button>

        <Button sx={{height:40,mt:{xs:1,md: 3},width:{xs:310,md:300}}}
        variant="contained"
        component="label"
      >
        Upload CSV or Excel
        <input
          type="file"
          hidden
          onChange={handleFileUpload}
        />
      </Button>
      </Box>
      
        </Box>
       
      <Typography variant="h6" gutterBottom sx={{ mt: 3,color:'#110000' }}>
        Students List
      </Typography>
      <ol style={{width:'100%',padding:'10px',backgroundColor:'#EFF3F5'}}>
        {students.map((student, index) => (
          <li key={index} style={{color:'#222',fontSize:'20px'}}>
            {student.name} - {student.id} - {student.region} - {student.school}
          </li>
        ))}
      </ol>
    </Container>
    </Box>
  );
};

export default Page;
