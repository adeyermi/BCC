 // function generateRandomNumber() {
 //     var name = document.getElementById("name").value;
 //     var week = document.getElementById("week").value;
 //     var type = document.getElementById("type").value;
 //     var randomNumber;

 //     if (type === "Daily Devotion") {
 //         randomNumber = Math.floor(Math.random() * 16) + 15; // Generates random number between 15 and 30 for daily
 //     } else if (type === "Weekly Reading") {
 //         randomNumber = Math.floor(Math.random() * 15) + 1; // Generates random number between 1 and 15 for weekly
 //     }

 //     if (name && week && type) {
 //         var resultText = "Hello " + name +"; </br> Answer Question: " + randomNumber + " from week " + week + " of " + type + ". </br>Please  send screenshot to the group";

 //         document.getElementById("result").innerHTML = resultText;
 //         exportResultAsPdfOrJpg(resultText);
 //     } else {
 //         alert("Please fill in all fields.");
 //     }
 // }



function generateRandomNumber() {
    var name = document.getElementById("name").value;
    var week = document.getElementById("week").value;
    var randomNumber = Math.floor(Math.random() * 30) + 1;
    document.getElementById("result").innerHTML = "Hello " + name + "</br> Answer Question: " + randomNumber + " from week " + week + ".</br>Please  send screenshot to the group";
}
