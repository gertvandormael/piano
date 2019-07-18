let whiteKeys = document.querySelectorAll("div.white-key");
let blackKeys = document.querySelectorAll("div.black-key");
let whiteKeysAudio = document.querySelectorAll("Audio");

for (let i = 0; i < whiteKeys.length; i++){
    whiteKeys[i].addEventListener("click", function(){
        if (whiteKeysAudio[i].paused) {
            whiteKeysAudio[i].play();
        }else{
            whiteKeysAudio[i].currentTime = 0
        }
    })
};

for (let i = 0; i < blackKeys.length; i++){
    blackKeys[i].addEventListener("click", note)
}