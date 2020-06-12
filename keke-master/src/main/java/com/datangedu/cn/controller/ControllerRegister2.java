package com.datangedu.cn.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.datang.hrb.util.MD5Util;
import com.datangedu.cn.dao.mapper.RegisterUserMapper;
import com.datangedu.cn.model.sysUser.RegisterUser;
import com.datangedu.cn.service.RegisterUserService;

//*********************************普通用户登录*************************************
@Controller
@RequestMapping("api/register2")
public class ControllerRegister2 {
	@Resource
	RegisterUserService registerUserService;
	@ResponseBody
	@RequestMapping(value="/login",method=RequestMethod.POST)
	public Map<String,Object> registerUserLogin(HttpServletRequest request) {
		RegisterUser registerUser=new RegisterUser();
		System.out.println("获取登录信息");
		Map<String,Object> map=new HashMap<String,Object>();
		String cellphone=request.getParameter("cellphone");
		String password=request.getParameter("password");
		String code = request.getParameter("code");
		System.out.println(cellphone);
		System.out.println(password);


		if(request.getParameter("cellphone").isEmpty()) {
		map.put("msg","手机号为空");
		return map;
		}
		if(!(request.getParameter("cellphone").length()==11)) {
			map.put("msg","手机号必须为11位");
			return map;
		}
		if(password.isEmpty()){
			map.put("msg","密码为空");
			return map;
		}
	 if(request.getParameter("code").isEmpty()){
		 map.put("msg","验证码为空"); 
		 return map; }

		HttpSession session = request.getSession();
		  System.out.println("验证码"+session.getAttribute("code"));
		  if(!session.getAttribute("code").equals(request.getParameter("code").toUpperCase())) {
		   map.put("msg","验证码错误" );
		   return map;
		  }
		
		List<RegisterUser> RegisterUserInfo=registerUserService.getcellphone(request.getParameter("cellphone"));
		System.out.println(RegisterUserInfo);
		
		if(RegisterUserInfo.isEmpty()) {
			map.put("msg","帐号不存在");
			return map;
		}else if(!RegisterUserInfo.get(0).getPassword().equals(MD5Util.getMD5(request.getParameter("password").getBytes()))) {
			map.put("msg","密码错误" );
			return map;
		}
		else {
			registerUser.setStatus(1);
			int a=registerUserService.updatestatus(registerUser,request);
			map.put("code", 1);
			map.put("msg","恭喜登录成功");	
		}
		map.put("RegisterUserid",RegisterUserInfo.get(0).getId());
		map.put("RegisterUsername",RegisterUserInfo.get(0).getUserName());
		map.put("status", 1);
		return map;
	}
	//****************************普通用户用户找回密码***************************
		@ResponseBody
		@RequestMapping(value = "/findpassword",method = RequestMethod.POST)
		public Map <String,Object> findPassword(HttpServletRequest request) {
			Map<String,Object> map = new HashMap<String,Object>();
			RegisterUser registerUser=new RegisterUser();
			
			if(request.getParameter("cellphone").isEmpty()) {
				map.put("msg","输入手机号" );
				return map;
			}
			if(request.getParameter("code").isEmpty()) {
				map.put("msg","输入验证码" );
				return map;
			}
			if(!(request.getParameter("cellphone").length()==11)) {
				map.put("msg","手机号必须为11位");
				return map;
			}
			HttpSession session = request.getSession();
			if(!session.getAttribute("code").equals(request.getParameter("code").toUpperCase())) {
				map.put("msg","验证码错误" );
				return map;
			}
			if(request.getParameter("password1").isEmpty()) {
				map.put("msg","输入密码" );
				return map;
			}
			if(request.getParameter("password2").isEmpty()) {
				map.put("msg","再输入密码" );
				return map;
			}
			if(!request.getParameter("password1").equals(request.getParameter("password2"))) {
				map.put("msg","两次密码不一致");
				return map;
			}
			registerUser.setPassword(MD5Util.getMD5(request.getParameter("password1").getBytes()));
			int a=registerUserService.updatepassword(registerUser, request);
			System.out.println("修改密码5"+a);
			map.put("stu", a);
			if(a==1) {
			map.put("msg", "修改成功");
			}else {
				map.put("msg", "账号不存在");
			}
			return map;
		}
}
