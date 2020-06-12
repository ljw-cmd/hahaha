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

import com.datangedu.cn.model.sysUser.Adminstrator;
import com.datangedu.cn.model.sysUser.RegisterUser;
import com.datangedu.cn.service.AdminstratorUserService;
import com.datangedu.cn.service.RegisterUserService;
@Controller
@RequestMapping("/Adminstrator")
public class ControllerAdminstratorUserSetting {

		//*************************管理员修改个人信息***************************
		@Resource
		AdminstratorUserService adminstratorUserService;
		@Resource
		RegisterUserService registerUserService;
		@ResponseBody
		@RequestMapping(value = "/AdminstratorUpdate", method = RequestMethod.POST)
		public Map<String, Object> provideRegister(HttpServletRequest request) {
			Map<String, Object> map = new HashMap<String, Object>();
			System.out.println(request.getParameter("email"));
			int massageInfo = adminstratorUserService.setInformationUpdate(request);
			if (massageInfo == 4) {
				map.put("msg", "输入有误");
				return map;
			} else {
				map.put("msg", "保存成功");
			}
			return map;
		}
		
		//*******************管理员账号个人信息展示***********************
		@ResponseBody
		@RequestMapping(value = "/getAdminstrator", method = RequestMethod.GET)
		public Map<String, Object> AdminstratorUserInfo(HttpServletRequest request) {
			System.out.println("666");
			Map<String, Object> map = new HashMap<String, Object>();
			List<Adminstrator> adminstrator = adminstratorUserService.getProviderId(request.getParameter("loginId"));
			System.out.println(adminstrator.get(0).getUserName());
			
			map.put("adminstrator", adminstrator);							//数据存入map名为adminstrator
			return map;
		}
		//*******************图片/******************************
		@ResponseBody	
		@RequestMapping(value="/AdminstratorheadImg", produces = MediaType.IMAGE_PNG_VALUE)
		public ResponseEntity<byte[]> headImg(String id) throws Exception{
			System.out.println("tp");
			byte[] imageContent ;
			// 根据id获取当前用户的信息
			Adminstrator adminstrator = adminstratorUserService.getProviderUserInfo(id);	        
			imageContent = adminstrator.getHeadImg();

			System.out.println("图片==="+adminstrator.getHeadImg());
					        
			// 设置http头部信息
			final HttpHeaders headers = new HttpHeaders();
			headers.setContentType(MediaType.IMAGE_PNG);
			// 返回响应实体
			return new ResponseEntity<byte[]>(imageContent, headers, HttpStatus.OK);
		}
		//用户头像
				@ResponseBody
				@RequestMapping("/saveAdminstratorImg")
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
					Adminstrator adminstrator = new Adminstrator();
					adminstrator.setId(id);
					adminstrator.setHeadImg(data);
					result.put("msg", "保存头像成功");
					System.out.println("保存头像saveUserImg"+data);
					adminstratorUserService.saveUserImg(adminstrator);
							            
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
				//**********************管理员个人中心页面操作普通用户信息渲染********************************
				@ResponseBody
				@RequestMapping(value = "/getAdminstratorinfo", method = RequestMethod.POST)
				public Map<String, Object> RegisterUserInfo(HttpServletRequest request) {
					System.out.println("1111");
					Map<String, Object> map = new HashMap<String, Object>();
					List<RegisterUser> RegisterUserInfo = adminstratorUserService.getProviderInfoByld(request);
					map.put("RegisterUserInfo", RegisterUserInfo);							//数据存入map名为RegisterUserInfo
					return map;
				}
				//*********************刪除****************************
				@ResponseBody
				@RequestMapping(value = "/Adminstratordelete", method = RequestMethod.POST)
				public Map<String,Object> RegisterUserDelete(HttpServletRequest request) {
					
					Map<String,Object> map=new HashMap<String,Object>();
					int RegisterUserInfo=adminstratorUserService.setProviderDelete(request);
					map.put("msg","恭喜删除成功");
					map.put("code",1);
					return map;
				}
				//*****************全选所有用户删除************************
				@ResponseBody			
				@RequestMapping(value="/deleteAll",method = RequestMethod.POST)
				public Map <String,Object> allUpLine(HttpServletRequest request) {
					Map<String,Object> map = new HashMap<String,Object>();
					String [] str=request.getParameter("str").split(",");
					System.out.println("str=="+str.length);
					for(int i=0;i<str.length;i++) {
						adminstratorUserService.DeleteAll(str[i]);
					}
					return map;
				}
				//*************************编辑***************************
				@ResponseBody
				@RequestMapping(value = "/Adminstratorcompile", method = RequestMethod.POST)
				public Map<String, Object> RegisterUserRegister(HttpServletRequest request) {
					Map<String, Object> map = new HashMap<String, Object>();
					int RegisterUserInfo = adminstratorUserService.setRegisterUserInformationUpdate(request);
					if (RegisterUserInfo == 4) {
						map.put("msg", "输入有误");
						return map;
					} else {
						map.put("msg", "保存成功");
					}
					return map;
				}
				//************************添加*******************************
				@ResponseBody
				@RequestMapping(value = "/AdminstratorInset", method = RequestMethod.POST)
				public Map<String, Object> providerRegister(HttpServletRequest request,MultipartFile file) {
					Map<String, Object> map = new HashMap<String, Object>();
					List<RegisterUser> registerUser=adminstratorUserService.getRegisterUsercellphone(request.getParameter("cellphone"));
					if(!registerUser.isEmpty()) {
						map.put("msg","手机号已存在" );
						return map;
					}
						int registerUserInfo = adminstratorUserService.setProviderRegister(request);							
					if (registerUserInfo == 4) {
						map.put("msg", "输入有误");
					} else {
						map.put("msg", "添加成功");
					}
					return map;
				}
				
}
