const secondsHand = document.querySelector('.sec-hand')
const minutesHand = document.querySelector('.min-hand')
const hoursHand = document.querySelector('.hour-hand')


function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondsDeg = ((seconds / 60) * 360) + 90;
  const minutesDeg = ((minutes / 60) * 360) + 90;
  const hoursDeg = ((hours / 12) * 360) + 90;

  secondsHand.style.transform = `rotate(${secondsDeg}deg)`
  minutesHand.style.transform = `rotate(${minutesDeg}deg)`
  hoursHand.style.transform = `rotate(${hoursDeg}deg)`

};

window.setInterval(setDate, 1000);