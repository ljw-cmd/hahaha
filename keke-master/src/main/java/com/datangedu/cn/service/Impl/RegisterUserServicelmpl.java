package com.datangedu.cn.service.Impl;

import java.util.List;
import java.util.UUID;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Service;

import com.datang.hrb.util.MD5Util;
import com.datangedu.cn.dao.mapper.RegisterUserMapper;
import com.datangedu.cn.model.sysUser.RegisterUser;
import com.datangedu.cn.model.sysUser.RegisterUserExample;
import com.datangedu.cn.service.RegisterUserService;

@Service
public class RegisterUserServicelmpl implements RegisterUserService {
	
	@Resource
	RegisterUserMapper registerUserMapper;
	//*********************普通用户登录验证*************************
	@Override
	public List<RegisterUser> getcellphone(String cellphone) {
		RegisterUserExample registerUserExample = new RegisterUserExample();
		RegisterUserExample.Criteria criteria = registerUserExample.createCriteria();
		criteria.andCellphoneEqualTo(cellphone);
		return registerUserMapper.selectByExample(registerUserExample);
	}
	//*****************普通用户改变登陆状态********************
	@Override
	public int updatestatus(RegisterUser registerUser,HttpServletRequest request) {
		RegisterUserExample registerUserExample = new RegisterUserExample();
		RegisterUserExample.Criteria criteria = registerUserExample.createCriteria();
		criteria.andCellphoneEqualTo(request.getParameter("cellphone"));
		return registerUserMapper.updateByExampleSelective(registerUser, registerUserExample);
	}

	//普通用户修改密码
			@Override
			public int updatepassword(RegisterUser registerUser,HttpServletRequest request) {
				RegisterUserExample registerUserExample = new RegisterUserExample();
				RegisterUserExample.Criteria criteria = registerUserExample.createCriteria();
				criteria.andCellphoneEqualTo(request.getParameter("cellphone"));
				return registerUserMapper.updateByExampleSelective(registerUser, registerUserExample);
			}
	
	//普通用户注册插入用户
	@Override
	public int register(HttpServletRequest request) {
		String uuid = UUID.randomUUID().toString().trim().replaceAll("-", "");
		System.out.println("id=="+uuid);
		System.out.println("用户名"+request.getParameter("username"));
		System.out.println("手机号"+request.getParameter("cellphone"));
		System.out.println("密码"+request.getParameter("password"));
		RegisterUser m=new RegisterUser();

		java.sql.Date ctime = new java.sql.Date(new java.util.Date().getTime());

		m.setRegisterTime(ctime);
		m.setId(uuid);
		m.setUserName(request.getParameter("username"));
		m.setCellphone(request.getParameter("cellphone"));
		m.setPassword(MD5Util.getMD5(request.getParameter("password").getBytes()));
		m.setStatus(0);
		return registerUserMapper.insert(m);
	}
	
	
	
	// **********普通用户个人页面获取当前账号信息***********************
	@Override
	public List<RegisterUser> getRegisterUserId(String id) {
		RegisterUserExample registerUserExample = new RegisterUserExample();
		RegisterUserExample.Criteria criteria = registerUserExample.createCriteria();
		criteria.andIdEqualTo(id);
		return registerUserMapper.selectByExample(registerUserExample);
	}
	
	//**************普通用户通过ID获取用户信息（主要为了获取图片）*****************
	@Override
	public RegisterUser getregisterUserInfo(String id) {
		return registerUserMapper.selectByPrimaryKey(id);
	}
	
	//*************************普通用户修改个人信息***************************
		public int setInformationUpdate(HttpServletRequest request) {
			RegisterUserExample registerUserExample = new RegisterUserExample();
			RegisterUserExample.Criteria criteria = registerUserExample.createCriteria();
			criteria.andIdEqualTo(request.getParameter("id"));
			RegisterUser registerUser=new RegisterUser();
			registerUser.setUserName(request.getParameter("name"));
			registerUser.setCellphone(request.getParameter("cellphone"));
			registerUser.setBorn(request.getParameter("born"));
			registerUser.setEmail(request.getParameter("email"));
			registerUser.setGender(request.getParameter("gender"));
			return registerUserMapper.updateByExampleSelective(registerUser,registerUserExample);
		}
	//******************保存头像********************
	@Override
	public void saveUserImg(RegisterUser registerUser) throws Exception{
			int i = registerUserMapper.saveUserImg(registerUser);
			System.out.println("ppt==="+i);
			if(i!=1) {
				throw new Exception("更新用户头像失败");
			} 
		}
	
	

		
	

		
}
