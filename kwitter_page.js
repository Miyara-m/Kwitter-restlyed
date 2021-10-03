//YOUR FIREBASE LINKS

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
var name = message_data['name'];
var message = message_data['message'];
var like = message_data['like'];
var name_with_tag = "<h4>"+ name +"<img class='user_tick' src='tick.png></h4>";
var message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
var like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
var span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
var row = name_with_tag + message_with_tag +like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
 } });  }); }
getData();
function updateLike(message_id)
{
 console.log("clicked on like button - " + message_id);
 var button_id = message_id;
 var likes = document.getElementById(button_id).value;
 var updated_likes = Number(likes) + 1;
 console.log(updated_likes);
 firebase.database().ref(room_name).child(message_id).update({
like : updated_likese
 });
}