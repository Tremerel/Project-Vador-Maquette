$(document).ready(function(){
    $(".name, .studio, .small-intro").lettering();

    // Images overlay effect
    anime({
        targets: '.home .studio-img-overlay',
        translateX: 1510,
        delay: 1000,
        duration: 1500,
        easing: 'easeInSine'
    })
    anime({
        targets: '.home .studio-img img',
        opacity: 1,
        delay: 1500,
        duration: 1500,
        easing: 'easeInSine'
    })

    // Petit titre 
    anime({
        targets: '.studio span',
        opacity: 1,
        duration: 1500,
        easing: 'easeInSine',
        delay: anime.stagger(100, {start: 3000})
    })


    // Grand titre 
    anime({
        targets: '.name span',
        opacity: 1,
        duration: 3000,
        easing: 'easeInSine',
        delay: anime.stagger(100, {start: 4500})
    })


    // Grand titre lettre haut et bas
    anime({
        targets: '.name .char2, .name .char4, .name .char6, .name .char9, .name .char11',
        keyframes: [
            {translateY: 25, duration: 1500}
        ],
        easing: 'easeInOutExpo',
        delay: 8000,
    })
    anime({
        targets: '.name .char3, .name .char5, .name .char8, .name .char10, .name .char12',
        keyframes: [
            {translateY: -25, duration: 1500}
        ],
        easing: 'easeInOutExpo',
        delay: 8000,
    })


    // logo 
    anime({
        targets: '.logo',
        opacity: 1,
        duration: 3000,
        delay:9500
    })

    // Menu 
    anime({
        targets: '.menu li',
        opacity: 1,
        duration: 3000,
        delay: anime.stagger(150, {start:10000})
    })

    // Intro 
    anime({
        targets: '.small-intro span',
        opacity: 1,
        duration: 1000,
        eading: 'easeInSine',
        delay: anime.stagger(50, {start: 10500})
    })
})