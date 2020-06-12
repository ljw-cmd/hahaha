package com.datangedu.cn.controller.usersetting;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.HashSet;  
import java.util.Set;
import java.util.stream.Collectors;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.datangedu.cn.dao.mapper.StbMapper;
import com.datangedu.cn.model.sysUser.RegisterUser;
import com.datangedu.cn.model.sysUser.Stb;
import com.datangedu.cn.model.sysUser.StbWithBLOBs;
import com.datangedu.cn.service.AdminstratorUserService;
import com.datangedu.cn.service.ControlleSTBService;

@Controller
@RequestMapping("/STB")
public class ControlleSTB {
	@Resource
	ControlleSTBService controlleSTBService;
	
	@Resource
	StbMapper stbMapper;
	//**********************管理员页面以及普通通用户登录进入观看所有使用机顶盒人信息渲染********************************
	@ResponseBody
	@RequestMapping(value = "/getSTBinfo", method = RequestMethod.POST)
	public Map<String, Object> STBInfo(HttpServletRequest request) {
		System.out.println("1111");
		Map<String, Object> map = new HashMap<String, Object>();
		List<StbWithBLOBs> stbInfo = controlleSTBService.getSTBInfo(request);
		map.put("stbInfo", stbInfo);   												//数据存入map名为stbInfo
		return map;
	}
	// ***********************************模糊查询***********************************
		@ResponseBody
		@RequestMapping(value="/selectBycellphone",method = RequestMethod.POST)
		public Map<String, Object> selectByLikeSTB(HttpServletRequest request) {
			Map<String, Object> map = new HashMap<String, Object>();
			List StbcellphoneList = controlleSTBService.selectByLikeCellphone(request);
			if (StbcellphoneList.size() > 0) {
				map.put("StbcellphoneList", StbcellphoneList);
				map.put("code", 1);
			} else {
				map.put("code", 0);
			}
			return map;
		}
	///*******************************************************************************************/////热门节目//////////////
	/*@ResponseBody
	@RequestMapping(value = "/getProinfo", method = RequestMethod.POST)
	public Map<String, Object> STBInfo(HttpServletRequest request) {
		Map<String, Object> map = new HashMap<String, Object>();
		List<StbWithBLOBs> stbInfo = controlleSTBService.getProgramInfo(request);
		System.out.println(stbInfo);
		map.put("stbInfo", stbInfo);
		return map;
	}*/
		///*******************************************************************************************/////各频道观看人数占比//////////////
		@ResponseBody
		@RequestMapping(value = "/getProinfo", method = RequestMethod.GET)
		public Map<String, Object> STBUserInfo(HttpServletRequest request) {
			Map<String, Object> map = new HashMap<String, Object>();
			List<StbWithBLOBs> stbInfo = controlleSTBService.getmarketInfo(request);
			System.out.println(stbInfo);
			map.put("stbInfo", stbInfo);
			return map;
		}
		
		//*******************************************************************************************/////节目观看年龄段对比//////////////
		@ResponseBody
		@RequestMapping(value = "/getAgeinfo", method = RequestMethod.GET)
		public Map<String, Object> STBAgeInfo(HttpServletRequest request) {
			Map<String, Object> map = new HashMap<String, Object>();
			List<StbWithBLOBs> stbInfo = controlleSTBService.getAgeInfo(request);
			System.out.println(stbInfo);
			map.put("stbInfo", stbInfo);
			return map;
		}
		
		//*******************************************************************************************/////节目观看年龄段与时长对比//////////////
				@ResponseBody
				@RequestMapping(value = "/getMinuteinfo", method = RequestMethod.GET)
				public Map<String, Object> STBMinuteInfo(HttpServletRequest request) {
					Map<String, Object> map = new HashMap<String, Object>();
					List<StbWithBLOBs> stbInfo = controlleSTBService.getMinuteInfo(request);
					System.out.println(stbInfo);
					map.put("stbInfo", stbInfo);
					return map;
				}
		
		///*******************************************************************************************/////节目观看时间段对比//////////////
				@ResponseBody
				@RequestMapping(value = "/getTimeinfo", method = RequestMethod.GET)
				public Map<String, Object> STBTimeInfo(HttpServletRequest request) {
					Map<String, Object> map = new HashMap<String, Object>();
					List<StbWithBLOBs> stbInfo = controlleSTBService.getTimeInfo(request);
					System.out.println(stbInfo);
					map.put("stbInfo", stbInfo);
					return map;
				}
		///*******************************************************************************************/////營銷支撐頁面（后台已经处理好数据通过人数递增排序）//////////////
		@ResponseBody
		@RequestMapping(value = "/getmarketinfo", method = RequestMethod.GET)
		public Map<String, Object> marketingInfo(HttpServletRequest request) {
			Map<String, Object> map = new HashMap<String, Object>();
			List<StbWithBLOBs> stbInfo = controlleSTBService.getmarketInfo(request);
			System.out.println(stbInfo);
			map.put("stbInfo", stbInfo);
			return map;
		}

}
