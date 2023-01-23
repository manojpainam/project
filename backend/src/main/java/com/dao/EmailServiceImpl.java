package com.dao;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;



@Service
public class EmailServiceImpl  {
	 @Autowired
	    private JavaMailSender mailSender;
	    public String sendSimpleMail(String recipient,String body,String subject)
	    {
	 
	        // Try block to check for exceptions
	        try {
	 
	            // Creating a simple mail message
	            SimpleMailMessage mailMessage
	                = new SimpleMailMessage();
	 
	            // Setting up necessary details
	            mailMessage.setFrom("eserve91@gmail.com");
	            mailMessage.setTo(recipient);
	            mailMessage.setText(body);
	            mailMessage.setSubject(subject);
	 
	            // Sending the mail
	            mailSender.send(mailMessage);
	            return "1";
	        }
	 
	        // Catch block to handle the exceptions
	        catch (Exception e) {
	        	System.out.println(e);
	            return null;
	        }
	    }
}
