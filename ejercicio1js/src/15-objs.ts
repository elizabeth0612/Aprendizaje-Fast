(()=>{

   type Sizes ='S' | 'M' | 'L' |'XL';
   type Product={
    title: String,
    createdAt:Date,
    stock: number,
    size?:Sizes
   }

   const products : Product []=[];

   const addProduct = (data:Product ) =>{
    products.push(data);
   }
   addProduct({
    title: 'Pro1',
    createdAt:new Date(1993 , 1),
    stock: 12,
   });

   console.log(products);

   addProduct({
    title: 'Pro1',
    createdAt:new Date(1993 , 1),
    stock: 12,
    size:'XL'
   });
   console.log(products);

   products.push({
    title:'Prod3',
    createdAt:new Date(1990 , 1),
    stock: 12,
   });


})();
