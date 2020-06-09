$(".user-arrow-down").on("click",function(){
    if($(".dropdown").is(":hidden")){
        $(".dropdown").show();
 }else{
       $(".dropdown").hide();
 }
})  
$(".add-product-action").on("click", function(event){
    $(".masking").show();
})
$(".save").on("click", function(event){
    $(".masking").hide();
    console.log("保存");
})
$(".cancel").on("click", function(event){
    $(".masking").hide();
    console.log("取消");
})

var pageNum=1;
var nowpage=1;

//查询所有
	$(function(){
		img();
 			var userid=sessionStorage.getItem("id");
 			$.ajax({
 				// 请求类型
 				type:"get",
 				// 请求路径
 				url:"provider/getproviderinfo",
 				// 返回数据类型
// 				data:{
// 					userid:userid,
// 				},
 				dataType:"json",
 				// 请求成功后调用函数
 				success:function(data){
 			var userid=sessionStorage.getItem("id")
			var username=sessionStorage.getItem("name")
			var status=sessionStorage.getItem("status")
			if(status!=1){
				alert("请先登录");
				 location.href="redirect?page=service_login"
			}
			$("#sysuser").html("");
			var txt="";
			txt +=username
			$("#sysuser").append(txt);
 					
 					
 					console.log("成功后返回的数据",data);
 					var providerInfo=data.providerInfo;
 					// 每次清空table
 					$("#table").html("");
 					var txt="";
 					for(var i=0;i<3;i++){
// 						if(providerInfo[i].status==1){
 						    txt +=`
 						   <tr>						  
 						  <td>${providerInfo[i].jidingheName}</td>
 						 <td>${providerInfo[i].phonenumber}</td>
 						<td>${providerInfo[i].sex}</td>
 						 <td>${providerInfo[i].jidingheid}</td>
 						 <td>${providerInfo[i].regionid}</td>
 	                    </tr>`
// 						}
 					}
 					console.log(txt);
 					$("#table").append(txt);
 					
 			pageNum = data.pageNum;
			$(".page").html("");
			txt="";
			for(var i = 1;i<=pageNum;i++){
				txt +=`<span class="main-pagination-page" value="${i}" onclick="page(${i})" >${i}</span>`
			}
			$(".page").append(txt);
 			},
 				// 请求失败后调用函数
 				error:function(data){
 					console.log("失败后返回的数据",data);
 				}
 			})
 		})



function img(){
	var userid=sessionStorage.getItem("id")
	$(".img").html("");
	var txt="";
	txt +=`<img  src="pp/headImg?id=${userid}" onerror="defaultImg(this)" style="
    width: 50px;
    height: 50px;
    border-radius: 50px;
    display: inline-block;
    border: 1px solid #e1e1e1;
	"/>`
	$(".img").append(txt);
}
//头像
function defaultImg(img){
		img.src="images/user-lg.png";
}

	
	
//分页模糊查询
function page(i){
	console.log(i)
	nowpage=i;
	var phonenumber=$(".select").phonenumber();
	$.ajax({
		type: "post",
		url: "ou/paging",
		data:{
			phonenumber:phonenumber,
			pageSize:i,
			pageNum:2,
		},
		dataType: "json",
		success: function(data){
			var providerInfo=data.providerInfo;
			$("#table").html("");
			txt="";
			for(var i = 0;i<providerInfo.length;i++){
				txt +=`<tr>
                       <td>${providerInfo[i].jidingheName}</td>
 						 <td>${providerInfo[i].phonenumber}</td>
 						<td>${providerInfo[i].sex}</td>
 						 <td>${providerInfo[i].jidingheid}</td>
 						 <td>${providerInfo[i].regionid}</td>
                    </tr>`
			}
			$("#table").append(txt);
			pageNum = data.pageNum;
			console.log(pageNum);
			$(".page").html("");
			txt="";
			for(var i = 1;i<=pageNum;i++){
				txt +=`<span class="main-pagination-page" value="${i}" onclick="page(${i})" >${i}</span>`
			}
			$(".page").append(txt);
		},error: function(data){
			console.log("失败后返回的数据",data);
		}
	})
}	

	
	
//  $(".select-btn").on("click",function(){
//  	console.log("查询内容",$(".select").val());
//  	var phonenumber=$(".select").val();
//  	$.ajax({
//  		type: "post",
//  		url: "provider/lectLikeByOrderId",
//  		data:{
//  			phonenumber:phonenumber,
//  		},
//  		dataType: "json",
//  		success: function(data){
//  			var productList = data.productList;
//  			$("#table").html("");
//  			txt="";
//  			for(var i = 0;i<productList.length;i++){
//  				txt += `
//  				<tr>
//                  <td>${productList[i].jidingheName}</td>
// 					<td>${productList[i].phonenumber}</td>
// 					<td>${productList[i].sex}</td>
//                  <td>${productList[i].jidingheid}</td>
// 					<td>${productList[i].regionid}</td>
//              </tr>`
//  			}
//  			$("#table").append(txt);
//  			
//  		},error: function(data){
//  			console.log("失败后返回的数据",data);
//  		}
//  	})
//  })
//  


//上一页
$(".last").on("click",function(){
	if(nowpage!=1){	
		page(nowpage-1);}
})

//下一页
$(".next").on("click",function(){
	if(nowpage!=pageNum){	
		page(nowpage+1);}
})

//首页
$(".pagefirst").on("click",function(){
		page(1);
})

//尾页
$(".pagelast").on("click",function(){
		page(pageNum);
})

////查询
//$(".select-btn").on("click",function(){
//		page(1);
//})


//退出登录
$(".exit").on("click",function(){
	sessionStorage.setItem("id","")
	sessionStorage.setItem("name","")
	sessionStorage.setItem("status",2)
	 location.href="redirect?page=index"
})