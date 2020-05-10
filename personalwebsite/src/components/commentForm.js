import React, { Component } from "react"
import { Mutation } from "react-apollo"
import { COMMENT_QUERY } from "./contact"
import gql from "graphql-tag"

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
                <form>
                    <p>Comment here</p>
                    <input value={name} onChange={e => this.setState({ name: e.target.value })} placeholder="Full Name" />

                    <input value={email} type="email" onChange={e => this.setState({ email: e.target.value })} placeholder="Email" />


                    <input value={phone} type="text" onChange={e => this.setState({ phone: e.target.value})} placeholder="Phone Number" />

                    <input value={message} type="text" onChange={e => this.setState({ message: e.target.value})} placeholder="Message" />

                    <Mutation mutation={COMMENT_MUTATION}
                    variables={{name, email,phone,message}}
                    refetchQueries={[
                        {
                            query: COMMENT_QUERY
                        }
                    ]}>
                    {postMutation => <button onClick={postMutation}>Create</button>}

                    </Mutation>
                </form>
            </div>
        )
    }
}

export default NewComment