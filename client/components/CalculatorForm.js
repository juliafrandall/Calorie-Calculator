//'/entry'
import axios from 'axios';
import React from 'react';


export class CalculatorForm extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        items: []
      }

    this.handleForm   = this.handleForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

handleForm(event) {this.setState({items: event.target.value})}

handleSubmit(event) {
  let info = this.state
  axios.post('/api/entry', info)
    .then(function(response){
      console.log(response, "this is it")
    })
}

  render(){
    return(
      <div className='chatForm'>
        <label> Enter the foods you have eaten today:
          <input className='form' type='text' onChange={this.handleForm} />
        </label>
          <button className='btn btn-default' onClick={this.handleSubmit}> Submit </button>
      </div>
    )
  }
}
