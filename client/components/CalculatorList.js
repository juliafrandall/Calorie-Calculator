import React from 'react'

const CalculatorList = props => (
  <div className='calculatorlist'>
    <ul className='list'>
      {props.items.map((item, index) => {
        return <li key={index}>{item.name} - {item.calories}
              </li>
       })}
    </ul>
    <div>
    <p className='total'>{props.total}</p>
    </div>
  </div>
);

export default CalculatorList;
