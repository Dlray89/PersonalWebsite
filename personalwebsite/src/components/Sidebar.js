import React from "react"
import { List, ListItem, ListItemText, Divider, makeStyles } from "@material-ui/core"
import Dave from "../images/david.jpg"


const useStyles = makeStyles((theme) => ({
     root:{
            border: 'solid 2px red',
            width:'35%',
            height:'100vh',
            
        },
        ListRoot:{
        border:'solid 2px green',
        
    },
    ListBtn: {
        border:'solid 2px yellow'
    },
    ListText:{
        border:'solid 2px blue',
        padding:'1%',
        textAlign:'center'
    },
    IMGROOT:{
        textAlign:'center',
        padding:'1%'
    },
    DaveIMG: {
        width:'70%',
        borderRadius:'100%',
        margin:'0 auto'
    }
}))

const SideBar= () => {
    const classes = useStyles()
    return(
        <div className={classes.root}>
        <div className={classes.IMGROOT}>
            <img className={classes.DaveIMG} src={Dave}  />
        </div>
            <List className={classes.ListRoot} >

                <ListItem className={classes.ListBtn} button>
                    <ListItemText className={classes.ListText}>Home</ListItemText>
                </ListItem>

                <Divider  />

                 <ListItem className={classes.ListBtn} button>
                    <ListItemText className={classes.ListText}>Projects</ListItemText>
                </ListItem>

                <Divider  />

                 <ListItem className={classes.ListBtn} button>
                    <ListItemText className={classes.ListText}>Contact</ListItemText>
                </ListItem>
            </List>
        </div>
    )
}

export default SideBar