let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let anchor = document.querySelector('.anchorlogin');
let anchors = document.querySelector('.anchorslogin');
let loginjs = document.querySelector('.loginjs');
let showlogin =document.querySelector('.login-form-container');
let btn = document.querySelector('.log-btn');
let btnn = document.querySelector('.btnn');
let btnns = document.querySelector('.btnns');


window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}


menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});


formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});

anchor.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    showlogin.classList.toggle('active');
});


anchors.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    showlogin.classList.toggle('active');
});


loginjs.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    showlogin.classList.toggle('active');
});

btn.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    showlogin.classList.toggle('active');
});

btnn.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    showlogin.classList.toggle('active');
});

btnns.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    showlogin.classList.toggle('active');
});


$(document).ready(function() {
  $(".links").click(function(e) {
    var sectionId = $(this).data("sectionId");
    $(".conteudo").removeClass("active");
    $(".conteudo[data-section-id=" + sectionId + "]").addClass(
      "active");
      $(".links").removeClass("active");
      $(".links[data-section-id=" + sectionId + "]").addClass(
        "active");
  });
});
