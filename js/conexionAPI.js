/*Crear una funcion asincrona para enlistar los productos*/ 
async function listarProductos(){
    const conexion = await fetch("https://json-db-eight.vercel.app/productos");
    /*Convertir la respuesta en un objeto de javascript*/
    const conexionConvertida = await conexion.json();
    
    return conexionConvertida;
}

/*Crear una funcion asincrona para crear un producto*/
async function cargarProducto(imagen,nombre,precio){
    const conexion = await fetch("https://json-db-eight.vercel.app/productos", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body:JSON.stringify({
            imagen:imagen,
            nombre:nombre,
            precio:precio,
        })
    })
    const conexionConvertida = conexion.json();

    return conexionConvertida;
}

async function buscarProducto(palabraClave){
    const conexion = await fetch(`https://json-db-eight.vercel.app/productos?q=${palabraClave}`);
    const conexionConvertida = conexion.json();

    return conexionConvertida
}


function eliminarProducto(id){
    return fetch (`https://json-db-eight.vercel.app/productos/${id}`, {
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
    })
}

/*Exportar datos obtenidos de db.json*/
export const conexionAPI = {
    listarProductos,cargarProducto,buscarProducto,eliminarProducto
}


