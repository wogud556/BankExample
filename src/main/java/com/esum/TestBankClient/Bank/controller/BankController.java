package com.esum.TestBankClient.Bank.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class BankController {

	@RequestMapping("/")
	public String home() throws Exception{

		return "main/login";
	}
	
	@RequestMapping("/login.do")
	public String login() throws Exception{
		
		return "main/login";
	}
	
	@RequestMapping("/newUser.do")
	public String newUser() throws Exception{
		
		return "main/NewUser";
	}
}
