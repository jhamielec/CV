import React, { Component} from "react";

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      phone: '',
      iType:''
    }
    this.onSubmit=this.onSubmit.bind(this)
  }
  render() {
    return  (<GeneralInfo 
      name={this.state.name}
      phone={this.state.phone}
      email={this.state.email}
      onSubmit={this.onSubmit}></GeneralInfo>)}
 
  onSubmit = (e) => {
    e.preventDefault();
    document.querySelector('#genForm').style.display='none'
    this.setState({
      name: document.getElementById('Name').value,
      email: document.getElementById('Email').value,
      phone: document.getElementById('Phone Number').value
    })}

}

export default App;

class GeneralInfo extends Component {
  render() {
    return  (   
    <div className="GeneralInfo">
      <Title name={this.props.name} phone={this.props.phone} email={this.props.email}/>
      <form onSubmit={this.props.onSubmit} id='genForm'>
        <Section id='Name' name='Name'/>
        <Section id='Email' name='Email' />
        <Section id='Phone Number' name='Phone Number' iType='number'/>
        <button type="submit">
            Add Info
        </button>
      </form>
    </div>
    )}


    ;
    }

class Section extends Component {
  render() {
    let iType;
    if (this.props.iType===undefined) {iType='text'}
    else {iType=this.props.iType}
    return (
      <div>
          <label htmlFor={this.props.name}>{this.props.name}   </label>
          <input 
            type={iType}
            id={this.props.name}
            />
          
        <br/>
      </div>
    )
  }

}

class Title extends Component {
  render() {
    return (
      <div className='title'>
        <div>{this.props.name}</div>
        <div>{this.props.phone}</div>
        <div>{this.props.email}</div>
        </div>
    )
  }
}