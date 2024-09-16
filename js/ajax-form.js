// $(function() {
// 	// Here is the form
// 	var form = $('#contact-form');
 
// 	// Getting the messages div
// 	var formMessages = $('.form-message');
 
 
// 	// Setting up an event listener for the contact form
//    $(form).submit(function(event) {
// 	  // Stopping the browser to submit the form
// 	  event.preventDefault();
	  
// 	  // Serializing the form data
// 	var formData = $(form).serialize();
 
// 	// Submitting the form using AJAX
// 	$.ajax({
// 	    type: 'POST',
// 	    url: $(form).attr('action'),
// 	    data: formData
// 	}).done(function(response) {
	  
// 	    // Making the formMessages div to have the 'success' class
// 	    $(formMessages).removeClass('error');
// 	    $(formMessages).addClass('success');
 
// 	    // Setting the message text
// 	    $(formMessages).text(response);
 
// 	    // Clearing the form after successful submission 
// 	    $('#inputName').val('');
// 	    $('#inputEmail').val('');
// 	    $('#inputPhone').val('');
// 	    $('#inputMessage').val('');
// 	}).fail(function(data) {
	  
// 	    // Making the formMessages div to have the 'error' class
// 	    $(formMessages).removeClass('success');
// 	    $(formMessages).addClass('error');
 
// 	    // Setting the message text
// 	    if (data.responseText !== '') {
// 		   $(formMessages).text(data.responseText);
// 	    } else {
// 		   $(formMessages).text('Oops! An error occured and your message could not be sent.');
// 	    }
// 	});
 
//    });
 
// });

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
  