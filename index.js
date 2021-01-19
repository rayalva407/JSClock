const secondsHand = document.querySelector('.sec-hand')
const minutesHand = document.querySelector('.min-hand')
const hoursHand = document.querySelector('.hour-hand')
const digital = document.querySelector('.digital')


function setDate() {
  const now = new Date();
  const seconds = ('0' + now.getSeconds()).slice(-2);
  const minutes = ('0' + now.getMinutes()).slice(-2);
  const hours = ('0' + now.getHours()).slice(-2);

  const secondsDeg = ((seconds / 60) * 360) + 90;
  const minutesDeg = ((minutes / 60) * 360) + 90;
  const hoursDeg = ((hours / 12) * 360) + 90;

  secondsHand.style.transform = `rotate(${secondsDeg}deg)`
  minutesHand.style.transform = `rotate(${minutesDeg}deg)`
  hoursHand.style.transform = `rotate(${hoursDeg}deg)`
  
  if (hours == 12) {
    digital.innerHTML = `<h1>${hours}:${minutes}:${seconds} PM</h1>`
  }
  else if (hours > 12) {
    digital.innerHTML = `<h1>${hours - 12}:${minutes}:${seconds} PM</h1>`
  }
  else {
    digital.innerHTML = `<h1>${hours}:${minutes}:${seconds} AM</h1>`
  }


};

window.setInterval(setDate, 1000);