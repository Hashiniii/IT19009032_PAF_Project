<%@ page import="com.PAF.Cart"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%> 
    
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Shopping Cart Management</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
</head>
<body>

	<div class="container">
		<div class="row">
			<div class="col-6">
				<br /> <br />

				<h2 style="text-align: center">My Shopping Cart</h2>
				
				<form id="formCart" name="formCart">
					Product Code: 
					<input id="prodCode" name="prodCode" type="text"
						class="form-control form-control-sm"> 
					<br> Product Name:
					<input id="prodName" name="prodName" type="text"
						class="form-control form-control-sm"> 
					<br> Product Price: 
					<input id="prodPrice" name="prodPrice" type="text"
						class="form-control form-control-sm"> 
					<br> Quantity:
					<input id="quantity" name="quantity" type="text"
						class="form-control form-control-sm"> 
					<br> Customer Address:
					<input id="cusAddress" name="cusAddress" type="text"
						class="form-control form-control-sm"> 
					<br> Customer Contact
					<input id="CusContact" name="CusContact" type="text"
						class="form-control form-control-sm"> 
					<br> Customer Email
					<input id="CusEmail" name="CusEmail" type="text"
						class="form-control form-control-sm"> 
					<br> 
					<input id="btnSave" name="btnSave" type="button" value="Save"
						class="btn btn-primary"> 
					<input type="hidden" id="hidItemIDSave" 
						name="hidItemIDSave" value="">
				</form>
				
				<div id="alertSuccess" class="alert alert-success"></div>
				<div id="alertError" class="alert alert-danger"></div>
				<br>
				<div id="divItemsGrid">
					<%
					Cart cartObj = new Cart();
					out.print(cartObj.readCart());
					%> 
					</div>
			</div>
		</div>
	</div>
</body>
</html>

	