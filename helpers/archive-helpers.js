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

exports.readListOfUrls = function(callback){
	// iterate through file to see if url is in there
	// take file, turn it from a string into an array
	// if callback is supplied, use callback on array(sappluy this?)
	
	fs.readFile(exports.paths.list,  function(err, sites){
        if(!err){
        sites = sites.toString().split('\n');
         }
      if(callback){
      	callback(sites);
      }
	})

};

exports.isUrlInList = function(url, callback){
	var found = false
    
    exports.readListOfUrls(function(sites){
      for(var i = 0; i < sites.length; i++){
     	if(sites[i]===url){
     	  found = true;
     	}
      }
    });
    callback(found);
};

exports.addUrlToList = function(url, callback){
	//if(exports.path)
	var urlToAdd =  url + '\n';
	fs.writeFile(exports.paths.list, urlToAdd, function (err) {
		if(err){
			return console.log(err);
		}
		// } else {
		// 	console.log('file saved');
		// }
	})
	callback(urlToAdd);

};

exports.isUrlArchived = function(url, callback){
  var found = false
  
  fs.readdir(exports.paths.archivedSites,  function(err, files){
      for(var i = 0; i < files.length; i++){
     	if(files[i]===url){
     	  found = true;
     	}
      }
	})

    callback(found);
};

exports.downloadUrls = function(url, callback){
  
  
  var file = fs.createWriteStream(exports.paths.archivedSites/+ url);
  var request = http.get("http://i3.ytimg.com/vi/J---aiyznGQ/mqdefault.jpg", function(response) {
  response.pipe(file);
});
};


// var file_name = url.parse(file_url).pathname.split('/').pop();
// var file = fs.createWriteStream(DOWNLOAD_DIR + file_name);

// http.get(options, function(res) {
//     res.on('data', function(data) {
//             file.write(data);
//         }).on('end', function() {
//             file.end();
//             console.log(file_name + ' downloaded to ' + DOWNLOAD_DIR);
//         });
//     });
};
