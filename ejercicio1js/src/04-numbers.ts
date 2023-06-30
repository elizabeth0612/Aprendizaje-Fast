(()=>{
  //inferida - implicita => no declaramos el tipo de dato
  let productPrice =100;
productPrice =12;
console.log('productPrice',productPrice);

//explicita se declara el tipo de dato

let customerAge : number = 28;
customerAge=customerAge+1;
console.log('customerAge',customerAge);

let productInStock: number;
console.log('productInStock',productInStock);


if(productInStock>10){
  console.log('is greater');
}

let discount = parseInt('100');
console.log('discount',discount);
if(discount<=200){
  console.log('apply');
}else{
  console.log('not apply');
}

//hexadecimal
let hex =0xfff;
console.log('hex',hex);

//codigo binario
let bin =0b1010;
console.log('bin',bin)


// Number es distinto de number
const myNumber: number =10;
console.log(myNumber);

})();
