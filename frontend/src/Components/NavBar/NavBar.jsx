import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';


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
        <div>
            <AppBar style={{alignItems:"center" , backgroundColor:'#203353'}} >
                <Toolbar>
                        <Button  href='/' id="forbtnH" style={{textAlign:"center" , borderRadius:'20px' , marginLeft:'60px' , fontSize:'19px'}}color="inherit">Home&nbsp;</Button>
                        <Button href="#About" id="forbtnH" style={{textAlign:"center" , borderRadius:'20px' , marginLeft:'20px' , fontSize:'19px'}} color="inherit">About Me&nbsp;</Button>
                        <Button href="#MySkills" id="forbtnH" style={{textAlign:"center" , borderRadius:'20px' , marginLeft:'20px' , fontSize:'19px'}} color="inherit">Skills&nbsp;</Button>
                        <Button href="#MyProjects" id="forbtnH" style={{textAlign:"center" , borderRadius:'20px' , marginLeft:'20px' , fontSize:'19px'}} color="inherit">Projects&nbsp;</Button>
                        <Button  href="#MyContacts" id="forbtnH"  style={{textAlign:"center" , borderRadius:'20px' , marginLeft:'20px' , fontSize:'19px'}}color="inherit">Contact Me&nbsp;</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}