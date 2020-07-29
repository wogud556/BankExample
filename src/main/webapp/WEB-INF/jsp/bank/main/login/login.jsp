<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>

<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
    	
    %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script>
	function login_execute(){
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
						alert(data22);
						if(Boolean(data22.trim())){
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
	
	function new_user_popup(){
		var url = "/newUser.do";
		var name = "신규 가입 창";
		window.open(url, name, "width=800, height=1000, toolbar=no, status=no, scrollbar=yes, menubar=yes, resizable=yes, left=100, right=100");
	}
</script>
</head>
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