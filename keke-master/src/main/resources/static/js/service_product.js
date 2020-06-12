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

    var pageNum="1";//当前页数
    var sumPage="0";//总页数
    var nowpage=1;
    
    var check =null;
    var str="";

//查询所有
$(function(){
	var userid=sessionStorage.getItem("id");
	$.ajax({
		// 请求类型
		type:"post",
		// 请求路径
		url:"STB/getSTBinfo",
		// 返回数据类型
		data:{
			userid:userid,
			pageNum:20,
			pageSize:1,
		},
		dataType:"json",
		// 请求成功后调用函数
		success:function(data){
			console.log("成功后返回的数据",data);
			var stbInfo=data.stbInfo;
			// 每次清空table
			$("#table").html("");
			var txt="";
			for(var i=0;i<stbInfo.length;i++){
				if(stbInfo[i].pro=1){
					txt +=`
						   <tr>
						   	<td>${stbInfo[i].name}</td>
						  	<td>${stbInfo[i].cellphone}</td>
						  	<td>${stbInfo[i].gender}</td>
						  	<td>${stbInfo[i].id}</td>
                            <td>${stbInfo[i].email}</td>
	                    </tr>`
				}
				
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

	
	
////分页模糊查询
//function page(i){
//	console.log(i)
//	nowpage=i;
//	var phonenumber=$(".select").phonenumber();
//	$.ajax({
//		type: "post",
//		url: "ou/paging",
//		data:{
//			phonenumber:phonenumber,
//			pageSize:i,
//			pageNum:2,
//		},
//		dataType: "json",
//		success: function(data){
//			var providerInfo=data.providerInfo;
//			$("#table").html("");
//			txt="";
//			for(var i = 0;i<providerInfo.length;i++){
//				txt +=`<tr>
//                       <td>${providerInfo[i].jidingheName}</td>
// 						 <td>${providerInfo[i].phonenumber}</td>
// 						<td>${providerInfo[i].sex}</td>
// 						 <td>${providerInfo[i].jidingheid}</td>
// 						 <td>${providerInfo[i].regionid}</td>
//                    </tr>`
//			}
//			$("#table").append(txt);
//			pageNum = data.pageNum;
//			console.log(pageNum);
//			$(".page").html("");
//			txt="";
//			for(var i = 1;i<=pageNum;i++){
//				txt +=`<span class="main-pagination-page" value="${i}" onclick="page(${i})" >${i}</span>`
//			}
//			$(".page").append(txt);
//		},error: function(data){
//			console.log("失败后返回的数据",data);
//		}
//	})
//}	

	
	
  $(".select-btn").on("click",function(){
  	console.log("查询内容",$(".select").val());
  	var cellphone=$(".select").val();
  	$.ajax({
  		type: "post",
  		url: "STB/selectBycellphone",
  		data:{
  			cellphone:cellphone,
  		},
  		dataType: "json",
  		success: function(data){
  			var StbcellphoneList = data.StbcellphoneList;
  			$("#table").html("");
  			txt="";
  			for(var i = 0;i<StbcellphoneList.length;i++){
  				txt += `
  				<tr>
                  	        <td>${StbcellphoneList[i].name}</td>
						  	<td>${StbcellphoneList[i].cellphone}</td>
						  	<td>${StbcellphoneList[i].gender}</td>
						  	<td>${StbcellphoneList[i].id}</td>
                            <td>${StbcellphoneList[i].email}</td>
              </tr>`
  			}
  			$("#table").append(txt);
  			
  		},error: function(data){
  			console.log("失败后返回的数据",data);
  		}
  	})
  })
  

		//上一页
$(".last").on("click",function(){
	if(nowpage!=1){	
		page(nowpage-1,status1);}
})

//下一页
$(".next").on("click",function(){
	if(nowpage!=pageNum){	
		page(nowpage+1,status1);}
})

//首页
$(".pagefirst").on("click",function(){
		page(1,status1);
})

//尾页
$(".pagelast").on("click",function(){
		page(pageNum,status1);
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