var myChart = echarts.init(document.getElementById("shijd"));
var option = {
                title:{
                    text:"观看人数"
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
                    data:['观看人数']
                },
                xAxis:{
                    data:["6：00","7：30","9：00","10：30","12：00","13：30","15：00","16：30","18：00","19：30","21：00","22：30","24：00","1：30","3：00","4：30"]
                },
                yAxis:[{
                	name:'观看人数',
                	min:0,
                	max:1000000
                	
                }],
                series:[{
                            name:["观看人数"],
                            type:"line",
                            data:[50000,200908,363457,61836,437847,677836]
                        }]
            };

            myChart.setOption(option);
