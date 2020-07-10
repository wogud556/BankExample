package com.esum.TestBankClient.Bank.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.esum.TestBankClient.Bank.model.TestVO;

@Controller
public class HomeController {
	public TestVO testVO;
	String name, id;
	int age;
	@RequestMapping("/")
	public String home(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception{
//		testVO = new TestVO();
//		name = "박재형";
//		id = "1492059";
//		age = 26;
//		
//		testVO.setAge(age);
//		testVO.setId(id);
//		testVO.setName(name);
//		
//		session.setAttribute("test", testVO);
		
		
		return "main/home";
	}
}
