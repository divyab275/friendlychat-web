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
  




  // Initiate firebase auth.
// function initFirebaseAuth() {
//     // Listen to auth state changes.
//     firebase.auth().onAuthStateChanged(authStateObserver);
//   }
  
  // Returns the signed-in user's profile Pic URL.
  function getProfilePicUrl() {
    return firebase.auth().currentUser.photoURL || '/images/profile_placeholder.png';
  }
  
  // Returns the signed-in user's display name.
  function getUserName() {
    return firebase.auth().currentUser.displayName;
  }
  // Returns true if a user is signed-in.
  function isUserSignedIn() {
    return !!firebase.auth().currentUser;
  }
  
 

  // function authStateObserver(user) {
  //   if (user) { // User is signed in!
      
  //     // saveMessagingDeviceToken();
  //   } else { // User is signed out!
      
  //     window.location.replace( "http://localhost:5000/index.html")
  
  //     // Show sign-in button.
  //   }
  // }
  
  // Returns true if user is signed-in. Otherwise false and displays a message.
  function checkSignedInWithMessage() {
    // Return true if the user is signed in Firebase
    if (isUserSignedIn()) {
      return true;
    }
  
    // Display a message to the user using a Toast.
    var data = {
      message: 'You must sign-in first',
      timeout: 2000
    };
    signInSnackbarElement.MaterialSnackbar.showSnackbar(data);
    return false;
  }
  // initialize Firebase
// initFirebaseAuth();