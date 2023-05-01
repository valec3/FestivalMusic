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
