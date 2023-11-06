const elementoInventario: [string,number] = ['tuerca', 11];

const [nombre, cantidad] = elementoInventario;

const mensaje = agregarInventario(nombre, cantidad);

function agregarInventario(nombre: string, cantidad: number): string {
    return `Se agregaron ${cantidad} ${nombre}s al inventario`
}

console.log(mensaje);