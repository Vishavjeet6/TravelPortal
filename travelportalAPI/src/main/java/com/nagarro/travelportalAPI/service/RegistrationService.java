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
* Description - Registration Service
*/
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nagarro.travelportalAPI.model.User;
import com.nagarro.travelportalAPI.repository.RegistrationRepository;
import com.nagarro.travelportalAPI.utils.PasswordGenerator;

@Service
public class RegistrationService {
	
	@Autowired
	private RegistrationRepository repo;
	
	public  User saveUser(User user) {
		PasswordGenerator passwordGenerator = new PasswordGenerator.PasswordGeneratorBuilder()
		        .useDigits(true)
		        .useLower(true)
		        .useUpper(true)
		        .build();
		String password = passwordGenerator.generate(8);
		user.setPassword(password);
		return repo.save(user);
	}
	
	public User fetchUserByEmailId(String emailId) {
		return repo.findByEmailId(emailId);
	}
	
	public User fetchUserByEmailIdAndPassword(String emailId, String password) {
		return repo.findByEmailIdAndPassword(emailId, password);
	}

}
