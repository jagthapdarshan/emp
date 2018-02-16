'use strict';

exports.createEmployee = function (req, res){
	
	// Whenever a POST Call is made to /api/emp this handler is invoked
	// Read the incoming params and store it locally
	// The function of this is to generate a unique ID for every new employee (or for every time this handler is invoked)
	// We should generate a string {String + RandomID} and use it to creata a new employee ID.
	// This above created ID should be used in th ID field while creating a DB record, along with other require params like ID, name etc
	// Return JSON with created details
	console.log("Create employee")
};

exports.getAllEmployee = function (req, res){
	// invoked on get call to path /api/emp
	//read and store params
	// This function should make a DB call to get al the employees and return it in the form of JSON 
	console.log("Get all employees")
	res.send('OK');
};

exports.getEmployee = function (req, res){
	// Invoked on /api/:EmpID
	// read and store param
	// if exists respond else handle exception
	// This should retrieve a single/desired EMp record from DB based on the input ID
	// respond in JSON fmt
	console.log("Get an employee")
};

exports.updateEmployee = function (req, res){
	// invoked on put call /api/:empID
	// Read and store param
	// delete desired record based on ID
	// respond update record 
	console.log("update an employee")
};

exports.deleteEmployee = function (req, res){
	// Invoked on delete call /api/:empid
	// read and store local param
	// if exists delete else handle exception
	console.log("Delete an employee")
};
