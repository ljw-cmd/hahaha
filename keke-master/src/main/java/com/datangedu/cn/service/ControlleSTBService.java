package com.datangedu.cn.service;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import com.datangedu.cn.model.sysUser.RegisterUser;
import com.datangedu.cn.model.sysUser.Stb;
import com.datangedu.cn.model.sysUser.StbWithBLOBs;

public interface ControlleSTBService {

	public List<StbWithBLOBs> getSTBInfo(HttpServletRequest request);

	/*public Map<String, Object> selectProgramByExample();*/

	public List<StbWithBLOBs> getProgramInfo(HttpServletRequest request);  //熱門節目

	public List selectByLikeCellphone(HttpServletRequest request);

	List<StbWithBLOBs> getmarketInfo(HttpServletRequest request);  //營銷支撐以及节目观看人数

	List<StbWithBLOBs> getTimeInfo(HttpServletRequest request);		//节目观看时间段占比

	List<StbWithBLOBs> getAgeInfo(HttpServletRequest request);		//节目观看年龄段占比

	List<StbWithBLOBs> getMinuteInfo(HttpServletRequest request);		//节目观看年龄段与时长对比

}
