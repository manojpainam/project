package com.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.Problem;

@Service
public class ProblemDAO {
	
	@Autowired(required=true)
	ProblemRepo problemRepo;
	
	public Problem ProblemRegister(Problem problem) {
		return problemRepo.save(problem);
	}

}
