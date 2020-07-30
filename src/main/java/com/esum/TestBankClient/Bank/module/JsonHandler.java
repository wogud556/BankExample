package com.esum.TestBankClient.Bank.module;

import com.esum.TestBankClient.Bank.model.BankBook;
import com.esum.TestBankClient.Bank.model.BankUser;
import com.google.gson.JsonElement;
import com.google.gson.JsonParser;

public class JsonHandler {
	JsonParser parser;
	JsonElement element;
	
	public BankBook parseBnkBook(String jsonData) {
		BankBook bnkbook = new BankBook();
		
		parser = new JsonParser();
		element = parser.parse(jsonData);
		
		String book_account_num = element.getAsJsonObject().get("bnk_book_account_num").getAsString();
		String book_tra_date = element.getAsJsonObject().get("bnk_book_tra_date").getAsString();
		int bnk_book_deposit_price = element.getAsJsonObject().get("bnk_book_deposit_price").getAsInt();
		int bnk_book_withdraw_price = element.getAsJsonObject().get("bnk_book_withdraw_price").getAsInt();
		int bnk_total_price = element.getAsJsonObject().get("bnk_total_price").getAsInt();
		
		bnkbook.setBnk_book_account_num(book_account_num);
		bnkbook.setBnk_book_tra_date(book_tra_date);
		bnkbook.setBnk_book_deposit_price(bnk_book_deposit_price);
		bnkbook.setBnk_book_withdraw_price(bnk_book_withdraw_price);
		bnkbook.setBnk_total_price(bnk_total_price);

		
		return bnkbook;
		
	}
	
	public BankUser parseBankUser(String jsonData) {
		BankUser bnkuser = new BankUser();
		
		parser = new JsonParser();
		element = parser.parse(jsonData);
		
		String loginid = element.getAsJsonObject().get("loginid").toString();
		String loginpwd = element.getAsJsonObject().get("loginpwd").toString();
		
		bnkuser.setBnk_user_id(loginid);
		bnkuser.setBnk_user_pwd(loginpwd);
		
		return bnkuser;
	}
	
	public BankUser parseNewBankUser(String jsonData) {
		BankUser bnkuser = new BankUser();
		
		parser = new JsonParser();
		element = parser.parse(jsonData);
		
		String loginid = element.getAsJsonObject().get("loginid").toString();
		String loginpwd = element.getAsJsonObject().get("loginpwd").toString();
		
		bnkuser.setBnk_user_id(loginid);
		bnkuser.setBnk_user_pwd(loginpwd);
		
		return bnkuser;
	}

}
