// Bring both information from script2 and script3 

import {display_user_info, display_contact_info, display_profile_pic} from "./script3.js"

var database = firebase.database();
var databaseRef = database.ref('/');

databaseRef.once('value').then(function (snapshot) {
const databaseValue = snapshot.val();  
//user info data
  const UserInfo = databaseValue["user_info"];
  const UserContactInfo = databaseValue["user_info"]["contact_info"];
//display user info data
  display_user_info(UserInfo);
  display_contact_info(UserContactInfo);
  display_profile_pic(UserInfo);
//content data


});

// var provider = new firebase.auth.GoogleAuthProvider();

// firebase.auth().signInWithPopup(provider).then(function(result) {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     var token = result.credential.accessToken;
//     // The signed-in user info.
//     var user = result.user;
//     console.log(result.user);
//     // ...
//   }).catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // The email of the user's account used.
//     var email = error.email;
//     // The firebase.auth.AuthCredential type that was used.
//     var credential = error.credential;
//     // ...
//   });