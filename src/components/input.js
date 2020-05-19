import React, { Component } from 'react'

 class Input extends Component {
 
state = {
    inputCount : 0
}

handleSubmit = (e)=>{
    e.preventDefault()
    this.props.input(this.state.inputCount)
}

handleChange = (e) =>{
    this.setState({
      inputCount: e.target.value
    })
}

handleClick = ()=>{
   this.setState({
       inputCount : 0
   })
   this.props.reset(this.state.inputCount)
}

    render() {
        return (
            <div>
              <form onSubmit={this.handleSubmit}>
              <label htmlFor="count">Add count:</label>
              <input type="text" onChange={this.handleChange}></input>
              </form>  
              <form> 
              <button onClick={this.handleClick}>Reset</button>
              </form>
            </div>
        )
    }
}

export default Input 