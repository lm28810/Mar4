import { AppBar, CssBaseline, Toolbar,Typography, Container } from '@mui/material'
import React from 'react'
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
      <div>
          <CssBaseline />
          <AppBar>
              <Toolbar>
                  <SensorOccupiedIcon />
                  <Typography variant='h5'>LifeBox</Typography>
                  <div>
                      <ul>
                          <li><a href="http://"></a></li>
                      </ul>
                  </div>
                  
              </Toolbar>
          </AppBar>
        
    </div>
  )
}

export default NavBar