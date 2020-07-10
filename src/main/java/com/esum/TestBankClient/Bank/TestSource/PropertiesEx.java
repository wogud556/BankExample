package com.esum.TestBankClient.Bank.TestSource;

import java.io.File;
import java.io.FileReader;
import java.util.Properties;

public class PropertiesEx {

	public static void main(String argc[]) {
		File path = new File("D:\\study\\BankExample\\src\\main\\java\\gpi.properties");
		
		try(FileReader file = new FileReader(path)){
			Properties p = new Properties();
			p.load(file);
			System.out.println(p.getProperty("our.bic"));
			
			
		}catch(Exception e) {
			System.out.println("실패하였다. 실패원인" + e.getMessage());
		}
	}

}
