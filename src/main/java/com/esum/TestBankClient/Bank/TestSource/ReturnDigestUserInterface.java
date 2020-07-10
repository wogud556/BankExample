package com.esum.TestBankClient.Bank.TestSource;

import javax.xml.bind.DatatypeConverter;

public class ReturnDigestUserInterface {

	public static void receiveDigest(byte[] digest, String name) {
		StringBuilder result = new StringBuilder(name);
		result.append(": ");
		result.append(DatatypeConverter.printHexBinary(digest));
		System.out.println(result);
	}
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		for(String filename: args ) {
			ReturnThreadData th = new ReturnThreadData(filename);
			Thread t = new Thread(th);
			t.start();
		}
	}

}
