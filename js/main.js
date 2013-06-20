;Jx().$package(function(J){

    var $iframe = J.dom.id('demoWindow');

    var onIframeResize = window.onIframeResize = function(width, height){
        J.dom.setStyle($iframe, 'height', height + 'px');
    } 

});