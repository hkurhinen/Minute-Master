var GitHubApi = require('github');
var config = require('../config.js');

var github = new GitHubApi({
    version: '3.0.0',
    protocol: 'https',
    host: 'api.github.com',
    timeout: 5000,
    headers: {
        'user-agent': 'Minute-Master-by-Belvain'
    }
});

module.exports = function(app){
  app.get('/', function(req, res){
    github.issues.repoIssues({
      user:'hacklabmikkeli',
      repo:'decision-making',
      state:'all'
    }, function(err, issues){
      res.render('index', {issues: issues, members: config.board_members});
    });
  });
};