//YOUR FIREBASE LINKS 
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

function getData() { 
    firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; 
    snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; 
        childData = childSnapshot.val(); 
        if(childKey != "purpose") { 
            firebase_message_id = childKey; 
            message_data = childData; 
            //Start code 
           function send() {
               msg=document.getElementById("msg").value;
               firebase.database().ref(room_name).push({
                   name:user_name,
                   message:msg,
                   like:0
               });
               document.getElementById("msg").value="";
           } 
            //End code 
        } }); }); } 
        getData();

        function getData() {
             firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; 
             snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; 
                childData = childSnapshot.val(); 
                if(childKey != "purpose") { 
                    firebase_message_id = childKey; 
                    message_data = childData; 
                    //Start code
                    console.log(firebase_message_id);
                     console.log(message_data);
                     name=message_data["name"];
                     message=message_data["message"];
                     like=message_data["like"];
                     name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'> </h4>";
                     message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
                     like_button="<button class='btn btn-body' id="+firebase_message_id+"value="+like+"onclick='updateLike(this.id)'>";
                     span_width_tag="<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span></button>";
                     row=name_with_tag+message_with_tag+like_button+span_width_tag;
                     document.getElementById("output").innerHTML+=row;
//End code

        } }); }); }
        getData();

        function updateLike(message_id){
            console.log("clicked on like button-"+message_id);
            button_id=message_id;
            likes=document.getElementById(button_id).value;
            update_likes=Number(likes)+1;
            console.log(update_likes);
            firebase.database().ref(room_name).child(message_id).update({
                like:updated_likes
            });
        }

        function logout() { 
            localStorage.removeItem("user_name"); 
            localStorage.removeItem("room_name"); 
            window.location.replace("index.html");
         }