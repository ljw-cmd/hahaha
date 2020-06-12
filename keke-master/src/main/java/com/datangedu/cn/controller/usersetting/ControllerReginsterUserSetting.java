package com.datangedu.cn.controller.usersetting;

import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import com.datangedu.cn.model.sysUser.RegisterUser;
import com.datangedu.cn.service.RegisterUserService;


@Controller
@RequestMapping("/provider")
public class ControllerReginsterUserSetting {
	//*************************普通用户修改个人信息***************************
	@Resource
	RegisterUserService registerUserService;
	@ResponseBody
	@RequestMapping(value = "/informationUpdate", method = RequestMethod.POST)
	public Map<String, Object> provideRegister(HttpServletRequest request) {
		Map<String, Object> map = new HashMap<String, Object>();
		System.out.println(request.getParameter("email"));
		int massageInfo = registerUserService.setInformationUpdate(request);
		if (massageInfo == 4) {
			map.put("msg", "输入有误");
			return map;
		} else {
			map.put("msg", "保存成功");
		}
		return map;
	}
	
	//*******************普通用户个人信息展示***********************
	@ResponseBody
	@RequestMapping(value = "/getprovider", method = RequestMethod.GET)
	public Map<String, Object> ProviderInfo(HttpServletRequest request) {
		System.out.println("666");
		Map<String, Object> map = new HashMap<String, Object>();
		List<RegisterUser> registerUser = registerUserService.getRegisterUserId(request.getParameter("loginId"));
		System.out.println(registerUser.get(0).getUserName());
		
		map.put("registerUser", registerUser);											//数据存入map名为registerUser
		return map;
	}
	//*******************图片/******************************
	@ResponseBody	
	@RequestMapping(value="/headImg", produces = MediaType.IMAGE_PNG_VALUE)
	public ResponseEntity<byte[]> headImg(String id) throws Exception{
		System.out.println("tp");
		byte[] imageContent ;
		// 根据id获取当前用户的信息
		RegisterUser registerUser = registerUserService.getregisterUserInfo(id);	        
		imageContent = registerUser.getHeadImg();

		System.out.println("图片==="+registerUser.getHeadImg());
				        
		// 设置http头部信息
		final HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.IMAGE_PNG);
		// 返回响应实体
		return new ResponseEntity<byte[]>(imageContent, headers, HttpStatus.OK);
	}
	//用户头像
			@ResponseBody
			@RequestMapping("/saveProviderImg")
			public Map<String,Object> saveUserImg(MultipartFile file,String id) {
				Map<Object,Object> result = new HashMap<Object,Object>();
				System.out.println("用户id"+id);
				try {
				// 获取客户端传图图片的输入流
				InputStream ins = file.getInputStream();
				byte[] buffer=new byte[1024];//bit---byte---1k---1m
				int len=0;
				 // 字节输出流
				 ByteArrayOutputStream bos=new ByteArrayOutputStream();
				while((len=ins.read(buffer))!=-1){
					bos.write(buffer,0,len);
				 }
				 bos.flush();
				byte data[] = bos.toByteArray();
				// 调用接口对图片进行存储
				RegisterUser registerUser = new RegisterUser();
				registerUser.setId(id);
				registerUser.setHeadImg(data);
				result.put("msg", "保存头像成功");
				System.out.println("保存头像saveUserImg"+data);
				registerUserService.saveUserImg(registerUser);
						            
				result.put("code",1);
				result.put("msg", "保存头像成功");
				} catch (Exception e) {
					result.put("code",0);
					result.put("msg", "保存头像失败");
					System.out.println("保存头像失败");
				}	
				Map<String,Object> map = new HashMap<String,Object>();
				map.put("msg", "头像更新失败");
				return map;
			}
			

}
