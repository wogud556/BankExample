package com.esum.TestBankClient.Bank.service;

import java.util.HashMap;

import com.esum.TestBankClient.Bank.model.BankUser;
import com.esum.TestBankClient.Bank.module.HttpCall;
import com.esum.TestBankClient.Bank.module.JsonHandler;

public class LoginService {

	public String loginService(String jsondata, String url) {
		
	
		
		JsonHandler jsonHandler = new JsonHandler();
		BankUser bnkuser = jsonHandler.parseBankUser(jsondata);
		System.out.println(bnkuser.getBnk_user_id());
		HttpCall httpcall = new HttpCall(url);
		HashMap<String, String> Userdata= new HashMap<String, String>();
		Userdata.put("Bnk_user_id",bnkuser.getBnk_user_id());
		Userdata.put("Bnk_user_pwd", bnkuser.getBnk_user_pwd());
		String result = httpcall.logincall(Userdata);

		return result;
	}

}
