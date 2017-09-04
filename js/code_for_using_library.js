(function() {

var link = document.getElementsByTagName("a")[0];

link.onclick = function(){

	Arpit.ajax("files/ajax.json",{
		method: "GET",
		complete : function(response){

			var body = document.getElementsByTagName("body")[0];
			var json = JSON.parse(response);

			var heading = json.heading;

			var h2 = document.createElement("h2");
			var h2Text = document.createTextNode(heading);
			h2.appendChild(h2Text);

			var list = document.createElement("ul");

			var items = json.items;


			for( var i in items)
			{
				var item = items[i];
				var li = document.createElement("li");
				var liText = document.createTextNode(item);
				li.appendChild(liText);
				list.appendChild(li);
			}

			console.log(list);
			body.appendChild(h2);
			body.appendChild(list);
			body.removeChild(link);
		}
	})

	return false;

	};
}

)();
