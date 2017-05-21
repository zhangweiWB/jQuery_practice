/**
 * Created by User on 2017/5/12.
 */
define(['jquery'],function($){
    $(function(){
        var $block=$("#block");
        var relaX=0,relaY=0,blockX=0,blockY=0;
        $block.css({
            position: "absolute",
            left: ($(window).width() - $("#block").outerWidth()) / 2,
            top: ($(window).height() - $("#block").outerHeight()) / 2
        });
        $(window).bind('resize',function(){
            $block.css({
                position: "absolute",
                left: ($(window).width() - $("#block").outerWidth()) / 2,
                top: ($(window).height() - $("#block").outerHeight()) / 2
            });
        });
        drag($block);
    });
    function drag(drag){
        drag.mousedown(function(event){
            var offset=drag.offset();
            relaX=event.clientX-offset.left;
            relaY=event.clientY-offset.top;
            $(document).mousemove(function(event){
                blockX=event.clientX-relaX;
                blockY=event.clientY-relaY;
                drag.offset({
                    left:blockX,
                    top:blockY
                });
            })
                .mouseup(function(){
                $(this).unbind("mousemove");
            });

        });
    };
});



