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
<title>신규 가입 창</title>
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script>
	function user_insert() {
		var userid = document.getElementById("user_id").value;
		var userpwd = document.getElementById("user_pwd").value;
		var userpwdconfirm = document.getElementById("user_pwd_right").value;
		var username = document.getElementById("user_name").value;
		
		var jsonobj = {}
		jsonobj.userid = userid;
		jsonobj.userpwd = userpwd;
		jsonobj.userpwdconfirm = userpwdconfirm;
		jsonobj.username = username;
		
		$.ajax({
			url : "userinsert.do",
			data : {
				"param" : JSON.stringify(jsonobj)
			},
			contentType : "application/json",
			success : function(data22) {
				alert(data22.toString().trim());
				if(data22.toString().trim() === "true"){
					
				}else{
					
				}
				
			},
			error : function() {
				alert("아이디 확인 중 오류가 발생하였습니다.");
			}
		});
		
		alert("틍록한다");
	}

	function user_dup_execute() {
		var userid = document.getElementById("user_id").value;

		if (userid == "") {
			alert("아이디가 입력되지 않았습니다.");
		} else {

			var jsonobj = {}
			jsonobj.userid = userid;

			$.ajax({
				url : "useridConfirm.do",
				data : {
					"param" : JSON.stringify(jsonobj)
				},
				contentType : "application/json",
				success : function(data22) {
					alert(data22.toString().trim());
					if(data22.toString().trim() === "true"){
						alert("사용중인 아이디 입니다.");
						//$("#check_id").text("사용중인아이디입니다.");
						//$("#check_id").css("color","red");
					}else{
						alert("사용 가능한 아이디 입니다.");
						//$("#check_id").text("사용가능합니다.");
						//$("#check_id").css("color","red");
					}
					
				},
				error : function() {
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
		<form id="check_id" name="login" method="post">
			<tr>
				<td>아이디</td>
				<td><input type="text" id="user_id" name="user_id"
					class="box01" size="19" maxlength="16" /></td>
				<td width="70"><button id="check_button"  onclick = "user_dup_execute()" type="button">중복확인</button></td>
				<td><div id="check_id"></div></td>
			</tr>
			<tr>
				<td>패스워드</td>
				<td><input type="password" id="user_pwd" name="user_pwd"
					class="box01" size="19" maxlength="20"
					onkeypress="if(self.event.keyCode==13) login_execute();"
					onFocus="this.value=''"></td>
				<td width="20"></td>
				<td width="70"></td>
			</tr>
			<tr>
				<td>패스워드 확인</td>
				<td><input type="password" id="user_pwd_right"
					name="user_pwd_right" class="box01" size="19" maxlength="20"
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
				<td height="4" colspan="3"><button id = "data_insert" type="button" onclick = "user_insert()" >등록</button></td>
			</tr>
		</form>
	</table>
</body>
</html>