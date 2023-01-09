package com.ts;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.dao.ProblemDAO;
import com.model.Problem;

@RestController
public class ProblemController {

	ProblemDAO problemDAO;
	@PostMapping("/serviceRequest")
	public String serviceRequest(@RequestBody Problem problem) {
		System.out.println(problem);
		
		Problem data = problemDAO.serviceRequest(problem);
		
		if (data != null) {
			System.out.println("customer Registered Successfully!!!");
			return "customer Registered Successfully!!!";
		}

		System.out.println("customer Registeration Failed!!!");
		return "customer Registeration Failed!!!";
		
	}
}
