package com.esum.TestBankClient.Bank.TestSource;

import java.lang.reflect.*;

public class ReflectTest {

	public ReflectTest() {
		// TODO Auto-generated constructor stub
	}
	
	public void Test() {
		try {
			Class testClass = Class.forName("com.esum.TestBankClient.Bank.model.ReflectModel");
			
			Field field[] = testClass.getFields();

			for(int i = 0; i<field.length ; i++) {
				System.out.println(field[i].getName());
			}
			
		}catch(ClassNotFoundException e) {
			
		}
	}
	
	public static void main(String args[]) {
		new ReflectTest().Test();
	}
}
