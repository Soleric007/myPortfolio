(function() {
	emailjs.init("NJqzIt6s0gaIVYhTD"); 
  })();
  
  document.getElementById('contact-form').addEventListener('submit', function(event) {
	event.preventDefault(); // Prevent the default form submission
  
	// Get form data
	var form = event.target;
	var formData = new FormData(form);
  
	// Send email using EmailJS
	emailjs.sendForm("service_solomon","template_nq2fcdl", formData)
	  .then(function(response) {
		console.log('Email sent successfully:', response);
		// Optionally, show a success message to the user
	  }, function(error) {
		console.log('Error sending email:', error);
		// Optionally, show an error message to the user
	  });
  });
  