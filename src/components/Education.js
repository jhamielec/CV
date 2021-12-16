import React, { Component} from "react";
import { isCompositeComponent } from "react-dom/test-utils";
import {Section} from './Section'

export class Education extends Component {
    constructor(props) {
      super(props)
      this.state = {
      }
    }

    render() {
        return (
            <div id='eduSection'>
                <EduTemplate/>
            </div>
        )

    }
}
class EduTemplate extends Component {
    constructor(props) {
        super(props)
        this.state= {
            name: '',
            startDate: '',
            endDate: '',
            gpa: '',
            major: '',
            degree: ''
        }
    }

    render() {
        return (
            <div id="SingleEdu">
                <h1>Education</h1>
                <Title className='eduTitle' name={this.state.name} startDate={this.state.startDate} endDate={this.state.endDate} editButton={this.editButton} major={this.state.major} gpa={this.state.gpa} degree={this.state.degree}/>
                <form onSubmit={this.onSubmit} id='eduForm'>
                <Section name='School'/>
                <Section name='Major' />
                <Section name='GPA' type='number' min='0' max='4' step='.01'/>
                <Section name='Degree' />
                <Section name='Start' type='date'/>
                <Section id='endDate' name='End' type='date'/>
                <button type="submit">
                    Add Education
                </button>
                </form>
            </div>
        )
    }

    onSubmit = (e) =>{
        e.preventDefault();
        const parent=e.target.parentElement
        this.setState({
            name: parent.querySelector('#School').value,
            startDate: parent.querySelector('#Start').value,
            endDate: parent.querySelector('#End').value,
            gpa: parent.querySelector('#GPA').value,
            major: parent.querySelector('#Major').value,
            degree: parent.querySelector('#Degree').value
        })
        e.target.style.display='none'
        parent.querySelector('.eduTitle').style.display='block'

    }

}

class Title extends Component {
    render() {return (
        <div className={this.props.className}>
            <div>{this.props.name}</div>
            <div>{this.props.major}</div>
            <div>{this.props.gpa}</div>
            <div>{this.props.degree}</div>
            <div>{this.props.endDate}</div>
            <div>{this.props.startDate}</div>
        </div>
    )}
}