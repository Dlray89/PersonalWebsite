import React from "react"
import { loadCSS } from "fg-loadcss"
import { makeStyles } from "@material-ui/core"
import { AppBar, Toolbar, Typography, Icon } from "@material-ui/core"

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
            <div className={classes.Icons}>
            <Icon color="inherit" className="fab fa-linkedin" />
            <Icon color="inherit" className="fab fa-github" />
            <Icon color="inherit" className="fab fa-facebook" />
            <Icon color="inherit" className="fab fa-medium" />
            </div>
        </Toolbar>
    </AppBar>
        </div>
    )
}
export default NavBar