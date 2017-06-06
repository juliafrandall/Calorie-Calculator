import React from 'react';
// import { render } from 'react'
import { CalculatorForm } from './CalculatorForm.js'

class CalculatorApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  render(){
    return (
      <div>
      <h1>Calorie Calculator</h1>
      <div>
        <CalculatorForm />
      </div>
      </div>
    )
  }
}

export default CalculatorApp;
