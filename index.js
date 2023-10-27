// alert("working");


let string = "";
let buttons = document.querySelectorAll('.button');
const inputField = document.querySelector('input');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
      inputField.value = string;
    }
    else if(e.target.innerHTML == 'C'){
      string = ""
      document.querySelector('input').value = string;
      inputField.value = string;
    }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
    inputField.value = string;
      }
  })
})

// Code to store and accumulate the value of each keyboard press
document.addEventListener('keydown', function (event) {
    if (event.key.match(/[0-9+\-*/.=]/)) {
      string += event.key;
      inputField.value = string;
    }
  });
