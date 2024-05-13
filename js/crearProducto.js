import {conexionAPI} from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function crearProducto(evento){

    evento.preventDefault();

    const imagen = document.querySelector("[data-imagen]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    
    await conexionAPI.cargarProducto(imagen,nombre,precio)

    window.location.href="../pages/cargado.html"
}

formulario.addEventListener("submit", evento => crearProducto(evento));