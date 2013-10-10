EazyPass.Router.map(function () {
	/*this.resource('movies', {path: '/movies'}, function () {
		this.resource('movie', {path: ':movie_id'});
	});

	this.resource('users', function () {
		this.resource('user', { path: ':user_id'});
	});*/
	this.route('movies');
	this.route('movie', {path: 'movie/:movie_id'});
	this.route('users');
	this.route('user', { path: 'user/:user_id'});
});

EazyPass.MoviesRoute = Ember.Route.extend({
	model: function() {
		return EazyPass.Movie.find();
	},

	setupController: function (controller, model) {
		controller.set('movies', model);
	}
});

EazyPass.MovieRoute = Ember.Route.extend({
	model: function(params) {

		console.log(EazyPass.Movie.find(params.movie_id));
		return EazyPass.Movie.find(params.movie_id);
	}
});


EazyPass.UsersRoute = Ember.Route.extend({

});

EazyPass.UserRoute = Ember.Route.extend({
	renderTemplate: function() {
      this.render('user', { into: 'application' });
  }
});