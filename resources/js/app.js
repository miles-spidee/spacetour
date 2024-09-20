const name = document.getElementById('name-input');
const btn = document.getElementById('name-submit');
let name_value = '';
btn.addEventListener('click' , function(){
    name_value = document.querySelector("input").value;
    console.log('Your name is:' , name_value);
});
console.log('Outside your name is:' , name_value);
