//-------------------KeyBoard--------------------//

//Plays sound and adds class to key
function playSound(event){
    let key = document.getElementById(event.key);
    let audio = document.getElementById(event.keyCode);
    
    if(!key && !audio) return;
    console.log(event.key);
    key.classList.add('playing');
    
    audio.currentTime = 0;
    audio.play();
};

//Removes class from key
function removeTransform(event){
    let key = document.getElementById(event.key);
    
    if(!key) return;
    
    key.classList.remove('playing');
};


window.addEventListener('keydown', playSound);
window.addEventListener('keyup', removeTransform);

//-------------------Screen KeyBoard--------------------//

let screenKey = document.querySelectorAll('.key');

//loop through all divs and on 'mousedown' play audio with ID that matches ASCII code of div ID.
screenKey.forEach(key => key.addEventListener('mousedown', (event) =>{
    let target = event.path[1].id; //Path to div id being clicked
    let key = document.getElementById(target);
    let audio = document.getElementById(target.charCodeAt(0) - 32); //ASCII conversion is 32 above char code
    
    if(!key && !audio) return;
    key.classList.add('playing');
    
    audio.currentTime = 0;
    audio.play();
}));

//loop through all divs remove transform on 'mouseup'.
screenKey.forEach(key => key.addEventListener('mouseup', (event) => {
    let target = event.path[1].id; 
    let key = document.getElementById(target);
    
    if(!key) return;
    
    key.classList.remove('playing');
}));