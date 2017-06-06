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
    var items = [];
    let info = this.state
    axios.post('/api/entry', info)
    .then(function(item){
      items.push(item);
      console.log(items)
    })
  }

  render(){
    return(
      <div className='chatForm'>
        <label> Enter the foods you have eaten today:</label>
      <div>
          <input className='form' type='text' onChange={this.handleForm} />
      </div>
      <div>
          <button className='btn btn-default' onClick={this.handleSubmit}> Add </button>
      </div>
      </div>
    )
  }
}
