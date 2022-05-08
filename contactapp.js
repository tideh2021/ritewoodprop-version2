// This contacapp.js is used to validate the contact form

const contactForm = document.getElementById("contact-form");
const submit = document.getElementById("submit");
const namePara= document.getElementById("namepara");
const emailPara = document.getElementById("email-para");
const subjectPara = document.getElementById("subject-para");

// listen for a click event
submit.addEventListener('click', (event) => {
  // prevents default behaviour
  event.preventDefault();
// gets input
  const name = contactForm['name'].value;
  const email = contactForm['email'].value;
  const subject = contactForm['subject'].value;
  const comments = contactForm['comments'].value;
  const phone = contactForm['phone'].value; 
 
  /* Check if name field is empty, displays message otherwise removes message */
  console.log(contactForm.value);
  if(name == '') {
    errorMessage(namePara, "Name is required");
  } else {
    removeMessage(namePara);
  }
  // checks if email field is empty
if(email === '') {
  errorMessage(emailPara, "Email address is required");

} else 
 if( !isValid(email) ) {
  errorMessage(emailPara, "Email not valid");
   
} else {
  removeMessage(emailPara);

}
/*check if subject input field is empty, if empty it indicates and removes the message when not empty */
if(subject == '') {
  errorMessage(subjectPara, "Subject is required to serve you better");
} else {
  removeMessage(subjectPara);
}
// send contact info to emial address provided 
if(name!='' && email != '' && subject != '') {
Email.send({
  Host : "smtp.gmail.com",
  Username : "petetony44@gmail.com",
  Password : "hoxhorpijtxjhssq",
  To : 'petetony44@gmail.com',
  From : email,
  Subject : "Ritewood Properties Contact Emails",
  Body : "Name: " + name +"<br>"
   + "Email: " + email + "<br>"
   + "Phone: " + phone + "<br>"
   + "Subject: " + subject + "<br>" + "<hr>"
  + "Message: " + comments         
}).then(      
message => alert("Message sent successfully") 

   );
  //  clear input field
   contactForm.reset();
  } 
});

// function to show error if the input field is empty
function errorMessage(field, message){
  field.innerText= message;
  field.style.opacity = '1';
}
// Removes the error message
function removeMessage(field){
  field.style.opacity = '0';
}
// validate the email
function isValid(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase()); 
}



