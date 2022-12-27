const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}

//Quand le document est prêt
$(document).ready(function () {

    $nav = $('.nav');//sélectionner l'élément .nav et associer cet élément à la variable créée $nav
    $toggleCollapse = $('.toggle-collapse'); //associer l'élément .toggle-collapse à la viable $toggleCollapse
    
    /** click event on toggle menu */
    //Quand on lique sur le bouton toggleCollapse
    //déclancher l'événememt click de l'élément associé à la variable $toggleCollapse
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    })
    //toggleClass() est une fonction qui permet d'ajouter ou supprimer des classes à l'élément html
    //dans cet exemple, on crée une nouvelle classe 'collapse'
    

    
    // owl-crousel for blog
    //initialiser l'élément '.owl-carousel' (owl-carrousel créé dans index.html)
    //créer un objet de owlCarousel 
    //c.à.d. créer un carousel (instance owlCarousel)
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });



    // click to scroll top
    $('.move-up span').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })

    // AOS Instance
    AOS.init();

});
