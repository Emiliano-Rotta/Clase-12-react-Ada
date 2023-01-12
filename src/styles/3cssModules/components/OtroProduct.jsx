import React from 'react';
import styled from  './Product.module.css';


function OtroProduct(props) {
  
  return (

    <div >
      <h3>{props.title}</h3>
      <p className={styled.producto}>{props.price}</p>
    </div>
  );
}

export default OtroProduct;
