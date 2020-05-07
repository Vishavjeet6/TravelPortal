package com.nagarro.travelportalAPI.controller;
/*
* Version info - 0.3
*
* Copyright notice - @2020 Nagarro Private Limited.
* 
* Author info - Vishavjeet Singh
*
* Creation date - 01-05-2020
*
* Last updated By - Vishavjeet Singh
*
* Last updated Date - 14-01-2020
*
* Description - Admin Controller
*/
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nagarro.travelportalAPI.model.Admin;
import com.nagarro.travelportalAPI.service.AdminService;
import com.nagarro.travelportalAPI.utils.Constants;

@RestController
@RequestMapping("/api")
@CrossOrigin(Constants.ORIGIN)
public class AdminController {
		
	@Autowired
	private AdminService service;
	
	@PostMapping("/admin")
	public Admin loginUser(@RequestBody Admin admin) throws Exception {
		String tempEmailId = admin.getEmailId();
		String tempPassword = admin.getPassword();
		Admin validUser = null;
		if(tempEmailId != null && tempPassword != null) {
			validUser = service.fetchAdminByEmailIdAndPassword(tempEmailId, tempPassword);
		}
		if(validUser == null) {
			throw new Exception("Bad credentials");
		}
		return validUser;	
	}
}
