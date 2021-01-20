import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';


import './navbar.css'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));



export default function NavBar() {
    const classes = useStyles();

    return (
        <div id="nav" >
            <AppBar position="static">
                <Toolbar>

                  

                    <div id="forNav">
                        <Button  href='/' id="forbtnH" color="inherit">Home&nbsp;</Button>
                        <Button href="#About" id="forbtnH" color="inherit">About Me&nbsp;</Button>
                        <Button href="#MySkills" id="forbtnH" color="inherit">Skills&nbsp;</Button>
                        <Button href="#MyProjects" id="forbtnH" color="inherit">Projects&nbsp;</Button>
                        <Button  href="#MyContacts" id="forbtnH" color="inherit">Contact Me&nbsp;</Button>

                    </div>
                   
                </Toolbar>
            </AppBar>
        </div>
    );
}