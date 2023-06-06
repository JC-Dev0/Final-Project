const header = document.getElementById('header');
const toggle = document.getElementById('toggle');
const nav = document.getElementById('nav');
document.onclick=function(e){
    if(e.target.id!=='header' &&e.target.id !=='toggle' && e.target.id !=='nav'){
        toggle.classList.remove('active');
        nav.classList.remove('active');
    }
}
toggle.onclick = function(){
    toggle.classList.toggle('active');
    nav.classList.toggle('active');
}