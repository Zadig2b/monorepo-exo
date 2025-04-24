
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const successToast = document.querySelector("#success-toast");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      if (form.checkValidity()) {
        // Reset the form
        form.reset();
  
        // Show toast
        successToast.classList.add("visible");
  
        // Hide after 5 seconds
        setTimeout(() => {
          successToast.classList.remove("visible");
        }, 50000);
      } else {
        // Let HTML5 validation errors show up
        form.reportValidity();
      }
    });
  });