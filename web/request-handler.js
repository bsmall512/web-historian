
 var archive = require('../helpers/archive-helpers.js');
 var stat = require("node-static");
 var publicFolder = archive.siteAssets;
 var serveStatic = new stat.Server(publicFolder); 
 var httphelpers = require('./http-helpers');

actions = {
       
       "GET": function(request, response) {
       		// call serveAssets

         var urlPath = request.url === '/' ? '/index.html' : request.url;
        // Serve assets
        httphelpers.serveAssets(response, urlPath, function(data){
        	response.writeHead(200, httphelpers.headers);
        	response.end(data);
        });
        	//if urlPath === index.html  response.end(data);
        	// else is urlInPath
        	//else 404;
        	
        
        //check archive to see if url is on the list
       
          //if on list
             // do something
          // else
            // do something else
       }


}


exports.requestHandler = function(request, response) {
	// call serveAssets
  var action = actions[request.method];
  if(action){
  	//call action with request and response
  	action(request, response)

  } else{
  	//send 404
  }
}





  


  