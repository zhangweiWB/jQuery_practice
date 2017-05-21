/**
 * Created by User on 2017/5/17.
 */
define(["jquery"],function($){
    $(function(){
        //获取元素
        var $city=$("#aqi_city");
        var $aqi=$("#aqi");
        var $btn=$("#btn");
        var $aqi_table=$("#aqi_table");
        var req_city=/^[A-Za-z\u4E00-\u9FA5]+$/;
        var req_aqi=/^\d+$/;
        var aqiData={};

        function renderTable(){
            $("#aqi_table tr:gt(0)").remove();
            for(city in aqiData){
                $aqi_table.append("<tr><td>"+city+"</td><td>"+aqiData[city]+"</td><td><button data-city="+city+">删除</button></td></tr>");
            }

        };
        $btn.click(function(){
            var city=$city.val().trim();
            var aqi=$aqi.val().trim();

            if(city==""){
                alert("城市名称不能为空");
                return
            }
            if(!req_city.test(city)){
                alert("城市名称必须为中英文字符");
                return
            }

            if(aqi==""){
                alert("空气质量指数不能为空");
                return
            }
            if(!req_aqi.test(aqi)){
                alert("空气质量指数必须为整数");
                return
            }
            aqiData[city]=aqi;
            renderTable();
        });

        $aqi_table.click(function(event){
            var target=event.target;

            delete aqiData[city];
            renderTable();
        });

    })
});