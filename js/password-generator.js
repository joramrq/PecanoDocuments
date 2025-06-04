function generarClave() {
    const ahora = new Date();
    const hora = ahora.getHours();
    const mes = ahora.getMonth() + 1;
    const dia = ahora.getDate();
    const minuto = ahora.getMinutes();

    const pad = (n) => n.toString().padStart(2, '0');
    const parte1 = hora + mes;
    const parte2 = pad(dia) + pad(minuto);
    const clave = `${parte1}${parte2}`;

    const contenedor = document.getElementById("clave-generada");
    if (contenedor) {
        contenedor.innerText = clave;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    generarClave();
 
    const boton = document.getElementById("btn-actualizar");
    if (boton) {
        boton.addEventListener("click", generarClave);
    }
});

