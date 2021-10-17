import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


export default function PageHeader(props) {
    return (
        <React.Fragment>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="fixed" color="primary">
                    <Toolbar>
                        {/* <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton> */}
                        {/* Todo - Add placeholder */}
                        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                            Placeholder Logo
                        </Typography>
                        <Button color="warning" variant='contained'>Show Interest</Button>
                    </Toolbar>
                </AppBar>
            </Box></React.Fragment>
    );
}
