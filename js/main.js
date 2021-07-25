$(document).ready(function(){
   $('.hamburger').click(function(){
       $('.main-menu').toggleClass('open'); // addClass dodaje klase a toggleClass sprawdza i dodaje klase jak jej nie ma.
   });

   $('.main-menu-item a').click(function(e){
       e.preventDefault();

      $('body').fadeOut(2000, function(){ //metoda zmienia czas opacity
          window.location.href = $(e.target).attr('href');
      })  
   });
});

