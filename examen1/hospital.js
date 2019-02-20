import Crear from "./paciente.js";
let contacto1 = new Crear( "20/02/2000" , "1.80" , "70" );
let contacto2 = new Crear( "21/02/1999 " , "1.75" , "60");
let contacto3 = new Crear( "22/02/2000" , "1.70" , "70");
contacto1.organizar();
contacto2.organizar();
contacto3.organizar();