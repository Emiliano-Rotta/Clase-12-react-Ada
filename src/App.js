//cssStylesheet

// import Producto from './styles/1cssStylesheet/components/Product.jsx';
// import OtroComponente from './styles/1cssStylesheet/components/OtroProduct.jsx';

// function App() {
//   return (
//     <div>
//       <Producto title="1 Producto" price={400}/>
//       <OtroComponente title="Otro Producto" price={200}/>
//     </div>
//   );
// }

// export default App;



// 2inlineStyling
// import Producto from './styles/2inlineStyling/components/Product.jsx';
// import OtroComponente from './styles/2inlineStyling/components/OtroProduct.jsx';

// function App() {
//   return (
//     <div>
//       <Producto title="Prueba" price={400}/>
//       <OtroComponente title="Otro Producto" price={200}/>
//     </div>
//   );
// }

// export default App;




// 3cssModules
// import Product from './styles/3cssModules/components/Product.jsx';
// import OtroComponente from './styles/3cssModules/components/OtroProduct';
// import './styles/3cssModules/global.module.css';

// function App() {
//   return (
//     <div>
//       <Product title="Prueba" price={400}/>
//       <OtroComponente title="Otro Producto" price={200}/>
//     </div>
//   );
// }

// export default App;





// 4styledComponents
//instalar: npm i styled-components

import Product from './styles/4styledComponents/components/Product.jsx';
import OtroComponente from './styles/4styledComponents/components/OtroProduct';
import GlobalStyles from './styles/4styledComponents/styles/GlobalStyles.js';


function App() {
  return (
    <div>
      <GlobalStyles />
      <Product title="Prueba" price={400}/>
      <OtroComponente title="Otro Producto" price={200}/>
    </div>
  );
}

export default App;

