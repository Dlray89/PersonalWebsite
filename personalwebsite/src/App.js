import React from "react"
import SideBar from "./components/Sidebar"
import ContentArea from "./components/Content"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    root:{
        border:'solid 2px pink',
        display:'flex'
    }
}))

const App = () => {
    const classes = useStyles()
    return(
        <div className={classes.root}>

            <SideBar />
            <ContentArea  />
        </div>
    )
}
export default App