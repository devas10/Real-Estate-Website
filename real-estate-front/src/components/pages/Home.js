import React, { Component } from 'react';
import "./style.css"

export class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
        error : null,
        isLoaded : false,
        posts : []        
    };
}

      componentDidMount() {

        fetch("http://localhost:5000/post/getposts")
        .then( response => response.json())
        .then(
            // handle the result
            (result) => {
                this.setState({
                    isLoaded : true,
                    posts : result
                });
            },

            // Handle error 
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            },
        )
    }
  render() {
    const {isLoaded, posts} = this.state;

    if (!isLoaded) {
        return <div>Loading Please wait...</div>
    }else{
        return(
            <div className ="maindiv">
                {  
                    posts.map(post => (
                       <div className="heroImage">
                       <div className="heroText">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgrooVzVK2JvlADCrhQcOsYIVmr0D_q0Aoyw&usqp=CAU" id="postimage" alt="real estate" />
                          {post.pname}<br />
                          pincode:{post.pzip}<br />
                          Rs.{post.pcost}<br />
                          <button className="heroButton">Contact</button>  <button className="heroButton">Details</button>
                          </div>
                         </div>
                    ))
                }
            </div>
        );
    } 
  } 
}

export default Home;
