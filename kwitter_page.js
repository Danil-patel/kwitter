//YOUR FIREBASE LINKS
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
    var room_name=localStorage.getItem("room_name");
    function send() {
          message=document.getElementById("message").value;
          firebase.database().ref(room_name).push({
                msg:message,
                name:username,
                like:0
          });
          document.getElementById("message").value="";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name= message_data['name'];
message= message_data['msg'];
like= message_data['like'];
name_tick= "<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
message_value= "<h4 class='message_h4'>"+message+"</h4>";
like_button= "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='update_like(this.id)'>";
span_width_tag= "<span class='glyphicon glyphicon-thumbs-up'>Like:"+like+"</span></button><hr>";
row=name_tick+message_value+like_button+span_width_tag;
document.getElementById("output").innerHTML+=row;

//End code
      } });  }); }
getData();
function logout() {
      localStorage.removeItem("name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
function update_like(message_id) {
      console.log(message_id);
      var button_id=message_id;
      var likes=document.getElementById(button_id).value;
      var updated_likes=Number(likes)+1;
      firebase.database().ref(room_name).child(message_id).update({
            like:updated_likes
      });
}