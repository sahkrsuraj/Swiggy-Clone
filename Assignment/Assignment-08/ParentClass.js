import React from 'react';
import Child1Class from './Child1Class';
import Child2Class from './Child2Class';

class ParentClass extends React.Component{
  constructor(props){
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount(){
    this.timer = setInterval(()=>{
      console.log("Interval every 1s");
    },1000)
    console.log("Parent component did mount");
  }

  componentWillUnmount(){
    clearInterval(this.timer);
  }

  render(){
    console.log("Parent Render");
    return(
      <div className="parent" style={{paddingBottom:"2rem"}}>
        <h1>Parent Class Component</h1>
        <p>Content...</p>
        <Child1Class id="1532" loginState="Logout"/>
        <Child2Class address="Kormangala" city="bangalore"/>
      </div>
    )
  }
}

export default ParentClass;