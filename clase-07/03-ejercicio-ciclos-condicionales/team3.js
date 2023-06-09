// Ejercicio 1: Asignación de descuentos
// Crea una asignación de descuentos que solicite reciba el precio de un producto y aplique diferentes descuentos según las siguientes condiciones:

// Si el precio es mayor o igual a 100.000, se aplica un descuento del 20%.
// Si el precio está entre 50.000 y 99.999, se aplica un descuento del 10%.
// Si el precio es menor a 50.000, no se aplica ningún descuento.

function descuento(precioInicial) {
    let precioFinal;
    if (precioInicial < 50000) {
        precioFinal = precioInicial;
    } else if (precioInicial > 50000 && precioInicial < 100000) {
        precioFinal = precioInicial * 0.9;
    } else if (precioInicial > 100000) {
        precioFinal = precioInicial * 0.8;
    }
    return precioFinal;
}
console.log(descuento(108000));
