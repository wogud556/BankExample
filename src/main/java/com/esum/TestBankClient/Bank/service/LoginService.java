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
		String result = httpcall.call(Userdata);

		return result;
	}

	
	public String findUserId(String jsondata, String url) {
		JsonHandler jsonHandler = new JsonHandler();
		System.out.println(jsondata);
		BankUser bnkuser = jsonHandler.parseFindBankUser(jsondata);
		HttpCall httpCall = new HttpCall(url);
		HashMap<String, String> findUserId = new HashMap<String, String>();
		findUserId.put("Bnk_user_id", bnkuser.getBnk_user_id());
		
		String result = httpCall.call(findUserId);
		
		return result;
	}
	
	public String userinsert(String jsondata, String url) {
		JsonHandler jsonHandler = new JsonHandler();
		BankUser bnkuser = jsonHandler.parseNewBankUser(jsondata);
		
		if("false".equals(bnkuser.getBnk_user_id())) {
			return "false";
		}else {
			HttpCall httpCall = new HttpCall(url);
			HashMap<String, String> newUserdata = new HashMap<String, String>();
			newUserdata.put("Bnk_user_id",bnkuser.getBnk_user_id());
			newUserdata.put("Bnk_user_pwd", bnkuser.getBnk_user_pwd());
			newUserdata.put("Bnk_user_name", bnkuser.getBnk_user_name());
//			newUserdata.put("bnk_user_account_count", "0");// 값 넘길때 int로 돌려줘야함
//			newUserdata.put("bnk_user_last_update", "날짜");
//			newUserdata.put("bnk_user_level", "M"); //M이 보통사람 , S가 슈퍼유져(슈퍼유저는 여기 들어올일이 없다.) 
			String result = httpCall.call(newUserdata);


			return result;
		}
		
	}

}
