var myChart = echarts.init(document.getElementById("years"));
var option = {
                title:{
                    text:"某天流量访客趋势"
                },
                tooltip:{              
                    show:true
                },
                //工具箱
                toolbox:{
                	show:true,
                	feature:{
                		//保存图片为
                		saveAsImage:{
                			show:true
                		}
                	}
                	
                },
                legend:{
                    data:['观看人数']
                },
                xAxis:{
                	name:['年龄'],
                    data:["10","20","30","40","50","60","70","80","90","100"]
                },
                yAxis:[{
                	name:'观看人数',
                	min:0,
                	max:1000000
                	
                }],
                series:[{
                            name:["观看人数"],
                            type:"bar",
                            data:[50000,200908,363457,61836,437847,677836]
                        }]
            };

            myChart.setOption(option);
