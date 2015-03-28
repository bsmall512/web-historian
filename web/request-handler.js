
 var archive = require('../helpers/archive-helpers.js');
 var stat = require("node-static");
 var publicFolder = archive.siteAssets;
 var serveStatic = new stat.Server(publicFolder); 

actions = {
       
       "GET": function(request, response) {
       		// call serveAssets

         var urlPath = request.url === '/' ? 'index.html' : request.url;
        // Serve assets
        exports.serveAssets(response, urlPath, callback);
        //check archive to see if url is on the list
       exports.readListOfUrls()
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
  } else{
  	//send 404
  }
}





  


  