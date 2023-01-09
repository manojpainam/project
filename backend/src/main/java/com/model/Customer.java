package com.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;


@Entity
public class Customer {
	@Id@GeneratedValue
	private int custId;
	private String custName;
	private Date doj;
	private String gender;
	private String country;
	private String emailId;
	private String password;
	
	public Customer() {
		super();
	}

	public Customer(int custId, String custName, Date doj, String gender, String country, String emailId,
			String password) {
		super();
		this.custId = custId;
		this.custName = custName;
		this.doj = doj;
		this.gender = gender;
		this.country = country;
		this.emailId = emailId;
		this.password = password;
	}


	public int getCustId() {
		return custId;
	}

	public void setCustId(int empId) {
		this.custId = empId;
	}

	public String getCustName() {
		return custName;
	}

	public void setCustName(String custName) {
		this.custName = custName;
	}

	

	public Date getDoj() {
		return doj;
	}

	public void setDoj(Date doj) {
		this.doj = doj;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "Customer [custId=" + custId + ", custName=" + custName + ", doj=" + doj + ", gender=" + gender
				+ ", country=" + country + ", emailId=" + emailId + ", password=" + password + "]";
	}	
	
	
}
