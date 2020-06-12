$(".user-arrow-down").on("click", function () {
    if ($(".dropdown").is(":hidden")) {
        $(".dropdown").show();
    } else {
        $(".dropdown").hide();
    }
})
$(".business-order").on("click", function () {
    $(".main-content").show();
    $("table").show();
    $(".main-pagination").show();
    $(".main-sercive").hide();
    $(".business-order").addClass("border-red");
    $(".service-order").removeClass("border-red");
    $(".main-top li").eq(3).text("支付中心");
})
$(".service-order").on("click", function () {
    $(".main-content").hide();
    $("table").hide();
    $(".main-pagination").hide();
    $(".main-sercive").show();
    $(".service-order").addClass("border-red");
    $(".business-order").removeClass("border-red");
    $(".main-top li").eq(3).text("结算中心");
})
$(".search li").eq(0).on("click", function () {
    $(".search li").removeClass("font-red");
    $(this).addClass("font-red");
})
$(".search li").eq(1).on("click", function () {
    $(".search li").removeClass("font-red");
    $(this).addClass("font-red");
})
$(".search li").eq(2).on("click", function () {
    $(".search li").removeClass("font-red");
    $(this).addClass("font-red");
})
$(".search li").eq(3).on("click", function () {
    $(".search li").removeClass("font-red");
    $(this).addClass("font-red");
})



var check =null;
var str="";



$(".change-info").on("click", function(event){
    $(".masking").show();
    $(".service_name1").val(txt1);
    $(".service_cellphone1").val(txt2);
    $(".service_email1").val(txt5);
     $(".service_born1").val(txt7);
})
$(".save").on("click", function(event){
    $(".masking").hide();
           var id=sessionStorage.getItem("id")
           var placeholder= $("#search").attr("placeholder");
           console.log(id);
		    var name=$(".service_name1").val();
 			var cellphone=$(".service_cellphone1").val();
 			var region=$("#district").val();
 			console.log("区====1"+region);
// 			var weixin=$(".service_weixin1").val();
// 			var qq=$(".service_qq1").val();
 			var email=$(".service_email1").val();
 			var born=$(".service_born1").val();
 			console.log("保存"+name,cellphone,email,born);
 			
// 			var province = $("#province").val();
// 			var county = $("#county").val();
// 			var district = $("#district").val();
// 			console.log("生"+province,county,district);
 				
 			 $.ajax({
 				//请求类型
 				type:"post",
 				//请求路径
 				url:"Adminstrator/AdminstratorUpdate",
 				//请求参数
 				data:{
 					name:name,
 					id:id,
// 					region:region,
 					cellphone:cellphone,
// 					weixin:weixin,
// 					qq:qq,
 					email:email,
 					born:born,
 				},
 				//返回数据类型
 				dataType:"json",
 				//请求成功后调用函数
 				success:function(data){
 					console.log("保存",data);
 					location.href="redirect?page=operator_expenses"
 					alert(data.msg);
 				},
 				error:function(data){
 					console.log("失败后返回的数据",data);
 				}
 			}) 
})
$(".cancel").on("click", function(event){
    $(".masking").hide();
    console.log("取消");
})


var txt1;var txt2;var txt5;var txt6; var txt7;

