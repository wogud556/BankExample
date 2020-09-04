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

</script>
</head>
<frameset rows="8,80" framespacing="0" frameborder="no" border="0"
	noresize="no">
	<frame src="<c:url value='/header.do'/>" id="header" name="header" frameborder="no" scrolling="no" noresize="no" marginwidth="0" marginheight="0">
	<frame src="<c:url value='/middle.do'/>" id="middle" name="middle" frameborder="no" scrolling="no" noresize="no" marginwidth="0" marginheight="0">
</frameset>
</html>