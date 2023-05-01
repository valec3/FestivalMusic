// Cuando el documento este listo
document.addEventListener("DOMContentLoaded", ()=>{
    scrollNav();
    navegacionFija();
}) 


function navegacionFija(){
    // Funcion para fijar la barra de navegacion en un cierto punto
    const barra = document.querySelector(".header");
    // Registrar interseccion
    const observer = new IntersectionObserver( function(entries){
        if ( entries[0].isIntersecting){
            barra.classList.remove("fijo")
        } else{
            barra.classList.add("fijo")
        }
    });

    // Elemento a observar
    observer.observe(document.querySelector(".about-festival"));
}

function scrollNav(){
    const enlaces = document.querySelectorAll(".navbar a")
    enlaces.forEach(function(enlace){
        enlace.addEventListener("click",function(e){
            e.preventDefault();
            const seccion = document.querySelector (e.target.attributes.href.value);
            console.log(e.target.attributes.href.value)
            seccion.scrollIntoView({
                behavior:'smooth'
            });
        });
    })
}

document.addEventListener("DOMContentLoaded", function(){
    crearGaleria();
});

function crearGaleria(){
    const galeria = document.querySelector(".galeria__imgs");
    for(let i=1; i<=12;i++){
        const imagen=document.createElement("IMG");
        imagen.src=`build/img/thumb/${i}.webp`;
        imagen.dataset.imagenId=i;

        imagen.onclick=mostrarImg;

        // Crear nodo lista y agregar img
        const lista = document.createElement("LI");
        lista.appendChild(imagen);
        galeria.appendChild(lista);
    }
} 
function mostrarImg(e){
    const id = parseInt(e.target.dataset.imagenId);
    console.log(e.target)
    const imagen=document.createElement("IMG");
    imagen.src = `build/img/grande/${id}.webp`;

    const overlay = document.createElement("DIV");
    overlay.appendChild(imagen);
    overlay.classList.add("overlay");

    // Cerrar imagen al dar click en los bordes
    overlay.onclick=function(){
        overlay.remove()
        body.classList.remove("fijar-body");
    }

    // Boton para cerrar la img
    const cerrarImg = document.createElement("P");
    cerrarImg.textContent="X";
    cerrarImg.classList.add("btn-cerrar");

    // Cerrar imagen
    cerrarImg.onclick=function(){
        overlay.remove();
        body.classList.remove("fijar-body");
    }


    overlay.appendChild(cerrarImg);

    // Mostrar en el HTML
    const body = document.querySelector("body");
    body.appendChild(overlay);
    body.classList.add("fijar-body");
}