// Programa para armar una factura en función al tipo de cliente como contribuyente y cómo se discrimina el IVA en la misma.

// Se solicita datos de la persona a quien se dirige la factura.
let nombre_completo = prompt("Ingrese el nombre del cliente.");
while (!nombre_completo) {
    nombre_completo = prompt(`Nombre incorrecto. Por favor, reingrese el nombre.`);
}
let condicion_iva = prompt("Ingrese condición del cliente (CF:Consumidor Final / RI:Responsable Inscripto / M:Monotributista / E:Exento).");
// Se chequea que la condición se ingrese correctamente.
while (!((condicion_iva == "CF") || (condicion_iva == "RI") || (condicion_iva == "M") || (condicion_iva == "E"))) {
    condicion_iva = prompt(`Dato incorrecto. Por favor, reingrese condición del cliente ${nombre_completo} (CF:Consumidor Final / RI:Responsable Inscripto / M:Monotributista / E:Exento).`);
} 
// Se solicitan los artículos que se van a facturar.
let repetir = "si";
function cargar(factor_articulo, factor_general) {
    let suma = 0;
    if (!cuit) { cuit = "-" }
    console.log(`Sres. ${nombre_completo}, IVA: ${condicion_iva}, CUIT: ${cuit}`);
    console.log("Cant.", "Descripción", "Precio", "Total");
    do{
        let descripcion = prompt("Ingrese la descripción del artículo");
        let cantidad = parseFloat(prompt("Ingrese la cantidad a comprar"));
        // Se chequea que la cantidad se ingrese correctamente.
        while (!cantidad) {
            cantidad = prompt(`Cantidad incorrecta. Por favor, reingrese la cantidad de ${descripcion}.`);
        }
        let precio_bruto = parseFloat(prompt("Ingrese el precio bruto"));
        // Se chequea que el precio se ingrese correctamente.
        while (!precio_bruto) {
            precio_bruto = prompt(`Precio incorrecto. Por favor, reingrese el precio bruto de ${descripcion}.`);
        }
        repetir = prompt("Va a comprar un artículo más? (si/no)");
        // Se chequea que la condición se ingrese correctamente.
        while (repetir != "si" && repetir != "no") {
            repetir = prompt("Respuesta incorrecta! Va a comprar un artículo más? (si/no)");
        }
        let precio = precio_bruto * factor_articulo;
        console.log(cantidad, descripcion, precio, (precio * cantidad));
        suma += precio * cantidad;
    }while(repetir == "si");
    suma = suma * factor_general;
    iva = suma * (1-1/1.21);
    console.log(`TOTAL IVA ${iva}`);
    console.log(`TOTAL FACTURA ${suma}`);
    alert("Gracias por su compra! Lo esperamos nuevamente.");
}
let cuit;
function control_cuit() {
    cuit = parseInt(prompt("Ingrese el CUIT del cliente"));
    // Se chequea que el valor ingresado sea entero.
    while (!cuit) {
        cuit = prompt(`CUIT incorrecto. Por favor, reingrese el número de CUIT de ${nombre_completo}.`)
    }    
}
let factor_articulo = 1;
let factor_general = 1;
switch (condicion_iva) {
    case "CF":
        factor_articulo = 1.21;
        factor_general = 1;
        cargar(factor_articulo, factor_general);
        break;
    case "M":
        factor_articulo = 1.21;
        factor_general = 1;
        control_cuit();
        cargar(factor_articulo, factor_general);
        break;
    case "RI":
        factor_articulo = 1;
        factor_general = 1.21;
        control_cuit();
        cargar(factor_articulo, factor_general);
        break;
    default:
        control_cuit();
        cargar(factor_articulo, factor_general);
    break;
}






