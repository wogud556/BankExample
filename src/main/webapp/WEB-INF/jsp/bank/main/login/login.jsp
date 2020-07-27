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
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script>
	function login_execute(){
		var userid = document.getElementById("login_id").value;
		var userpwd = document.getElementById("login_pwd").value;
		
		if(userid.length < 1){
			alert("���̵�� ��й�ȣ�� ��Ȯ�ϰ� �Է����ּ���.");
		}else if(userpwd < 1){
			alert("��й�ȣ�� ��Ȯ�ϰ� �Է����ּ���");
		}else if(userpwd.length > 10){//��й�ȣ�� �ּ� 9�� ������
			alert("��й�ȣ�� ��Ȯ�ϰ� �Է����ּ���");
		}else{
			var jsonObj = {};
			
			jsonObj.loginid = document.getElementById("login_id").value;
			jsonObj.loginpwd = document.getElementById("login_pwd").value;
			
			$.ajax({
				url : "loginResult.do",
				data: {"param" : JSON.stringify(jsonObj)},
				contentType : "application/json",
				cache: false,
				success: function (data22){
						window.location.href = "/main/main.do"
				},
				error : function(){
					alert("�α��� ó�� �� ������ �߻��Ͽ����ϴ�.");
				}
			});
		}
		
	}
</script>
</head>
<body>
	<h1>������ ���� ���α׷� �Դϴ�.</h1>
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