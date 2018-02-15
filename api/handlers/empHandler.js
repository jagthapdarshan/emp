'use strict';

exports.createEmployee = function (req, res){
	console.log("Create employee")
};

exports.getAllEmployee = function (req, res){
	console.log("Get all employees")
	res.send('OK');
};

exports.getEmployee = function (req, res){
	console.log("Get an employee")
};

exports.updateEmployee = function (req, res){
	console.log("update an employee")
};

exports.deleteEmployee = function (req, res){
	console.log("Delete an employee")
};
