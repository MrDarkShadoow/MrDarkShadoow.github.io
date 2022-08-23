'use strict'
const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
  document.body.classList.toggle('Wtheme')

  var className = document.body.className;
  if (className == "Btheme") {
       this.textContent = "Dark";
  }
  else{
    this.textContent = "Light";
  }

  console.log('current class name: ' + className);
});

