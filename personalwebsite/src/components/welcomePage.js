import React from "react"
import { Link } from "react-router-dom"
import { Card, CardHeader, CardActionArea, Button, Box} from "@material-ui/core"
import {makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
    root:{
        border: "solid 2px red",
        width: "25%",
        margin: "16% auto",
        textAlign: "center",
        padding: "2%"
    },
    box:{
        border: "solid 2px red",
        backgroundImage: "url('nate-grant-QQ9LainS6tI-unsplash')"
    },
    links:{
        textDecoration: "none"
    }
})

function Welcome(){
    const classes = useStyles()

    return(
        <div>
        <Box className={classes.box}>
            <Card className={classes.root}>
            <CardHeader title="David L. Ray Jr" subheader="FullStack Web Developer" />
                <CardActionArea>
                <Button variant="outlined" color="primary"><Link className={classes.links} to="/home">Explore</Link></Button>
                <Button variant="outlined" color="primary"><Link className={classes.links}>Contact</Link></Button>
                </CardActionArea>
            </Card>
            </Box>
        </div>
    )
}

export default Welcome