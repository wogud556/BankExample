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
<title>�ű� ���� â</title>
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script>
	function user_insert(){
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
					
						if(data22.toString == "true"){
							alert("�α��ο� �����Ͽ����ϴ�.");	
							window.location.href = "/main/main.do";
						}else{
							alert("�α��ο� �����Ͽ����ϴ�.");
						}
				},
				error : function(){
					alert("�α��� ó�� �� ������ �߻��Ͽ����ϴ�.");
				}
			});
		}
		
	}
	
	function user_dup_execute(){
		var userid = document.getElementById("user_id").value;
		
		if(userid == ""){
			alert("���̵� �Էµ��� �ʾҽ��ϴ�.")
		}else{
			
			var jsonobj = {}
			jsonobj.userid = userid;
			
			$.ajax({
				url : "useridConfirm.do",
				data: {"param" : JSON.stringify(jsonobj)},
				contentType : "application/json",
				cache: false,
				success: function (data22){
					
						
							alert(data22 +"��� ������ ���̵� �Դϴ�.");	
							var data = document.getElementById("user_id").value;
							data = data22;
						
				},
				error : function(){
					alert("���̵� Ȯ�� �� ������ �߻��Ͽ����ϴ�.");
				}
			});
		}
		
		
		}
</script>
</head>
<body>
	<h1>�̰��� �˾�â �Դϴ�.</h1>
	<table border="0" align="left">
		<form name="login" method="post">
			<tr>
				<td>���̵�</td>
				<td><input type="text" id="user_id" name="user_id"
					class="box01" size="19" maxlength="16"
					onkeypress="if(self.event.keyCode==13) user_dup_execute();" /></td>
				<td width="70"><button onclick="user_dup_execute();">�ߺ�Ȯ��</button></td>
			</tr>
			<tr>
				<td>�н�����</td>
				<td><input type="password" id="user_pwd" name="user_pwd"
					class="box01" size="19" maxlength="9"
					onkeypress="if(self.event.keyCode==13) login_execute();"
					onFocus="this.value=''"></td>
				<td width="20"></td>
				<td width="70"></td>
			</tr>
			<tr>
				<td>�н����� Ȯ��</td>
				<td><input type="password" id="user_pwd_right"
					name="user_pwd_right" class="box01" size="19" maxlength="9"
					onkeypress="if(self.event.keyCode==13) login_execute();"
					onFocus="this.value=''"></td>
				<td width="20"></td>
				<td width="46"></td>
			</tr>
			<tr>
				<td>�̸�</td>
				<td><input type="text" id="user_name" name="user_name"
					class="box01" size="19" maxlength="16" /></td>
				<td width="70"></td>
			</tr>
			<!-- 20160503 -->
			<tr>
				<td></td>
				<td></td>
				<td height="4" colspan="3"><input type="button" value="���"
					onclick="user_insert();"></input></td>
			</tr>
		</form>
	</table>
</body>
</html>