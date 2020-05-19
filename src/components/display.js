import React, { Component } from 'react'

class Show extends Component {

 handleUpdate = (e) =>{
      this.props.show(e.target.id)
  }

  

  render(){
      return(
          <div>
              <h1>
              <span id="1" onClick={this.handleUpdate}>{this.props.count1}</span>
             : <span id ="2" onClick={this.handleUpdate}>{this.props.count2}</span>
              </h1>
          </div>
      )
  }
    

}


export default Show