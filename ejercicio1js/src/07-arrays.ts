(()=>{
let prices = [1,2,2,1,1,212 , 'hola', true];
prices.push(121212);
prices =[1,2,2];


let products = ['hola', true];

products.push(false);

let mixed:(number | string | boolean | object)[]=['hola',true];
mixed.push(false);

mixed.push(12);
mixed.push('as');
mixed.push(true);
mixed.push([]);
mixed.push({});

let numbers =[1,2,2,1,2];
numbers.map(item=> item*2);
})();