$(function(){
	var loginId=sessionStorage.getItem("id")
    console.log(loginId);
	    var userName=$(".service_name").val();
	    var regionId=$(".service_regionId").val();
		var cellphone=$(".service_cellphone").val();
//		var weixin=$(".service_weixin").val();
//		var qq=$(".service_qq").val();
		var email=$(".service_email").val();
		var born=$(".service_born").val();
			
		console.log(name,regionId,cellphone,email,born);
	$.ajax({
			//请求类型
			type:"get",
			//请求路径
			url:"Adminstrator/getAdminstrator",
			//请求参数
			data:{
				userName:userName,
				loginId:loginId,
				regionId:regionId,
				cellphone:cellphone,
//				weixin:weixin,
//				qq:qq,
				email:email,
				born:born,
			},
			//返回数据类型
			dataType:"json",
			//请求成功后调用函数
			success:function(data){
					console.log("成功后返回的数据",data);
					var adminstrator=data.adminstrator;
					//每次清空table
					$(".service_name").html("");
					var txt="";
					txt+=adminstrator[0].userName;
						    	console.log(txt);
		 					$(".service_name").append(txt);
		 					txt1=txt;
		 			$(".service_regionId").html("");
							var txt="";
							txt+=adminstrator[0].regionId;
								    	console.log("省市区",txt);
				 			$(".service_regionId").append(txt);
				 			txt6=txt;
				 	$(".service_cellphone").html("");
							var txt="";
							txt+=adminstrator[0].cellphone;
								    	console.log(txt);
				 			$(".service_cellphone").append(txt);
				 			txt2=txt;
				 	$(".service_born").html("");
							var txt="";
							txt+=adminstrator[0].born;
								    	console.log(txt);
				 			$(".service_born").append(txt);
				 			txt7=txt;
//				 	$(".service_weixin").html("");
//							var txt="";
//							txt+=provider[0].weixin;
//								    	console.log(txt);
//				 			$(".service_weixin").append(txt);
//				 			txt3=txt;
//				 	$(".service_qq").html("");
//									var txt="";
//									txt+=provider[0].qq;
//										    	console.log(txt);
//						 	$(".service_qq").append(txt);
//						 	txt4=txt;
					$(".service_email").html("");
							var txt="";
							txt+=adminstrator[0].email;
								    	console.log(txt);
				 	       $(".service_email").append(txt);
				 	      txt5=txt;
		 				},
			error:function(data){
				console.log("失败后返回的数据",data);
			}
		}) 
})


//
//$(function(){
//	$.ajax({
//		type: "post",
//		url: "provider2/province",
//		dataType: "json",
//		success: function(data){
//			var province = data.province;
//			console.log("成功后返回的数据",province);
//			$("#province").html("");
//			txt="";
//			txt +=`<option value="">省</option>`
//			for(var i = 0;i<province.length;i++){
//				txt +=`
//                        <option onclick="provinceid('${province[i].id}')"  value="${province[i].id}">${province[i].name}</option>`
//			}
//			$("#province").append(txt);
//			$("#county").html("");
//			txt="";
//			txt +=`<option value="">市</option>`
//			$("#county").append(txt);
//			$("#district").html("");
//			txt="";
//			txt +=`<option value="">区</option>`
//			$("#district").append(txt);
//			
//		},
//		error: function(data){
//			console.log("失败后返回的数据",data);
//		}
//	})
//})
//
//function changesheng(){
//	var id = $("#province").val();
//	console.log("省",id);
//	$.ajax({
//		type: "post",
//		url: "provider2/county",
//		data:{
//			id:id,
//		},
//		dataType: "json",
//		success: function(data){
//			var county = data.county;
//			$("#county").html("");
//			txt="";
//			txt +=`<option value="">市</option>`
//			for(var i = 0;i<county.length;i++){
//				txt +=`
//                        <option class="countyid" value="${county[i].id}">${county[i].name}</option>`
//			}
//			$("#county").append(txt);
//			$("#district").html("");
//			txt="";
//			txt +=`<option value="">区</option>`
//			$("#district").append(txt);
//		},
//		error: function(data){
//			console.log("失败后返回的数据",data);
//		}
//	})
//}
//
//
//function changeshi(){
//	var id = $("#county").val();
//	console.log("市id",id);
//	$.ajax({
//		type: "post",
//		url: "provider2/district",
//		data:{
//			id:id,
//		},
//		dataType: "json",
//		success: function(data){
//			var district = data.district;
//			$("#district").html("");
//			txt="";
//			txt +=`<option value="">区</option>`
//			for(var i = 0;i<district.length;i++){
//				txt +=`
//                        <option class="districtid" value="${district[i].id}">${district[i].name}</option>`
//			}
//			$("#district").append(txt);
//		},
//		error: function(data){
//			console.log("失败后返回的数据",data);
//		}
//	})
//}

	//用户页面头像
        $(function(){
        	
        	$("#sysuser").append(txt);
        	var id=sessionStorage.getItem("id");
        	var id1=$(".userid").val(id);
        	console.log(id1);
        	$("#ss").html("");
        	var txt="";
        	txt +=`
        	<img class="img" name="id" src="Adminstrator/AdminstratorheadImg?id=${id}" onerror="defaultImg(this)"/>`
        		$("#ss").append(txt);
        })

       //图像展示
       
        	function defaultImg(img){
        	var id=sessionStorage.getItem("id")
        		img.src="images/user-lg.png";
        	}

        $("#form1").ajaxForm(function(data) {
        	console.log(data);
        	location.href="redirect?page=operator_expenses"
        	console.log("str:" + JSON.stringify(data));
        	}
        );

       
      
        $(function(){
        	img();
        	login();
        })
