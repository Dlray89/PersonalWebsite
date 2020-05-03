import React, { Component } from "react"
import gql from "graphql-tag"
import { Mutation } from "react-apollo"
import {GET_ALL_POST} from "../queries"


const COMMENT_MUTATION =  gql `
    
mutation NewComment($new: CommentCreateInput!){
  createComment(data:$new){
    id
    usersName
    usersEmail
    usersPhone
    usersComment
  }
}
`



class CommentForm extends Component {
    state = {
            usersName: "",
            usersEmail: "",
            usersPhone: "",
            usersComment: ""    
    }

    resetForm = e => {
        this.setState({  usersName: "", usersEmail: "", usersPhone: "", usersComment: ""  })
    }

    render() {
        // const { usersName, usersEmail, usersPhone, usersComment } = this.state
        return (
            <div>
                <form onSubmit={this.resetForm}>
                    <input
                        type="text"
                        value={usersName}
                        placeholder="Full Name"
                        onChange={e => this.setState({ usersName: e.target.value})}
                    />

                    <input
                    value={usersEmail}
                    onChange={e => this.setState({ usersEmail: e.target.value})}
                        type="email"
                        placeholder="Your email"
                    />

                    <input
                    value={usersPhone}
                    onChange={e => this.setState({usersPhone: e.target.value})}
                        type="text"
                        placeholder="your phone number"
                    />

                    <input
                    value={usersComment}
                    onChange={e => this.setState({ usersComment: e.target.value})}
                        type="text"
                        placeholder="comment"
                    />

                    <Mutation
                    mutation={COMMENT_MUTATION}
                    variables={{new: usersName, usersPhone, usersEmail, usersComment}}
                    
                    refetchQueries={[
                        {
                            query: GET_ALL_POST
                        }
                    ]}
                    >
                    {postMutation => <button onClick={postMutation}>Post message</button>}

                    </Mutation>
                </form>
            </div>
        )
    }
}

export default CommentForm