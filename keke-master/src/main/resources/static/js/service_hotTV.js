//$(function(){
//$.get("${ctx}/cargo/chat/factoryRecord",function(data){
//var myChart = echarts.init(document.getElementById("ctv"));
//
////定义参数,用来替换图表所需要的参数
////数组
//var titles = new Array();
//var numbers1= new Array();
//var numbers2= new Array();
////对data进行便历,获取参数
//for (var i = 0; i < data.length; i++) {
//titles[i]=data[i].time;
//numbers1[i]=data[i].wpnum;
//numbers2[i]=data[i].lpnum;
//}
//
//var option = {
//                title:{
//                    text:"流量访客趋势"
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
//                    data:['观看人数','收藏人数']
//                },
//                xAxis:{
//                    data:["6：00","7：30","9：00","10：30","12：00","13：30","15：00","16：30","18：00","19：30","21：00","22：30","24：00","1：30","3：00","4：30"]
//                },
//                yAxis:[{
//                	name:'观看人数',
//                	min:0,
//                	max:1000000
//                	
//                },{
//                	name:'收藏人数',
//                	min:0,
//                	max:10000
//                	
//                }],
//                series:[{
//                            name:["观看人数"],
//                            type:"line",
//                            data:numbers1
//                        },
//                {
//                	        name:["收藏人数"],
//                            type:"bar",
//                            yAxisIndex:1,
//                            data:numbers2
//                }]
//            };
//
//            myChart.setOption(option);
//            })
//})


var index="id"

$( function(){
	list6();
})

function list6(){
//	console.log("查询内容",$(".select").val());
//	var name=$(".select").val();
	var userid=sessionStorage.getItem("id")
	    $.ajax({
	                url: "/STB/getProinfo",
	                type: "get",
		data:{
//			name:name,
			  userid:userid,
        	  index:index,
		},
	              dataType:"json",
	              success:function(data){
	      			var userid=sessionStorage.getItem("id")
	      			console.log("成功后返回的数据",userid);
	    			var username=sessionStorage.getItem("name")
	    	          	console.log("成功后返回的数据",data);
//	    	        	alert(data.msg);
	    	          	var stbInfo=data.stbInfo;
	    	        	$(".table").html("");
	    	          	var txt="";
	    	          	for(var i=0;i<stbInfo.length;i++){
//	    	          		if(providerProductInfo[i].status==1){
	    	          		txt+= `    	          		
	    	          		    <div class="article" value="${stbInfo[i].id}">
            <ul class="article-info">
                <li>${stbInfo[i].channel}</li>
            </ul>
            <ul class="article-price">
                <li>${stbInfo[i].pro}	</li>  
            </ul>
            </div>  `;
//	    	          		}
	    	          	}
	    	        	$(".table").append(txt);
	                },
	            		error:function(data){
			console.log("失败返回后的数据",data);	
		}              
	})
}



//********************顶部用户信息并验证是否登录************
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
      	txt +=`<img  src="provider/headImg?id=${userid}" onerror="defaultImg(this)" style="
      	    width: 50px;
      	    height: 50px;
      	    border-radius: 50px;
      	    display: inline-block;
      	    border: 1px solid #e1e1e1;
      		"/>`
      	$(".img").append(txt);
      }
	function login(){
  	var userid=sessionStorage.getItem("id");
  	var username=sessionStorage.getItem("username");
  	var status=sessionStorage.getItem("status");
  	console.log(username);
  	if(status!=1){
  		alert("请先登录");
  		 location.href="redirect?page=service_login"
  	}
  }
//头像
    //图像展示
      
  	function defaultImg(img){
  	var id=sessionStorage.getItem("id")
  		img.src="images/user-lg.png";
  	}
//**********************************************************************************

//退出登录
$(".exit").on("click",function(){
	sessionStorage.setItem("id","")
	sessionStorage.setItem("name","")
	sessionStorage.setItem("status",2)
	 location.href="redirect?page=index"
})