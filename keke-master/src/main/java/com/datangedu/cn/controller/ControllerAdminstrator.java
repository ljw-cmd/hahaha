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

import com.datangedu.cn.model.sysUser.Adminstrator;
import com.datangedu.cn.model.sysUser.RegisterUser;
import com.datangedu.cn.service.AdminstratorUserService;
import com.datangedu.cn.service.RegisterUserService;
@Controller
@RequestMapping("api/Adminstratorregister")
public class ControllerAdminstrator {
	@Resource
	AdminstratorUserService adminstratorUserService;
	
	//****************************管理员注册***********************************************
	@ResponseBody		
	@RequestMapping(value="/Adminstratorindex",method = RequestMethod.POST)
	public Map<String,Object> register(HttpServletRequest request) {
		Map<String,Object> map = new HashMap<String,Object>();
		if(request.getParameter("username").isEmpty()) {
			map.put("msg","输入用户名" );
			return map;
		}
		if(request.getParameter("cellphone").isEmpty()) {
			map.put("msg","输入手机号" );
			return map;
		}
		if(request.getParameter("password").isEmpty()) {
			map.put("msg","输入密码" );
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
		System.out.println("验证码"+session.getAttribute("code"));
		if(!session.getAttribute("code").equals(request.getParameter("code").toUpperCase())) {
			map.put("msg","验证码错误" );
			return map;
		}
		
		List<Adminstrator> Adminstrator=adminstratorUserService.getcellphone(request.getParameter("cellphone"));//根据cellphone获取Adminstrator表中数据
		if(!Adminstrator.isEmpty()) {
			map.put("msg","手机号已存在" );
			return map;
		}
		int a = adminstratorUserService.register(request);		
		System.out.println("插入成功"+a);
		map.put("msg", "注册成功");
		map.put("sta", 1);
		return map;
	}
}
