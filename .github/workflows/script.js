const toggle=document.getElementById('toggleDark');
const body =document.querySelector('body');

toggle.addEventListener('click',function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-sun')){
        body.style.background="#fff";
        body.style.color="#000";
        body.style.transition='1s';
    }else{
        body.style.background="#000";
        body.style.color="#fff";
        body.style.transition='1';
        }
});