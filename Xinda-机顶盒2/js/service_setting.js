var check =null;
var str="";


$(".user-arrow-down").on("click",function(){
    if($(".dropdown").is(":hidden")){
        $(".dropdown").show();
 }else{
       $(".dropdown").hide();
 }
})
$(".order1").on("click", function(){
    $(".main-content").show();
    $("table").show();
    $(".main-pagination").show();
    $(".main-sercive").hide();
    $(".order1").addClass("border-red");
    $(".order2").removeClass("border-red");
    $(".main-top li").eq(3).text("正常用户");
})
$(".order2").on("click", function(){
    $(".main-content").hide();
    $("table").hide();
    $(".main-pagination").hide();
    $(".main-sercive").show();
    $(".order2").addClass("border-red");
    $(".order1").removeClass("border-red");
    $(".main-top li").eq(3).text("停用用户");
})
$(".order3").on("click", function(){
    $(".main-top li").eq(3).text("未通过用户");
})

$(".change-info").on("click", function(event){
    $(".masking").show();
    $(".service_name1").val(txt1);
    $(".service_cellphone1").val(txt2);
//  $(".service_weixin1").val(txt3);
//  $(".service_qq1").val(txt4);
    $(".service_email1").val(txt5);
//    var str=txt6.split(" ");
//    console.log("hude",str[1]);
//    $("#province").val(str[0]);
//    $("#county").val(str[1]);
//    $(".region2").val(str[2]);
      $(".service_birthday1").val(txt8);
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
 			var birthday=$(".service_birthday1").val();
 			console.log("保存"+name,cellphone,email,birthday);
 			
 			var province = $("#province").val();
 			var county = $("#county").val();
 			var district = $("#district").val();
 			console.log("生"+province,county,district);
 				
 			 $.ajax({
 				//请求类型
 				type:"post",
 				//请求路径
 				url:"provider/informationUpdate",
 				//请求参数
 				data:{
 					name:name,
 					id:id,
 					region:region,
 					cellphone:cellphone,
// 					weixin:weixin,
// 					qq:qq,
 					email:email,
 					birthday:birthday,
 				},
 				//返回数据类型
 				dataType:"json",
 				//请求成功后调用函数
 				success:function(data){
 					console.log("保存",data);
 					location.href="redirect?page=service_setting"
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


var txt1;var txt2;var txt3;var txt4;var txt5;var txt6, var txt7;

$(function(){
	var loginId=sessionStorage.getItem("id")
    console.log(loginId);
	    var name=$(".service_name").val();
	    var regionId=$(".service_regionId").val();
		var cellphone=$(".service_cellphone").val();
//		var weixin=$(".service_weixin").val();
//		var qq=$(".service_qq").val();
		var email=$(".service_email").val();
		var birthday=$(".service_birthday").val();
			
		console.log(name,regionId,cellphone,email,birthday);
	$.ajax({
			//请求类型
			type:"get",
			//请求路径
			url:"provider/getprovider",
			//请求参数
			data:{
				name:name,
				loginId:loginId,
				regionId:regionId,
				cellphone:cellphone,
//				weixin:weixin,
//				qq:qq,
				email:email,
				birthday:birthday,
			},
			//返回数据类型
			dataType:"json",
			//请求成功后调用函数
			success:function(data){
					console.log("成功后返回的数据",data);
					var provider=data.provider;
					console.log(provider);
					//每次清空table
					$(".service_name").html("");
					var txt="";
					txt+=provider[0].name;
						    	console.log(txt);
		 					$(".service_name").append(txt);
		 					txt1=txt;
		 			$(".service_regionId").html("");
							var txt="";
							txt+=provider[0].regionId;
								    	console.log("省市区",txt);
				 			$(".service_regionId").append(txt);
				 			txt6=txt;
				 	$(".service_cellphone").html("");
							var txt="";
							txt+=provider[0].cellphone;
								    	console.log(txt);
				 			$(".service_cellphone").append(txt);
				 			txt2=txt;
				 	$(".service_birthday").html("");
							var txt="";
							txt+=provider[0].birthday;
								    	console.log(txt);
				 			$(".service_birthday").append(txt);
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
							txt+=provider[0].email;
								    	console.log(txt);
				 	       $(".service_email").append(txt);
				 	      txt5=txt;
		 				},
			error:function(data){
				console.log("失败后返回的数据",data);
			}
		}) 
})

$(function(){
	$.ajax({
		type: "post",
		url: "provider2/province",
		dataType: "json",
		success: function(data){
			var province = data.province;
			console.log("成功后返回的数据",province);
			$("#province").html("");
			txt="";
			txt +=`<option value="">省</option>`
			for(var i = 0;i<province.length;i++){
				txt +=`
                        <option onclick="provinceid('${province[i].id}')"  value="${province[i].id}">${province[i].name}</option>`
			}
			$("#province").append(txt);
			$("#county").html("");
			txt="";
			txt +=`<option value="">市</option>`
			$("#county").append(txt);
			$("#district").html("");
			txt="";
			txt +=`<option value="">区</option>`
			$("#district").append(txt);
			
		},
		error: function(data){
			console.log("失败后返回的数据",data);
		}
	})
})

function changesheng(){
	var id = $("#province").val();
	console.log("省",id);
	$.ajax({
		type: "post",
		url: "provider2/county",
		data:{
			id:id,
		},
		dataType: "json",
		success: function(data){
			var county = data.county;
			$("#county").html("");
			txt="";
			txt +=`<option value="">市</option>`
			for(var i = 0;i<county.length;i++){
				txt +=`
                        <option class="countyid" value="${county[i].id}">${county[i].name}</option>`
			}
			$("#county").append(txt);
			$("#district").html("");
			txt="";
			txt +=`<option value="">区</option>`
			$("#district").append(txt);
		},
		error: function(data){
			console.log("失败后返回的数据",data);
		}
	})
}


function changeshi(){
	var id = $("#county").val();
	console.log("市id",id);
	$.ajax({
		type: "post",
		url: "provider2/district",
		data:{
			id:id,
		},
		dataType: "json",
		success: function(data){
			var district = data.district;
			$("#district").html("");
			txt="";
			txt +=`<option value="">区</option>`
			for(var i = 0;i<district.length;i++){
				txt +=`
                        <option class="districtid" value="${district[i].id}">${district[i].name}</option>`
			}
			$("#district").append(txt);
		},
		error: function(data){
			console.log("失败后返回的数据",data);
		}
	})
}


$(function(){
	$("#sysuser").html("");
	var txt="";
	txt +=sessionStorage.getItem("name")
	$("#sysuser").append(txt);
	var id=sessionStorage.getItem("id");
	var id1=$(".userid").val(id);
	console.log(id1);
	$("#ss").html("");
	var txt="";
	txt +=`
	<img class="img" name="id" src="/provider2/provider_Img?id=${id}" onerror="defaultImg(this)"/>`
		$("#ss").append(txt);
})

//图像展示
	function defaultImg(img){
	var id=sessionStorage.getItem("id")
		img.src="images/user-lg.png";
	}

$("#form1").ajaxForm(function(data) {
	console.log(data);
	location.href="redirect?page=service_setting"
	console.log("str:" + JSON.stringify(data));
	}
);
//退出登录
$(".exit").on("click",function(){
	sessionStorage.setItem("id","")
	sessionStorage.setItem("name","")
	sessionStorage.setItem("status",2)
	 location.href="redirect?page=index"
})

function login(){
	var userid=sessionStorage.getItem("id");
	var username=sessionStorage.getItem("name");
	var status=sessionStorage.getItem("status");
	console.log(username);
	if(status!=1){
		alert("请先登录");
		 location.href="redirect?page=service_login"
	}
}

$(function(){
	img();
	login();
})
function img(){
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


// 账户管理
	$(function(){
 			var userid=sessionStorage.getItem("id");
 			$.ajax({
 				// 请求类型
 				type:"post",
 				// 请求路径
 				url:"provider/getproviderinfo",
 				// 返回数据类型
 				data:{
 					userid:userid,
 				},
 				dataType:"json",
 				// 请求成功后调用函数
 				success:function(data){
 					console.log("成功后返回的数据",data);
 					var providerInfo=data.providerInfo;
 					// 每次清空table
 					$("#table").html("");
 					var txt="";
 					for(var i=0;i<providerInfo.length;i++){
// 						if(providerInfo[i].status==1){
 						    txt +=`
 						    <tr>
                        <td><input type="checkbox" class="checkbox checkbox1" value="${ppList[i].id}" name="product"></td>
                        <td>${providerInfo[i].id}</td>
                        <td>${providerInfo[i].phonenumber}</td>
                        <td>${providerInfo[i].password}</td>
                        <td>
                            <span class="handle-btn"><i class="fa fa-edit fa-fw"></i>编辑</span>
 	                        <span class="handle-btn" onclick="dl('${providerInfo[i].id}')"><i class="fa fa-close fa-fw"></i>删除</span>
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
				url:"provider/providerdelete",
				// 返回数据类型
				data:{
					id:id,
				},
				dataType:"json",
				// 请求成功后调用函数
				success:function(data){
					console.log("成功后返回的数据",data);
					location.href="redirect?page=service_product"
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

//全部删除
$(".deleteall").on("click",function(){
	console.log(str);
	$.ajax({
		type: "post",
		url: "pp/allUpLine",			
		data:{
			str:str,
		},
		dataType: "json",
		success: function(data){
			console.log("成功后返回的数据",data);
			 location.href="redirect?page=operator_product"
		},error: function(data){
			console.log("失败后返回的数据",data);
		}
	})
})