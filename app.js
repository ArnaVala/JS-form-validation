let input = (input) => document.getElementById(input);
let output = (output) => document.getElementsByClassName(output);

let yourName = input('yourName');
let email = input('email');
let drinks = input('drinks');
let date = input('date');
let form = input('form');
let successIcon = output('icon-ok')
let errorIcon = output('icon-no')
let errMsg = output('err')

let validateForm = false; // is whole form valid? = set it to false before checking if true or false when hitting submit button

// when 
form.addEventListener('submit', (e) => {
  e.preventDefault();
  validateForm = true;
  checkInput(yourName, 0, 'Please fill in name.');
  checkInput(email, 1, 'Please fill in a valid email.');
  checkInput(drinks, 2, 'Please choose a drink.');
  checkInput(date, 3, 'Please pick a date.');

  // if the form is validated = success = display another page
  if (validateForm) {
    document.location.href = 'sent.html'
  }
});

//check if the input fields are empty
let checkInput = (input, order, message) => {
  // if empty = error
  if (input.value.trim() === '') {
    errMsg[order].innerHTML = message; //error message display
    validateForm = false; // if the form is not valid = false
    input.style.border = '2px solid red'; //then change the border to red for indicating error

    // display error icons
    errorIcon[order].style.visibility = 'visible'; //show error icon
    successIcon[order].style.visibility = 'hidden'; //hide success icons
  }
  // if input field is not empty = check if valid = success
  if (input.value.trim() != '') {
    errMsg[order].innerHTML = ''; //clear the error message output in dom

    input.style.border = '2px solid green'; // and display a green border indicating success

    // display success icons
    errorIcon[order].style.visibility = 'hidden'; //hide error icons
    successIcon[order].style.visibility = 'visible'; //show success icons
  }
};

