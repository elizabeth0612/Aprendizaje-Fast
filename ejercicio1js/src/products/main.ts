import {addProduct,calcStock,products} from './product.servic';

addProduct({
  name: 'Pro1',
  createdAt:new Date(1993 , 1),
  stock: 5,
 });


 addProduct({
  name: 'Pro2',
  createdAt:new Date(1993 , 1),
  stock: 8,
  size:'XL'
 });
 console.log(products);
 const total = calcStock();
 console.log(total);

