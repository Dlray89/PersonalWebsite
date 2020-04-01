import React from "react"
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
    }
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
            <Button color="inherit">Home</Button>
            <Button color="inherit">Projects</Button>
            <Button color="inherit">Blogs</Button>
            <Button color="inherit">Contact</Button>
        </Toolbar>
    </AppBar>
        </div>
    )
}
export default NavBar