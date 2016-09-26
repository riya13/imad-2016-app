// Counter code
var button = document.getElementById('counter');

button.onclick = function () {

    // Create a request object
    var request = new XMLHttpRequest();
    
    // Capture the response and store it in a variable
    request.onreadystatechange = function () {
      if (request.readyState === XMLHttpRequest.DONE) {
          // Take some action
          if (request.status === 200) {
              var counter = request.responseText;
              var span = document.getElementById('count');
              span.innerHTML = counter.toString();          
          }
      }  
      // Not done yet
    };
    
    // Make the request
    request.open('GET', 'http://riya13.imad.hasura-app.io/counter', true);
    request.send(null);
};

// Submit name
var submit = document.getElementById('submit_btn');
submit.onclick = function () {
  
    // Create a request object
    var request = new XMLHttpRequest();
    
    // Capture the response and store it in a variable
    request.onreadystatechange = function () {
      if (request.readyState === XMLHttpRequest.DONE) {
          // Take some action
          if (request.status === 200) {
              // Capture a list of names and render it as a list
              var names = request.responseText;
              names = JSON.parse(names);
              var list = '';
              for (var i=0; i< names.length; i++) {
                  list += '<li>' + names[i] + '</li>';
              }
              var ul = document.getElementById('namelist');
              ul.innerHTML = list;   
          }
      }  
      // Not done yet
    };
    
    // Make the request
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    request.open('GET', 'http://riya13.imad.hasura-app.io/submit-name?name=' + name, true);
    request.send(null);  

};


//Submit and Display Comments
var output = document.getElementById('submit-btn');
output.onCick = function() {
    
    //Create a request object
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function() {
        
        if(request.readyState === XMLHttpRequest.DONE) {
            
            if(request.status === 200) {
                
                //Capture the comments
                
                var comments = request.responseText;
                comments = JSON.parse(comments);
                
                var list = '';
                for(var i=0; i<comments.length; i++) {
                    list += '<li>' + comments + '</li>';
                }
                
                var ul = document.getElementById('commnentlist');
                ul.innerHTML = list;
                
            }
        }
    };
    
    //Making Request
    
    var commentInput = document.getElementById('comment-box');
    var comment = commentInput.value;
    request.open('GET', 'http://riya13.imad.hasura-app.io/submit-comment?comment=' + comment, true);
    request.send(null); 
    
};





