import React from "react"
import { Link } from "react-router-dom"
import { Avatar, Card, CardHeader, CardActionArea, Button, Box} from "@material-ui/core"
import {makeStyles } from "@material-ui/core/styles"
import David from "../images/david.jpg"
import "./welcome.css"




const useStyles = makeStyles({
    root:{
       color:"white",
        width: "40%",
        margin: "10% auto",
        textAlign: "center",
        padding: "2%",
        background:"inherit"
    },
    box:{
        border: "solid 1px black",
        
    },
    links:{
        textDecoration: "none",
        color:"white"
    },
   
    Avatar: {
        margin: "1% auto",
        background: "#dd1818",
        width:"18%",
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
        <Box className={classes.box}>
            <Card className={classes.root}>
            <Avatar className={classes.Avatar} src={David}>DR</Avatar>
            <CardHeader title="David L. Ray Jr" subheader="FullStack Web Developer" />
                <CardActionArea className={classes.buttonContainer}>
                <Button  variant="contained" color="primary"><Link className={classes.links} to="/home">Explore</Link></Button>
                <Button  variant="contained" color="primary"><Link className={classes.links}>Contact</Link></Button>
                </CardActionArea>
            </Card>
            </Box>
        </div>
    )
}

export default Welcome