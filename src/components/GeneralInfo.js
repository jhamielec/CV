import React, { Component} from "react";
import {Section} from './Section'

export class GeneralInfo extends Component {
    constructor(props) {
      super(props)
      this.state = {
        name: '',
        email: '',
        phone: ''
      }
      this.editButton=this.editButton.bind(this)
  
    }
    render() {
      return  (   
      <div className="GeneralInfo">
        <h1>General Info</h1>
        <Title name={this.state.name} phone={this.state.phone} email={this.state.email} editButton={this.editButton}>
        </Title>
        <form onSubmit={this.onSubmit} id='genForm'>
          <Section id='Name' name='Name'/>
          <Section id='Email' name='Email' />
          <Section id='PhoneNumber' name='PhoneNumber' type='number'/>
          <button type="submit">
              Add Info
          </button>
        </form>
      </div>
      )}
    
    editButton = () => {
      document.getElementById('genForm').style.display='block'
      document.getElementById('title').style.display='none'
    }
  
    onSubmit = (e) => {
      e.preventDefault();
      if (genChecksFail()) {return}
      document.getElementById('genForm').style.display='none'
      document.getElementById('title').style.display='block'
      this.setState({
        name: document.getElementById('Name').value,
        email: document.getElementById('Email').value,
        phone: document.getElementById('PhoneNumber').value
      })}
    }
  
  function genChecksFail() {  
    if (document.getElementById('Name').value.length<5) return true
    if (document.getElementById('PhoneNumber').value<1000000000) return true
    if (document.getElementById('Email').value.length<5) return true
    return false;
  };

  
  class Title extends Component {
    render() {
      return (
        <div id='title'>
          <div>{this.props.name}</div>
          <div>{this.props.phone}</div>
          <div>{this.props.email}</div>
          <button 
          onClick={this.props.editButton} 
          >
            Edit
          </button>
          </div>
      )
    }
  
  }