(()=>{

  //tradicional
  // const login =(email:string , password : string)=>{
  //   console.log(email,password);
  // }
  // login('nico@nico.co','123123212')

 const login =(data:{email:string , password : number})=>{
   console.log(data.email,data.password);}

   login({
      email:'nico@nico.co',
      password:123631
   });

   type Sizes ='S' | 'M' | 'L' |'XL';

   const products : any []=[];
   const addProduct = (data: {
    title: String,
    createdAt:Date,
    stock: number,
    size?:Sizes
   }) =>{
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
})();
