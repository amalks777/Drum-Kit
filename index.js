var noOfButtons = document.querySelectorAll(".drum").length;

// detecting button press
for(var i = 0; i < noOfButtons; i++){
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {  
        var btninnerHTML = this.innerHTML;
        makesound(btninnerHTML);
        btnanimation(btninnerHTML);
    });
}


 //detecting keydown press
        document.addEventListener("keypress", function(event){
            makesound(event.key);
            btnanimation(event.key);
        });


    function makesound(key){
        switch (key) {
                case "w":
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;

                case "a":
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                break;

                case "s":
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
                break;

                case "d":
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
                break;

                case "j":
                var audio = new Audio("sounds/snare.mp3");
                audio.play();
                break;

                case "k":
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
                break;

                case "l":
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;            
        
            default:
                alert("song not included in the list");
                break;
        }

}

function btnanimation(currentkey) {
    var animatebtn = document.querySelector("." + currentkey);
    animatebtn.classList.add("pressed");
    setTimeout(function(){
    animatebtn.classList.remove("pressed");
    }, 100)
}






/*var audio = new Audio("sounds/crash.mp3");
audio.play();*/
/*var noOfButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i < noOfButtons; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        alert("hello amal");
    })
}*/



/*document.querySelectorAll(".drum")[0].addEventListener("click", function pop(){
alert("hello ");
});*/