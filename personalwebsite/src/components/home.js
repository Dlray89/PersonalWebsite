import React from 'react';
import clsx from 'clsx';
import { AppBar, Toolbar, Typography, Drawer, Button, List, Divider, ListItem, ListItemIcon, ListItemText, makeStyles, Icon } from '@material-ui/core';
import "./home.css"
//icons
import HomeIcon from '@material-ui/icons/Home';
import CodeIcon from '@material-ui/icons/Code';
import MenuIcon from '@material-ui/icons/Menu';
import HTML from "../Icons/HTML.png";
import CSS from "../Icons/CSS.png";
import JAVASCRIPT from "../Icons/JAVASCRIPT.png";
import REDUX from "../Icons/REDUX.png"
import REACT from "../Icons/REACT.png"
import NODE from "../Icons/NODE.png"


//pic upload
import LOGO from "../images/NEWLOGO.png"
import { textAlign } from '@material-ui/system';



const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    navTitle: {
        fontSize: "2rem",
        textAlign: "center",
        margin: "0 auto",

    },
    Container: {
        margin: "3% 0"
    },
    LOGO: {
        width: "20%",
        border: "solid 2px #4a6595",
        borderRadius: "100%",

    },
    intro: {
        display: "flex",
        justifyContent: "space-evenly",
        alignContent: "center"
    },
    introText: {
        border: "solid 2px #4a6595",
        width: "50%",
        padding: "3%",
        background: "#79a5f2",
        color: "white",
        textAlign: "center",
        borderRadius:"10px",
        '&:hover': {
            background: "#4a6595",
            color: "white",
            border: "solid 2px #79a5f2"

        }

    },
    divider: {
        background: "#4a6595",
        width: "90%",
        margin: " 2% auto",
        
    },
    fullstack:{
        textAlign:"center",
        fontSize:"1rem",
        borderLeft:"solid 2px #4a6596",
        borderRight:"solid 2px #4a6596",
        width:"20%",
        margin:"0 auto"
    },
    skillContainer:{
        display:"flex",
        justifyContent: "space-evenly",
        alignContent:"center",
        width:"60%",
        margin:"0 auto"
    },
    skillsDivider:{
        background:"#4a6596",
        margin:" 0 20% 0 0"
    },
    FE:{
        display:"flex",
        flexDirection:"row",
        alignContent:"center",
        textAlign:"center"
    },
    ICONS: {
        width:"5%",
        margin:" 0 auto",
    
    },
    ICONSDIVIDER:{
        width:"30%",
        margin:"0 auto"
    }


});

export default function TemporaryDrawer() {

    
    const classes = useStyles();
    const [state, setState] = React.useState({ left: false });

  

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Home', 'Projects'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <HomeIcon /> : <CodeIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />

        </div>
    );

    return (
        <div>
            {['left'].map((anchor) => (

                <AppBar position="static" key={anchor}>
                    <Toolbar >
                        <MenuIcon onClick={toggleDrawer(anchor, true)} />
                        <Typography className={classes.navTitle} component="h2">David Ray Jr</Typography>
                        <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                            {list(anchor)}
                        </Drawer>
                    </Toolbar>
                </AppBar>

            ))}
            <div className={classes.Container}>
               <Typography className={classes.fullstack}>FULL STACK WEB DEVELOPER</Typography> 

                <Divider className={classes.divider} />


                <div className={classes.intro}>
                    <img className={classes.LOGO} src={LOGO} />
                    <Typography className={classes.introText}>
                        My name is David l Ray Jr and I am a software developer.
                        I create and develop beautiful and dynamic applications for users so they can enhance their day to day life. The applications I develop will help people reach for resources that are hard to get while providing a creative platform for users to express themselves online. Now you might ask what makes me different from other other developers  and that's an easy question to answer. I am BOLD with a curiosity like no other when it comes to life and looking for solutions to help the world or person reach their potential in life. I let my creativity take over and that's what leads my vision for success along with having a lot of zest to getting the job done.
                    </Typography>
                </div>
                <Divider className={classes.divider} />


                <div >
                   
                    <Typography>FRONT-END SKILLS</Typography>
                        <div className={classes.FE}>
                        
                        <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"space-between", border:"solid 2px red", width:"70%", margin:"0 auto"}}>
                     <img className={classes.ICONS} src={HTML}  />
                        <img src={CSS} className={classes.ICONS} />
                        
                        <img src={JAVASCRIPT} className={classes.ICONS} /> 
                        <img src={REDUX} className={classes.ICONS} /> 
                        <img src={REACT} className={classes.ICONS} /> 
                        <img src={NODE} className={classes.ICONS} />

                        </div>
               
                    </div>


                    
                </div>
            </div>
        </div>

    );
    
}