//********************顶部用户信息************
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
        	sessionStorage.setItem("name","")
        	sessionStorage.setItem("status",2)
        	 location.href="redirect?page=index"
        })

// 账户管理
	$(function(){
 			var id=sessionStorage.getItem("id");
 			$.ajax({
 				// 请求类型
 				type:"post",
 				// 请求路径
 				url:"Adminstrator/getAdminstratorinfo",
 				// 返回数据类型
 				data:{
 					id:id,
 				},
 				dataType:"json",
 				// 请求成功后调用函数
 				success:function(data){
 					console.log("成功后返回的数据",data);
 					var RegisterUserInfo=data.RegisterUserInfo;
 					// 每次清空table
 					$("#table").html("");
 					var txt="";
 					for(var i=0;i<3;i++){
// 						if(providerInfo[i].status==1){
 						    txt +=`
 						    <tr>
                        <td><input type="checkbox" class="checkbox checkbox1" value="${RegisterUserInfo[i].id}" name="product"></td>
                        <td>${RegisterUserInfo[i].id}</td>
                        <td>${RegisterUserInfo[i].cellphone}</td>
                        <td>${RegisterUserInfo[i].password}</td>
                        <td>
                            <span class="handle-btn"><i class="fa fa-edit fa-fw"></i>编辑</span>
 	                        <span class="handle-btn" onclick="dl('${RegisterUserInfo[i].id}')"><i class="fa fa-close fa-fw"></i>删除</span>
                        </td>
                    </tr>`
// 						}
 					}
 					console.log(txt);
 					$("#table").append(txt);
 				},
 				// 请求失败后调用函数
 				error:function(data){
 					console.log("失败后返回的数据",data);
 				}
 			})
 		})
 		
 		
 function dl(id){
    	$.ajax({
				// 请求类型
				type:"post",
				// 请求路径
				url:"Adminstrator/Adminstratordelete",
				// 返回数据类型
				data:{
					id:id,
				},
				dataType:"json",
				// 请求成功后调用函数
				success:function(data){
					console.log("成功后返回的数据",data);
					location.href="redirect?page=operator_expenses"
				},
				// 请求失败后调用函数
				error:function(data){
					console.log("请求失败",data);
				}
})
    }



$(".checkall").click(function () {
    $(".checkbox1").prop("checked", $(this).prop("checked"))
});

$(document).on("click", ".checkbox1", function (e) {
    var flag = $(".checkbox1:checked").length == $(".checkbox1").length;
    $(".checkall").prop("checked",flag);
//    console.log(e.toElement.value,flag);//获取点击元素的value值
    var s5=str.split(',');
    flag=false;
    var index=-1;

    for(var i=0;i<s5.length;i++){
    	if(e.toElement.value==s5[i]){
    		flag=true;
    		index=i;
    	}
    }
    if(index!=-1){
    str="";
    for(var i=0;i<s5.length;i++){
    	if(i!=index){
    		str+=s5[i]+",";
    	}
    }
    }else{
 str +=e.toElement.value+",";}
    var s5=str.split(',');
    str="";
    for(var i=0;i<s5.length;i++){
    	if(s5[i]!=""){
    		str+=s5[i]+",";
    	}
    }
    console.log(str);
})

$(".checkbox1").on("change",function(){
	var flag = $(".checkbox1:checked").length == $(".checkbox1").length;
	console.log(flag);
})

//全选
$(".checkall").on("change",function(){
	check=this.checked;
	$(":checkbox[name='product']").attr("checked",check);
	//判断是否全选
	str=""
	var input=$(":checkbox[name='product']");
	if(check){
		for(var i=0;i<input.length;i++){
			if(input.length-1==i){
				str +=$(input[i]).val();
			}else{
				str +=$(input[i]).val()+",";
			}
		}
		console.log(str);
	}
})

////全部删除
//$(".deleteall").on("click",function(){
//	console.log(str);
//	$.ajax({
//		type: "post",
//		url: "pp/allUpLine",			
//		data:{
//			str:str,
//		},
//		dataType: "json",
//		success: function(data){
//			console.log("成功后返回的数据",data);
//			 location.href="redirect?page=operator_product"
//		},error: function(data){
//			console.log("失败后返回的数据",data);
//		}
//	})
//})