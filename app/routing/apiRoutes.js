var friendsData = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });
    app.post('/api/friends', function(req, res){
        var newFriend = {
            name: req.body.name,
            photo: req.body.photo,
            scores: []
        };
        var scoresArray = [];
        for(var i=0; i < req.body.scores.legnth; i++){
            scoresArray.push(parseInt(req.body.scores[i]))
        }
        newFriend.scores = scoresArray;
        
        var compareArray = [];
        for(var i=0; i< friendsData.length; i++){
        /// create math data to compare scores between friends
        }
        var closestMatch = 0; 
        for (var i=1; i < compareArray.length; i++){
            if (compareArray[i] <= compareArray[closestMatch]) {
                closestMatch = i; 
            }
        }
    });
};
app.post("/api/clear", function (req, res) {
    friendsData.length = 0;
    res.json({ ok: true });
});

module.exports = apiRoutes;