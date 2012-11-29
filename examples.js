// you can get requires from  github.com/iamyellow/tiws   &   github.com/tipm/underscore
//modified based on github.com/oortcloud/node-ddp-client.  
//@ Bozhao Yu  github.com/yubozhao

(function() {
	var DDPClient, ddpclient;
	DDPClient = require("ddp-client");
	var ddpclient = new DDPClient({host: "localhost", port: 3000});
	
	ddpclient.connect(function() {
	  
	  Ti.API.debug('connected!');
	  
	  ddpclient.call('test', ['foo', 'bar1'], function(err, result) {
	    Ti.API.debug('called function, result: ' + result);
	  })
	  
	  ddpclient.subscribe('post', [], function() {
	    Ti.API.debug('posts complete:');
	    Ti.API.debug(ddpclient.collections.posts);
	  })
	});
})();
