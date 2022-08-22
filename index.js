const fila = document.querySelector('.status-wrapper');
const profiles = document.querySelector('.profile__status');
const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;
});

flechaIzquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;
});

window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel__list'), {
        slidesToShow: 1,
        dots: '.carousel__indicators',
        draggable: true,
        arrows: {
            prev: '.carousel__prev',
            next: '.carousel__next'
        },
        responsive: [
            {
            // screens greater than >= 775px
            breakpoint: 320,
            settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 1,
                slidesToScroll: 1,
            }
            },{
            // screens greater than >= 1024px
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
            }
        ]  
    });
});