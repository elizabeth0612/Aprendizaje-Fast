class Rombo {
    diagonalVertical:number;
    diagonalHorizontal:number;


    area():void{
        console.log(this.diagonalHorizontal*this.diagonalVertical);
    }
    constructor(diagonalVertical:number,diagonalHorizontal:number){
        this.diagonalHorizontal=diagonalHorizontal;
        this.diagonalVertical=diagonalVertical;
    }

   
  
 }
  const cuadrado = new Rombo(12,20);
  cuadrado.area();