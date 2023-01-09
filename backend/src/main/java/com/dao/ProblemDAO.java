package com.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.model.Problem;


@Service
public class ProblemDAO {
	 
	@Autowired
	ProblemRepo problemRepo;
	
	public  Problem serviceRequest(Problem problem) {
		return problemRepo.save(problem);
	}
	

}
