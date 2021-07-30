var SpeechRecognition= window.webkitSpeechRecognition;
var Recognition= new SpeechRecognition();
function Start(){
    document.getElementById("textbox").innerHTML="";
    Recognition.start();
}
Recognition.onresult=function run(event){
    console.log(event);
    var Content= event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML=Content;
    if (Content=="Take my selfie." ||  Content=="take my selfie"){
     console.log("Taking selfie");
     speak();
     
    }
    
}

function speak(){
    var synth= window.speechSynthesis;
    speak_data= "taking your selfie in 5 seconds";
    var utterThis= new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera); 
    setTimeout(function(){
    take_snapshot();
     save();
      },5000);
    }
     Webcam.set({
    width:340,
    height: 240,
    image_format:"png",
    png_quality:100,
 });
 camera=document.getElementById("camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
   document.getElementById("result").innerHTML='<img id="selfie_image"  src="'+data_uri+'">';

    });
}

function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfie_image").src;
    link.href=image;
    link.click();
    
}