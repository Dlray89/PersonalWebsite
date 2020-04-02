import React from "react"
import { Card, CardHeader, makeStyles } from "@material-ui/core"
import Navbar from "../compTools/navbar"

const useStyles = makeStyles({
    root:{
        width:"30%",
        margin:"17% auto",
        textAlign:"center"
    },
    mainContainer:{
        background:"linear-gradient(to bottom, #333333, #dd1818)",
        height:"100vh"
    }
})


function Blogs(){
    const classes = useStyles()
    return(
        <div className={classes.mainContainer}>
        <Navbar />
            <Card className={classes.root}>
                <CardHeader title="Blogs coming soon" subheader="Checkout my blogs on www.Medium.com" />
           
            </Card>
        </div>
    )
}
export default Blogs