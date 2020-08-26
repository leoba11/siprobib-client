import React from 'react'
import { NavLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    buttonText: {
        color: 'white',
    }
}));


const Navbar = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar color="secondary" position="static">
                <Toolbar>                    
                    <Typography variant="h6" className={classes.title}>
                        SIPROBIB
                    </Typography>
                    <NavLink className={classes.buttonText} to='/'>
                        <Button color="inherit">Inicio</Button>
                    </NavLink>
                    <NavLink className={classes.buttonText} to='/nosotros'>
                        <Button color="inherit">Nosotros</Button>
                    </NavLink>
                    <NavLink className={classes.buttonText} to='/contact'>
                        <Button color="inherit">Contáctenos</Button>
                    </NavLink>
                </Toolbar>
            </AppBar>
        </div>

    )
}

export default Navbar
