window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    // Get the modal
    const modal = document.getElementById('book-now-modal');
  
    // Get the button that opens the modal
    const btn = document.getElementById('book-now-btn');
  
    // Get the <span> element that closes the modal
    const closeBtn = modal.querySelector('.close');
  
    // When the user clicks on the button, open the modal
    btn.addEventListener('click', function() {
      modal.style.display = 'block';
    });
  
    // When the user clicks on <span> (x), close the modal
    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  
    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener('click', function(event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    });
  
    // Form submission
    const form = document.getElementById('book-now-form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
  
      if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
      } else {
        // Send form data to server or perform other actions
        alert('Your message has been sent!');
        modal.style.display = 'none';
        form.reset();
      }
    });
  });
  