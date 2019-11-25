//Finds current time and uses that value to calculate degrees. This is used to rotate hand by setting transform value dynamically.
function getTime(){
    //Time Values
    let now = new Date();
    let seconds = now.getSeconds();
    let minutes = now.getMinutes();
    let hours = now.getHours();
    
    //Second Hand
    let secHand = document.querySelector('.second-hand');
    let secDegrees = ((seconds / 60) * 360) + 90;
    secHand.style.transform = `rotate(${secDegrees}deg)`;

    //Minute Hand
    let minHand = document.querySelector('.min-hand');
    let minDegrees = ((minutes / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minDegrees}deg)`;

    //Hour Hand
    let hourHand = document.querySelector('.hour-hand');
    let hourDegrees = ((hours / 60) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  };

  setInterval(getTime, 1000)