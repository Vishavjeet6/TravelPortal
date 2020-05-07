package com.nagarro.travelportalAPI.service;
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
* Description - Admin Service
*/
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nagarro.travelportalAPI.model.Admin;
import com.nagarro.travelportalAPI.repository.AdminRepository;

@Service
public class AdminService {
	
	@Autowired
	private AdminRepository repo;
	
	public Admin fetchAdminByEmailIdAndPassword(String emailId, String password) {
		return repo.findByEmailIdAndPassword(emailId, password);
	}

}
