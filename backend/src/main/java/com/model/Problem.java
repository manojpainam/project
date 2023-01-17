package com.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Problem {
	
	
	@Id@GeneratedValue
	private int servId;
	private String device;
	private String brand;
	private String model;
	private String problem;
	private String number;
	private String address;
	private Date dateOfVisit;
	private String time;
	
	public Problem() {
		super();
	}

	public Problem(int servId, String device, String brand, String model, String problem, String number, String address,
			Date dateOfVisit, String time) {
		super();
		this.servId = servId;
		this.device = device;
		this.brand = brand;
		this.model = model;
		this.problem = problem;
		this.number = number;
		this.address = address;
		this.dateOfVisit = dateOfVisit;
		this.time = time;
	}

	public int getServId() {
		return servId;
	}

	public void setServId(int servId) {
		this.servId = servId;
	}

	public String getDevice() {
		return device;
	}

	public void setDevice(String device) {
		this.device = device;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public String getProblem() {
		return problem;
	}

	public void setProblem(String problem) {
		this.problem = problem;
	}

	public String getNumber() {
		return number;
	}

	public void setNumber(String number) {
		this.number = number;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Date getDateOfVisit() {
		return dateOfVisit;
	}

	public void setDateOfVisit(Date dateOfVisit) {
		this.dateOfVisit = dateOfVisit;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	@Override
	public String toString() {
		return "Problem [servId=" + servId + ", device=" + device + ", brand=" + brand + ", model=" + model
				+ ", problem=" + problem + ", number=" + number + ", address=" + address + ", dateOfVisit="
				+ dateOfVisit + ", time=" + time + "]";
	}
	
	
	
	
	
	
	

	

}
