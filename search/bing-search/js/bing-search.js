
// function createCORSRequest(method, url) {
// 	var xhr = new XMLHttpRequest();
// 	if ("withCredentials" in xhr) {			// 针对Chrome/Safari/Firefox.
// 		xhr.open(method, url, true);
// 		xhr.setRequestHeader("Access-Control-Allow-Origin","*" );
// 	} else if (typeof XDomainRequest != "undefined") {	    // 针对IE
// 		xhr = new XDomainRequest();
// 		xhr.open(method, url);
// 	} else {							    // 不支持CORS
// 		xhr = null;
// 	}
// 	return xhr;
// }

// function makeCorsRequest(searchText){ 
// 	var url = 'http://api.bing.com/qsonhs.aspx?q=' + searchText;

// 	var xhr = createCORSRequest('GET', url);
// 	if (!xhr) {
// 		alert('CORS not supported');
// 		return;
// 	}


// 	xhr.onload = function() {
// 		var text = xhr.responseText;
// 		console.log(text);
// 	};

// 	xhr.onerror = function() {
// 		alert('Woops, there was an error making the request.');
// 	};

// 	xhr.send();
// }

function jsonpCallback(result) {  
        console.log(result);
    } 



$("#input-text").bind('keyup', function() {
	var searchText = $("#input-text").val();
	console.log(searchText);
	//makeCorsRequest(searchText);

	$.ajax({  
		url:"http://api.bing.com/qsonhs.aspx?p="+ searchText,  
		dataType:'jsonp',  
		data:'',  
		jsonp:'callback',  
		success:function(result) {  
			console.log(result);
	    }  
	}),  

	// var JSONP=document.createElement("script");  
 //    	JSONP.type="text/javascript";  
 //    	JSONP.src="http://api.bing.com/qsonhs.aspx?callback=jsonpCallback&p="+ searchText ;
 //    	document.getElementsByTagName("body")[0].appendChild(JSONP);
	$("#search-suggest").show().css({
		top: $("#search-form").offset().top +$(".search-form").height() + 10 ,
		left: $("#search-form").offset().left,
		position:"absolute"
	});
});

