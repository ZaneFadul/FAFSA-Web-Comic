var scene = -1;
var text = -1;
var pivotSceneText = [1,4,6,8,13,18,19,20,21,22,23,25];
var textList = ["The <span class=\"importantText\">world</span> is in ruins.",
"After a catastrophic <span class=\"importantText\">world war,</span> the Earth has become a wasteland. It seems as though</p> <p id=\"textBoxText2\">all life on the planet has been eradicated by <span class=\"importantText\">human</span> error.",
"How could this have happened?",
"What could have caused something this terrible?",
"<span class=\"importantText\">Who</span> could be responsible for this?",
"Our story began in <span class=\"importantText\">Washington Square Park,</span> where our lovely protagonist, <span class=\"importantText\">Ann,</span> had<p id=\"textBoxText2\">just finished her Communications Lab class.",
"As a <span class=\"importantText\">Computer Science major,</span> Ann spent most of her time programming in the NYU</p><p id=\"textBoxText2\">Bobst Library.",
"She loved <span class=\"uniqueText\">NYU</span>, but like most universities, it was a bit <span class=\"importantText\">expensive</span> dealing with <p id=\"textBoxText2\">student loans.",
"She got through the stress by constantly programming, and <span class=\"importantText\">honing</span> her skills.",
"One night at the library, Ann reluctantly looked through her <span class=\"importantText\">FAFSA</span> account...</p> <p id=\"textBoxText2\">\"sigh...\"",
"\"I wish college wasn't so <span class=\"importantText\">dang</span> expensive.\"",
"After taking an awesome class on Web Development, Ann had learned how to <span class=\"importantText\">hack</span></p> <p id=\"textBoxText2\">into websites!",
"\"Okay, Ann, work your magic...\"",
"Oh!",
"\"Wait?! There's no way I owe this much... Could this be...?\"",
"It was. The <span class=\"importantText\">FAFSA Worldwide Deficit. </span> All the money that was owed to FAFSA belonged</p><p id=\"textBoxText2\"> here.",
"She sat for a second, and then <span class=\"importantText\">deleted</span> the debt just like that.",
"\"Yay I don't owe money to University anymore!\"",
"...but at what cost?",
"With an enormous sum of money suddenly <span class=\"importantText\">missing</span> from circulation, global leaders across</p><p id=\"textBoxText2\">the globe frantically tried to track down where all that money went.",
"Countries began to point blame at each other, and it escalated. <span class=\"importantText\">Very quickly.</span>",
"As time went on, tensions grew stronger, and it seemed as though doom was eminent.",
"And just like that,</p><p id=\"textBoxText2short\">everything was gone.",
"What seemed like a good idea at first, <span class=\"importantText\">cost</span> the world everything.",
"\"Oh Jeez, everytime we run a simulation, someone always manages to destroy the planet!\"</p><p id=\"textBoxText2\">\"Who was it this time?\"",
"\"Just another <span class=\"uniqueText\">NYU</span> student.\"",
"<span id=\"importantText\">---END TRANSMITION---</span>"];

function loadImages(){
  for (var i=12;i>=0;i--){
  var newImage = document.createElement("img");
  newImage.className = "comicImage";
  newImage.id = "image" + String(i);
  newImage.src = "images/image" + String(i) + ".jpg";
  newImage.style.opacity = 0;
  document.body.appendChild(newImage);
  }
}

function changeScene(){
  if (scene == -1){
    for(var i = 0; i <= 12; i++){
    document.getElementById("image" + String(i)).style.opacity += 1;
    }
    theruins.play();
    scene += 1;
  }
  else {
    if (pivotSceneText.includes(text)){
      document.getElementById("image" + String(scene)).style.opacity = 0;
      scene += 1;
    }
  }
  if(text == 0) { //bring the button to visibility
    document.getElementById("promptButtonLeft").style.top = "90%";
  }
  if(text == textList.length - 2) { //hide right button
    document.getElementById("promptButtonRight").style.top = "-400px";
  }
  if (scene == 2){
    theruins.pause();
    thegirl.play();
  }
  if (scene == 4){
    thegirl.pause();
    theweb.play();
  }
  if (scene == 6){
    theweb.pause();
    thefallout.play();
  }
  if (scene == 10){
    thefallout.pause();
    theruins.play();
  }
  if (scene == 12){
    theruins.pause();
    transmition.play();
  }
}

function backScene(){
if(scene >= 0){
  document.getElementById("promptButtonLeft").style.opacity = 1;
  if (pivotSceneText.includes(text - 1)){
    scene -= 1;
    document.getElementById("image" + String(scene)).style.opacity = 1;
  }
  if(text == 1) { //hide left button
    document.getElementById("promptButtonLeft").style.top = "-400px";
  }
  if(text == textList.length - 1) { //hide right button
    document.getElementById("promptButtonRight").style.top = "90%";
  }
  if (scene == 1){
  theruins.play();
  thegirl.pause();
  }
  if (scene == 3){
    thegirl.play();
    theweb.pause();
  }
  if (scene == 6){
    theweb.pause();
    thefallout.play();
  }
  if (scene == 9){
    thefallout.play();
    theruins.pause();
  }
  if (scene == 11){
    theruins.play();
  }
}
else{
  document.getElementById("promptButtonLeft").style.color = "black";
}
}

function changeText(){
  text += 1;
  if (text == 13){ //Coding sound effect
    cracked.play();
  }
  if(text == 17){
    theweb.play();
  }
  if (text == 18){
    theweb.pause();
    thefallout.pause();
  }
  document.getElementById("textBox").innerHTML = "<p id=\"textBoxText\">" + textList[text] + "</p>";
}

function backText(){
  text -= 1;
  if (text == 13){ //Coding sound effect
    cracked.play();
  }
  if(text == 17){
    theweb.play();
  }
  if (text == 18){
    theweb.pause();
    thefallout.pause();
  }
  document.getElementById("textBox").innerHTML = "<p id=\"textBoxText\">" + textList[text] + "</p>";
}
