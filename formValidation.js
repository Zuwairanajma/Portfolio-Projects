// Form Validation section

function handleSubmit(event) {
    event.preventDefault();
  
    const emailInput = document.getElementById('emailInput');
    const email = emailInput.value.toLowerCase();
  
    if (email === emailInput.value) {
      document.getElementById('contactForm').submit();
      document.getElementById('contactForm').reset();
    } else {
      const errorMessage = 'The Email has to be in lower case, Form is not submitted';
      const errorElement = document.getElementById('alert');
      errorElement.textContent = errorMessage;
    }
  }
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', handleSubmit);
  
  // const errorMessage = document.querySelector('.alert');
  // const emailInput = document.querySelector('.emailInput');
  // const nameValue = document.querySelector('.name-input');
  // const textValue = document.querySelector('.text');
  // const submit = document.querySelector('.project-details btn-contact');
  
  // function errorAlert(e) {
  //   errorMessage.className = '';
  //   if (emailInput.value === emailInput.value.toUpperCase()) {
  //     errorMessage.classList.add('form-validation-text');
  //     errorMessage.textContent = '*The email address should be in lowercase.';
  //     e.preventDefault();
  //   } else if (
  //     emailInput.value === ''
  //     || nameValue.value === ''
  //     || textValue.value === ''
  //   ) {
  //     errorMessage.classList.add('form-validation-msg');
  //     errorMessage.textContent = '*All fields are required! Please enter a value';
  //     e.preventDefault();
  //   }
  //   setTimeout(() => {
  //     errorMessage.textContent = '';
  //   }, 3000);
  // }
  // submit.addEventListener('click', errorAlert);