import React from "react"
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/core"
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core"

const useStyles = makeStyles({
    root:{
        flexGrow:1,
    },
    title:{
        flexGrow:1
    },
    Appbar:{
        background: "linear-gradient(to left, #333333, #dd1818);"
    },
    links:{
        textDecoration: "none",
        color:"white"
    },
})

function NavBar(){
    const classes = useStyles()
    return( 
        <div className={classes.root}>
    <AppBar className={classes.Appbar} position="static">
        <Toolbar>
            <Typography className={classes.title} variant="h5" component="h1">
                David L. Ray Jr.
            </Typography>
            <Button color="inherit"><Link to="/home" className={classes.links} >Home</Link></Button>
            <Button color="inherit"><Link to="/projects" className={classes.links}>Projects</Link></Button>
            <Button color="inherit"><Link to="/blogs" className={classes.links}>Blogs</Link></Button>
            <Button color="inherit"><Link to="/contact" className={classes.links}>Contact</Link></Button>
        </Toolbar>
    </AppBar>
        </div>
    )
}
export default NavBar