let username = document.querySelector('#name-user');
username.value = '';
let startOrder = document.querySelector('#start-order');
let messageWelcome = document.querySelector('.message-welcome')
startOrder.disabled = true;

username.addEventListener("change", function(){
  content = username.value;
  if(content !== ''){
    startOrder.disabled = false;
  }else{
    startOrder.disabled = true;
  }
});

function saveNameAndRedirect(){
  localStorage.name = content;
  console.log(content);
  window.location = "home.html";
}