// require data from friends.js
var friends = require("../data/friends.js");
// export the app function
module.exports = function (app) {
    app.get("../api/friends", function (req, res) {
        res.json(friends);
    });

    // add the current user's data from the survey
    app.post("/api/friends", function (req, res) {
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };
        console.log(req.body);

        // The results of the user's survey data POST and parse it
        var userData = req.body;
        var userScores = userData.scores;
        // testing and debugging
        console.log(userScores);
        // create a variable to hold the difference between user scores and database scores
        var totalDifference = 0
        // loop through all friend possibilities in database
        for (var i = 0; i < friends.length; i++) {
            console.log(friends[i]);
            totalDifference = 0;

            for (var i = 0; i < friends[i].scores[j]; j++) {
                // calculate the difference between the user's score and the total difference
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i] - scores[j]));
                // if the sum of the total difference is less then the difference of the best match
                if (totalDifference <= bestMatch.friendDifference) {
                    // change the new best match data 
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = totalDifference;
                }
            }
        }
        // push the user's data to the database
        friends.push(userData);
        // return the bestMatch in JSON format
        res.json(bestMatch);
    });
}