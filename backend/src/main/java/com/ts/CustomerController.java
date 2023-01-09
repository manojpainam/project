package com.ts;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.dao.CustomerDAO;
import com.dao.ProblemDAO;
import com.model.Customer;
import com.model.Problem;


@RestController
public class CustomerController {

	@Autowired
	CustomerDAO custDAO;
	ProblemDAO problemDAO;

	

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
	
	

	
}
