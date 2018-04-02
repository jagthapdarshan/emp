'use strict';

const uuidv1 = require('uuid/v1');
var bodyParser = require('body-parser');
var url = require('url');

var mongoose = require('mongoose'), 
Employee = mongoose.model('Employee');

function Emp(name, age) {
  this.id = uuidv1();
  this.name = name;
  this.age = age;
}

exports.createEmployee = function (req, res){

	var employee = new Emp(req.body.name, req.body.age);
	var new_employee = new Employee(employee);	

	new_employee.save(function(err, emp){
		if(err)
			res.send(err);
		res.json(emp);	
	});
};

exports.getAllEmployee = function (req, res){
	
	Employee.find({}, function(err, emp){
		if(err)
			res.send(err);
		res.json(emp);	
	});
};

exports.getEmployee = function (req, res){
	
	Employee.findById(req.params.empId, function(err, emp){
		if(err)
			res.send(err);
		res.json(emp);
	});
};

exports.updateEmployee = function (req, res){
	Employee.findOneAndUpdate({_id: req.params.empId},req.body, {new: true}, function(err, emp){
	
		if(err)
			res.send(err);
		res.json(emp);
	});
};

exports.deleteEmployee = function (req, res){
	Employee.remove({_id: req.params.empId}, function(err, emp){
		if(err)
			res.send(err);
		res.json({mesage: req.params.empID + " deleted"});
	});
};
