$(".user-arrow-down").on("click",function(){
    if($(".dropdown").is(":hidden")){
        $(".dropdown").show();
 }else{
       $(".dropdown").hide();
 }
})
$(".business-order").on("click", function(){
    $(".main-content").show();
    $("table").show();
    $(".main-pagination").show();
    $(".main-sercive").hide();
    $(".business-order").addClass("border-red");
    $(".service-order").removeClass("border-red");
    $(".main-top li").eq(3).text("注册用户");
})
$(".service-order").on("click", function(){
    $(".main-content").hide();
    $("table").hide();
    $(".main-pagination").hide();
    $(".main-sercive").show();
    $(".service-order").addClass("border-red");
    $(".business-order").removeClass("border-red");
    $(".main-top li").eq(3).text("服务商用户");
})


 var bzt2 = echarts.init(document.getElementById("tvp"));
            bzt2.setOption({
                title:{
                        text:"各频道观看人数占比",
                         textStyle:{
                        	fontSize:25
                        },
                        x:'center'
                    },
                tooltip:{              
                    trigger:'item',
                        },
                   //工具箱
                toolbox:{
                	feature:{
                		//保存图片为
                		saveAsImage:{
                			show:true
                		}
                	}                	
                },
                legend:{
                	orient:'virtical',
                	x:'left',
                    data:['湖南卫视','浙江卫视','cctv','广东卫视','金鹰卡通']
                },

                itemStyle:{
                    emphasis:{
                        shadowBlur:200,
                        shadowColor:"rgba(0,0,0,0.8)"
                    }
                },
                series:[
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: '55%',
                            center:['50%','60%'],
                            data:[
                                {value:235, name:'湖南卫视'},
                                {value:274, name:'浙江卫视'},
                                {value:310, name:'cctv'},
                                {value:335, name:'广东卫视'},
                                {value:400, name:'金鹰卡通'}
                            ]
                        }
                    ]       
            });
