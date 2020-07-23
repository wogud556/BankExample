<%@page import="com.esum.TestBankClient.Bank.model.TestVO"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>

<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="EUC-KR"%>
<%
    	
    %>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
</head>
<body>
	<h1>사용자 생성</h1>
	<table border="0">
		<form name="newuser" method="post">
			<tr>
				<td><div>사용자 이름</div></td>
				<td><input type="text" id="usr_name" name="usr_name"
					class="box01" size="19" maxlength="16" /></td>
				
			</tr>
			<tr>
				<td><div>사용자 ID</div></td>
				<td><input type="text" id="usr_id" name="usr_id"
					class="box01" size="19" maxlength="16" /></td>
				
			</tr>
			<tr>
				<td><div>사용자 Password</div></td>
				<td><input type="text" id="usr_pwd" name="usr_pwd"
					class="box01" size="19" maxlength="16" /></td>
				
			</tr>
			<tr>
				<td><input type="submit" id="passwd" name="passwd"
					value = "등록" size="19" maxlength="16"
					onkeypress="if(self.event.keyCode==13) login_execute();"
					onFocus="this.value=''"></td>
			</tr>
		</form>
	</table>
</body>
</html>