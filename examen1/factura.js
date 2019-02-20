import Crear from "./facturacion.js";
let contacto1 = new Crear( "20/02/2019" , "600" , "899" );
let contacto2 = new Crear( "21/02/2019 " , "600 pesos" , "999");
let contacto3 = new Crear( "22/02/2019" , "600 pesos" , "1000 ");
contacto1.organizar();
contacto2.organizar();
contacto3.organizar();