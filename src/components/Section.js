import React, { Component} from "react";

export class Section extends Component {
    render() {
      let type;
      if (this.props.type===undefined) {type='text'}
      else {type=this.props.type}
      return (
        <div>
            <label htmlFor={this.props.name}>{this.props.name}   </label>
            <input 
              type={type}
              id={this.props.name}
              min={this.props.min}
              max={this.props.max}
              step={this.props.step}
              />
            
          <br/>
        </div>
      )
    }
  
  }