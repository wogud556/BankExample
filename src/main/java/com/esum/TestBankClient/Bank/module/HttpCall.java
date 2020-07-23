package com.esum.TestBankClient.Bank.module;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

import org.apache.catalina.connector.InputBuffer;

public class HttpCall {
	String Targeturl;
	URL url;
	HttpURLConnection conn;
	
	
	public HttpCall(String Targeturl) {
		this.Targeturl = Targeturl;
	}
	public String HttpConnection() {
		
		url = null;
		conn = null;
		String jsonData = "";
		BufferedReader br = null;
		StringBuffer sb = null;
		String returnText = "";
		
		try {
			url = new URL(Targeturl);
			
			conn = (HttpURLConnection)url.openConnection();
			conn.setRequestProperty("Accept", "application/json");
			conn.setRequestMethod("GET");
			conn.connect();
			
			br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
			
			sb = new StringBuffer();
			
			while((jsonData = br.readLine()) != null) {
				sb.append(jsonData);
			}
			
			returnText = sb.toString();
			
		}catch(IOException e) {
			e.printStackTrace();
		}finally {
			try {
				if(br != null) br.close();
			}catch(IOException e) {
				e.printStackTrace();
			}
		}
		
		
		return returnText;
	}
}
