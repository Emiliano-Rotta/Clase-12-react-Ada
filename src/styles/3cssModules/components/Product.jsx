import React from 'react';
import styled from  './Product.module.css';


function Product(props) {
  
  return (

    <div className={`${styled.producto} ${styled.hola}`}>
      <h3 className={styled.hola}>{props.title}</h3>
      <p>{props.price}</p>
    </div>
  );
}

export default Product;
