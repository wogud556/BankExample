package com.esum.TestBankClient.Bank.example;

import org.apache.log4j.Logger;


public class LogEx {
	
	static Logger logger = Logger.getLogger(LogEx.class);


	public static void main(String[] args) {
		logger.fatal("fatal Test");
		logger.error("error test");

	}

}
