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
function initFirebaseAuth() {
    // Listen to auth state changes.
    firebase.auth().onAuthStateChanged(authStateObserver);
  }
  
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
  
 

  function authStateObserver(user) {
    if (user) { // User is signed in!
      // Get the signed-in user's profile pic and name.
      var profilePicUrl = getProfilePicUrl();
      var userName = getUserName();
  
      // Set the user's profile pic and name.
      userPicElement.style.backgroundImage = 'url(' + addSizeToGoogleProfilePic(profilePicUrl) + ')';
      userNameElement.textContent = userName;
  
      // Show user's profile and sign-out button.
      userNameElement.removeAttribute('hidden');
      userPicElement.removeAttribute('hidden');
      signOutButtonElement.removeAttribute('hidden');
  
      // Hide sign-in button.
      signInButtonElement.setAttribute('hidden', 'true');
  
      // We save the Firebase Messaging Device token and enable notifications.
      saveMessagingDeviceToken();
    } else { // User is signed out!
      // Hide user's profile and sign-out button.
      userNameElement.setAttribute('hidden', 'true');
      userPicElement.setAttribute('hidden', 'true');
      signOutButtonElement.setAttribute('hidden', 'true');
      // window.location.href = "http://localhost:5000/index.html"
      window.location.replace( "http://localhost:5000/index.html")
  
      // Show sign-in button.
    }
  }
  
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
initFirebaseAuth();