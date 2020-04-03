import React from "react"
import { Link } from "react-router-dom"
import { Avatar, Card, CardHeader, CardActionArea, Button, Box} from "@material-ui/core"
import {makeStyles } from "@material-ui/core/styles"
import David from "../images/david.jpg"
import "./welcome.css"




const useStyles = makeStyles({
    root:{
       color:"black - 50%",
        width: "32%",
        margin: "0% auto",
        textAlign: "center",
        padding: "2%",
        background:"white"
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
        margin: "9% auto",
        marginBottom:"2%",
        background: "#dd1818",
        width:"10%",
        height:"10%",
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
                <CardActionArea className={classes.buttonContainer}>
                <Button  variant="contained" color="primary"><Link className={classes.links} to="/home">Explore</Link></Button>
                <Button  variant="contained" color="primary"><Link className={classes.links}>Contact</Link></Button>
                </CardActionArea>
            </Card>
            </div>
        </div>
    )
}

export default Welcome