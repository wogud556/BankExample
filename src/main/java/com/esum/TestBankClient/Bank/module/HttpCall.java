package com.esum.TestBankClient.Bank.module;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Set;

import com.google.gson.Gson;

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

	public String logincall(HashMap<String, String> Userdata) {

		url = null;
		conn = null;
		String jsonData = "";
		BufferedReader br = null;
		StringBuffer Reqsb = null;
		StringBuilder Ressb = null;
		String returnText = "";
		
		try {
			url = new URL(Targeturl);
			

			conn = (HttpURLConnection) url.openConnection();
			conn.setDefaultUseCaches(false);
			conn.setDoInput(true);
			conn.setDoOutput(true);
			conn.setRequestMethod("GET");
			conn.setRequestProperty("content-type", "application/x-www-form-urlencoded");

			conn.setRequestProperty("Accept", "application/json");
			//conn.setRequestProperty("DBHandler", "Select");



			Reqsb = new StringBuffer();

			if(Userdata != null) {
				Set key = Userdata.keySet();
				Reqsb.append("{");
				for(Iterator iterator = key.iterator(); iterator.hasNext();) {
					//Reqsb.append("{");
					String keyName = (String)iterator.next();
					String valueName = Userdata.get(keyName);
					Reqsb.append("\"").append(keyName).append("\":").append(valueName);
					if(iterator.hasNext() == true) {
						Reqsb.append(",");
					}
				}
				Reqsb.append("}");
			}
			
			OutputStreamWriter outStream = new OutputStreamWriter(conn.getOutputStream(), "UTF-8");
            PrintWriter writer = new PrintWriter(outStream);
            writer.write(Reqsb.toString());
            writer.flush();

			InputStreamReader in = new InputStreamReader((InputStream)conn.getContent(), "UTF-8");
			br = new BufferedReader(in);
            Ressb = new StringBuilder();
            String str;
            while((str = br.readLine())!= null) {
            	Ressb.append(str + "\n");
            }
			
			returnText = Ressb.toString();

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
