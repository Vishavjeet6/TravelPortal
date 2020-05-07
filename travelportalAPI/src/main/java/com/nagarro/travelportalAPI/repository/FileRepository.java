package com.nagarro.travelportalAPI.repository;
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
* Description - File Repo
*/
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nagarro.travelportalAPI.model.File;

@Repository
public interface FileRepository extends JpaRepository<File, Long>{
	
	List<File> findByTicketId(int ticketId);
	
	Optional<File> findByName(String name);
}
