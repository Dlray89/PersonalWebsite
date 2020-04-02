import React from "react"
import { Card, CardHeader } from "@material-ui/core"
import axios from "axios"
import Navbar from "../compTools/navbar"
import Form from "./commentForm"





export default class Contact extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        comments:[]
    }
}

    componentDidMount() {
        axios
        .get("http://localhost:8000/comments")
        .then(res => {
            this.setState({
                comments: res.data
            })
        })
        .catch(error => console.log("Sorry", error))  
     }


render() {
    
    return(
        
        <div style={{background:"linear-gradient(to left, #333333, #dd1818)", height:"150vh"}}>
        <Navbar /> 
        <div style={{margin:"0 auto", textAlign:"center"}}>
        <Form />
        </div>
        
        <div style={{width:"50%", margin:"0 auto"}}>
        
            {this.state.comments.map(comment => (
                <Card style={{border:"solid 2px blue", width:"40%", margin:" 3% auto", textAlign:"center"}} key={comment.id}>
               
             
                 <CardHeader style={{border:"solid 2px red"}} title={comment.name} subheader={comment.comment} />
                 </Card>                        
            ))}
           
         </div>
        </div>
    )
}
}