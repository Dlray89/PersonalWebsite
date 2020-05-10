import React,{ Component } from "react"
import { Query } from "react-apollo"
import gql from "graphql-tag"
import Navbar from "../compTools/navbar"
import CommentForm from "./commentForm"
import { Card, Avatar, CardHeader, CardContent } from "@material-ui/core"
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';
import BottomNav from "../compTools/bottomNav"



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
                if (loading) return       <CircularProgress />

                if (error) return   <Alert severity="error">This is an error alert — Something went wrong with your request!</Alert>

                const CommentData = data.contacts

                return(
                    <div>
                        <Navbar />
                        <CommentForm />
                        <div>
                        {CommentData.map((contact) => 
                            <Card style={{border:"solid 2px red", width:"30%", textAlign:"center", margin:"2% auto", display:"flex", justifyContent:"space-evenly"}}>
                            
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
                            <BottomNav />
                    </div>
                )
            }}

            </Query>
        )
    }
}

export default Contact