package com.esum.TestBankClient.Bank.TestSource;

import com.esum.TestBankClient.Bank.module.HttpCall;

public class httpcallTest {

	public static void main(String argc[]) {
		String url = "http://localhost:8089/login";
		String returndata = "";
		HttpCall httpcall = new HttpCall(url);
		returndata = httpcall.HttpConnection();
		
		System.out.println(returndata);
	}
}
