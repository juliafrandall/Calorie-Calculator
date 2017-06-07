import React from 'react';
import axios from 'axios';
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
      <div className='foodApp'>
      <h1>Calorie Calculator</h1>
      <CalculatorForm />
      </div>
    )
  }
}

export default CalculatorApp;
