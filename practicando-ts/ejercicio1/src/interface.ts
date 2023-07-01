interface User {
    name: string;
    age: number;
  }
  
  const user: User = {
    name: 'John Doe',
    age: 30,
  };

//   var spiderman = {
//     nombre: "Peter parket",
//     poderes: ["trepar", "fuerza", "agilidad", "telas de araña"]
// };
interface Man {
    nombre:string;
    poderes:string[];
}
const spiderman :Man={
    nombre:"Juan",
    poderes: ["Saltar","Fuerza","agilidad"],

}
console.log(spiderman);