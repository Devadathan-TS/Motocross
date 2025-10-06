import { useState } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function App() {
  const [userInput, setUserInput] = useState({
    name: "",
    engineCC: "",
    regNumber: "",
    email: "",
    phone: "",
  });

  const alertbtn = () => {
    alert(`
      Full Name: ${userInput.name}
      Engine Displacement: ${userInput.engineCC}
      Registration Number: ${userInput.regNumber}
      Email: ${userInput.email}
      Phone Number: ${userInput.phone}
    `);
  };

  const clearbtn = () => {
    setUserInput({
      name: "",
      engineCC: "",
      regNumber: "",
      email: "",
      phone: ""
    });
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          backgroundColor: "#e0e0e0",
          fontFamily: "Arial, sans-serif"
        }}
      >
        <Paper
          elevation={6}
          sx={{
            p: 4,
            width: 600,
            backgroundColor: "white",
            borderRadius: 3,
            boxShadow: "0px 6px 20px rgba(0,0,0,0.15)"
          }}
        >
          <h1 style={{
            textAlign: "center",
            color: '#9d50367d',
            fontFamily: "Arial, sans-serif",
            fontWeight: 600,
            marginBottom: "20px"
          }}>
            Motocross_Event
          </h1>

          <TextField
            value={userInput.name}
            onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
            fullWidth
            required
            label="Enter Full Name"
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Choose Engine Displacement</InputLabel>
            <Select
              value={userInput.engineCC}
              onChange={(e) => setUserInput({ ...userInput, engineCC: e.target.value })}
              required
            >
              <MenuItem value="150cc">150cc</MenuItem>
              <MenuItem value="200cc">200cc</MenuItem>
              <MenuItem value="350cc">350cc</MenuItem>
              <MenuItem value="500cc">500cc</MenuItem>
              <MenuItem value="650cc">650cc</MenuItem>
            </Select>
          </FormControl>

          <TextField
            value={userInput.regNumber}
            onChange={(e) => setUserInput({ ...userInput, regNumber: e.target.value })}
            fullWidth
            required
            label="Enter Bike Registration Number"
            margin="normal"
          />

          <TextField
            value={userInput.email}
            onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}
            fullWidth
            required
            label="Enter Email"
            type="email"
            margin="normal"
          />

          <TextField
            value={userInput.phone}
            onChange={(e) => setUserInput({ ...userInput, phone: e.target.value })}
            fullWidth
            required
            label="Enter Phone Number"
            margin="normal"
          />

          <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-end" }}>
            <Stack direction="row" spacing={3}>
              <Button onClick={alertbtn} variant="contained" color="primary">
                Submit
              </Button>
              <Button onClick={clearbtn} variant="contained" color="warning">
                Clear
              </Button>
            </Stack>
          </Box>
        </Paper>
      </Box>
    </>
  );
}

export default App;





