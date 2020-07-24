package com.esum.TestBankClient.Bank.module;

public interface HttpCallInterface {
	String select();
	String select(String col1);
	String select(String col1, String col2);
	String insert(Object obj);
	String update(Object obj);
}
