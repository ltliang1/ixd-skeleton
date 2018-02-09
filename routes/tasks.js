/*
 * GET tasks page.
 */

var data = require("../tasks.json");

exports.view = function(req, res){
  res.render('tasks', {
      'tasks': data.tasks
  });
};