

const uuidv1 = require('uuid/v1');
var bodyParser = require('body-parser');
var url = require('url');

function Employee(name, age) {
  this.id = uuidv1();
  this.name = name;
  this.age = age;
}

var db = [], i=0;

exports.createEmployee = function (req, res){

	var id = uuidv1();
	var emp = new Employee(req.body.name, req.body.age);
	res.send(emp);
	db[emp.id] = emp;

//	res.send(db);
};

exports.getAllEmployee = function (req, res){
	let allEmps = [];
	for(var emp in db){
		allEmps.push(db[emp]);	
	}
	
	res.send(allEmps);
};

exports.getEmployee = function (req, res){

	var u = req.params.empId;
	console.log(u)
	if(db[u] == undefined){
		res.status(404);
	}
	res.status(200).json(db[u]);
};

exports.updateEmployee = function (req, res){

	let id = req.params.empId;
	if(db[id] == undefined){
                res.status(404).send("Employee doesn't exist");
        }
	db[id].name = req.body.name;
	db[id].age = req.body.age;

	res.status(200).json(db[id]);
};

exports.deleteEmployee = function (req, res){
	let empName = db[req.params.empId].name;	
	
	delete db[req.params.empId];
	
	res.status(200).send("Deleted " + empName);
};
