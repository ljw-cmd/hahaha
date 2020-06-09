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
            var scatter_data = echarts.init(document.getElementById('scatter_data'));
            scatter_data.showLoading();
           
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
                    scatter_data.hideLoading();//隐藏加载动画
 
                    scatter_data.setOption({
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
                        series : [
                            {
                                name:'访问来源',
                                type:'scatter',
//                              radius : '55%',
//                              center: ['50%', '60%'],
                                symbolize:10,
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

