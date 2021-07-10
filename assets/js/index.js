//cuando el dom este listo
$(document).ready(function(){
    //los anchor con clase menu se modificaran
    $("a.menu").click(function(event){
        //previene su comportamiento por defecto
        event.preventDefault();
        //guardamos el valor del enlace marcado
        let gato = this.hash;
        //procedemos a usar el metodo animate haciendo el efecto de smooth scroll
        $("html").animate({
            scrollTop: $(gato).offset().top
        }, 1000);
    })

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
});