import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            count: 0,
        };
    }
    render(){
         return (
         <div className='user-card'>
        <h3>Count = {this.state.count}</h3>
        <button onClick={ ()=>{
            this.setState({
                count: this.state.count+=1
            })
        }
        }>Increase Count</button>
        <h2>Name: Ahmad</h2>
        <h3>Address: Kharkhauda</h3>
        <h3>Contact: igmazahmad@gmail.com</h3>
    </div>
  )
    }
}
export default UserClass