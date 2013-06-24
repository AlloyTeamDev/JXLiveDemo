;Jx().$package(function(J){

    var $toggleSource = J.dom.id('toggleSource');
    var $source = J.dom.id('source');

    var resizeIframe = function(){
        window.parent.onIframeResize(J.dom.getClientWidth(document.body), J.dom.getClientHeight(document.body));
    }

    var toggleSource = function(){
        if(!J.dom.isShow($source)){
            J.dom.show($source);
            $toggleSource.innerHTML = '隐藏源码';
            if(!J.dom.hasClass($source, 'prettyprinted')){
                J.dom.addClass($source, 'prettyprinted');
                prettyPrint(resizeIframe);
            }else{
                setTimeout(resizeIframe, 0);
            }
        }else{
            J.dom.hide($source);
            $toggleSource.innerHTML = '显示源码';
            setTimeout(resizeIframe, 0);
        }
    }

    J.event.on(window, 'load', resizeIframe);
    J.event.on(window, 'resize', resizeIframe);
    if($toggleSource){
        J.event.on($toggleSource, 'click', toggleSource);
    }
});