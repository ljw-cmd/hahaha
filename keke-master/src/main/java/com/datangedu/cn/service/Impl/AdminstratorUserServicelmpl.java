package com.datangedu.cn.service.Impl;

import java.util.List;
import java.util.UUID;
import java.util.regex.Pattern;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Service;

import com.datang.hrb.util.MD5Util;
import com.datangedu.cn.dao.mapper.AdminstratorMapper;
import com.datangedu.cn.dao.mapper.RegisterUserMapper;
import com.datangedu.cn.model.sysUser.Adminstrator;
import com.datangedu.cn.model.sysUser.AdminstratorExample;
import com.datangedu.cn.model.sysUser.RegisterUser;
import com.datangedu.cn.model.sysUser.RegisterUserExample;
import com.datangedu.cn.service.AdminstratorUserService;
@Service
public class AdminstratorUserServicelmpl implements AdminstratorUserService{
	@Resource
	AdminstratorMapper adminstratorMapper;
	@Resource
	RegisterUserMapper registerUserMapper;
	//*********************管理员登录验证*************************
		@Override
		public List<Adminstrator> getcellphone(String cellphone) {
			AdminstratorExample adminstratorExample = new AdminstratorExample();
			AdminstratorExample.Criteria criteria = adminstratorExample.createCriteria();
			criteria.andCellphoneEqualTo(cellphone);
			return adminstratorMapper.selectByExample(adminstratorExample);
		}
		//*****************改变管理员账号登陆状态********************
		@Override
		public int updatestatus(Adminstrator adminstrator,HttpServletRequest request) {
			AdminstratorExample adminstratorExample = new AdminstratorExample();
			AdminstratorExample.Criteria criteria = adminstratorExample.createCriteria();
			criteria.andCellphoneEqualTo(request.getParameter("cellphone"));
			return adminstratorMapper.updateByExampleSelective(adminstrator, adminstratorExample);
		}

		//管理员账号修改密码
				@Override
				public int updatepassword(Adminstrator adminstrator,HttpServletRequest request) {
					AdminstratorExample adminstratorExample = new AdminstratorExample();
					AdminstratorExample.Criteria criteria = adminstratorExample.createCriteria();
					criteria.andCellphoneEqualTo(request.getParameter("cellphone"));
					return adminstratorMapper.updateByExampleSelective(adminstrator, adminstratorExample);
				}
		
		//管理员注册插入用户
		@Override
		public int register(HttpServletRequest request) {
			String uuid = UUID.randomUUID().toString().trim().replaceAll("-", "");
			System.out.println("id=="+uuid);
			System.out.println("用户名"+request.getParameter("username"));
			System.out.println("手机号"+request.getParameter("cellphone"));
			System.out.println("密码"+request.getParameter("password"));
			Adminstrator m=new Adminstrator();

			java.sql.Date ctime = new java.sql.Date(new java.util.Date().getTime());

			m.setRegisterTime(ctime);
			m.setId(uuid);
			m.setUserName(request.getParameter("username"));
			m.setCellphone(request.getParameter("cellphone"));
			m.setPassword(MD5Util.getMD5(request.getParameter("password").getBytes()));
			m.setStatus(0);
			return adminstratorMapper.insert(m);
		}
		
		
		
		//*************************管理员修改个人信息***************************
		public int setInformationUpdate(HttpServletRequest request) {
			AdminstratorExample adminstratorExample = new AdminstratorExample();
			AdminstratorExample.Criteria criteria = adminstratorExample.createCriteria();
			criteria.andIdEqualTo(request.getParameter("id"));
			Adminstrator adminstrator=new Adminstrator();
			adminstrator.setUserName(request.getParameter("name"));
			adminstrator.setCellphone(request.getParameter("cellphone"));
			adminstrator.setBorn(request.getParameter("born"));
			adminstrator.setEmail(request.getParameter("email"));
			adminstrator.setGender(request.getParameter("gender"));
			return adminstratorMapper.updateByExampleSelective(adminstrator,adminstratorExample);
		}
		
		
		// **********管理员页面个人中心查当前管理员账号信息***********************
		@Override
		public List<Adminstrator> getProviderId(String id) {
			AdminstratorExample adminstratorExample = new AdminstratorExample();
			AdminstratorExample.Criteria criteria = adminstratorExample.createCriteria();
			criteria.andIdEqualTo(id);
			return adminstratorMapper.selectByExample(adminstratorExample);
		}
		
		//*****************个人中心获取用户信息************************
		@Override
		public Adminstrator getProviderUserInfo(String id) {
			return adminstratorMapper.selectByPrimaryKey(id);
		}
		//*****************个人中心保存上传图片************************
		@Override
		public void saveUserImg(Adminstrator adminstrator) throws Exception{
				int i = adminstratorMapper.saveUserImg(adminstrator);
				System.out.println("ppt==="+i);
				if(i!=1) {
					throw new Exception("更新用户头像失败");
				} 
			}
		
		//************************管理员个人中心操作普通用户账号信息展示*******************
		@Override
		public List<RegisterUser> getProviderInfoByld(HttpServletRequest request) {
				System.out.println("查询用户");
				RegisterUserExample registerUserExample = new RegisterUserExample();
				RegisterUserExample.Criteria criteria = registerUserExample.createCriteria();
				//criteria.andIdEqualTo(request.getParameter("userid"));

				return registerUserMapper.selectByExample(registerUserExample);
			
		}
		//**************************删除*******************************
		@Override
		public int setProviderDelete(HttpServletRequest request) {
			RegisterUserExample registerUserExample = new RegisterUserExample();
			RegisterUserExample.Criteria criteria = registerUserExample.createCriteria();
			criteria.andIdEqualTo(request.getParameter("id"));
			return registerUserMapper.deleteByExample(registerUserExample);
		}

		//**************************全部删除*******************************
				@Override
				public int DeleteAll(String id) {
					RegisterUserExample registerUserExample = new RegisterUserExample();
					RegisterUserExample.Criteria criteria = registerUserExample.createCriteria();
					criteria.andIdEqualTo(id);
					return registerUserMapper.deleteByExample(registerUserExample);
				}
		//********************编辑****************************
		@Override
		public int setRegisterUserInformationUpdate(HttpServletRequest request) {
			RegisterUserExample registerUserExample = new RegisterUserExample();
			RegisterUserExample.Criteria criteria = registerUserExample.createCriteria();
			criteria.andIdEqualTo(request.getParameter("id"));
			RegisterUser registerUser=new RegisterUser();
			registerUser.setCellphone(request.getParameter("cellphone"));
			registerUser.setPassword(MD5Util.getMD5(request.getParameter("password").getBytes()));
			return registerUserMapper.updateByExampleSelective(registerUser,registerUserExample);
		}
		//********************添加****************************
		//*************************添加信息验证************************************
				@Override
				public List<RegisterUser> getRegisterUsercellphone(String cellphone) {
					RegisterUserExample registerUserExample = new RegisterUserExample();
					RegisterUserExample.Criteria criteria = registerUserExample.createCriteria();
					criteria.andCellphoneEqualTo(cellphone);
					return registerUserMapper.selectByExample(registerUserExample);
					}
				//********************添加用户****************************
		@Override
		public int setProviderRegister(HttpServletRequest request) {
			String uuid = UUID.randomUUID().toString().trim().replaceAll("-", "");
			System.out.println("id=="+uuid);
			System.out.println("用户名"+request.getParameter("name"));
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
}
