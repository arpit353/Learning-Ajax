(function() {

var link = document.getElementsByTagName("a")[0];

link.onclick = function(){

	Arpit.ajax("files/ajax.xml",{
		method: "GET",
		complete : function(response){

			alert("JKHJ");

			alert(response.getElementsByTagName("heading")[0].firstChild.nodeValue);

		
/*
			alert(response) for text and html
			alert(response.heading) for json

*/			

		}
	})

	return false;

	};

})();