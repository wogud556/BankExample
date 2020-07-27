package com.esum.TestBankClient.Bank.module;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

import com.esum.TestBankClient.Bank.model.BankUser;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

public class HttpCall{
	String Targeturl;
	URL url;
	HttpURLConnection conn;
	Gson gson;
	
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

	public String logincall(BankUser user) {

		url = null;
		conn = null;
		String jsonData = "";
		BufferedReader br = null;
		StringBuffer sb = null;
		String returnText = "";
		gson = new GsonBuilder().create();
		String json = gson.toJson(user);
		try {
			url = new URL(Targeturl);

			conn = (HttpURLConnection) url.openConnection();
			conn.setRequestProperty("Accept", "application/json");
			conn.setRequestProperty("DBHandler", "Select");
			conn.setRequestProperty("Find", json);
			conn.setRequestMethod("GET");
			conn.connect();

			br = new BufferedReader(new InputStreamReader(conn.getInputStream(), "UTF-8"));

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
}
