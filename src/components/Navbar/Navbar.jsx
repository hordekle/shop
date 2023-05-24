import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

import logo from '../../assets/bahu-logo.png';

const Navbar = () => {
  return (
    <div>
        <AppBar position='fixed' className='appBar' color='inherit'>
            <Toolbar variant='h6' className='title' color='inherit'>
                <Typography>
                    <img src={logo} alt='Bahu' height="25px" className='image' />
                    Bahu
                </Typography>
                <div className='grow'/>
                <div className='button'>
                    <IconButton aria-label="Ukázat košík" color='inherit'>
                        <Badge badgeContent={2} color='secondary' >
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar