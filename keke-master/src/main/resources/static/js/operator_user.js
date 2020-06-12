backdata=[]
var arr = [];									//
var arrobj=[];
console.log("arr",arr)
console.log("arrobj",arrobj)

$(".user-arrow-down").on("click",function(){
    if($(".dropdown").is(":hidden")){
        $(".dropdown").show();
 }else{
       $(".dropdown").hide();
 }
})
$(".business-order").on("click", function(){
    $(".main-content").show();
    $("table").show();
    $(".main-pagination").show();
    $(".main-sercive").hide();
    $(".business-order").addClass("border-red");
    $(".service-order").removeClass("border-red");
    $(".main-top li").eq(3).text("注册用户");
})
$(".service-order").on("click", function(){
    $(".main-content").hide();
    $("table").hide();
    $(".main-pagination").hide();
    $(".main-sercive").show();
    $(".service-order").addClass("border-red");
    $(".business-order").removeClass("border-red");
    $(".main-top li").eq(3).text("服务商用户");
})


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




//********************顶部用户信息************
 $(function(){
        	img();
        	login();
        })
        function img(){
        	$("#sysuser").html("");
        	var txt="";
        	txt +=sessionStorage.getItem("username")
        	$("#sysuser").append(txt);
        	var userid=sessionStorage.getItem("id")
        	$(".img").html("");
        	var txt="";
        	txt +=`<img  src="Adminstrator/AdminstratorheadImg?id=${userid}" onerror="defaultImg(this)" style="
        	    width: 50px;
        	    height: 50px;
        	    border-radius: 50px;
        	    display: inline-block;
        	    border: 1px solid #e1e1e1;
        		"/>`
        	$(".img").append(txt);
        }

	function defaultImg(img){
    	var userid=sessionStorage.getItem("id")
    		img.src="images/user-lg.png";
    	}

        function login(){
        	var userid=sessionStorage.getItem("id");
        	var username=sessionStorage.getItem("username");
        	var status=sessionStorage.getItem("status");
        	console.log(username);
        	if(status!=1){
        		alert("请先登录");
        		 location.href="redirect?page=operator_login"
        	}
        }
      //退出登录
        $(".exit").on("click",function(){
        	sessionStorage.setItem("id","")
        	sessionStorage.setItem("username","")
        	sessionStorage.setItem("status",2)
        	 location.href="redirect?page=index"
        })

            




/*$(function () {
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
                url:'/STB/getProinfo'+(new Date()).getTime(),
                type:'get',
                async: true,
                cache: false,
//              String data = JSON.toJSONString(list);---这是将封装好的list集合转换为json格式
//              data = callback + "(" + data + ")";------------这是讲json格式转换为jsonp格式，
//              上面提到，jsonp格式就比json多了一个callback和（）而已。
                dataType:'json',
//              String callback = request.getParameter("callback"); 这里需要接受jsonp传过来的叫callback的参数。
                //jsonp: "callback",
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
});*/
