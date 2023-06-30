(()=>{
  // let myNumber : number ;
  // let myString: string;



  //----------------------------------------------------------------------
  // AQUI NOS MUESTRA QUE ES TIPO ANY A PESAR DE COLOCARLE EL NULL Y UNDEFINED
  //----------------------------------------------------------------------
  // let myNull = null;
  // let myUndefined = undefined;

  //----------------------------------------------------------------------
  // AQUI NOS MUESTRA QUE ES TIPO NULL Y UNDEFINED  PORQUE COLOCAMOS EXPLICITAMENTE EL TIPO  NULL Y UNDEFINED
  //----------------------------------------------------------------------
  let myNull :null = null;
  let myUndefined : undefined= undefined;

  let myNumber: number | null = null;
  myNumber =12;

  let myString: string | undefined = undefined;
  myString ='asa';


  function hi(name: string | null){
    let hello ='Hola';

       if(name){
         hello+=name.toLowerCase();
        }else{
            hello+='nobody';
       }
    console.log(hello);
   }



  function hi2(name: string | null){
    let hello ='Hola ';
    // si en caso es null me va a retornar null
    // name es null  si no es nulo haara esto toLowerCase() y si nulo tomara e valor de nobody
    hello += name?.toLowerCase() || 'nobody';

    console.log(hello);
  }

  hi('Nicolas');
  hi(null);

  hi2('Nicolas');
  hi2(null);


})();
