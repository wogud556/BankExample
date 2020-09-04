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

	static final String url = "http://localhost:8089";
	
	/*
	 * 최종 정리일 : 2020-09-04
	 * 작성자 : 박재형
	 * 로직명 : home메소드
	 * 설명 : 초기화면으로 지정된 로그인 화면으로 로그인하는 프로그램
	 * */
	@RequestMapping("/")
	public String home() throws Exception{
		//로그인화면
		return "login/login";
	}
	
	/*
	 * 최종 정리일 : 2020-09-04
	 * 작성자 : 박재형
	 * 로직명 : LoginResult 메소드
	 * 설명 : 로그인 결과를 보여주는 매소드
	 * */
	@RequestMapping("/loginResult.do")
	public void loginResult(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception{
		
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
	
	
	/*
	 * 최종 정리일 : 2020-09-04
	 * 작성자 : 박재형
	 * 로직명 : mainView 메소드
	 * 설명 : 로그인 성공 시 메인화면으로 화면전환하는 메소드
	 * */
	@RequestMapping("/main.do")
	public String mainView(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception{
		
		return "main/main";
	}
	
	/*
	 * 최종 정리일 : 2020-09-04
	 * 작성자 : 박재형
	 * 로직명 : useridConfirm
	 * 설명 : 사용자의 아이디가 이미 존재하는지 확인하는 메소드
	 * */
	@RequestMapping("/useridConfirm.do")
	public void useridConfirm(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception{
		String urlpath = url + "/findUserId";
		PrintWriter out = null;
		String userinfo = request.getParameter("param");
		System.out.println(userinfo);
		LoginService loginService = new LoginService();
		
		String result = loginService.findUserId(userinfo, urlpath);
		
		System.out.println(result);
		
		response.setHeader("return", result);
		
		out = response.getWriter();
		
		out.write(result);
		
	}
	
	/*
	 * 최종 정리일 : 2020-09-04
	 * 작성자 : 박재형
	 * 로직명 : userInsert
	 * 설명 : 새로 생성한 정보를 입력하는 메소드
	 * */
	@RequestMapping("/userinsert.do")
	public void userInsert(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception{
		String urlpath = url + "/userinsert";
		PrintWriter out = null;
		String userinsert = request.getParameter("param");
		System.out.println(userinsert);
		LoginService loginService = new LoginService();
		
		String result = loginService.userinsert(userinsert, urlpath);
		
		if("false".equals(result)) {
			response.setHeader("return", "false");
			out = response.getWriter();
			out.write("false");
		}else {
			response.setHeader("return", result);
			out = response.getWriter();
			out.write(result);
		}
		//신규 유저 생성로직
	}
	@RequestMapping("/newUser.do")
	public String newUser() throws Exception{
		
		return "login/newUser";
	}
	
	
}
