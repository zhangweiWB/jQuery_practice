/**
 * Created by User on 2017/5/16.
 */
define(["jquery"],function($){
    $(function(){
        //获取元素
        var $verify=$("#btn");
        var $code=$("#code");
        var $input=$("input");
        //生成验证码
        var codes=[];
        var reg=/^[0-9A-Za-z]{4}$/;
        for(var i=49;i<58;i++){codes.push(i);}
        for(var i=65;i<91;i++){codes.push(i);}
        for(var i=97;i<123;i++){codes.push(i);}
        function identify_code(){
            var arr=[];
            for(var i=0;i<4;i++){
                var index=Math.floor(Math.random()*62+0);
                arr.push(String.fromCharCode(codes[index]));
            }
            return arr.join("");
        }
        $code.html(identify_code());
        $code.click(function(){
            $code.html(identify_code());
        });
        $verify.click(function(){
            //验证
            if(reg.test($input.val())){
                if($input.val().toLowerCase()==$code.html().toLowerCase()){//验证码正确
                    alert("验证码正确");
                }else{
                    alert("验证码错误");
                    $code.html(identify_code());
                }
            }else{//输入的不是四位字母验证码
                alert("验证码格式错误");
                $code.html(identify_code());
            }

        });
    });

});