'use strict';

module.exports = function(app){
	var emp = require('../handlers/mhandler');

//routes

app.route('/api/emp')
	.post(emp.createEmployee,)
	.get(emp.getAllEmployee);


app.route('/api/:empId')
	.get(emp.getEmployee)
	.put(emp.updateEmployee)
	.delete(emp.deleteEmployee);

}; 


