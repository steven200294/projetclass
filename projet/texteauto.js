document.addEventListener('DOMContentLoaded', function(){
   const target = document.getElementById('discours');
   const text = "La fédération de basket la plus impactantes des états-unis débarque aux J.O 2024 avec une équipe flamboyante prête à en découdre. ";
   const typingDelay = 50;



   function typeWriter(textElement, textToWrite, delay) {
      let i = 0 ;
      function type() {
          if (i < textToWrite.length){
            textElement.textContent += textToWrite.charAt(i);
            i++;
            setTimeout(type,delay)
          }

      }
      type();




   }
  typeWriter(target, text, typingDelay);



});