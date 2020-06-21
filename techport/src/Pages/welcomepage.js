import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    container: {
        border: 'solid 2px black',
        width: '90%',
        height: '80vh',
        margin: '0 auto'
    },
    navTitle: {
        border:'solid 2px blue',
        width:'40%',
        
    },
    navContainer: {
        border:'solid 2px blue',
        display: 'flex',
        width: "90%",
        margin: '0 auto',
        justifyContent: 'space-between',
        marginTop:'3%'
    },
    navBar: {
        border: 'solid 2px red',
        display: 'flex',
        justifyContent: 'space-evenly',
        width:'40%',
        textAlign: 'end'
    },
    IntroPic :{
        width:'60%',
        height:'80vh'
    }

}))
const Welcome = () => {
    const classes = useStyles()


    return (
        <div>
            <div className={classes.navContainer}>
                <div className={classes.navTitle}>David Ray jr</div>
                <div className={classes.navBar}>
                    <Link to='/'>Home</Link>
                    <Link to='/projects'>Projects</Link>
                    <Link to='/Contact'>Contact</Link>
                </div>
            </div>


            <div className={classes.container}>
            </div>

            <div>
                bottom
            </div>


        </div>
    )
}

export default Welcome