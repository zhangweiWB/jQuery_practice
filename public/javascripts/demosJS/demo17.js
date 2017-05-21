/**
 * Created by User on 2017/5/19.
 */
define(["jquery"],function($){
    $(function(){
        //选取元素
        var $result=$("#result");
        //为复选框绑定事件
        $("#vote").click(function(event){
            var target=event.target;
            var text=$(target).parent().text();

            if(target.checked){
                console.log("选中");
                addResult(text);

            }else{
                console.log("未选中");
                delResult(text);
            }
        });
        //为删除按钮绑定事件
        $result.click(function(event){
            var target=event.target;
            var text=target.parentNode.childNodes[0].textContent;
            delResult(text);
            $("#vote div:contains("+text+") input")[0].checked=false;
        });
        //添加元素
        function addResult(text){
            var $temp=$("<div>"+text+"<span>x</span></div>");
            $result.append($temp);
        }
        //删除元素
        function delResult(text){

            var $temp=$("#result div:contains("+text+")");

            $temp.remove();
        }
    })
});