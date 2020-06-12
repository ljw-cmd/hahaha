// var bzt2 = echarts.init(document.getElementById("tvp"));
//            bzt2.setOption({
//                title:{
//                        text:"各频道观看人数占比",
//                         textStyle:{
//                        	fontSize:25
//                        },
//                        x:'center'
//                    },
//                tooltip:{              
//                    trigger:'item',
//                    formatter: "{a} <br/>{b} : {c} ({d}%)"
//                        },
//                   //工具箱
//                            toolbox: {
//                    show : true,
//                    feature : {
//                        mark : {show: true},
//                        dataView : {show: true, readOnly: false},
//                        magicType : {
//                            show: true,
//                            type: ['pie', 'funnel'],
//                            option: {
//                                funnel: {
//                                    x: '25%',
//                                    width: '50%',
//                                    funnelAlign: 'left',
//                                    max: 1548
//                                }
//                            }
//                        },
//                        restore : {show: true},
//                        saveAsImage : {show: true}
//                    }
//                },
//                legend:{
//                	orient:'virtical',
//                	x:'left',
//                    data:['湖南卫视','浙江卫视','cctv','广东卫视','金鹰卡通']
//                },
//
//                itemStyle:{
//                    emphasis:{
//                        shadowBlur:200,
//                        shadowColor:"rgba(0,0,0,0.8)"
//                    }
//                },
//                series:[
//                        {
//                            name: '访问来源',
//                            type: 'pie',
//                            radius: '55%',
//                            center:['50%','60%'],
//                            data:[
//                                {value:235, name:'湖南卫视'},
//                                {value:274, name:'浙江卫视'},
//                                {value:310, name:'cctv'},
//                                {value:335, name:'广东卫视'},
//                                {value:400, name:'金鹰卡通'}
//                            ]
//                        }
//                    ]       
//            });


            $(function(){
            	var userid=sessionStorage.getItem("id");
            	$.ajax({
            		// 请求类型
            		type:"get",
            		// 请求路径
            		url:"STB/getProinfo",
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
            				arr.push(backdata[i].channel)
            				arrobj.push({name:backdata[i].channel,value:+(backdata[i].pro)})
            			}
            			console.log("backdata",backdata);
            			console.log(arr)
            			console.log(arrobj)
            			var bzt2 = echarts.init(document.getElementById("tvp"));
            			option = {
            				    title: {
            				        text: '某站点用户访问来源',
            				        subtext: '纯属虚构',
            				        left: 'center'
            				    },
            				    tooltip: {
            				        trigger: 'item',
            				        formatter: '{a} <br/>{b} : {c} ({d}%)'
            				    },
            				    legend: {
            				        orient: 'vertical',
            				        left: 'left',
            				        data: arr
            				    },
            				    series: [
            				        {
            				            name: '访问来源',
            				            type: 'pie',
            				            center: ['50%', '60%'],
            				            data: arrobj,
            				            emphasis: {
            				                itemStyle: {
            				                    shadowBlur: 10,
            				                    shadowOffsetX: 0,
            				                    shadowColor: 'rgba(0, 0, 0, 0.5)'
            				                }
            				            }
            				        }
            				    ]
            				};
            			bzt2.setOption(option);
            			
            		},
            		// 请求失败后调用函数
            		error:function(data){
            			console.log("失败后返回的数据",data);
            		}
            		
            	})
            })