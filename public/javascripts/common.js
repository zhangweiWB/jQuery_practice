/**
 * Created by User on 2017/5/14.
 */
require.config({
    paths:{
        jquery:"lib/jquery"
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