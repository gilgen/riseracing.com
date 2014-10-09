var docEnd = $(document).height();

$(document).ready(function(){
    var movie = new Scenery({
        scenes: 0,
        scene_length: 'window'
    });

    var thread1 = new Thread({
        element: '.header--full.paralax .bg_img_wrapper',
        property: 'transform',
        prop_start: '0',
        prop_end: '-250',
        unit: 'px',
        timeline_start: '0',
        timeline_end: '500'
    })

    // var thread2 = new Thread({
    //     element: '.contact',
    //     property: 'transform',
    //     prop_start: '-2000',
    //     prop_end: '0',
    //     unit: 'px',
    //     timeline_start: '50',
    //     timeline_end: (self.Doc.height - self.Window.height)
    // })

    // var thread3 = new Thread({
    //     element: '.contact',
    //     property: 'opacity',
    //     prop_start: '0',
    //     prop_end: '1',
    //     unit: '',
    //     timeline_start: '50',
    //     timeline_end: (1* (self.Doc.height - self.Window.height))

    // })

    // var thread4 = new Thread({
    //     element: '.contact .btn',
    //     property: 'transform',
    //     prop_start: '300',
    //     prop_end: '0',
    //     unit: 'px',
    //     timeline_start: '50',
    //     timeline_end: docEnd-1100
    // })

    // var thread5 = new Thread({
    //     element: '.contact .tagline',
    //     property: 'transform',
    //     prop_start: '-200',
    //     prop_end: '0',
    //     unit: 'px',
    //     timeline_start: '50',
    //     timeline_end: docEnd-1100
    // })
});
