import React from 'react'

const CalculatorList = props => (
  <ul>
    {
      props.items.map((item, index) => <li key={index}>{item}</li>)
    }
  </ul>
);

export default CalculatorList;


// export default CalculatorList;
