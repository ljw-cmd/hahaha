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
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                        },
                   //工具箱
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
            var pie_data = echarts.init(document.getElementById('pie_data'));
            pie_data.showLoading();
           
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
                    pie_data.hideLoading();//隐藏加载动画
 
                    pie_data.setOption({
                        tooltip : {
                            trigger: 'item',
                            formatter: "{a} <br/>{b} : {c} ({d}%)"
                        },
                        legend: {
                            orient : 'vertical',
                            x : 'left',
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
                        series : [
                            {
                                name:'访问来源',
                                type:'pie',
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
