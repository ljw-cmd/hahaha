$(".user-arrow-down").on("click",function(){
    if($(".dropdown").is(":hidden")){
        $(".dropdown").show();
 }else{
       $(".dropdown").hide();
 }
})
$(".order1").on("click", function(){
    $(".main-content").show();
    $(".returns_detailed").hide();
    $(".order1").addClass("border-red");
    $(".order2").removeClass("border-red");
})
$(".order2").on("click", function(){
    $(".main-content").hide();
    $(".returns_detailed").show();
    $(".order2").addClass("border-red");
    $(".order1").removeClass("border-red");
})

$(".content-nav li").on("click", function(event){
    $(".content-nav li").removeClass("nav-active");
    $(event.target).addClass("nav-active");
})




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
 						
 						    txt +=`
 						    <div class="article" value="${providerProductInfo[i].id}">
            <ul class="article-info">
                <li>${providerProductInfo[i].TV}</li>
            </ul>
            <ul class="article-price">
                <li>${providerProductInfo[i].personnum}	</li>
                  
            </ul></div>`
 						
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




$(".pnum ").on("click", function(id){
	index="pnum";
	list6();
})


function list6(){
	console.log("查询内容",$(".select").val());
	var name=$(".select").val();
	    $.ajax({
	                url: "product/select",
	                type: "get",
		data:{
			name:name,
			index:index,
		},
	              dataType:"json",
	              success:function(data){
	      			var userid=sessionStorage.getItem("id")
	      			console.log("成功后返回的数据",userid);
	    			var username=sessionStorage.getItem("name")
	    	          	console.log("成功后返回的数据",data);
//	    	        	alert(data.msg);
	    	          	var providerProductInfo=data.providerProductInfo;
	    	        	$(".table").html("");
	    	          	var txt="";
	    	          	for(var i=0;i<providerProductInfo.length;i++){
//	    	          		if(providerProductInfo[i].status==1){
	    	          		txt+= `    	          		
	    	          		    <div class="article" value="${providerProductInfo[i].id}">
            <ul class="article-info">
                <li>${providerProductInfo[i].TV}</li>>
            </ul>
            <ul class="article-price">
                <li>${providerProductInfo[i].personnum}	</li>  
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



 $(function(){
		$("#sysuser").html("");
		var txt="";
		txt +=sessionStorage.getItem("name")
		$("#sysuser").append(txt);
})

$(function(){
	img();
	login();
})
//退出登录
$(".exit").on("click",function(){
	sessionStorage.setItem("id","")
	sessionStorage.setItem("name","")
	sessionStorage.setItem("status",2)
	 location.href="redirect?page=index"
})

//function login(){
//	var userid=sessionStorage.getItem("id");
//	var username=sessionStorage.getItem("name");
//	var status=sessionStorage.getItem("status");
//	console.log(username);
//	if(status!=1){
//		alert("请先登录");
//		 location.href="redirect?page=service_login"
//	}
//}
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