document.addEventListener('DOMContentLoaded', function(){
    const target = document.getElementById('n1');
    const text = "Joel Embiid ";
    const typingDelay = 200;
 
 
 
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