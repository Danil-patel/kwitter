
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDAdI0-BN4BmKIpJBWRrTdf7iTmT9vtZgQ",
      authDomain: "kwitter-5f26e.firebaseapp.com",
      projectId: "kwitter-5f26e",
      storageBucket: "kwitter-5f26e.appspot.com",
      messagingSenderId: "513252038841",
      appId: "1:513252038841:web:45a4e7a18546008d4c2368",
      databaseURL: "https://kwitter-5f26e-default-rtdb.firebaseio.com"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var username=localStorage.getItem("name");
    document.getElementById("name").innerHTML= "Welcome  " + username;
    function addroom() {
          var room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log(Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectRoom(this.id)'>#" +Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectRoom(name) {
      console.log("name");
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout() {
      localStorage.removeItem("name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}