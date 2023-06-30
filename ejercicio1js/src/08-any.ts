(()=>{
  let myDynamicVar : any;
  myDynamicVar=100;
  myDynamicVar=null;
  myDynamicVar={};
  myDynamicVar='';

  //casteo o castear 1
  myDynamicVar='Hola';
  const rta =(myDynamicVar as string).toLocaleLowerCase();
  console.log(rta);

  //casteo o castear 2
  myDynamicVar=1212;
  const rta2 =(<number>myDynamicVar).toFixed();
  console.log(rta2);




})();
