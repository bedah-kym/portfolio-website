var prevpos = window.pageYOffset;

window.onscroll = function () {
  var currentpos = window.pageYOffset;
  if (prevpos > currentpos){
    document.getElementsByClassName("nav").opacity = '1';
  }
  else{
    document.getElementsByClassName("nav").opacity ='1';
  }
  prevpos = currentpos;
}
