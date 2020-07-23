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
<script>
	function login_excute(){
		var userId = document.getElementById("login_id").value
		
	}
</script>
<body>
	<h1>간단한 은행 프로그램 입니다.</h1>
	<table border="0" align="center">
		<form name="login" method="post">
			<tr>
				<td width="52"></td>
				<td width="12"></td>
				<td><input type="text" id="login_id" name="login_id"
					class="box01" size="19" maxlength="16"
					onkeypress="if(self.event.keyCode==13) login_execute();" /></td>
				<td width="20"></td>
				<td width="46"><a href="javascript:login_execute()"
					onfocus="this.blur()" tabindex="-1">LOGIN</a></td>
			</tr>
			<tr>
				<td height="4" colspan="3"></td>
			</tr>
			<tr>
				<td></td>
				<td></td>
				<td><input type="password" id="login_pwd" name="login_pwd"
					class="box01" size="19" maxlength="16"
					onkeypress="if(self.event.keyCode==13) login_execute();"
					onFocus="this.value=''"></td>
				<td width="20"></td>
				<td width="46"><a href="javascript:new_user_popup()"
					onfocus="this.blur()" tabindex="-1">NEW USER</a></td>
			</tr>
		<!-- 20160503 -->
			<tr>
				<td height="4" colspan="3"></td>
			</tr>
		</form>
	</table>
</body>
</html>