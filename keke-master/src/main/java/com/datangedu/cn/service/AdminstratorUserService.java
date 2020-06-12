package com.datangedu.cn.service;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import com.datangedu.cn.model.sysUser.Adminstrator;

import com.datangedu.cn.model.sysUser.RegisterUser;

public interface AdminstratorUserService {
	public int register(HttpServletRequest request);	//注册功能插入注册账号	
	
	public int updatestatus(Adminstrator adminstrator,HttpServletRequest request);		//改变登陆状态
	
	public int updatepassword(Adminstrator adminstrator,HttpServletRequest request);	//设置密码
	
	public int setInformationUpdate(HttpServletRequest request);		//修改个人信息
	
	List<Adminstrator> getProviderId(String id);		//个人信息展示
	
	Adminstrator getProviderUserInfo(String id);		//通过ID获取用户信息（主要为了获取图片）
	
	void saveUserImg(Adminstrator adminstrator) throws Exception;
	
	public List<Adminstrator> getcellphone(String cellphone);		//登录验证
	
	public List<RegisterUser> getProviderInfoByld(HttpServletRequest request);		//管理员看所有用户账号
	
	public int setProviderDelete(HttpServletRequest request);		//删除用户账号
	
	public int setRegisterUserInformationUpdate(HttpServletRequest request);		//编辑账号信息
	
	public int setProviderRegister(HttpServletRequest request);			//添加账号信息
	
	public List<RegisterUser> getRegisterUsercellphone(String parameter);		//添加账号信息验证
	
	public int DeleteAll(String id);//修改状态上线
}
