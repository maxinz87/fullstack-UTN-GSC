var elementoInventario = ['tuerca', 11];
var nombre = elementoInventario[0], cantidad = elementoInventario[1];
var mensaje = agregarInventario(nombre, cantidad);
function agregarInventario(nombre, cantidad) {
    return "Se agregaron ".concat(cantidad, " ").concat(nombre, "s al inventario");
}
console.log(mensaje);
