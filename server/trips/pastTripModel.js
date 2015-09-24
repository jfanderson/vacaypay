// Todo Implement and export schema using mongoose
// Reference angular sprint
var mongoose = require('mongoose');
var User = require('../users/UserModel.js');

var Schema = mongoose.Schema;

var PastTripSchema = new Schema({
	code: {
		type: String,
		required: true,
		unique: true
	},
	expenses: [
		{
			name: String,
			amount: Number,
			payer: {
				type: ObjectId,
				ref: 'User'
			},
			stakeholder: [{
				type: ObjectId,
				ref: 'User'
			}],
		}
	]
});

module.exports = mongoose.model('pasttrips', PastTripSchema);