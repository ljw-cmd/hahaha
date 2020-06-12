 var bzt2 = echarts.init(document.getElementById("tim"));
            bzt2.setOption({
                title:{
                        text:"观看时长与年龄段的关系"
         
                    },
         
                xAxis:{
                	name:'时长',
                	scale:true
                },
                yAxis:{
                	name:'年龄段',
                	scale:true
                },
                series:[{
                            type:'scatter',
                            symbolize:10,
                            data:[
                                [1,15],
                                [1.5,20],
                                [2,30],
                                [2.1,9],
                                [3,45],
                                [5,34],
                                [3.4,36],
                                [2.8,45],
                                [7,25],
                                [5,32],
                                [9.5,16],
                                [3.5,67],
                                [5,34],
                                [6,54],
                                [7,63],
                                [2,18],
                                [9,29],
                                [8,39],
                                [4,41]
                            ]
                        }]       
            });
            
            
            
//
//
//            backdata=[]
//            var arr1 = [];	
//            var arr2 = [];	
//            var arr3 = [];	//
//            var arrobj=[];
//            console.log("arrobj",arrobj)
//
//            $(function(){
//            	var userid=sessionStorage.getItem("id");
//            	$.ajax({
//            		// 请求类型
//            		type:"get",
//            		// 请求路径
//            		url:"STB/getMinuteinfo",
//            		// 返回数据类型
//            		data:{
//            			userid:userid,
//            		},
//            		dataType:"json",
//            		// 请求成功后调用函数
//            		success:function(data){
//            			console.log("成功后返回的数据",data);
//            			arr = [];
//            			arrobj=[];
//            			var backdata=data.stbInfo;
//            			for(var i=0;i<backdata.length;i++){
//            				if(backdata[i].time1=1){
//            					arr1.push(backdata[i].minute)
//            				}
//            				else if(backdata[i].time2=1){
//            					arr2.push(backdata[i].minute)
//            				}
//            				else if(backdata[i].time3=1){
//            					arr3.push(backdata[i].minute)
//            				}
//            				}
//            			console.log("backdata",backdata);
//            			console.log("arr1",arr1)
//            			console.log("arr2",arr2)
//            			var bzt2 = echarts.init(document.getElementById("tim"));
//                        bzt2.setOption({
//                            title:{
//                                    text:"观看时长与年龄段的关系"
//                     
//                                },
//                     
//                            xAxis:{
//                            	name:'时长',
//                            	scale:true
//                            },
//                            yAxis:{
//                            	name:'年龄段',
//                            	data:['青年','老人','少年'],
//                            	scale:true
//                            },
//                            series:[{
//                                        type:'scatter',
//                                        data:arr1
//                                    }]       
//                        });
//                        
//            			
//            		},
//            		// 请求失败后调用函数
//            		error:function(data){
//            			console.log("失败后返回的数据",data);
//            		}
//            		
//            	})
//            })
//
//
//
