const heart = document.querySelector('.heart');
const text = document.querySelector('.msg-thanks');
let accordion = document.getElementsByClassName('accordion');
let i;

heart.addEventListener('click', () => {
  typeWriter(text);
});

function typeWriter(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });
}

typeWriter(text);

for(i = 0; i < accordion.length; i++){
  accordion[i].addEventListener('click', function() {
      this.classList.toggle('active-accordion');

      let panel = this.nextElementSibling;
      if(panel.style.maxHeight){
          panel.style.maxHeight = null;
      } else {
          panel.style.maxHeight = panel.scrollHeight + 'px';
      }
  });
}