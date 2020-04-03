import React from "react"
import axios from "axios"
import { Card, CardHeader, TextField, Typography } from "@material-ui/core"

class Contact extends React.Component{
    constructor(props){
        super(props)

        this.state = {
        
            name:"",
            email:"",
            comment:""
        }
    }


    changeHandler = e => {
        this.setState({[e.target.name] : e.target.value})
    }

    submitHandle = e => {
        e.preventDefault()
        axios
        .post("http://localhost:8000/comments", this.state)
        .then(res => {
            console.log(res)
        })
        .catch(error => {
            console.log(error)
        })
    }

    render(){
        const { name, email, comment} = this.state
        return(
            <div>
                <Card style={{width:"30%", margin:"3% auto",}}>
                <CardHeader style={{border:"solid 2px #333333", background:"linear-gradient(to right, #333333, #dd1818)"}} title="Need to reach me?" subheader="Email: dlrayjr89@gmail.com - Phone: (614)-681.0179"/>
                <Typography variant="h5" component="h1" >
                    Drop me a comment
                </Typography>
                <form onSubmit={this.submitHandle} style={{padding:"2%"}}>
                <TextField variant="outlined" type="text" label="Name" name="name" value={name} onChange={this.changeHandler} /><br />
                <TextField variant="outlined"  type="email" label="Email" name="email" value={email} onChange={this.changeHandler} /><br />
                <TextField variant="outlined"  type="text" label="Comment" name="comment" value={comment} onChange={this.changeHandler} /><br />
                <button type="submit">POST</button>
                </form>
                
                    
                </Card>
            </div>
        )
    }
}


export default Contact