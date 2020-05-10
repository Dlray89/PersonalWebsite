import React, { Component } from "react"
import { Mutation } from "react-apollo"
import { COMMENT_QUERY } from "./contact"
import gql from "graphql-tag"
import { Card, CardHeader, CardContent, TextField, Button } from "@material-ui/core"

const COMMENT_MUTATION = gql`
mutation newNote(
  $name:String!, 
  $email:String! 
  $phone: String!,
$message:String!) {
  createContact(data:{name:$name,email:$email,phoneNumber:$phone, comment:{create:{message:$message}}}){
    id
    name
    email
    phoneNumber
    comment {
      message
    }
  }
  
  }
`

class NewComment extends Component {
    state = {
        name: "",
        email: "",
        phone: "",
        comment: [
            {
                message: ""
            }
        ]
    }

    render() {
        const { name, email, phone, message } = this.state
        return (
            <div>
                <Card style={{width:"40%", margin:"3% auto", textAlign:"center"}}>
                    <CardHeader title="Contact Me" />
                    <CardContent>
                        <TextField variant="outlined" value={name} onChange={e => this.setState({ name: e.target.value })} placeholder="Full Name" />
                         <br/>

                        <TextField variant="outlined" value={email} type="email" onChange={e => this.setState({ email: e.target.value })} placeholder="Email" />
                          <br/>


                        <TextField variant="outlined" value={phone} type="text" onChange={e => this.setState({ phone: e.target.value })} placeholder="Phone Number" />
                          <br/>

                        <TextField variant="outlined" value={message} type="text" onChange={e => this.setState({ message: e.target.value })} placeholder="Message" />
                    </CardContent>


                    <Mutation mutation={COMMENT_MUTATION}
                        variables={{ name, email, phone, message }}
                        refetchQueries={[
                            {
                                query: COMMENT_QUERY
                            }
                        ]}>
                        {postMutation => <Button onClick={postMutation} variant="outlined" style={{margin:"2% 0", width:"40%"}}>Create</Button>}

                    </Mutation>
                </Card>
            </div>
        )
    }
}

export default NewComment