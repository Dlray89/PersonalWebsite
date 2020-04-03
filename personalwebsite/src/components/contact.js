import React from "react";
import { Card } from "@material-ui/core";
// import axios from "axios";
import Navbar from "../compTools/navbar";
import Form from "./commentForm";
import Bottomnav from "../compTools/bottomNav"


export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  }

//   componentDidMount() {
//     axios
//       .get("http://localhost:8000/comments")
//       .then(res => {
//         this.setState({
//           comments: res.data
//         });
//       })
//       .catch(error => console.log("Sorry", error));
//   }

  render() {
    return (
      <div
        style={{
          background: "linear-gradient(to left, #333333, #dd1818)",
          height: "200vh"
        }}
      >
        <Navbar />
        <div style={{ margin: "0 auto", textAlign: "center" }}>
          <Form />
        </div>

        <div style={{ width: "50%", margin: "0 auto" }}>
          {this.state.comments.map(comment => (
            <Card
              style={{
                  border:"solid 1px #dd1818",
                width: "40%",
                height:"40%",
                margin: "3% auto",
                textAlign: "center",
               
              }}
              key={comment.id}
            > <h3 style={{borderBottom:"solid 1px red", padding:"4%", background: "linear-gradient(to left, #333333, #dd1818)" }}>{comment.name}</h3>
             <p style={{padding:"3%", }}>{comment.comment}</p>
            </Card>
          ))}
        </div>
        <Bottomnav />
      </div>
    );
  }
}
