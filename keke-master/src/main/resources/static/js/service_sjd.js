//var myChart = echarts.init(document.getElementById("shijd"));
//var option = {
//                title:{
//                    text:"观看人数"
//                },
//                tooltip:{              
//                    show:true,
//                    trigger:'item',
//                    position:[10,10],
//                },
//            
//                //工具箱
//                toolbox:{
//                	orient:'vertical',
//                	feature:{
//                		//保存图片为
//                		saveAsImage:{
//                			show:true
//               	    }
//
//               },
//               x:'left',
//               y:'bottom',
//                	},
//                legend:{
//                    data:['观看人数']
//                },
//                xAxis:{
//                    data:["6：00","7：30","9：00","10：30","12：00","13：30","15：00","16：30","18：00","19：30","21：00","22：30","24：00","1：30","3：00","4：30"]
//                },
//                yAxis:[{
//                	name:'观看人数',
//                	min:0,
//                	max:1000000
//                	
//                }],
//                series:[{
//                            name:["观看人数"],
//                            type:"line",
//                            
//                            data:[50000,200908,363457,61836,437847,677836]
//                        }]
//            };
//
//            myChart.setOption(option);
//




            backdata=[]
            var arr = [];									//
            var arrobj=[];
            console.log("arr",arr)
            console.log("arrobj",arrobj)

            $(function(){
            	var userid=sessionStorage.getItem("id");
            	$.ajax({
            		// 请求类型
            		type:"get",
            		// 请求路径
            		url:"STB/getTimeinfo",
            		// 返回数据类型
            		data:{
            			userid:userid,
            		},
            		dataType:"json",
            		// 请求成功后调用函数
            		success:function(data){
            			console.log("成功后返回的数据",data);
            			arr = [];
            			arrobj=[];
            			var backdata=data.stbInfo;
            			for(var i=0;i<backdata.length;i++){
            				arr.push(backdata[i].pro)
            				arrobj.push(backdata[i].program)
            			}
            			console.log("backdata",backdata);
            			console.log(arr)
            			console.log(arrobj)
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
            			                    data:arr
            			                },
            			                yAxis:[{
            			                	name:'观看人数',
            			                	min:0,
            			                	max:100
            			                	
            			                }],
            			                series:[{
            			                            name:["观看人数"],
            			                            type:"line",
            			                            data:arrobj
            			                        }]
            			            };

            			            myChart.setOption(option);
            			
            		},
            		// 请求失败后调用函数
            		error:function(data){
            			console.log("失败后返回的数据",data);
            		}
            		
            	})
            })