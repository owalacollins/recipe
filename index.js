const menu = document.getElementById('menu');
const delet = document.getElementById('delet');
const nvbr = document.getElementById('nvbr');

if(menu){
    menu.addEventListener('click', ()=>{
       nvbr.classList.add('active');
    }
)}
if(delet){
    delet.addEventListener('click', ()=>{
       nvbr.classList.remove('active');
    }
)}
