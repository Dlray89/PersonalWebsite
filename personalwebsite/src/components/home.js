import React from 'react';
import clsx from 'clsx';
import { AppBar, Toolbar, Typography, Drawer, List, Divider, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
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
import NPM from "../Icons/NPM.png"
import DOCKER from "../Icons/DOCKER.png"
import POSTGRES from "../Icons/POSTGRES.png"
import GIT from "../Icons/GIT.png"
import MATERIALUI from "../Icons/MATERIALUI.png"
import LESS from "../Icons/LESS.png"


//pic upload
import LOGO from "../images/NEWLOGO.png"
import RESUME from "../images/DavidRayJrResume.PNG"



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
        borderRadius: "10px",
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
    fullstack: {
        textAlign: "center",
        fontSize: "1rem",
        borderLeft: "solid 2px #4a6596",
        borderRight: "solid 2px #4a6596",
        width: "20%",
        margin: "0 auto"
    },
    skillContainer: {
        display: "flex",
        justifyContent: "space-evenly",
        alignContent: "center",
        width: "60%",
        margin: "0 auto"
    },
    skillsDivider: {
        background: "#4a6596",
        margin: " 0 20% 0 0"
    },
    FE: {
        display: "flex",
        flexDirection: "row",
        alignContent: "center",
        textAlign: "center"
    },
    BE:{
         display: "flex",
        flexDirection: "row",
        alignContent: "center",
        textAlign: "center"
    },
    ICONS: {
        width: "7%",
        margin: " 0 auto",

    },
    ICONSDIVIDER: {
        width: "30%",
        margin: "0 auto"
    },
    resumePic: {
        width:"80%"
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
                    <img className={classes.LOGO} src={LOGO} alt="Dap the dev logo" />
                    <Typography className={classes.introText}>
                        My name is David l Ray Jr and I am a software developer.
                        I create and develop beautiful and dynamic applications for users so they can enhance their day to day life. The applications I develop will help people reach for resources that are hard to get while providing a creative platform for users to express themselves online. Now you might ask what makes me different from other other developers  and that's an easy question to answer. I am BOLD with a curiosity like no other when it comes to life and looking for solutions to help the world or person reach their potential in life. I let my creativity take over and that's what leads my vision for success along with having a lot of zest to getting the job done.
                    </Typography>
                </div>
                <Divider className={classes.divider} />
                    <Typography style={{textAlign:"center"}}>Tech Stack</Typography>

                <div >
                    <div className={classes.FE}>
                        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", width: "70%", margin: "0 auto" }}>
                            <img className={classes.ICONS} src={HTML} alt="htmlicon" />
                            <Divider orientation="vertical" />
                            <img src={CSS} className={classes.ICONS} alt="CSS" />
                            <Divider orientation="vertical" />
                            <img className={classes.ICONS} src={LESS} alt="lessicon" />
                             <Divider orientation="vertical" />
                            <img src={JAVASCRIPT} className={classes.ICONS} alt="javascript icon" />
                            <Divider orientation="vertical" />
                            <img src={REDUX} className={classes.ICONS} alt="redux icon" />
                            <Divider orientation="vertical" />
                            <img src={REACT} className={classes.ICONS} alt="react icon" />
                
                        </div>
                    </div>
                      <div className={classes.BE}>
                      <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", width: "70%", margin: "0 auto"}}>
                      <img src={NODE} className={classes.ICONS} alt="node icon" />
                            <Divider orientation="vertical" />
                            <img className={classes.ICONS} src={NPM} alt="NPM icon" />
                            <Divider orientation="vertical" />
                            <img className={classes.ICONS} src={POSTGRES} alt="postgres icon" />
                            <Divider orientation="vertical" />
                            <img className={classes.ICONS} src={DOCKER} alt="docker icon" />
                            <Divider orientation="vertical" />
                            <img className={classes.ICONS} src={GIT} alt="git icon" />
                            <Divider orientation="vertical" />
                            <img className={classes.ICONS} src={MATERIALUI} alt="material-ui icon" />
                        </div>
                        </div>

                        <Divider className={classes.divider} />
  <Typography style={{textAlign:"center"}}>Resume and Certifications</Typography>
                        <div style={{ display:"flex", justifyContent:"space-between", alignContent:"center", width:"80%", margin:"0 auto"}}>
                      
                            <div style={{ margin:"0 auto", textAlign:"center"}}>
                                <img className={classes.resumePic} src={RESUME} alt="David Ray Jr Resume" />
                            </div>
                            <div style={{textAlign:"center", margin:"0 auto"}}>
                              
                                <a href="https://www.sololearn.com/Certificate/1014-15919711/pdf/">HTML Fundementals</a>
                                <Divider />
                                <a href="https://www.sololearn.com/Certificate/1023-15919711/pdf/">CSS Fundementals</a>
                                <Divider />
                                <a href="https://www.sololearn.com/Certificate/1024-15919711/pdf/">Javascript Fundementals</a>
                                <Divider />
                                <a href="https://www.sololearn.com/Certificate/1060-15919711/pdf/">SQL Fundementals</a>
                                <Divider />
                                <a href="https://www.udemy.com/certificate/UC-34PB162X/?utm_campaign=email&utm_source=sendgrid.com&utm_medium=email"> UDEMY Ethical Hacking Course</a>
                                <Divider />
                                <a href="https://www.udemy.com/certificate/UC-5Y7T5P6J/?utm_campaign=email&utm_source=sendgrid.com&utm_medium=email">UDEMY Beginners guide to Cyber Security</a>

                            </div>                         
                        </div>

                </div>
            </div>
        </div>

    );

}