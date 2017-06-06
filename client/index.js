import React from 'react'
import ReactDOM from 'react-dom'
import {Router, browserHistory, Route} from 'react-router'
import CalculatorApp from './components/CalculatorApp.js'
import CalculatorForm from './components/CalculatorForm.js'

ReactDOM.render(<CalculatorApp />, document.getElementById('app'))
