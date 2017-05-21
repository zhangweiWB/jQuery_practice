/**
 * Created by User on 2017/5/12.
 */
define(["jquery"],function($){
        $(function(){
             var $info=$("#info"),
                 $find=$($("input")[0]),
                 $btn=$("#search"),
                 $client=$("#client");
             $btn.click(function(){

                 var info_str=$info.val().trim();
                 var find_str=$find.val();
                 var newStr=info_str.replace(new RegExp(find_str,'g'),"<span>"+find_str+"</span>");
                 $client.html('<div>'+newStr+'</div>');
             });
        });
    }
);


