import React, { Component} from "react";
import {GeneralInfo} from './components/GeneralInfo.js'
import {Education} from './components/Education.js'

class App extends Component{
  render() {
    return  (
    <div>
      <GeneralInfo />
      <Education />
    </div>)}

}

export default App;