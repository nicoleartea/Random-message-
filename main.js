// document.getElementById("surprise").innerHTML = "Generate a song by clicking!";
//
// var button = document.getElementById("surprise");
//
// button.addEventListener("click",
// function(){
//    document.querySelector("h1").innerHTML = "I am Nicole"
//    document.body.style.backgroundColor = "#9FF8EB";

var names = ["Lost in Japan by Shawn Mendes" ,
"If I can't have you by Shawn Mendes" ,
 "Sucker by The Jonas Brothers" ,
 "Ruin by Shawn Mendes" ,
  "Still got time by ZAYNE" ,
   "No tears left to cry by Ariana Grande" ,
   "Nasa by Ariana Grande",
    "There's nothing holding me back by Shawn Mendes" , "The middle by Maren Morris" ,
     "Girl almighty by One Direction"]
//console.log(names[0])

var button = document.getElementById("song");
button.addEventListener ("click" , function (){

  var randomNum = Math.random();
console.log(randomNum);
  //Returns a decimal between 0 and 1
  var randomNumBig = randomNum * names.length;
  console.log(randomNumBig);
  //multiplies the randomNum by the length of the list
  var randomRound = Math.floor(randomNumBig);
  console.log(randomRound);

  console.log(names[randomRound]);

document.querySelector("p").innerHTML = (names[randomRound]);
})
