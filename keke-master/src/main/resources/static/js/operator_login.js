
$(function() {
	var img = document.getElementsByClassName("img")[0];
	img.src = "imgGetCode";
})
function imgChange() {
	var img = document.getElementsByClassName("img")[0];
	var time = new Date().getTime();
	img.src = "imgGetCode?t=" + time;
}

$(".login-btn").on("click", function() {
	var cellphone = $(".cellphone").val();
	var password = $(".password").val();
	var code = $(".code").val();
	$.ajax({
		url : "/api/Adminstratorregister2/Adminstratorlogin",
		type : "post",
		data : {
			cellphone : cellphone,
			password : password,
			code : code,
		},
		dataType : "json",

		success : function(data) {
			console.log("成功后返回的数据", data);
			if (data.code == 1) {
				/*     localStorage.setItem("id","username");
				     localStorage.setItem("id");*/
				location.href = "http://localhost:8080/redirect?page=operator_product"
				sessionStorage.setItem("id", data.Adminstratorid);
				sessionStorage.setItem("username", data.Adminstratorname);
				sessionStorage.setItem("status", 1);
			} else {
				alert(data.msg);
			}
		},
		error : function(data) {
			console.log("失败返回后的数据", data);
		}
	})

})


