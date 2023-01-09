package com.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.model.Customer;

@Repository
public interface CustomerRepository extends JpaRepository <Customer, Integer> {
	
	
	@Query("from Customer c where c.emailId = :emailId and c.password = :password")
	Customer login(@Param("emailId") String emailId, @Param("password") String password);

}
