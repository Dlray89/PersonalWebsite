import React,{ Component } from "react"
import { Query } from "react-apollo"
import gql from "graphql-tag"
import { Card, CardHeader} from "@material-ui/core"
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';



export const COMMENT_QUERY = gql `
query AllQueries{
  contacts(last: 4){
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
                      
                        <div>
                        {CommentData.map((contact) => 
                            <Card style={{border:"solid 2px red", width:"60%", height:"30vh", textAlign:"center", margin:"2% auto"}}>
                            
                            <CardHeader title={contact.name} />
                            
                            <div>
                                {contact.comment.map((message)=>
                                    <p>Comment: <br/>
                                    {message.message}</p>)}
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