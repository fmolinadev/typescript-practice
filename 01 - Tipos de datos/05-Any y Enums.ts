//El "any" permite tener varios tipos de datos:

let baul:any[]

baul=[2023, true, "Cuaderno", null, undefined, -45.5]

//Con "enum" se mencionan valores fijos. Ejm:

enum monedas{euro, dolar, peso}

let finanzas = {
    plata: monedas.dolar
}

