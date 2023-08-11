import React from "react";
import {Routes, Route, Link} from "react-router-dom";

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import Persons from "./Components/Person/Person.component";

function App() {
  return (
      <Box sx={{ flexGrow: 1 }}>
          <Box sx={{ flexGrow: 1 }}>
              <AppBar position="static">
                  <Toolbar>
                      <IconButton
                          size="large"
                          edge="start"
                          color="inherit"
                          aria-label="menu"
                          sx={{ mr: 2 }}
                      >
                          <MenuIcon />
                      </IconButton>
                      <Button to="/persons" component={Link} vaiant="text">
                          Family Memebers
                      </Button>
                      <Button color="inherit">Login</Button>
                  </Toolbar>
              </AppBar>
          </Box>
          <Container maxWidth="sm">
              <Routes>
                  <Route path="/" element={<Persons />} />
                  <Route path="/persons" element={<Persons />} />
                  <Route path="/persons/:id" element={<Persons />} />
              </Routes>
          </Container>
      </Box>
  );
}

export default App;