import React from 'react';
import styled from 'styled-components';

const Producto = styled.div`
  color: red;
  font-size: 20px;
  & h3 {
    background-color: SpringGreen; 
  }
`;

const Titulo = styled.h3`
  font-size: 30px;
  &:hover {
    color: gray;
  }
`;

function Product(props) {
  return (
    <Producto>
      <Titulo>{props.title}</Titulo>
      <p>{props.price}</p>
    </Producto>
  );
}

export default Product;
