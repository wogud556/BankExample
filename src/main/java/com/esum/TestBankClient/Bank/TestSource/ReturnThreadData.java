package com.esum.TestBankClient.Bank.TestSource;

import java.io.FileInputStream;
import java.io.IOException;
import java.security.DigestInputStream;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class ReturnThreadData extends Thread{

	private String filename;
	private byte[] digest;
	
	public ReturnThreadData(String filename) {
		this.filename = filename;
		// TODO Auto-generated constructor stub
	}

	@Override
	public void run() {
		// TODO Auto-generated method stub
		try {
			FileInputStream in = new FileInputStream(filename);
			MessageDigest sha = MessageDigest.getInstance("SHA-256");
			DigestInputStream din = new DigestInputStream(in, sha);
			while(din.read() != -1);
			din.close();
			
		}catch(IOException e) {
			System.err.println(e);
		}catch(NoSuchAlgorithmException e){
			System.err.println(e);
		}
	}
	public byte[] getDigest() {
		return digest;
	}
	
}
