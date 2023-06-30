(()=>{
   //---------------------------------------------------------
  //ARROW  FUNCTION
  //---------------------------------------------------------
  const calcTotal =(prices: number[]) : string =>{
    let total =0;
    prices.forEach((item)=>{
      total+=item;
    });
    return total.toString();
  }
  const rta = calcTotal([1,2,1,1,1]);
  console.log(rta);



//------------------------------------------------------------
// FUNCION QUE  RETORNA STRING
//------------------------------------------------------------

  const printTotal = (prices : number[]) => {
    const rta = calcTotal(prices);
    console.log(`El total es  ${rta}`);
    return rta;
  }
//------------------------------------------------------------
// FUNCION QUE NO RETORNA NADA
//------------------------------------------------------------
const printTotal2 = (prices : number[]):void=> {
  const rta = calcTotal(prices);
  console.log(`El total es  ${rta}`);
}



  printTotal([1,2,1,1,1]);




})();



//------------------------------------------------------------
// AQUI INDICAMOS QUE LA FUNCION RETORNARA UN TIPO STRING
//------------------------------------------------------------
// const calcTotal =(prices: number[]) : string =>{
//   let total =0;
//   prices.forEach((item)=>{
//     total+=item;
//   });
//   return total.toString();
// }
// const rta = calcTotal([1,2,1,1,1]);
// console.log(rta);




