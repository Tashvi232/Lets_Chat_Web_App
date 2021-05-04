
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBhzcaIT3O8ibR_dXShzmpF8ZrwXKTqLMs",
      authDomain: "kwitter-15a01.firebaseapp.com",
      databaseURL: "https://kwitter-15a01-default-rtdb.firebaseio.com",
      projectId: "kwitter-15a01",
      storageBucket: "kwitter-15a01.appspot.com",
      messagingSenderId: "240208112084",
      appId: "1:240208112084:web:0531a6eb3c210f75e14e41"
    };
    // Initialize Firebase

    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("user_name");
    function send() {
          
    }
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







