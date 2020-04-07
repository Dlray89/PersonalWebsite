import React from "react"
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/core"
import { AppBar, Toolbar, Typography, Buttongit add --all
 } from "@material-ui/core"

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
    }
}))

function NavBar(){
    const classes = useStyles()
    return( 
        <div className={classes.root}>
    <AppBar className={classes.Appbar} position="static">
        <Toolbar>
            <Typography className={classes.title} variant="body1" component="h1">
               copyright:2020 by David Ray Jr
            </Typography>
            <Button color="inherit" className={classes.links} href="https://www.linkedin.com/in/dapperdave1914/">LinkIn</Button>
            <Button color="inherit"><Link to="/projects" className={classes.links}>Github</Link></Button>
            <Button color="inherit"><Link to="/blogs" className={classes.links}>Facebook</Link></Button>
            <Button color="inherit"><Link to="/contact" className={classes.links}>Medium</Link></Button>
        </Toolbar>
    </AppBar>
        </div>
    )
}
export default NavBar