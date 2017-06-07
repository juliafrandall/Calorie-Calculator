import axios from 'axios';
import React from 'react';
import CalculatorList from './CalculatorList.js'

const items = [{name: '', calories: ''}];
const total = 0

export class CalculatorForm extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        items,
        total
      }

    this.handleForm   = this.handleForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleForm(event) {this.setState({items: event.target.value})}

  handleSubmit(event) {
    let info = this.state
    axios.post('/api/entry', info)
    .then(function(item){
      let result = {name: item.data.name, calories: item.data.cal}
      let newTotal = this.state.total + item.data.cal
      items.push(result)
      this.setState({items: items, total: newTotal})
    }.bind(this))
  }

  render(){
    return(
      <div>
      <div className='chatForm'>
        <label> Enter the foods you have eaten today:</label>
        <div>
          <input className='form' type='text' placeholder='enter food here' onChange={this.handleForm} />
        </div>
        <div>
          <button className='btn btn-default' onClick={this.handleSubmit}> Add </button>
        </div>
      </div>
      <div>
      <CalculatorList items={this.state.items} total={this.state.total}/>
      </div>
      </div>
    )
  }
}
