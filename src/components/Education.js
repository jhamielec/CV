import React, {useState} from "react";
import {Section} from './Section'

export function Education(props){
    return (
        <div id="education">
        <div id='eduSection'>
            <EduTemplate/>
        </div>
        </div>
    )

}

function EduTemplate(){
    const [name, setName]=useState('')
    const [startDate, setStartDate]=useState('')
    const [endDate, setEndDate]=useState('')
    const [gpa, setGpa]=useState('')
    const [major, setMajor]=useState('')
    const [degree, setDegree]=useState('')


    return (
    <div id="SingleEdu">
        <h1>Education</h1>
        <Title className='eduTitle' name={name} startDate={startDate} endDate={endDate} editButton={(e)=>editButton(e)} major={major} gpa={gpa} degree={degree}/>
        <form onSubmit={(e)=>onSubmit(e)} id='eduForm'>
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
    </div>)

    function onSubmit(e){
        e.preventDefault();
        const parent=e.target.parentElement
        setName(parent.querySelector('#School').value)
        setStartDate(parent.querySelector('#Start').value)
        setEndDate(parent.querySelector('#End').value)
        setGpa(parent.querySelector('#GPA').value)
        setMajor(parent.querySelector('#Major').value)
        setDegree(parent.querySelector('#Degree').value)
        e.target.style.display='none'
        parent.querySelector('.eduTitle').style.display='block'

    }

    function editButton(e) {
        e.target.parentElement.style.display='none'
        e.target.parentElement.parentElement.querySelector('#eduForm').style.display='block'
    }

}

function Title(props) {
    return (
        <div className={props.className}>
            <div>{props.name}</div>
            <div>{props.major}</div>
            <div>{props.gpa}</div>
            <div>{props.degree}</div>
            <div>{props.startDate}</div>
            <div>{props.endDate}</div>
            <button onClick={props.editButton}>Edit</button>
        </div>
)}