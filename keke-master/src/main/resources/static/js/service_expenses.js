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


//$(".pnum ").on("click", function(id){
////	index="pnum";
//	list6();
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
	                url: "/STB/getmarketinfo",
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



 $(function(){
		$("#sysuser").html("");
		var txt="";
		txt +=sessionStorage.getItem("name")
		$("#sysuser").append(txt);
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
    	
    	//退出登录
    	$(".exit").on("click",function(){
    		sessionStorage.setItem("id","")
    		sessionStorage.setItem("name","")
    		sessionStorage.setItem("status",2)
    		 location.href="redirect?page=index"
    	})