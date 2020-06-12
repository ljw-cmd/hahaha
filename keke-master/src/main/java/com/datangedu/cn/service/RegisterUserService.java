package com.datangedu.cn.service;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import com.datangedu.cn.model.sysUser.RegisterUser;


public interface RegisterUserService {
	public int register(HttpServletRequest request);	//注册功能插入注册账号
	List<RegisterUser> getcellphone(String cellphone);		//通过手机号查询
	public int updatestatus(RegisterUser registerUser,HttpServletRequest request);		//改变登陆状态
	public int updatepassword(RegisterUser registerUser,HttpServletRequest request);	//设置密码
	public int setInformationUpdate(HttpServletRequest request);		//修改个人信息
	List<RegisterUser> getRegisterUserId(String id);		//个人信息展示
	RegisterUser getregisterUserInfo(String id);		//通过ID获取用户信息（主要为了获取图片）
	void saveUserImg(RegisterUser registerUser) throws Exception;		//保存图片
}
