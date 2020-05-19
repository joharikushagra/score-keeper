import React, { Component } from 'react'
import Show from "./components/display"
import Input from "./components/input"

class App extends Component {
    
  state = {
    count1 : 0,
    count2 : 0,
    inputcount : 0
  }

  displayUpdate = (id) => {
    if(this.state.count1 === Number(this.state.inputcount) || this.state.count2=== Number(this.state.inputcount))
    return
    if(id==="1"){
      this.setState(prevState => {
        return {...prevState,count1 : prevState.count1+ 1}
      })
    } 
    else{
      this.setState({
        count2: this.state.count2 + 1
      })
    }
  }


  handleInput = (count)=> {
    console.log(count);
   this.setState({
       inputcount:count
    })
    console.log(this.state);
  }

  resetScore = (reset) =>{
    this.setState({
      count1:0,
      count2:0,
      inputcount: reset
    })
  }


  render() {
    return (
      <div className="container">
        <h1 className="center red-text">Score keeper</h1>
        <Show show={this.displayUpdate} count1={this.state.count1} count2={this.state.count2} />
        <Input input={this.handleInput}  reset={this.resetScore}/>
      </div>
  )
  }
}

export default App

