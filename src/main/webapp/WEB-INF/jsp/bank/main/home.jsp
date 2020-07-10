<%@page import="com.esum.TestBankClient.Bank.model.TestVO"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>

<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
    <%
    	TestVO test = (TestVO)session.getAttribute("test");
    %>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
</head>
<body>
	helloworld this is test
	<div><%=test.getAge() %></div>
	<div><%=test.getId() %></div>
	<div><%=test.getName() %></div>
</body>
</html>