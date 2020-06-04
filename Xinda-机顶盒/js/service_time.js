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
