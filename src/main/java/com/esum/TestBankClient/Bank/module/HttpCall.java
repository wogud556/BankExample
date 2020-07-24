package com.esum.TestBankClient.Bank.module;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class HttpCall implements HttpCallInterface {
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

			conn = (HttpURLConnection) url.openConnection();
			conn.setRequestProperty("Accept", "application/json");
			conn.setRequestProperty("DBHandler", "Select");
			conn.setRequestProperty("Find", "all");
			conn.setRequestMethod("GET");
			conn.connect();

			br = new BufferedReader(new InputStreamReader(conn.getInputStream()));

			sb = new StringBuffer();

			while ((jsonData = br.readLine()) != null) {
				sb.append(jsonData);
			}

			returnText = sb.toString();

		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			try {
				if (br != null)
					br.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}

		return returnText;
	}

public String HttpConnection(String data) {
		
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
			conn.setRequestProperty("database", "insert");
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

	@Override
	public String select() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String select(String col1) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String select(String col1, String col2) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String insert(Object obj) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String update(Object obj) {
		// TODO Auto-generated method stub
		return null;
	}
}
