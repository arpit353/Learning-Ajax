var Arpit = {};

Arpit.createXHR = function(url,options){

  var xhr = false;

  if(window.XMLHttpRequest){
    xhr = new XMLHttpRequest();
  }


  if(xhr){
    options = options || {};
    options.method = options.method || "GET";
    options.data = options.data || null;

    if(options.data){

      var qstring = [];

      for( var key in options.data){
        qstring.push(encodeURIComponent(key)+"="+encodeURIComponent(options.data[key]));
      }

      options.data = qstring.join("&");

    }


    if(options.cache == false )
    {

      url = url+"?_="+ new Date().getTime();

      alert(url);

    }

    xhr.onreadystatechange = function(){

      if(xhr.readyState == 1){

        if(options.before){

          options.before();

        }

        

      }


      if((xhr.readyState == 4) && (xhr.status == 200 || xhr.status == 304)){

        var contentType = xhr.getResponseHeader('Content-Type');
        if(options.complete){
          if(contentType == "application/json"){
            options.complete(JSON.parse(xhr.responseText));
            
          }else if(contentType == "text/xml" || contentType=="application/xml"){
            options.complete(xhr.responseXML);
            
          }else{
            options.complete(xhr.responseText);

          }

        }
    }
  };

  xhr.open(options.method,url,true);
  return xhr;
} else{
  return false;
}
};

Arpit.ajax = function(url , options){

  var xhr = Arpit.createXHR(url,options);

  if(xhr){
    xhr.setRequestHeader("X-Requested-With","XMLHttpRequest");

    if(options.method.toUpperCase() == "POST"){
      xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

    }

    xhr.send(options.data);

  }


};
