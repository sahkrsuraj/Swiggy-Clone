import React from 'react';

class Child1Class extends React.Component{
  // when ever an instance of the class is created
  // the constructor is called 1st than
  // render() method
  // then componentDidMount()

  constructor(props){
    super(props);
    // the constructor is always called when ever 
    // an instance of the class is created
    // and so this is where state is defined

    // this.state is a large object and all the states variables are declared here like this
    this.state={
      count: 0,
      count2: 1,
    }
    console.log("1stChild Constructor");
  }

  componentDidMount(){
    console.log("1stChild component did mount");
  }

  render(){
    console.log("1stChild Render");
    const{id, loginState} = this.props;
    const{count, count2} = this.state;
    const updateCount=()=>{
      this.setState({
        count: this.state.count+1,
        count2: this.state.count2+2
      })
    }
    return(
      <div className="userStatus">
        <h4>{count}</h4>
        <h4>{count2}</h4>
        <p>Id: {id}</p>
        <p>{loginState}</p>
        <button onClick={updateCount}>Click</button>
      </div>
    )
  }
}

export default Child1Class;