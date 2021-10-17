function login() {
    username=document.getElementById("user_name").value;
    localStorage.setItem("name",username);
    window.location="kwitter_room.html";
}