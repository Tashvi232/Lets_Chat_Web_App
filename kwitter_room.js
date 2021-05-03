var firebaseConfig = {
    apiKey: "AIzaSyCJXO4dKTHEZ1h0TqihC5fK8WZxQfLGsz0",
    authDomain: "lets-chat-web-app-2d03c.firebaseapp.com",
    projectId: "lets-chat-web-app-2d03c",
    storageBucket: "lets-chat-web-app-2d03c.appspot.com",
    messagingSenderId: "562878943193",
    appId: "1:562878943193:web:591ea18684d522f75893c8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
    function addRoom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"add room name"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";
    }

    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
        Room_names = childKey;
       //Start code
 console.log("room name-"+Room_names);
 row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(thisid)'>#"+Room_names+"</div><hr>";
 document.getElementById(output).innerHTML+=row;
 function redirectToRoomName(name){
       console.log(name);
       localStorage.setItem("room_name",name);
       window.location="kwitter_page.html"
 }
 function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location("index.html");

}
//End code
});});}
getData();