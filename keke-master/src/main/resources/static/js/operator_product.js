$(".user-arrow-down").on("click",function(){
    if($(".dropdown").is(":hidden")){
        $(".dropdown").show();
 }else{
       $(".dropdown").hide();
 }
})


var pageNum=1;
var nowpage=1;

//查询所有
$(function(){
	//img();
	var userid=sessionStorage.getItem("id")
	//var username=sessionStorage.getItem("username")
	//var status=sessionStorage.getItem("status")
	//console.log("成功后返回的数据222222222",userid,username,status);
	$.ajax({
		type: "post",
		url: "STB/getSTBinfo",
		dataType: "json",
		// 返回数据类型
		data:{
			userid:userid,
			pageNum:20,
			pageSize:1,
		},
		success: function(data){
		
//			if(status!=1){
//				alert("请先登录");
//				 location.href="redirect?page=operator_login"
//			}
//			$("#sysuser").html("");
//			var txt="";
//			txt +=username
//			$("#sysuser").append(txt);
			
			console.log("成功后返回的数据",data);
			var stbInfo = data.stbInfo;
			$("#list").html("");
			txt="";
			for(var i = 0;i<5;i++){
				txt +=`<tr>
				  <td><input type="checkbox" class="checkbox checkbox1" value="${stbInfo[i].id}" name="product"></td>
                        <td value="${stbInfo[i].id}" >${i+1}</td>
                        <td>${stbInfo[i].name}</td>
                        <td>${stbInfo[i].cellphone}</td>
                        <td>${stbInfo[i].email}</td>
                        <td>
                            <span class="handle-btn"><i class="fa fa-edit fa-fw"></i>编辑</span>
 	                        <span class="handle-btn" onclick="dl('${stbInfo[i].id}')"><i class="fa fa-close fa-fw"></i>删除</span>
                        </td>
                    </tr>`
			}
			$("#list").append(txt);
			
			pageNum = data.pageNum;
			$(".page").html("");
			txt="";
			for(var i = 1;i<=pageNum;i++){
//				txt +=`<span class="main-pagination-page" value="${i}" onclick="page(${i})" >${i}</span>`
					txt +=`<span class="main-pagination-page" onclick="page(${i},'${index}')" >${i}</span>`
			}
			$(".page").append(txt);
		},
		error: function(data){
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
					location.href="redirect?page=operator_product"
				},
				// 请求失败后调用函数
				error:function(data){
					console.log("请求失败",data);
				}
})
    }
        
    	
		//*******************************搜索*****************************************
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
    			$("#list").html("");
    			txt="";
    			for(var i = 0;i<StbcellphoneList.length;i++){
    				txt += `
    				<tr>
    				<td><input type="checkbox" class="checkbox checkbox1" value="${StbcellphoneList[i].id}" name="product"></td>
                        <td value="${StbcellphoneList[i].id}" >${i+1}</td>
                        <td>${StbcellphoneList[i].name}</td>
                        <td>${StbcellphoneList[i].cellphone}</td>
                        <td>${StbcellphoneList[i].email}</td>
                        <td>
                            <span class="handle-btn"><i class="fa fa-edit fa-fw"></i>编辑</span>
 	                        <span class="handle-btn" onclick="dl('${StbcellphoneList[i].id}')"><i class="fa fa-close fa-fw"></i>删除</span>
                        </td>
 	                        
                </tr>`
    			}
    			$("#list").append(txt);
    			
    			
    		},error: function(data){
    			console.log("失败后返回的数据",data);
    		}
    	})
    })
    
        
        
//
//
////分页模糊查询
//function page(i){
//	console.log(i)
//	nowpage=i;
//	var name=$(".select").val();
//	$.ajax({
//		type: "post",
//		url: "ou/paging",
//		data:{
//			name:name,
//			pageSize:i,
//			pageNum:2,
//		},
//		dataType: "json",
//		success: function(data){
//			var mList = data.mList;
//			$("#list").html("");
//			txt="";
//			for(var i = 0;i<mList.length;i++){
//				txt +=`<tr>
//				        <td><input type="checkbox" class="checkbox checkbox1" value="${mList[i].id}" name="product"></td>
//                        <td value="${mList[i].id}" >${i+1}</td>
//                        <td>${mList[i].name}</td>
//                        <td>${mList[i].cellphone}</td>
//                        <td>${mList[i].email}</td>
//                        <td>
//                            <span class="handle-btn"><i class="fa fa-edit fa-fw"></i>编辑</span>
// 	                        <span class="handle-btn" onclick="dl('${mList[i].id}')"><i class="fa fa-close fa-fw"></i>删除</span>
//                        </td>
//                    </tr>`
//			}
//			$("#list").append(txt);
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
$(".page1").on("click",function(){
	page(1);
})

//尾页
$(".pagelast").on("click",function(){
	page(pageNum);
})



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