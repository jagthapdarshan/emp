'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({

	id: {
		type: String,
		required: 'Kindly enter ID'	
	},
	name: {
		type: String,
		required: 'Name needed'
	},
	age: {
		type: Number,
		required: 'Age required'
	}

});

module.exports = mongoose.model('Employee', TaskSchema);
