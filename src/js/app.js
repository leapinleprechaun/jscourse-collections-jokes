// Model - create a model constructor
var Joke = Backbone.Model.extend({
});

// Collection - create a collection constructor
var Jokes = Backbone.Collection.extend({
	url: 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten',
	model: Joke
});

// create a new Instance of the Jokes collection
var jokesList =  new Jokes();

// Send a request to the url to get the jokes
jokesList.fetch().then(function(response){
	//response argument gives you all of the returned information here if you want to debugger and check it here

	// Get a copy of only the knock knock jokes by filtering on the type attribute
	var justKnockKnocks = jokesList.where({type: "knock-knock"});

	// loop through the knock knock jokes after it has been fetched
	_.each(justKnockKnocks, function(joke){
		//The joke argument here holds one joke model

		// use the .get method to get information from that model
		console.log(joke.get('setup'));
		console.log(joke.get('punchline'));
	});
});



