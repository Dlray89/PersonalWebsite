import React from "react"
import { loadCSS } from "fg-loadcss"
import { makeStyles } from "@material-ui/core"
import { AppBar, CardActionArea, Toolbar, Typography, Icon } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    root:{
        flexGrow:1,
    },
    title:{
        flexGrow:1,
        [theme.breakpoints.down("sm")]: {
            fontSize:"0.6rem"
        }
        
    },
    Appbar:{
        background: "linear-gradient(to left, #333333, #dd1818);",
        margin:"4% 0 0 0"
    },
    links:{
        textDecoration:"none",
        color:"white",
        [theme.breakpoints.down("sm")]: {
            fontSize:"0.7rem"
        }
    },
    Icons:{
        display:"flex",
        justifyContent:"space-evenly",
        width:"20%"
    }
}))

function NavBar(){
    const classes = useStyles()

    React.useEffect(() => {
        loadCSS(
            'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
            document.querySelector('#font-awesome-css'),
        );
    }, [])
    return( 
        <div className={classes.root}>
    <AppBar className={classes.Appbar} position="static">
        <Toolbar>
            <Typography className={classes.title} variant="body1" component="h1">
               site design &copy; 2020 dapthedev, inc
            </Typography>
            <CardActionArea className={classes.Icons}>
            <Icon color="inherit" className="fab fa-linkedin"> <a href="https://www.linkedin.com/in/dapperdave1914/"></a> </Icon>
            <Icon color="inherit" className="fab fa-github"><a href=""></a></Icon>
            <Icon color="inherit" className="fab fa-facebook"><a href=""></a></Icon>
            <Icon color="inherit" className="fab fa-medium"><a href="https://medium.com/@dlrayjr89"></a></Icon>
            </CardActionArea>
        </Toolbar>
    </AppBar>
        </div>
    )
}
export default NavBar