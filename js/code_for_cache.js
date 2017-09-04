(function() {

	var form = document.getElementsByTagName('form')[0];

	form.onsubmit = function(){
		var emailVal = document.getElementById("email").value;
		var url = form.getAttribute("action");

		var body = document.getElementsByTagName("body")[0];
		var d = document.createElement("div");
		body.appendChild(d);

		var div = document.getElementsByTagName("div")[0];



		Arpit.ajax(url,{
			method:"POST",
			data: {
				email: emailVal
			},

			cache : false,

			before: function(){

				div.innerHTML = "<p>Loading...</p>";

			},
			complete: function(response){
				div.innerHTML = response;
			}

		});

		return false;

	};
}

)();




