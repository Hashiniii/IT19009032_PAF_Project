$(document).ready(function()
{ 
if ($("#alertSuccess").text().trim() == "") 
 { 
 $("#alertSuccess").hide(); 
 } 
 $("#alertError").hide(); 
}); 


$(document).on("click", "#btnSave", function(event)
		{ 
	// Clear alerts---------------------
	$("#alertSuccess").text(""); 
	$("#alertSuccess").hide(); 
	$("#alertError").text(""); 
	$("#alertError").hide(); 
	// Form validation-------------------
	var status = validateCartForm(); 
	if (status != true) 
	{ 
		$("#alertError").text(status); 
		$("#alertError").show(); 
		return; 
	} 
	// If valid------------------------
	var type = ($("#hidCartIDSave").val() == "") ? "POST" : "PUT"; 
	$.ajax( 
			{ 
				url : "CartAPI", 
				type : type, 
				data : $("#formCart").serialize(), 
				dataType : "text", 
				complete : function(response, status) 
				{ 
					onCartSaveComplete(response.responseText, status); 
				} 
			}); 
		});

function onCartSaveComplete(response, status)
{ 
	if (status == "success") 
	{ 
		var resultSet = JSON.parse(response); 
		if (resultSet.status.trim() == "success") 
		{ 
			$("#alertSuccess").text("Successfully saved."); 
			$("#alertSuccess").show(); 
			$("#divCartGrid").html(resultSet.data); 
		} else if (resultSet.status.trim() == "error") 
		{ 
			$("#alertError").text(resultSet.data); 
			$("#alertError").show(); 
		} 
	} else if (status == "error") 
	{ 
		$("#alertError").text("Error while saving."); 
		$("#alertError").show(); 
	} else
	{ 
		$("#alertError").text("Unknown error while saving.."); 
		$("#alertError").show(); 
	} 14
	$("#hidCartIDSave").val(""); 
	$("#formCart")[0].reset(); 
}


// UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event) 
		{ 
	$("#hidCartIDSave").val($(this).closest("tr").find('#hidCartIDUpdate').val()); 
	$("#prodCode").val($(this).closest("tr").find('td:eq(0)').text()); 
	$("#prodName").val($(this).closest("tr").find('td:eq(1)').text()); 
	$("#prodPrice").val($(this).closest("tr").find('td:eq(2)').text()); 
	$("#quantity").val($(this).closest("tr").find('td:eq(3)').text()); 
	$("#CusAddress").val($(this).closest("tr").find('td:eq(3)').text()); 
	$("#CusContact").val($(this).closest("tr").find('td:eq(3)').text()); 
	$("#CusEmail").val($(this).closest("tr").find('td:eq(3)').text()); 
		}); 

$(document).on("click", ".btnRemove", function(event)
		{ 
	$.ajax( 
			{ 
				url : "CartAPI", 
				type : "DELETE", 
				data : "id=" + $(this).data("id"),
				dataType : "text", 
				complete : function(response, status) 
				{ 
					onCartDeleteComplete(response.responseText, status); 
				} 
			}); 
		});

function onCartDeleteComplete(response, status)
{ 
	if (status == "success") 
	{ 
		var resultSet = JSON.parse(response); 
		if (resultSet.status.trim() == "success") 
		{ 
			$("#alertSuccess").text("Successfully deleted."); 
			$("#alertSuccess").show(); 
			$("#divItemsGrid").html(resultSet.data); 
		} else if (resultSet.status.trim() == "error") 
		{ 
			$("#alertError").text(resultSet.data); 
			$("#alertError").show(); 
		} 
	} else if (status == "error") 
	{ 
		$("#alertError").text("Error while deleting."); 
		$("#alertError").show(); 
	} else
	{ 
		$("#alertError").text("Unknown error while deleting.."); 
		$("#alertError").show(); 
	} 
 
}

function validateCartForm() 
{ 
// CODE
if ($("#prodCode").val().trim() == "") 
 { 
 return "Insert Product Code."; 
 } 

// NAME
if ($("#prodName").val().trim() == "") 
 { 
 return "Insert Product Name."; 
 } 

// PRICE-------------------------------
if ($("#prodPrice").val().trim() == "") 
 { 
 return "Insert Product Price."; 
 } 
// is numerical value
var tmpPrice = $("#prodPrice").val().trim(); 
if (!$.isNumeric(tmpPrice)) 
 { 
 return "Insert a numerical value for Product Price."; 
 } 
// convert to decimal price
 $("#prodPrice").val(parseDouble(tmpPrice).toFixed(2));
 
// QUANTITY------------------------
if ($("#quantity").val().trim() == "") 
 { 
 return "Insert Product Quantity."; 
 } 
//is numerical value
var tmpquant = $("#quantity").val().trim(); 
if (!$.isNumeric(tmpquant)) 
 { 
 return "Insert a numerical value for Product Quantity."; 
 } 

//ADDRESS
if ($("#CusAddress").val().trim() == "") 
{ 
return "Insert Customer Address."; 
} 

//CONTACT NUMBER
if ($("#CusContact").val().trim() == "") 
{ 
return "Insert Customer Contact Number."; 
} 

//EMAIL
if ($("#CusEmail").val().trim() == "") 
{ 
return "Insert Customer Email."; 
} 

return true; 
}


