package com.ts;


import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.dao.CustomerDAO;
import com.dao.EmailServiceImpl;
import com.dao.ProblemDAO;
import com.model.Customer;
import com.model.Problem;



@RestController
public class CustomerController {

	@Autowired
	CustomerDAO custDAO;
	@Autowired
	ProblemDAO problemDAO;
	@Autowired 
	EmailServiceImpl emailService;

	

	@GetMapping("/customerLogin/{emailId}/{password}")
	public Customer customerLogin(@PathVariable("emailId") String emailId, @PathVariable("password") String password) {

		Customer cust = custDAO.CustomerLogin(emailId, password);

		if (cust != null)
			return cust;

		return null;
	}

	@PostMapping("/registerCustomer")
	public String registerCustomer(@RequestBody Customer customer) {
		System.out.println(customer);
		Customer cust = custDAO.registerCustomer(customer);

		if (cust != null) {
			System.out.println("customer Registered Successfully!!!");
			return "customer Registered Successfully!!!";
		}

		System.out.println("customer Registeration Failed!!!");
		return "customer Registeration Failed!!!";
	}
	
	@PostMapping("/ProblemRegister")
	public String ProblemRegister(@RequestBody Problem problem) {
		System.out.println(problem);
		Problem prob = problemDAO.ProblemRegister(problem);

		if (prob != null) {
			System.out.println("problem Registered Successfully!!!");
			return "problem Registered Successfully!!!";
		}

		System.out.println("problem Registeration Failed!!!");
		return "problem Registeration Failed!!!";
	}
	
	@GetMapping("/forgetPassword/{emailId}")
	public String forgetPassword(@PathVariable("emailId")String emailId) {
			System.out.println(emailId);
			String otp = "";
			Random random = new Random();
			
			otp += random.nextInt(1000,999);
			System.out.println(otp);
			
			String status = emailService.sendSimpleMail(emailId," otp for password change is "+otp,"Forget Password");
			if(status!=null) {
				System.out.println("Mail Send");
				return otp;
			}
			
			return null;
		}
		

	
	
}
