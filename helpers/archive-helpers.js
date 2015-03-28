var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj){
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(){
	// iterate through file to see if url is in there
	// take file, turn it from a string into an array
	// if callback is supplied, use callback on array(sappluy this?)
	
    var encoding = {encoding: 'utf8'};
	fs.readFile(exports.paths.list, encoding, function(err, data){
      if(!err){
        var resultsArray = data.toString().split('\n');
      }
      if(callback){
      	callback(resultsArray);
      }
	})

};

exports.isUrlInList = function(){
	// call readListOF URLS and provide callback that iterates trhoguh sites to find URL
	// if Found, invoke callback on url
	_.each(exports.readListOfUrls, function(item){
		if(item){
			callback(item)
			}
		})
};

exports.addUrlToList = function(){

};

exports.isUrlArchived = function(){

};

exports.downloadUrls = function(){

};
