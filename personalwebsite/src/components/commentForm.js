import React from "react"
import axios from "axios"
import { Button, Card, CardHeader, TextField, Typography, withStyles } from "@material-ui/core"


const styles = theme => ({
    root:{
        width:"30%", 
        margin:"3% auto",
        border:"solid 1px #333333",
        [theme.breakpoints.down("sm")]:{
            width:"90%",
        }
    },
    Form:{
        padding:"2%",
       
    },
    Button:{
        border:"solid 1px #dd1818",
        marginTop:"3%",
        color:"#dd1818"
    },
    TextField:{
        border:"solid 1px #dd1818",
        margin:" 2% 0 0 0",
        color:"#dd1818"
    }
})




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

        const { classes } = this.props
        
        return(
            <div>
                <Card className={classes.root}>
                <CardHeader style={{border:"solid 1px #333333", background:"linear-gradient(to right, #333333, #dd1818)", color:"white"}} title="Need to reach me?" subheader="Email: dlrayjr89@gmail.com - Phone: (614)-681.0179"/>
                <Typography variant="h5" component="h1" >
                    Drop me a comment
                </Typography>
                <form onSubmit={this.submitHandle} className={classes.Form}>
                <TextField className={classes.TextField} variant="outlined" type="text" label="Name" name="name" value={name} onChange={this.changeHandler} /><br />
                <TextField className={classes.TextField}  variant="outlined"  type="email" label="Email" name="email" value={email} onChange={this.changeHandler} /><br />
                <TextField className={classes.TextField}  variant="outlined"  type="text" label="Comment" name="comment" value={comment} onChange={this.changeHandler} /><br />
                <Button className={classes.Button} type="submit" variant="outlined" color="primary">POST</Button>
                </form>
                
                    
                </Card>
            </div>
        )
    }
}


export default withStyles(styles, { withTheme: true})(Contact)