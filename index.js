// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Get the modal element
    var modal = document.getElementById("modal");
  
    // Get the modal image element
    var modalImage = document.getElementById("modalImage");
  
    // Get all images on the page
    var images = document.querySelectorAll("img");
  
    // Attach click event listener to each image
    images.forEach(function(image) {
      image.addEventListener("click", function() {
        // Set the src attribute of the modal image to the clicked image's src
        modalImage.src = this.src;
        // Show the modal
        modal.classList.remove("hidden");
      });
    });
  
    // Hide the modal when clicking outside of it
    modal.addEventListener("click", function(event) {
      if (event.target === modal) {
        modal.classList.add("hidden");
      }
    });
  });
  