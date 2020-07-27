package com.esum.TestBankClient.Bank.service;

import com.esum.TestBankClient.Bank.model.BankUser;
import com.esum.TestBankClient.Bank.module.HttpCall;
import com.esum.TestBankClient.Bank.module.JsonHandler;

public class LoginService {

	public String loginService(String jsondata, String url) {
		
	
		
		JsonHandler jsonHandler = new JsonHandler();
		BankUser bnkuser = jsonHandler.parseBankUser(jsondata);
		System.out.println(bnkuser.getBnk_user_id());
		HttpCall httpcall = new HttpCall(url);
		String result = httpcall.logincall(bnkuser);

		return result;
	}

}
