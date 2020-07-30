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
<title>신규 가입 창</title>
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script>
	function user_insert(){
		var userid = document.getElementById("login_id").value;
		var userpwd = document.getElementById("login_pwd").value;
		
		if(userid.length < 1){
			alert("아이디와 비밀번호를 정확하게 입력해주세요.");
		}else if(userpwd < 1){
			alert("비밀번호를 정확하게 입력해주세요");
		}else if(userpwd.length > 10){//비밀번호는 최소 9자 까지만
			alert("비밀번호를 정확하게 입력해주세요");
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
							alert("로그인에 성공하였습니다.");	
							window.location.href = "/main/main.do";
						}else{
							alert("로그인에 실패하였습니다.");
						}
				},
				error : function(){
					alert("로그인 처리 중 문제가 발생하였습니다.");
				}
			});
		}
		
	}
	
	function user_dup_execute(){
		var userid = document.getElementById("user_id").value;
		
		if(userid == ""){
			alert("아이디가 입력되지 않았습니다.")
		}else{
			
			var jsonobj = {}
			jsonobj.userid = userid;
			
			$.ajax({
				url : "useridConfirm.do",
				data: {"param" : JSON.stringify(jsonobj)},
				contentType : "application/json",
				cache: false,
				success: function (data22){
					
						
							alert(data22 +"사용 가능한 아이디 입니다.");	
							var data = document.getElementById("user_id").value;
							data = data22;
						
				},
				error : function(){
					alert("아이디 확인 중 오류가 발생하였습니다.");
				}
			});
		}
		
		
		}
</script>
</head>
<body>
	<h1>이것은 팝업창 입니다.</h1>
	<table border="0" align="left">
		<form name="login" method="post">
			<tr>
				<td>아이디</td>
				<td><input type="text" id="user_id" name="user_id"
					class="box01" size="19" maxlength="16"
					onkeypress="if(self.event.keyCode==13) user_dup_execute();" /></td>
				<td width="70"><button onclick="user_dup_execute();">중복확인</button></td>
			</tr>
			<tr>
				<td>패스워드</td>
				<td><input type="password" id="user_pwd" name="user_pwd"
					class="box01" size="19" maxlength="9"
					onkeypress="if(self.event.keyCode==13) login_execute();"
					onFocus="this.value=''"></td>
				<td width="20"></td>
				<td width="70"></td>
			</tr>
			<tr>
				<td>패스워드 확인</td>
				<td><input type="password" id="user_pwd_right"
					name="user_pwd_right" class="box01" size="19" maxlength="9"
					onkeypress="if(self.event.keyCode==13) login_execute();"
					onFocus="this.value=''"></td>
				<td width="20"></td>
				<td width="46"></td>
			</tr>
			<tr>
				<td>이름</td>
				<td><input type="text" id="user_name" name="user_name"
					class="box01" size="19" maxlength="16" /></td>
				<td width="70"></td>
			</tr>
			<!-- 20160503 -->
			<tr>
				<td></td>
				<td></td>
				<td height="4" colspan="3"><input type="button" value="등록"
					onclick="user_insert();"></input></td>
			</tr>
		</form>
	</table>
</body>
</html>