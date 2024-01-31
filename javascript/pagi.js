// Inicializa AOS
AOS.init();
$(document).ready(function () {
    var currentIndex = 0;
    var carousel = $('#carouselExample').carousel();
    $('#btnVerMasProductos').click(function(){
        var cuadroDesplegable = $('#cuadroDesplegable');
        cuadroDesplegable.collapse('toggle');
    });
    $(".btn-info").click(function () {
        // Agrega la clase 'no-transition' al contenedor del carrusel
        $(".product-container").addClass("no-transition");
    });

    // Configuración del carrusel de Bootstrap al cambiar de slide
    $('#carouselExample').on('slide.bs.carousel', function (e) {
        currentIndex = $(e.relatedTarget).index();
        $(".product").removeClass("active").addClass("inactive");
        $(".product").eq(currentIndex).removeClass("inactive").addClass("active");
        updateTransform();
    });
    $('#specModal').on('click', function (e) {
        if (e.target === this) {
            // Evita que el modal se cierre al hacer clic en el fondo
            e.stopPropagation();
        }
    }); 
    var cuadroDesplegable = $('#cuadroDesplegable');
    $('#btnVerMasProductos').click(function(){
        cuadroDesplegable.collapse('toggle');
        var isCollapsed = cuadroDesplegable.hasClass('show');
        if (!isCollapsed) {
            cuadroDesplegable.on('hidden.bs.collapse', function () {
                cuadroDesplegable.off('hidden.bs.collapse');
                cuadroDesplegable.removeClass('show');
            });
        }
    });
    // Configuración de clic en botón de "Especificaciones"
    $(".btn-info").click(function () {
        // Pausa el carrusel al abrir la ventana modal
        carousel.carousel('pause');

        // Agrega la clase 'no-transition' al contenedor del carrusel
        $(".product-container").addClass("no-transition");
    });

    // Configuración del carrusel de Bootstrap al cerrar la ventana modal
    $('#specModal').on('hidden.bs.modal', function () {
        // Reinicia el carrusel al cerrar la ventana modal
        carousel.carousel('cycle');

        // Elimina la clase 'no-transition' al cerrar la ventana modal
        $(".product-container").removeClass("no-transition");
    });

    // Configuración del carrusel de Bootstrap al cambiar de slide
    $('#carouselExample').on('slide.bs.carousel', function (e) {
        currentIndex = $(e.relatedTarget).index();
        $(".product").removeClass("active").addClass("inactive");
        $(".product").eq(currentIndex).removeClass("inactive").addClass("active");
        updateTransform();
    });

    $(".btn-info").click(function () {
        carousel.carousel('pause');
        $(".product-container").addClass("no-transition");
    });

    $('#specModal').on('hidden.bs.modal', function () {
        carousel.carousel('cycle');
        $(".product-container").removeClass("no-transition");
    });

    $('#specModal').on('shown.bs.modal', function () {
        // Elimina el fondo oscuro de la modal
        $(".modal-backdrop").css("opacity", 0);
    });

    // Cierra la modal al hacer clic en el fondo
    $('#specModal').on('click', function (e) {
        if (e.target === this) {
            $('#specModal').modal('hide');
        }
    });

    $('#carouselExample').on('slide.bs.carousel', function (e) {
        currentIndex = $(e.relatedTarget).index();
        $(".product").removeClass("active").addClass("inactive");
        $(".product").eq(currentIndex).removeClass("inactive").addClass("active");
        updateTransform();
    });

    function updateTransform() {
        var translateX = -currentIndex * ($(".product").outerWidth(true) + 2);
        $(".product-container").css("transform", "translateX(" + translateX + "px)");
    }

    $(".btn-info").click(function () {
        // Pausa el carrusel al abrir la ventana modal
        carousel.carousel('pause');
    });

    // Configuración del carrusel de Bootstrap al cerrar la ventana modal
    $('#specModal').on('hidden.bs.modal', function () {
        // Reinicia el carrusel al cerrar la ventana modal
        carousel.carousel('cycle');
    });

    // Configuración de clic en botón de "Especificaciones"
    $(".btn-info").click(function () {
        // Activa el modal
        $('#specModal').modal('show');
    });

    // Configuración de clic en producto
    $(".product").click(function () {
        $(".product").removeClass("active").addClass("inactive");
        $(this).removeClass("inactive").addClass("active");
        currentIndex = $(this).index();
        updateTransform();
    });

    // Configuración de teclas de flecha
    $(document).keydown(function (e) {
        if (e.keyCode === 37) {
            // Flecha izquierda
            currentIndex = Math.max(0, currentIndex - 1);
        } else if (e.keyCode === 39) {
            // Flecha derecha
            currentIndex = Math.min($(".product").length - 1, currentIndex + 1);
        }

        $(".product").removeClass("active").addClass("inactive");
        $(".product").eq(currentIndex).removeClass("inactive").addClass("active");
        updateTransform();
    });

    function updateTransform() {
        var translateX = -currentIndex * ($(".product").outerWidth(true) + 2); // Ancho del producto + 2px de margen
        $(".product-container").css("transform", "translateX(" + translateX + "px)");
    }
    $(".btn-info").click(function () {
        // Agrega la clase 'no-transition' al contenedor del carrusel
        $(".product-container").addClass("no-transition");
    });

    // Configuración del carrusel de Bootstrap al cambiar de slide
    $('#carouselExample').on('slide.bs.carousel', function (e) {
        currentIndex = $(e.relatedTarget).index();
        $(".product").removeClass("active").addClass("inactive");
        $(".product").eq(currentIndex).removeClass("inactive").addClass("active");
        updateTransform();
    });

    $('#specModal').on('click', function (e) {
        if (e.target === this) {
            // Evita que el modal se cierre al hacer clic en el fondo
            e.stopPropagation();
        }
    });

    // Configuración de clic en botón de "Especificaciones"
    $(".btn-info").click(function () {
        // Pausa el carrusel al abrir la ventana modal
        carousel.carousel('pause');

        // Agrega la clase 'no-transition' al contenedor del carrusel
        $(".product-container").addClass("no-transition");
    });

    // Configuración del carrusel de Bootstrap al cerrar la ventana modal
    $('#specModal').on('hidden.bs.modal', function () {
        // Reinicia el carrusel al cerrar la ventana modal
        carousel.carousel('cycle');

        // Elimina la clase 'no-transition' al cerrar la ventana modal
        $(".product-container").removeClass("no-transition");
    });

    // Configuración de clic en botón de "Especificaciones"
    $(".btn-info").click(function () {
        // Activa el modal
        $('#specModal').modal('show');
    });

    // Configuración de clic en producto
    $(".product").click(function () {
        $(".product").removeClass("active").addClass("inactive");
        $(this).removeClass("inactive").addClass("active");
        currentIndex = $(this).index();
        updateTransform();
    });

    // Configuración de teclas de flecha
    $(document).keydown(function (e) {
        if (e.keyCode === 37) {
            // Flecha izquierda
            currentIndex = Math.max(0, currentIndex - 1);
        } else if (e.keyCode === 39) {
            // Flecha derecha
            currentIndex = Math.min($(".product").length - 1, currentIndex + 1);
        }

        $(".product").removeClass("active").addClass("inactive");
        $(".product").eq(currentIndex).removeClass("inactive").addClass("active");
        updateTransform();
    });

    function updateTransform() {
        var translateX = -currentIndex * ($(".product").outerWidth(true) + 2);
        $(".product-container").css("transform", "translateX(" + translateX + "px)");
    }

    $(".btn-info").click(function () {
        // Pausa el carrusel al abrir la ventana modal
        carousel.carousel('pause');
    });

    // Configuración del carrusel de Bootstrap al cerrar la ventana modal
    $('#specModal').on('hidden.bs.modal', function () {
        // Reinicia el carrusel al cerrar la ventana modal
        carousel.carousel('cycle');
    });

    // Configuración de clic en botón de "Especificaciones"
    $(".btn-info").click(function () {
        // Activa el modal
        $('#specModal').modal('show');
    });

    // Configuración del carrusel de Bootstrap al cambiar de slide
    $('#carouselExample').on('slide.bs.carousel', function (e) {
        currentIndex = $(e.relatedTarget).index();
        $(".product").removeClass("active").addClass("inactive");
        $(".product").eq(currentIndex).removeClass("inactive").addClass("active");
        updateTransform();
    });

    // Configuración de clic en producto
    $(".product").click(function () {
        $(".product").removeClass("active").addClass("inactive");
        $(this).removeClass("inactive").addClass("active");
        currentIndex = $(this).index();
        updateTransform();
    });

    // Configuración de teclas de flecha
    $(document).keydown(function (e) {
        if (e.keyCode === 37) {
            // Flecha izquierda
            currentIndex = Math.max(0, currentIndex - 1);
        } else if (e.keyCode === 39) {
            // Flecha derecha
            currentIndex = Math.min($(".product").length - 1, currentIndex + 1);
        }

        $(".product").removeClass("active").addClass("inactive");
        $(".product").eq(currentIndex).removeClass("inactive").addClass("active");
        updateTransform();
    });

    function updateTransform() {
        var translateX = -currentIndex * ($(".product").outerWidth(true) + 2); // Ancho del producto + 2px de margen
        $(".product-container").css("transform", "translateX(" + translateX + "px)");
    }

});

function initMap() {
    // Coordenadas de la ubicación de la tienda (reemplaza con tus propias coordenadas)
    var locationLatLng = { lat: 40.7128, lng: -74.0060 };

    // Crea un nuevo mapa en el contenedor con id "map"
    var map = new google.maps.Map(document.getElementById('map'), {
        center: locationLatLng,
        zoom: 15
    });

    // Crea un marcador en el mapa
    var marker = new google.maps.Marker({
        position: locationLatLng,
        map: map,
        title: 'Ubicación de la Tienda'
    });
}