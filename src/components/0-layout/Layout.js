import React from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import PageHeader from './Header';
import { ThemeProvider } from '@emotion/react';
import theme from '../../configs/ThemeConfigs';
import { Divider, Toolbar } from '@mui/material';

export default function Layout({ component }) {
    return <ThemeProvider theme={theme}>
        
            <Container maxWidth="xl" fixed={false}>
            <PageHeader />
            <Divider />
            <Toolbar>
            <Paper elevation={5}
                className='content-container'
            >        {component}
                </Paper> </Toolbar>   </Container>
        
        </ThemeProvider>
}

