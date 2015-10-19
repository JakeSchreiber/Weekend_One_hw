var employeeArray = [];
var totalEmployeeArray = [];

$(document).ready(function(){
	
	$("#employeeContainer").submit(function(event){
		event.preventDefault();
		
		var values = {};

		$.each($("#employeeContainer").serializeArray(),function(i,field){
			values[field.name]=field.value;

			$('#singleEmployee').css({"opacity":"0", "display" : "block"}).show().animate({opacity:1});
		})

		$("#employeeContainer").find("input[type=text]").val("");
		$("#employeeContainer").find("input[type=number]").val("");
		
		console.log(values);
		employeeArray.push(values);
		appendDom(values);
		console.log(employeeArray);
			
	});

	$("#singleEmployee").on('click', '.confirmButton', function(){ 
	$("#singleEmployee").empty();
	console.log("Confirm has been pressed");
	$('#singleEmployee').css({"opacity":"1", "display" : "none"}).hide().animate({opacity:0});
})

	$("#singleEmployee").on('click', '.cancelButton', function(){ 
	$("#singleEmployee").empty();
	console.log("Cancel has been pressed");
	employeeArray.pop();
	$('#singleEmployee').css({"opacity":"1", "display" : "block"}).hide().animate({opacity:0});
	console.log(employeeArray);
	return employeeArray;
})

function appendDom(employee){
	$("#singleEmployee").append("<div class='employee'></div>");
	
	var $el = $("#singleEmployee").children().last();

	$el.append("<p>" + 'First Name: ' + employee.employeeFirstName + "</p>");
	$el.append("<p>" + 'Last Name: ' + employee.employeeLastName + "</p>");
	$el.append("<p>" + 'ID#: ' + employee.employeeID + "</p>");
	$el.append("<p>" + 'Job Title: ' + employee.employeeTitle + "</p>");
	$el.append("<p>" + 'Salary: ' + employee.employeeSalary + "</p>");
	$el.append("<button class='confirmButton'>Confirm</button>");
	$el.append("<button class='cancelButton'>Cancel</button>");


	

};


	$("#calculateSalaries").on('click', function(){
		var totalSalaryArray = [];
		var totalOfSalaries = 0;
		$("#calculatedSalaries").append("<div class='salaries'></div>");

		var $el2 = $("#calculatedSalaries").children().last();
			for(var i=0;i<employeeArray.length;i++){
			totalSalaryArray.push(parseInt(employeeArray[i].employeeSalary));
			}

			for(i=0;i<totalSalaryArray.length;i++){
				totalOfSalaries += totalSalaryArray[i];
				totalOfSalaries = Math.round(totalOfSalaries / 12);
			}

			$('#calculatedSalaries').css({"opacity":"0", "display" : "block"}).show().animate({opacity:1});
			$el2.append("<p>" + 'Total Amount in Salaries is: ' + "<p2>" + '$' + totalOfSalaries + "<p2>");
			$el2.append("<button class='closeButton'>Close</button>");
			$("#calculatedSalaries").on('click', '.closeButton', function(){
				$('#calculatedSalaries').css({"opacity":"1", "display" : "block"}).hide().animate({opacity:0});
				$("#calculatedSalaries").empty();

			})
			// alert("Total Amount in Salaries is: $" + totalOfSalaries);
		});
});


