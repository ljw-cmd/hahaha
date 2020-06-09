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






$(function () {
    // 路径配置
//  require.config({
//      paths: {
//          echarts: 'B-JUI/plugins/echarts/'
//      }
//  });
    //动态加载饼状图
    require(
//      [
//          'echarts',
//          'echarts/chart/pie' // 使用柱状图就加载bar模块，按需加载
//      ],
        function (echarts) {
            // 基于准备好的dom，初始化echarts图表
            var line_data = echarts.init(document.getElementById('line_data'));
            line_data.showLoading();
           
           $.ajax({
                url:'http://localhost:8080/项目名/xxx/xxx.do?'+(new Date()).getTime(),
                type:'get',
                async: true,
                cache: false,
//              String data = JSON.toJSONString(list);---这是将封装好的list集合转换为json格式
//              data = callback + "(" + data + ")";------------这是讲json格式转换为jsonp格式，
//              上面提到，jsonp格式就比json多了一个callback和（）而已。
                dataType:'jsonp',
//              String callback = request.getParameter("callback"); 这里需要接受jsonp传过来的叫callback的参数。
                jsonp: "callback",
                success:function (result) {
                	console.log(result);
                    line_data.hideLoading();//隐藏加载动画
 
                    line_data.setOption({
                    	title:{
                        text:"观看人数"
                        },
                        tooltip : {
                            trigger: 'item',
                            formatter: "{a} <br/>{b} : {c} ({d}%)"
                        },
                        legend: {
                            orient : 'vertical',
//                          x : 'left',
                            // data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                            data:result
                        },
                        toolbox: {
                            show : true,
                            feature : {
                                mark : {show: true},
                                dataView : {show: true, readOnly: false},
                                magicType : {
                                    show: true,
                                    type: ['pie', 'funnel'],
                                    option: {
                                        funnel: {
                                            x: '25%',
                                            width: '50%',
                                            funnelAlign: 'left',
                                            max: 1548
                                        }
                                    }
                                },
                                restore : {show: true},
                                saveAsImage : {show: true}
                            }
                        },
                        calculable : true,
                xAxis:{
                    data:["6：00","7：30","9：00","10：30","12：00","13：30","15：00","16：30","18：00","19：30","21：00","22：30","24：00","1：30","3：00","4：30"]
                },
                yAxis:[{
                	name:'观看人数',
                	min:0,
                	max:1000000
                	
                }],
                        series : [
                            {
                                name:'访问来源',
                                type:'line',
                                radius : '55%',
                                center: ['50%', '60%'],
                                data:result
                            }
                        ]
                    });
                },
	          error: function(result){
			console.log("失败后返回的数据",result);
		}
	          })
        }
    )
});
