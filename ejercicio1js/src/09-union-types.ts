(()=>{
  let userId:string | number;
  userId =1212;
  userId='asada';


  function greeting (myText: string | number){
    if(typeof myText==='string'){
      console.log(`string ${myText.toLocaleUpperCase()}`);
    }else{
      console.log(`number ${myText.toFixed(1)}`);
    }
  }
  greeting('asa');
  greeting(12.121212121212);
})();
