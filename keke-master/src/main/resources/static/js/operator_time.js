 


backdata=[]
var arr1 = [];	
var arr2 = [];	
var arr3 = [];	//
var arrobj=[];
console.log("arrobj",arrobj)

$(function(){
	var userid=sessionStorage.getItem("id");
	$.ajax({
		// 请求类型
		type:"get",
		// 请求路径
		url:"STB/getMinuteinfo",
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
				if(backdata[i].time1=1){
					arr1.push(backdata[i].minute)
				}
				else if(backdata[i].time2=1){
					arr2.push(backdata[i].minute)
				}
				else if(backdata[i].time3=1){
					arr3.push(backdata[i].minute)
				}
				}
			console.log("backdata",backdata);
			console.log("arr1",arr1)
			console.log("arr2",arr2)
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
                	data:['青年','老人','少年'],
                	scale:true
                },
                series:[{
                            type:'scatter',
                            data:arr1
                        }]       
            });
            
			
		},
		// 请求失败后调用函数
		error:function(data){
			console.log("失败后返回的数据",data);
		}
		
	})
})



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





