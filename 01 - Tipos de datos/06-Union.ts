//El tipo Union es parecido al "any" pero más acotado.

let numerOrBoolean:number | boolean

numerOrBoolean = 22
numerOrBoolean = false

//Combinado con Type seria:

type data = number | string

let allInfo:data

allInfo=2023