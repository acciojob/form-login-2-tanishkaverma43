document.querySelector('#myForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var firstName = document.querySelector('input[name="firstName"]').value;
  var lastName = document.querySelector('input[name="lastName"]').value;
  var phoneNumber = document.querySelector('input[name="phoneNumber"]').value;
  var emailId = document.querySelector('input[name="emailId"]').value;

  alert('First Name: ' + firstName + '\n' +
        'Last Name: ' + lastName + '\n' +
        'Phone Number: ' + phoneNumber + '\n' +
        'Email ID: ' + emailId);
});