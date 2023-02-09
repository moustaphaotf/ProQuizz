const animatedTexts = document.querySelectorAll('.animated-text');

function animateText(element) {
  const text = element.textContent;
  const speed = parseInt(element.getAttribute('data-speed') || 150);
  const delay = parseInt(element.getAttribute('data-delay') || 0);
  const repeat = parseInt(element.getAttribute('data-repeat') || 0);

  function animate() {
    element.innerHTML = text.split('').map(character => {
      if(character === ' ') return character;
      return `<span>${character}</span>`;
    }).join('');

    setTimeout(() => {
      let i = 0;
      function writeCharacter(){
        let span = element.querySelectorAll('span')[i];
        if(span) {
          span.classList.add('fade');
        }
        i++;
        if(i === text.length) clearInterval(intervalId)
      }
  
      let intervalId = setInterval(writeCharacter, speed);
    }, delay);
  }
  animate();
}
animatedTexts.forEach(animateText);