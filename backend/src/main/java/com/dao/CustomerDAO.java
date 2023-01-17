package com.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.Customer;

@Service
public class CustomerDAO {
	
	@Autowired(required=true)	//DependencyInjection
	CustomerRepository customerRepository;
	
	
	public Customer CustomerLogin(String emailId, String password) {
		Customer customer = customerRepository.login(emailId, password);
		return customer;
	}


	public Customer registerCustomer(Customer customer) {
		return customerRepository.save(customer);
	}
	
	
}





