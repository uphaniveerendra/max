// script.js
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
  
    // EmailJS initialization
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
  
    const serviceID = "YOUR_SERVICE_ID"; // Replace with your service ID
    const templateID = "YOUR_TEMPLATE_ID"; // Replace with your template ID
  
    const params = {
      name: name,
      email: email,
      phone: phone,
      message: message,
    };
  
    emailjs.send(serviceID, templateID, params)
      .then(() => {
        alert("Your message has been sent successfully!");
      })
      .catch((err) => {
        console.error("Error sending email:", err);
        alert("Failed to send your message. Please try again.");
      });
  });
  