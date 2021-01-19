const secondsHand = document.querySelector('.sec-hand')
const minutesHand = document.querySelector('.min-hand')
const hoursHand = document.querySelector('.hour-hand')
const digital = document.querySelector('.digital')


function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = ('0' + now.getMinutes()).slice(-2);
  const hours = now.getHours();

  const secondsDeg = ((seconds / 60) * 360) + 90;
  const minutesDeg = ((minutes / 60) * 360) + 90;
  const hoursDeg = ((hours / 12) * 360) + 90;

  secondsHand.style.transform = `rotate(${secondsDeg}deg)`
  minutesHand.style.transform = `rotate(${minutesDeg}deg)`
  hoursHand.style.transform = `rotate(${hoursDeg}deg)`

  digital.innerHTML = hours >= 12 ? `<h1>${hours - 12}:${minutes}:${seconds} PM</h1>` : `<h1>${hours}:${minutes}:${seconds} AM</h1>`

};

window.setInterval(setDate, 1000);