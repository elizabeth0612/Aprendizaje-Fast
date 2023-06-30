(()=>{
  //----------------------------------------------------
  // SIN ALIAS
  //----------------------------------------------------
  // forma tradicional
  // let userId:string | number  | boolean;

  // function greeting (myText: string | number  | boolean){
  //   if(typeof myText==='string'){
  //     console.log(`string ${myText.toLocaleUpperCase()}`);
  //   }
  // }

  // creando un tipo
 //----------------------------------------------------
  // CON  ALIAS
  //----------------------------------------------------
  type UserID =string | number ;
  let userId : UserID;

  // function greeting (userId: UserID){
  //    if(typeof userId==='string'){
  //       console.log(`string ${userId.toLocaleUpperCase()}`);
  //     }
  //   }
 //----------------------------------------------------
  // LITERAL TYPES
  //----------------------------------------------------

  type Sizes ='S' | 'M' | 'L' |'XL';
let shirtSize : Sizes;
shirtSize='M';
shirtSize='L';
shirtSize='XL';
shirtSize='S';

function greeting (userId: UserID , shirtSize:Sizes){
  if(typeof userId==='string'){
     console.log(`string ${userId.toLocaleUpperCase()}`);
   }
 }


greeting(1111,'S');
greeting('1111','S');



})();
