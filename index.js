const secondsHand = document.querySelector('.sec-hand')


function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();

  const secondsDeg = ((seconds / 60) * 360) + 90;

  secondsHand.style.transform = `rotate(${secondsDeg}deg)`

};

window.setInterval(setDate, 1000);