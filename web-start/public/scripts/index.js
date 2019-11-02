var signInButtonElement = document.getElementById('signin');
signInButtonElement.addEventListener('click', signIn);

var signInButton = document.getElementById('signinUser');
signInButton.addEventListener('click', signInUser);


function signInUser() {
    // Sign into Firebase using popup auth & Google as the identity provider.
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then( function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        
        window.location.replace("http://localhost:5000/subscriber.html")
      }).catch(function(error) {
        // Handle Errors here.
        // var errorCode = error.cod
      });
  }

  function signIn() {
    // Sign into Firebase using popup auth & Google as the identity provider.
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then( function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        
        window.location.replace("http://localhost:5000/publisher.html")
      }).catch(function(error) {
        // Handle Errors here.
        // var errorCode = error.cod
      });
  }
  
