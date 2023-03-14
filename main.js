let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let mountains7 = document.getElementById('mountains7'); 
let nouvil = document.querySelector('.nouvil');

window.onscroll = function(){
  let value = scrollY;
  stars.style.left = value + 'px';
  moon.style.top = value * 3 + 'px';
  mountains3.style.top = value * 1.2 + 'px';
  mountains4.style.top = value * 1.5 + 'px';
  river.style.top = value + 'px';
  boat.style.top = value  + 'px';
  boat.style.left = value * 2.5 + 'px';
  nouvil.style.fontSize = value + 'px';
  if(value >= 67){
    nouvil.style.fontSize = 67  + 'px';
    nouvil.style.position = 'fixed';
    if(value >= 478){
      nouvil.style.display = 'none';
    }
    else{
      nouvil.style.display = 'block';
    }
  }
  if(value >= 133.5235137939453){
    document.querySelector('.main').style.background= 'linear-gradient(#376281,#10001f)';
  }else{
    document.querySelector('.main').style.background= 'linear-gradient(#200016, #10001f)';
  }
}