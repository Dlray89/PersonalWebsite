import React from "react"
import { Link } from "react-router-dom"
import "./welcome.css"



const Welcome = () => {
    return(
        <div className="Welcome">
        <div className="btnContainer">
       <Link to="/home"><button className="btn span">Explore</button></Link> 
       <Link to="/contact"><button className="btn">Contact</button></Link> 
       
        </div>
       
        </div>
    )
}

export default Welcome