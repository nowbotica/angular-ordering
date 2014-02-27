function Main($scope, $q) {
    $scope.players = [{name: 'Gene', team: 'team alpha'},
                    {name: 'George', team: 'team beta'},
                    {name: 'Steve', team: 'team gamma'},
                    {name: 'Paula', team: 'team beta'},
                    {name: 'Scruath of the 5th sector', team: 'team gamma'}];

    // create a deferred object to be resolved later
    var teamsDeferred = $q.defer();

    // return a promise. The promise says, "I promise that I'll give you your
    // data as soon as I have it (which is when I am resolved)".
    $scope.teams = teamsDeferred.promise;

    // create a list of unique teams
    var uniqueTeams = unique($scope.players, 'team');

    // resolve the deferred object with the unique teams
    // this will trigger an update on the view
    teamsDeferred.resolve(uniqueTeams);

    // function that takes an array of objects
    // and returns an array of unique valued in the object
    // array for a given key.
    // this really belongs in a service, not the global window scope
    function unique(data, key) {
        var result = [];
        for (var i = 0; i < data.length; i++) {
            var value = data[i][key];
            if (result.indexOf(value) == -1) {
                result.push(value);
            }
        }
    }
}