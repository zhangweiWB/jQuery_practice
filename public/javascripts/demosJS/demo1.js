/**
 * Created by User on 2017/5/12.
 */
define(["jquery"],function($){
        $(function(){
            $("#container").click(function(event) {
                var $ele=$(event.target);
                switch ($ele.attr('id')) {
                    case "btn1":
                        $('#object').addClass('biankuan');
                        break;
                    case "btn2":
                        $('#object').addClass('bianse');
                        break;
                    case "btn3":
                        $('#object').toggle();
                        break;
                    case "reset":
                        $("#object").removeClass().addClass('origin');
                    default:
                        break;
                }
            });
        });
        // return {
        //     demo1:demo1
        // };
    }
);


