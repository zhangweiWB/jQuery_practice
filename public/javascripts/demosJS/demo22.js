/**
 * Created by User on 2017/5/14.
 */
define(['jquery'],function($){
    $(function(){
        $("li").mouseenter(function(event){
            var $current=$(event.currentTarget);
            var $subnav= $current.find("div");

            if($subnav.length!=0){
                $subnav.css("display","block");
                //判断显示区域
                var nav_width=$("#nav").width();
                var offset_current=$current.offset();
                var subnav_width=$subnav.width();
                if(nav_width-offset_current.left>subnav_width){
                    $subnav.offset({left:offset_current.left});
                }else{
                    $subnav[0].style.right=0;
                }
            }
        })
            .mouseleave(function(event){
                var $current=$(event.currentTarget);
                var $subnav=$current.find("div");

                $subnav.css("display","none");
        });
    });
});