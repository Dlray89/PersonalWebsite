import React from "react"
import { Link } from "react-router-dom"
import { Avatar, Card, CardHeader,  Button} from "@material-ui/core"
import {makeStyles } from "@material-ui/core/styles"
import David from "../images/david.jpg"
import "./welcome.css"




const useStyles = makeStyles({
    root:{
       color:"white",
        width: "32%",
        margin: "0% auto",
        textAlign: "center",
        padding: "2%",
        background:"inherit"
    },
    box:{
        border: "solid 1px black",
        height:"100vh",
        
    },
    links:{
        textDecoration: "none",
        color:"white"
    },
   
    Avatar: {
        margin: "5% auto",
        marginBottom:"2%",
        background: "#dd1818",
        width:"20%",
        height:"40%",
      },
      buttonContainer:{
          display:"flex",
          justifyContent:"space-evenly",
          width:"50%",
          margin:"0 auto"
      }
})

function Welcome(){
    const classes = useStyles()

    return(
        <div className="mainContainer" >
        <div className={classes.box}>
        <Avatar className={classes.Avatar} src={David}>DR</Avatar>

            <Card className={classes.root}>
            <CardHeader title="David L. Ray Jr" subheader="FullStack Web Developer" />
                <div className={classes.buttonContainer}>
                <Button  variant="contained" color="primary"><Link className={classes.links} to="/home">Explore</Link></Button>
                <Button  variant="contained" color="primary"><Link className={classes.links} to="/contact">Contact</Link></Button>
                </div>
            </Card>
            </div>
        </div>
    )
}

export default Welcome