import logo from './logo.svg';
import './App.css';
import React from 'react';

/*function App() {

   let firstVariable =5
   console.log("firstVariable"+firstVariable)
    firstVariable =6
   console.log("firstVariable"+firstVariable) 
   
   const myFunction =() =>
   {
    console.log("This is my function!")
   }
   myFunction()

   const functionArgument =() =>
   {
    console.log("this is my functionArgument")
    return true;
   }
   const myFunction1 =(varable) =>
   {
    console.log("this is my function 1111!!")
    if(varable()){
      console.log("this condition is true")
    }
    else{
      console.log("this condition is true")
    }
   }

   myFunction1(functionArgument)
    
   
   class Student
   {
       id
       name
       rollNumber
       address
       emailId

       constructor(tempid, tempName, tempRoll,tempAddress,tempEmail)
       {
        this.id= tempid
        this.name= tempName
        this.rollNumber= tempRoll
        this.address= tempAddress
        this.emailId=tempEmail
       }
      print(){
        console.log("id",this.id)
        console.log("name",this.name)
        console.log("rollNumber",this.rollNumber)
        console.log("address",this.address)
        console.log("emailId",this.emailId)
      }
   }
   const student1 = new Student(123,"Nikita",111,"indore","nikita@gmail.com")
   console.log(student1)
   student1.print()

   class Monitor extends Student
   {
    batch 
    constructor(batchTemp, tempid, tempName, tempRoll,tempAddress,tempEmail)
    {
     super(tempid, tempName, tempRoll,tempAddress,tempEmail)
     this.batch=batchTemp
    }
    print()
    { 
      super.print()
      console.log("batch",this.batch)
    }
   }
   let ravi = new Monitor("2-3pm",222,"ravi parkash",123,"djhd fs","ravi@gmail.com")
   console.log("ravi:",ravi)
   ravi.print()

   let variable =<div>hello ! How are you!</div>
  return (
  
    <div>hello world!{firstVariable}<br/>{variable}</div>
  );
}
//class component
class App extends React.Component{
  render(){
    return React.createElement("div", null,"Hello")
  }
}


const App = (props) =>
{
  console.log("Props: ", props)
  console.log("Props color: ", props.color)
  console.log("Props size: ", props.size)
  console.log("clickEvent: ", props.clickEvent)
  return <div style={ {backgroundColor:props.color} }>
    This is App component
    <button onClick={props.clickEvent}>click me</button>
    </div>
}*/

 class App extends React.Component
 {

  state = {counter : 0 ,
    component: <ChildComponents/>
  }
  constructor(props)
  {
     super(props)
     console.log("constructor of App component")
  }
   
   static getDerivedStateFromProps(){
    console.log("getDerivedStateFromProp")
   }

  incrementCounter =() =>
  {
     this.setState({counter:this.state.counter + 1})
  }
  componentDidMount(){
    console.log("componentDidMount")
  }

  shouldComponentUpdate(){
    console.log("shouldComponentUpdate")
    return true  
  }

 
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("getSnapshotBeforeUpdate")
    return true
  }
  componentDidUpdate(){
    console.log("componentDidUpdate")
  }

  unmountChild =()=>
  {
    this.setState(
      {
        counter : this.state.counter,
        component:"this child component is gone/unmount"
      }
    )
  }
  render()
  {   
    console.log("render")
    /*console.log(this.props.color)
    console.log(this.state.counter)*/
    return <div  style={ {backgroundColor: this.props.color} }>
       hello
       <button onClick={this.props.clickEvent}>Click me</button> <br/>
       -------------------------------------------------------------------<br/>
       Counter : {this.state.counter}
       <button onClick={this.incrementCounter}>Increment Counter</button><br/>  
       <br/>
      {this.state.component}
      <button onClick={this.unmountChild}>Unmount child component</button>
    </div>
  }
 }

 class ChildComponents extends React.Component
 {
  componentWillUnmount()
  {
    console.log("Unmounting Child component")
  }
  render()
  {
    return <div>This is my Child Component</div>
  }
 }
export default App;
