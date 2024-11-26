function sendMail() {
    // Get values from form fields
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Construct the mailto link with subject and body
    const mailtoLink = `mailto:dunstanbomeh@gmail.com?subject=Customer Support Inquiry from ${encodeURIComponent(name)}&body=Name: ${encodeURIComponent(name)}%0D%0APhone: ${encodeURIComponent(phone)}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0AMessage: ${encodeURIComponent(message)}`;
  
    // Open mailto link
    window.location.href = mailtoLink;
  }
  
  function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  }
  