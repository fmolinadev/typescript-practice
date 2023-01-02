import {Profesor} from "./Profesor"
import {Medico} from "./Medico"

let opcion=1;

try
{
    switch(opcion) 
    {
        case 1:
            let m = NuevoMedico("Juan","01/01/1990",true,"dentista");
            MostrarMedico(m);
            break;
        case 2:
            let p = new Profesor("Pepe","01/01/1980",5);
            MostrarProfesor(p);
            break;
        case 3:
            factorial(10);
            break;
        default :
            console.log("No valido")    
            break;

    }
}
catch(Error)
{
    console.log("Se produjo un error " + Error.message);
}

function NuevoMedico(nom:string,fecha:string,guard:boolean,especialidad:string):Medico
{
    return new Medico(nom,fecha,guard,especialidad);
}

function MostrarMedico(m:Medico)
{
    console.log(m.nombre + " es " + m.especialidad + " y nacio en " +m.fechaNacimiento );
}

function MostrarProfesor(p:Profesor)
{
    console.log(p.nombre + " da  " + p.asignaturas + " asignaturas y nacio en " +p.fechaNacimiento );
}

function factorial(n:number)
{
    let f=1;
    for(let x=2; x<=n; x++)
        console.log(" " + ( f= f*x));
}