// massage or greatings

function sayHello() {
      const name = document.getElementById('nameInput').value;
      const messageBox = document.getElementById('message');

      if (name.trim() !== "") {
        messageBox.innerHTML = `Hello, ${name}! Welcome aboard! 🌊🛳️`;
      } else {
        messageBox.innerHTML = "Please enter your number.";
      }
    }




// respsontive 

 function toggleMenu() {
    const menu = document.getElementById('nav-links');
    menu.classList.toggle('show');
  }
