import React,{ Component } from "react"
import { Query } from "react-apollo"
import gql from "graphql-tag"
import Navbar from "../compTools/navbar"
import CommentForm from "./commentForm"


export const COMMENT_QUERY = gql `
query AllQueries{
  contacts {
    name
    comment {
      message
    }
  }
}
`

class Contact extends Component {
    render(){
        return(
            <Query query={COMMENT_QUERY}>
            {({ loading, error, data}) => {
                if (loading) return <div>Laoding</div>
                if (error) return <div>Sorry something went wrong</div>

                const CommentData = data.contacts

                return(
                    <div>
                        <Navbar />
                        <div>
                        {CommentData.map((contact) => 
                            <div>{contact.name}
                            <div>
                                {contact.comment.map((message)=>
                                    <p>{message.message}</p>)}
                            </div>
                            </div>
                            
                            )}
                            </div>
                            <CommentForm />
                    </div>
                )
            }}

            </Query>
        )
    }
}

export default Contact