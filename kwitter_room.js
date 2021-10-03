const firebaseConfig = {
  apiKey: "AIzaSyA4qrKK4gJnE4M-ZhqIROj7LzUy363LV5A",
  authDomain: "kwitter-df633.firebaseapp.com",
  projectId: "kwitter-df633",
  storageBucket: "kwitter-df633.appspot.com",
  messagingSenderId: "389401328535",
  appId: "1:389401328535:web:46a022d4017f86bfbaa2d2"
};
const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      function getData(){
        firebase.database().ref("/").on('value',function(snapshot){document.getElementById("output").innerHTML = "";})
  }
      //End code
      });});}
getData();

var user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML =  "welcome"+user_name;

function addRoom(){
var room_names = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_names).update({
      purpose : "add the room"
});
localStorage.setItem("room_names", room_names);
window.location = "kwitter_page.html";
}

function redirectToRoomName(name){
 console.log(name);
 localStorage.setItem("room_names", name);
 window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room.name");
      window.location = "index.html";
}
function send()
{
       var msg = document.getElementById("msg").value;
       firebase.database().ref(room_name).push({
             name:user_name,
             message:msg,
             like:0
       });
       document.getElementById("msg").value = "";
}