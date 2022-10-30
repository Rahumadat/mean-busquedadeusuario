
let textoBuscar = document.querySelector(".textoBusqueda");
let btnBuscar = document.querySelector(".btnBuscar");
let textoHtml = document.querySelector(".infoUsuario");

btnBuscar.addEventListener("click", function () { 
    buscarNombre(textoBuscar);
});

function buscarNombre(textoBuscar) {
    let url = "https://api.github.com/users/" + textoBuscar.value;
        $.get(url , displayName)

    function displayName(data) {
        console.log(data); 
        textoHtml.innerHTML =  `<div class="card">
                                <span>El nombre del usuario es "${data.name}"</span>
                                </div>`;
    }
    
}

