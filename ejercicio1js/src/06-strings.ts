(()=>{
  let productTitle ='My amazing product';
productTitle='My amazing product changed';
console.log('productTitle',productTitle);

const productDescription = "I'm bla bla bla bla bla dasdadsaads";
console.log('productDescription',productDescription);

let isNew : boolean = false;
let productPrice =100;

const summary=`
  title:${productTitle}
  description: ${productDescription}
  price: ${productPrice}
  isNew :${isNew}
`;

console.log(summary);
})();
