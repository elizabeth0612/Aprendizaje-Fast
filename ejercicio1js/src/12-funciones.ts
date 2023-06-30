(()=>{
  //---------------------------------------------------------
  //FUNCTION
  //---------------------------------------------------------
  type Sizes ='S' | 'M' | 'L' |'XL';

  function createProductToJson(
    title: String,
    createdAt:Date,
    stock: number,
    size:Sizes
  ){
    return{
      title,
      createdAt,
      stock,
      size
    }
  }
  const producto1 =createProductToJson('P1' , new Date(),12 ,'XL');

  console.log(producto1);
  console.log(producto1.title);
  console.log(producto1.stock);

  //---------------------------------------------------------
  //ARROW  FUNCTION
  //---------------------------------------------------------
  const createProductToJson2 = (
    title: String,
    createdAt:Date,
    stock: number,
    size?:Sizes //  al colocar el ? indicamos que es opcional ingresar el parametro size:Sizes lo cual al usar la funcion no nos exigira colocar este parametro
    // size:Sizes | undefined
  ) => {
    return{
      title,
      createdAt,
      stock,
      size
    }
  }
  const producto2 =createProductToJson2('P1' , new Date(),12);

  console.log(producto2);
  console.log(producto2.title);
  console.log(producto2.stock);

})();
