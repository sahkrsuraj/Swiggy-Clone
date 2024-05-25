import React from 'react';

class Child2Class extends React.Component{

  constructor(props){
    super(props);
    console.log("2ndChild Constructor");
  }

  componentDidMount(){
    console.log("2ndChild component did mount");
  }

  render(){
    console.log("2ndChild Render");
    const{address, city} = this.props;
    return(
      <div className="userInfo">
        <h2>{address}</h2>
        <p>{city}</p>
      </div>
    )
  }
}

export default Child2Class;