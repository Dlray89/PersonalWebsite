import React,{ Component } from "react"
import { Query } from "react-apollo"
import gql from "graphql-tag"
import Navbar from "../compTools/navbar"
import CommentForm from "./commentForm"
import { Card, Avatar, CardHeader, CardContent } from "@material-ui/core"


export const COMMENT_QUERY = gql `
query AllQueries{
  contacts(last: 10){
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
                        <CommentForm />
                        <div>
                        {CommentData.map((contact) => 
                            <Card style={{border:"solid 2px red", width:"30%", textAlign:"center", margin:"0 auto"}}>
                            <Avatar style={{margin:"0 auto"}} />
                            <CardHeader title={contact.name} />
                            
                            <div>
                                <CardContent>
                                {contact.comment.map((message)=>
                                    <p>Comment: <br/>
                                    {message.message}</p>)}
                                    </CardContent>
                            </div>
                            </Card>
                            
                            )}
                            </div>
                            
                    </div>
                )
            }}

            </Query>
        )
    }
}

export default Contact