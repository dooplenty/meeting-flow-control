var dateFormat = require('dateFormat');

var Bookshelf = require('bookshelf').MS;

module.exports = function(req,res){
	var reviewId = req.params.reviewid;

	var Reviews = Bookshelf.Model.extend({
		tableName: 'Reviews'
	});

	new Reviews({'ReviewID':reviewId})
		.fetch()
		.then(function(review){
			//need to fetch topics for reviews
			var TopicsModel = Bookshelf.Model.extend({
				tableName: 'Topics'
			});

			new TopicsModel()
				.query(function(qb){
					qb.where({'ReviewID':reviewId});
					qb.orderBy('ExpectedStart', 'ASC');
					qb.select().then(function(topics){
						var response = {};
						response.Review = review;
						response.Topics = topics;

						res.json(response);
					});
				})
		});
}