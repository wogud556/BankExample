package com.esum.TestBankClient.Bank.controller;


import java.io.PrintWriter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.esum.TestBankClient.Bank.service.LoginService;

@Controller
public class BankController {

	String url = "http://localhost:8089";
	
	@RequestMapping("/")
	public String home() throws Exception{
		//로그인화면
		return "login/login";
	}
	
	@RequestMapping("/login.do")
	public String login() throws Exception{
		//로그인 데이터 날려서 맞는지 틀린지 확인할것
		return "login/login";
	}

	
	@RequestMapping("/loginResult.do")
	public void result(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception{
		
		PrintWriter out = null;
		
		String urlpath = url + "/login";
		//서비스 생성
		
		String userinfo = request.getParameter("param");
		userinfo = userinfo.replaceAll("&quot;", "\"");
		
		LoginService loginService = new LoginService();
		
		String result = loginService.loginService(userinfo, urlpath);
		
		System.out.println(result);
		response.setHeader("return", result);

		out = response.getWriter();
		
		out.write(result);
		
	}
	@RequestMapping("/main.do")
	public String mainView(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception{
		
		return "main/main";
	}
	
	@RequestMapping("/useridConfirm.do")
	public void useridConfirm(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception{
		String urlpath = url + "/finduserid";
		PrintWriter out = null;
		String userinfo = request.getParameter("param");
		
		
		System.out.println(userinfo);
		
		out = response.getWriter();
		
		out.write(userinfo);
		
	}
	
	/*
	 * 신규유저 생성 로직
	 * 먼저 해당 유저의 아이디가 존재하는지 확인
	 * 존재햐는 아이디일 경우 메시지만 리턴한다
	 * 그렇지 않다면 
	 * */
	@RequestMapping("/UserInsert.do")
	public void UserInsert() throws Exception{
		//신규 유저 생성로직
	}
	@RequestMapping("/newUser.do")
	public String newUser() throws Exception{
		
		return "login/newUser";
	}
	
	
}
