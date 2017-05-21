/**
 * Created by User on 2017/5/17.
 */
define(["jquery"],function(){
    $(function(){
       var spans= $("span");
       var $hpointer=$(".hour");
       var $mpointer=$(".minute");
       var $spointer=$(".second");
       for(var i=0;i<spans.length;i++){
           spans[i].style.transform='rotate('+(i*30+45)+'deg)';
       }

       function drawClock(){
           var now=new Date(),
               h=now.getHours()%12,
               m=now.getMinutes(),
               s=now.getSeconds();
            $hpointer.css("transform",'rotate('+(h*30-90)+'deg)');
            $mpointer.css("transform",'rotate('+(m*6-90)+'deg)');
            $spointer.css("transform",'rotate('+(s*6-90)+'deg)');
       }
       drawClock();
       setInterval(drawClock, 1000);
    });
});