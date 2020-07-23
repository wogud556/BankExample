package com.esum.TestBankClient.Bank.controller;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.esum.TestBankClient.Bank.model.BankBook;
import com.esum.TestBankClient.Bank.module.HttpCall;
import com.esum.TestBankClient.Bank.module.JsonHandler;

@Controller
public class BankController {

	@RequestMapping("/")
	public String home() throws Exception{
		//로그인화면
		return "main/login";
	}
	
	@RequestMapping("/login.do")
	public String login() throws Exception{
		//로그인 데이터 날려서 맞는지 틀린지 확인할것
		return "main/login";
	}
	
	@RequestMapping("/newUser.do")
	public String newUser() throws Exception{
		//신규 유저 생성화면으로 이동
		return "main/NewUser";
	}
	
	@RequestMapping("/result.do")
	public String result(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception{
		
		String url = "http://localhost:8089/login";
		HttpCall httpcall = new HttpCall(url);
		String result = httpcall.HttpConnection();
		
		JsonHandler jsonHandler = new JsonHandler();
		BankBook bnkbook = jsonHandler.parseBnkBook(result);
		
		
		System.out.println("계좌번호는 : " + bnkbook.getBnk_book_account_num() + " 입니다.");
		System.out.println("최종 접근 시간은 : " + bnkbook.getBnk_book_tra_date() + " 입니다.");
		System.out.println("입금 금액은 : " + bnkbook.getBnk_book_deposit_price() + " 입니다.");
		System.out.println("출금 금액은 : " + bnkbook.getBnk_book_withdraw_price() + " 입니다. ");
		System.out.println("현재 잔액은 : " + bnkbook.getBnk_total_price() + " 입니다. ");
		
		return "main/ResultSuccess";
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
	
	
}
