/**
 * Created by User on 2017/5/10.
 */
requirejs.config({
    paths:{
        demo1:'demosJs/demo1',
        demo11:'demosJs/demo11',
        jQuery:'lib/jQuery'
    },
    shim:{
        demo1:{
            deps:["jQuery"]
        },
        demo11:{
            deps:['jQuery']
        }
    }
});

require(['demo1'],function(demo1){
    demo1();


    console.log('加载完毕');

});