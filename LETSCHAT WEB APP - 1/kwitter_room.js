
const firebaseConfig = {
      apiKey: "AIzaSyDujTJNzrFPuPpA_9aviDD2paFwnSpHDyw",
      authDomain: "class94-fef84.firebaseapp.com",
      databaseURL: "https://class94-fef84-default-rtdb.firebaseio.com",
      projectId: "class94-fef84",
      storageBucket: "class94-fef84.appspot.com",
      messagingSenderId: "1054523851536",
      appId: "1:1054523851536:web:538cbe532b4ff36fea1b95"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!"

    function addRoom()
    {
          room_name = document.getElementById("room_name").value;

          firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"    
          })
          localStorage.setItem("room_name",room_name);
          window.location = "kwitter_page.html";
    }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("Room Name- " + Room_names)
       row = "<div class='room_name' id="+ Room_names+"oclick=''redirectToRoomNames(this.id)'->#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+=row;
      //End code
      });
});
}
getData();

function redirectToRoomNames(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
