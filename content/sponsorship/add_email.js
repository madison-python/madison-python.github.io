function addEmailToDOM(email) {
  var emailPlaceholder = document.getElementById('email-placeholder');
  if (emailPlaceholder) {
    // Clear the placeholder content
    emailPlaceholder.textContent = '';

    // Create the anchor element
    var anchor = document.createElement('a');
    anchor.setAttribute('href', 'mailto:' + email);
    anchor.textContent = 'Send us an email';

    // Append the anchor to the placeholder
    emailPlaceholder.appendChild(anchor);
  }
}

var contact_firstname = 'Edwin';
var contact_lastname = 'Rogers';
var contact_host = 'gmail';
setTimeout(() => {
  addEmailToDOM([[contact_firstname,contact_lastname].join('.'), contact_host + '.com'].join('@'));
}, 1000); // 1000ms or 1 second