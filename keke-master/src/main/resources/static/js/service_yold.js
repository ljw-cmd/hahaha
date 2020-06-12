//var myChart = echarts.init(document.getElementById("years"));
//var option = {
//                title:{
//                    text:"某天流量访客趋势"
//                },
//                tooltip:{              
//                    show:true
//                },
//                //工具箱
//                toolbox:{
//                	show:true,
//                	feature:{
//                		//保存图片为
//                		saveAsImage:{
//                			show:true
//                		}
//                	}
//                	
//                },
//                legend:{
//                	  orient : 'vertical',
////                          x : 'left',
//                    data:['观看人数']
//                },
//                xAxis:{
//                	name:['年龄'],
//                    data:["10","20","30","40","50","60","70","80","90","100"]
//                },
//                yAxis:[{
//                	name:'观看人数',
//                	min:0,
//                	max:1000000
//                	
//                }],
//                series:[{
//                            name:["观看人数"],
//                            type:"bar",
//                            data:[50000,200908,363457,61836,437847,677836]
//                        }]
//            };
//
//            myChart.setOption(option);




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
            		url:"STB/getAgeinfo",
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
            				if(backdata[i].pro >= "02")
            				arr.push(backdata[i].pro)
            				//arrobj.push(backdata[i].program)
            			}
            			console.log("backdata",backdata);
            			console.log(arr)
            			console.log(arrobj)
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
            			                    data:['青年','老人','少年']
            			                },
            			                yAxis:[{
            			                	name:'观看人数',
            			                	min:0,
            			                	max:1000
            			                	
            			                }],
            			                series:[{
            			                            name:["观看人数"],
            			                            type:"bar",
            			                            data:arr
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


