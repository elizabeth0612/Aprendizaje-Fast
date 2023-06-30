export type Sizes ='S' | 'M' | 'L' |'XL';
//utilizando la palabra export hacemos referencia a que vamos a tener que importar para poder usarla
export type Product={
 name: String,
 createdAt:Date,
 stock: number,
 size?:Sizes
}
