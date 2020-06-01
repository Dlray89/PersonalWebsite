import React from "react"
import { makeStyles, Typography } from "@material-ui/core"
import LOGO from "../images/NEWLOGO.png"

const useStyles = makeStyles((theme) => ({
    root: {
        border: 'solid 2px blue',
        width: '100%',
        padding:'1%'
    },
    introContainer:{
        border:'solid 2px green',
        padding:'1%',
        textAlign:'center',
    },
    LOGO:{
        border:'solid 2px red',
        width:'20%',
        borderRadius:'100%'
    }
}))


function ContentArea() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.introContainer} >
            
                <Typography   >
                    My name is David l Ray Jr and I am a software developer.
                    I create and develop beautiful and dynamic applications for users so they can enhance their day to day life. The applications I develop will help people reach for resources that are hard to get while providing a creative platform for users to express themselves online. Now you might ask what makes me different from other other developers  and that's an easy question to answer. I am BOLD with a curiosity like no other when it comes to life and looking for solutions to help the world or person reach their potential in life. I let my creativity take over and that's what leads my vision for success along with having a lot of zest to getting the job done.
    
            </Typography>
            </div>

            <div></div>
        </div>
    )
}

export default ContentArea