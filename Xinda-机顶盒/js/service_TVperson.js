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
