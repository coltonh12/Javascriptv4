

document.addEventListener("DOMContentLoaded", function() {
   
    var modal = document.getElementById("modal");
  
    var modalImage = document.getElementById("modalImage");
  
    var images = document.querySelectorAll("img");
      
    images.forEach(function(image) {
      image.addEventListener("click", function() {
       
        modalImage.src = this.src;
      
        modal.classList.remove("hidden");
      });
    });
  
    modal.addEventListener("click", function(event) {
      if (event.target === modal) {
        modal.classList.add("hidden");
      }
    });
  });
  