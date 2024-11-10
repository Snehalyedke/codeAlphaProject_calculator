let given = "";
let allButton = document.querySelectorAll('.button');
Array.from(allButton).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      given = eval(given);
      document.querySelector('input').value = given;
    }
    else if(e.target.innerHTML == 'AC'){
      given = ""
      document.querySelector('input').value = given;
    }
    else if(e.target.innerHTML == '+/-'){
      given = -given;
      document.querySelector('input').value = given;
    }
    else if(e.target.innerHTML == '<i class="fas fa-backspace"></i>'){
      given = given.slice(0, -1);
      document.querySelector('input').value = given;
    }  
    else{ 
    console.log(e.target)
    given = given + e.target.innerHTML;
    document.querySelector('input').value = given;
    }
  })
})