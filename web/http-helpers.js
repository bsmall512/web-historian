var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');

exports.headers = headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "text/html"
};

exports.serveAssets = function(response, asset, callback) {
  // Write some code here that helps serve up your static files!
  // (Static files are things like html (yours or archived from others...),
  // css, or anything that doesn't change often.)
	   var encoding = {encoding: 'utf8'};
     fs.readFile(archive.paths.siteAssets + asset, encoding, function(err, data){ 
        callback(data)
       })
   };



// As you progress, keep thinking about what helper functions you can put here!
// helper function 404
       // if(err){
       //  fs.readFile(archive.pate.archiveSites + asset, encode, function(err, data){
       //    if(err){
       //      callback ? callback() : exports.sendResponse(response, '404', 404);
       //    }
       //    else{
       //      callback(fs.readFile())
       //    }
       //  })
       // }