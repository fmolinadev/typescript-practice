class Calcular
{
    numero:number;
    constructor(n:number)
    {
        this.numero =n;
    }

    serieFibonacci():number[]
    {
        let numeros=[0,1];
        let i=2;
        while(i<=this.numero)
        {
            numeros[i]=numeros[i-2] + numeros[i-1];
            i++;
        }
        return numeros;
    }

    numerosParesImpares(pares:boolean,hastaNumero:number):string
    {
        let resultado:string;
        resultado="";
        let aux=1;
        if(pares)
            aux=0;

        for (let j =0; j <hastaNumero; j++) { 
            if(j%2==aux) 
              resultado += " " + j;
        } 

        return resultado;
    }

}

let u = new Calcular(15);
let u2 = new Calcular(100);
let opcion=3;
switch(opcion)
{
    case 1:
        console.log(u2.serieFibonacci());
        break;
    case 2:
        console.log(u2.numerosParesImpares(true,150));
        break;
    case 3:
        console.log(u2.numerosParesImpares(false,123));
        break;
    default:
        console.log("El calculo no fue contemplado");
        break;

}