var dateFormat = require('dateFormat');

var Bookshelf = require('bookshelf').MS;

module.exports = function(req, res) {
	var Reviews = Bookshelf.Model.extend({
		tableName: 'Reviews'
	});

	var upcomingReviews = new Reviews();

	var todayDate = new Date();
	var todayDate = dateFormat(todayDate, 'yyyy-mm-dd');

	//get all reviews with date >= current date
	upcomingReviews
		.query()
		.where('ReviewDate', '>=', todayDate)
		.then(function(reviews){
			res.json(reviews);
		});
};