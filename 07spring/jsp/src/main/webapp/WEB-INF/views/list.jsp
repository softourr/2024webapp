<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<html>
<head>
    <title>Title</title>
</head>
<body>
${lists}
<table width="500" cellpadding="0" cellspacing="0" border="1">
  <tr>
    <td>번호</td>
    <td>작성자</td>
    <td>제목</td>
    <td>내용</td>
    <td>삭제</td>
  </tr>
  <c:forEach var="item" items="${lists}">
    <tr>
      <td>${item.id}</td>
      <td>${item.writer}</td>
      <td>${item.title}</td>
      <td>${item.content}</td>
      <td>X</td>
    </tr>
  </c:forEach>
</table>
<div style="width: 500px; display: flex; justify-content: flex-end;">총 개수 : ${count}</div>
<p><a href="writeForm">글쓰기</a></p>
</body>
</html>
