 document.addEventListener('DOMContentLoaded', () => {
    /*section1*/
    let controller = new ScrollMagic.Controller();

    let timeline = new TimelineMax();
    timeline
    .from('.section_1_01', 4, {
        y: -1500,
        x: -550,
        ease: Power3.easeInOut
    })
    .from('.section_1_02', 4, {
        y: -1500,
        x: 650,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_03', 4, {
        y: -1300,
        x: -500,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_04', 4, {
        y: -100,
        x: -1500,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_05', 4, {
        y: -800,
        x: -2000,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_06', 4, {
        y: 1000,
        x: -1000,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_07', 4, {
        y: -50,
        x: 1500,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_08', 4, {
        y: 500,
        x: 1000,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_09', 4, {
        y: 100,
        x: 2000,
        ease: Power3.easeInOut
    }, '-=4')

    let scene = new ScrollMagic.Scene({
        triggerElement: '.first-section',
        duration: '100%',
        triggerHook: 0,
        offset: '800'
    })
    .setTween(timeline)
    .setPin('.first-section')
    .addTo(controller);
/*section2*/
    let timeline2 = new TimelineMax();
    timeline2
    .from('.section_2_01', 4, {
        y: -1500,
        x: -550,
        ease: Power3.easeInOut
    })
    .from('.section_2_02', 4, {
        y: -1500,
        x: 650,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_2_03', 4, {
        y: 1300,
        x: 900,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_2_04', 4, {
        y: -100,
        x: -1500,
        ease: Power3.easeInOut
    }, '-=4')
    
    let scene2 = new ScrollMagic.Scene({
        triggerElement: '.second-section',
        duration: '100%',
        triggerHook: -5,
        offset: '1000'
    })
    .setTween(timeline2)
    .setPin('.second-section')
    .addTo(controller);

/*section3*/

 
/*section4*/
    let timeline4 = new TimelineMax();
    timeline4
    .to('.section_4_01', 4, {
        autoAlpha: 0
    })
    .from('.section_4_02', 4, {
        autoAlpha: 0
    }, '-=4')
    .from('.section_4_03', 4, {
        autoAlpha: 0
    }) 
    .from('.section_4_04', 4, {
        autoAlpha: 0
    })
    .from('.section_4_05', 4, {
        autoAlpha: 0
    })
    .from('.section_4_06', 4, {
        autoAlpha: 0
    })
    .from('.section_4_07', 4, {
        autoAlpha: 0
    })
    .from('.section_4_08', 4, {
        autoAlpha: 0
    })
    .from('.section_4_09', 4, {
        autoAlpha: 0
    })

    let scene4 = new ScrollMagic.Scene({
        triggerElement: '.forth-section',
        duration: '100%',
        triggerHook: 0,
        offset: '600'
    })
    .setTween(timeline4)
    .setPin('.forth-section')
    .addTo(controller);
})