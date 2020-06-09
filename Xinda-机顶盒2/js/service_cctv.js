$(function(){
$.get("${ctx}/cargo/chat/factoryRecord",function(data){
var myChart = echarts.init(document.getElementById("ctv"));

//定义参数,用来替换图表所需要的参数
//数组
var titles = new Array();
var numbers1= new Array();
var numbers2= new Array();
//对data进行便历,获取参数
for (var i = 0; i < data.length; i++) {
titles[i]=data[i].time;
numbers1[i]=data[i].wpnum;
numbers2[i]=data[i].lpnum;
}

var option = {
                title:{
                    text:"流量访客趋势"
                },
                tooltip:{              
                    show:true,
                    trigger:'item',
                    position:[10,10],
                },
            
                //工具箱
                toolbox:{
                	orient:'vertical',
                	feature:{
                		//保存图片为
                		saveAsImage:{
                			show:true
               	    }

               },
               x:'left',
               y:'bottom',
                	},
                legend:{
                    data:['观看人数','收藏人数']
                },
                xAxis:{
                    data:["6：00","7：30","9：00","10：30","12：00","13：30","15：00","16：30","18：00","19：30","21：00","22：30","24：00","1：30","3：00","4：30"]
                },
                yAxis:[{
                	name:'观看人数',
                	min:0,
                	max:1000000
                	
                },{
                	name:'收藏人数',
                	min:0,
                	max:10000
                	
                }],
                series:[{
                            name:["观看人数"],
                            type:"line",
                            data:numbers1
                        },
                {
                	        name:["收藏人数"],
                            type:"bar",
                            yAxisIndex:1,
                            data:numbers2
                }]
            };

            myChart.setOption(option);
            })
})