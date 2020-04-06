import React from "react"
import { Card, CardHeader, makeStyles } from "@material-ui/core"
import Navbar from "../compTools/navbar"
import Bottomnav from "../compTools/bottomNav"

const useStyles = makeStyles((theme) => ({
    root:{
        width:"30%",
        margin:"17% auto",
        textAlign:"center",
        [theme.breakpoints.down("sm")]: {
            margin:" 36% auto",
            width:"80%"

        }
    },
    mainContainer:{
        background:"linear-gradient(to bottom, #333333, #dd1818)",
        height:"105vh",
        [theme.breakpoints.down("sm")]: {
            height: "90vh",
        }
    }
}))


function Blogs(){
    const classes = useStyles()
    return(
        <div className={classes.mainContainer}>
        <Navbar />
            <Card className={classes.root}>
                <CardHeader title="Blogs coming soon" subheader="Checkout my blogs on www.Medium.com/Dlray89" />
           
            </Card>
            <Bottomnav />
        </div>
    )
}
export default Blogs