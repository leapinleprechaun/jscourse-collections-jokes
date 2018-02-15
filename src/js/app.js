// Model
var Joke = Backbone.Model.extend({
});

// Collection
var Jokes = Backbone.Collection.extend({
	url: 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten',
	model: Joke
});


var jokesList =  new Jokes();

jokesList.fetch().then(function(response){
	_.each(jokesList.where({type: "knock-knock"}), function(joke){
		console.log(joke.get('setup'));
		console.log(joke.get('punchline'));
	});
});



