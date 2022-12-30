//Declarar array de un solo tipo. Ejm: solo strings
let nombres:string[];

nombres = ["Francisco", "Daniel"]

//Declarar array de más de un tipo:

let perfil:any[]

perfil=["Francisco", 20, ["Javascript, React", true]]


console.log("El Array de strings tiene: ", nombres)
console.log("El Array mixto tiene: ", perfil)