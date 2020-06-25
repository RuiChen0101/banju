window.addEventListener('scroll', function(e) {
  var vscroll = window.scrollY;
  var navbar = document.getElementById('header');
  if(vscroll<300){
    navbar.style.cssText="opacity: 0;";
  }else{
    navbar.style.cssText="opacity: 1;";
  }
});
