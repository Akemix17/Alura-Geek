import {conexionAPI} from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]")

function crearCard(imagen,nombre,precio,id){
    const producto = document.createElement("div");
    producto.className = "card";
    producto.innerHTML = `<img class="card__img" src="${imagen}" />
    <div class="card-container--info">
        <p>${nombre}</p>
        <div class="card-container--value">
            <p>$ ${precio}</p>
            <button id="${id}" type="button" data-eliminar><img class="trash__icon"  src="./assets/img/trash.png" /></button>
        </div>
    </div>`;
    document.innerHTML = producto;
    const btneliminar = producto.querySelector("[data-eliminar]")
    btneliminar.addEventListener("click", ()=>{
        const id = btneliminar.id
        conexionAPI.eliminarProducto(id)
    })

    return producto;
}


async function listarProductos(){
    const listaAPI = await conexionAPI.listarProductos()

    listaAPI.forEach(producto =>lista.appendChild(crearCard(producto.imagen,producto.nombre, producto.precio, producto.id)));
}

listarProductos()

