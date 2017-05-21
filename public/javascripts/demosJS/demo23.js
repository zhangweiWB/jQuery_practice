/**
 * Created by User on 2017/5/15.
 */
define(['jquery'],function($){
    $(function(){
        var $box=$("#box");
        var $count=$("#count");
        var $image=$("#list li");
        var $nav=$("#count li");
        var image_len=$image.length;
        var nav_len=$nav.length;
        var index=0;
        var timer;
        function play(){
            timer=setInterval(function(){
                console.log(index);
                show(++index%image_len);
            },3000);
        };
        play();
        function show(current){
            index=current;

            // $($image[current]).removeClass("current");
            // $($nav[current]).removeClass("current");
            $("#list").find(".current").removeClass("current");
            $("#count").find(".current").removeClass("current");
            // current=++current%image_len;
            $($image[current]).addClass("current");
            $($nav[current]).addClass("current");
        };

        $box.mouseover(function(){
            clearInterval(timer);
        });
        $box.mouseout(function(){
            play();
        });
        for(var i=0;i<nav_len;i++){
            $nav[i].index=i;
            $($nav[i]).mouseover(function(event){
                event.stopPropagation();
                clearInterval(timer);
                show(this.index);
            });
            //     .mouseout(function(event){
            //     event.stopPropagation();
            //     window.index=this.index;
            //     play();
            // });
        }
    });
});