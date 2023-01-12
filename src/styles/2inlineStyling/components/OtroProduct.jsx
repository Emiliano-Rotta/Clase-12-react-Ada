import React from 'react';

const divStyle = {
  margin: '40px',
  border: '5px solid red',
};
const pStyle = {
  fontSize: '15px',
  textAlign: 'center',
};

function otroProduct(props) {
  return (
    <div style={divStyle}>
      <h3>{props.title}</h3>
      <p style={pStyle}>{props.price}</p>
    </div>
  );
}

export default otroProduct;
