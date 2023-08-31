function next() {
 document.getElementById("bet")
 .style.display="block";
 document.getElementById("det")
  .style.display="none";
}
function mon() {
 document.getElementById("cet")
 .style.display="block";
 document.getElementById("bet")
  .style.display="none";
}

function bon() {
 document.getElementById("fet")
 .style.display="block";
 document.getElementById("cet")
  .style.display="none";
}

function con() {
 document.getElementById("get")
 .style.display="block";
 document.getElementById("fet")
  .style.display="none";
}
const fadeInText = document.querySelector('.fade-in');
  const myButton = document.getElementById('myButton');

  fadeInText.addEventListener('animationend', () => {
    myButton.classList.remove('hidden');
  });
  
  function don(){
  document.getElementById('alertDiv')
  .classList.remove('hidden');
  
  }