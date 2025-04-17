//js

let username = document.querySelector("#username");
let email = document.querySelector("#email");
let currentPWD = document.querySelector("#currentPWD");
let confirmPWD = document.querySelector("#confirmPWD");
let phoneNum = document.querySelector("#phoneNum");
let currentAddress = document.querySelector("#currentAddress");
let permanentAddress = document.querySelector("#permanentAddress");


document.querySelector("#submitBtn").addEventListener("click" , (e)=>{
    e.preventDefault();

    let isValid = true;
    //username Alert
    let usernameVal = username.value.trim();
let usernamePattern = /^[A-Za-z][A-Za-z0-9_]{4,10}$/;

if (usernameVal === "") {
  document.querySelector("#userAlert").innerHTML = "Username is required";
  isValid = false;
} else if (!usernamePattern.test(usernameVal)) {
  document.querySelector("#userAlert").innerHTML = "Username must start with a letter and be 5-11 characters long";
  isValid = false;
} else {
  document.querySelector("#userAlert").innerHTML = "";
}

  //Email Alert
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.trim() === "") {
    document.querySelector("#emailAlert").innerHTML = "Email is required";
    isValid = false;
  } else if (!emailPattern.test(email.value.trim())) {
    document.querySelector("#emailAlert").innerHTML = "Invalid email format";
    isValid = false;
  } else {
    document.querySelector("#emailAlert").innerHTML = "";
  }

  //Current Password Alert
  if (currentPWD.value.trim() === "") {
    document.querySelector("#currentPWDAlert").innerHTML = "Current password is required";
    isValid = false;
  } else {
    document.querySelector("#currentPWDAlert").innerHTML = "";
  }

  //Confirm Password Alert
  if (confirmPWD.value.trim() === "") {
    document.querySelector("#confirmPWDAlert").innerHTML = "Confirm password is required";
    isValid = false;
  } else if (currentPWD.value.trim() !== confirmPWD.value.trim()) {
    document.querySelector("#confirmPWDAlert").innerHTML = "Passwords do not match";
    isValid = false;
  } else {
    document.querySelector("#confirmPWDAlert").innerHTML = "";
  }

  //PHone number Alert
  let phonePattern = /^0\d{3}-\d{7}$/;
  if (phoneNum.value.trim() === "") {
    document.querySelector("#phoneAlert").innerHTML = "Phone number is required";
    isValid = false;
  } else if (!phonePattern.test(phoneNum.value.trim())) {
    document.querySelector("#phoneAlert").innerHTML = "Phone must be in format: 03xx-xxxxxxx";
    isValid = false;
  } else {
    document.querySelector("#phoneAlert").innerHTML = "";
  }

  //Gender Data
  let selectedGenderRadio = document.querySelector('input[name="gender"]:checked');
  let selectedGender = selectedGenderRadio ? selectedGenderRadio.value : "";

  //Return Data If all Input field is valid
  if(!isValid) return;

  //Getting All Data in Object form 
   let userData = {
    username : username.value,
    email: email.value,
    currentPWD: currentPWD.value,
    confirmPWD: confirmPWD.value,
    phoneNum: phoneNum.value,
    selectedGender: selectedGender,
    currentAddress: currentAddress.value,
    permanentAddress: permanentAddress.value,
   };

   //Getting existing data
   let getExistingData = JSON.parse(localStorage.getItem("User")) || [];

   // Add data into Array
   getExistingData.push(userData);

   //Save data in string form.
   localStorage.setItem("User",JSON.stringify(getExistingData));

  

   //Clear the form
    document.querySelector("#userForm").reset();

})

//Remove data or clear 

// localStorage.removeItem("User");

// Hide alert when user clicks on input field

username.addEventListener("focus", () => {
    document.querySelector("#userAlert").innerHTML = "";
  });
  
  email.addEventListener("focus", () => {
    document.querySelector("#emailAlert").innerHTML = "";
  });
  
  currentPWD.addEventListener("focus", () => {
    document.querySelector("#currentPWDAlert").innerHTML = "";
  });
  
  confirmPWD.addEventListener("focus", () => {
    document.querySelector("#confirmPWDAlert").innerHTML = "";
  });
  
  phoneNum.addEventListener("focus", () => {
    document.querySelector("#phoneAlert").innerHTML = "";
  });
  

  //Add the show and Hide Button to Password field.
  const currentToggleBtn = document.getElementById("toggleCurrent");
const currentInput = document.getElementById("currentPWD");

currentToggleBtn.addEventListener("click", () => {
  if (currentInput.type === "password") {
    currentInput.type = "text";
    currentToggleBtn.textContent = "Hide";
  } else {
    currentInput.type = "password";
    currentToggleBtn.textContent = "Show";
  }
});

const confirmToggleBtn = document.getElementById("toggleConfirm");
const confirmInput = document.getElementById("confirmPWD");

confirmToggleBtn.addEventListener("click", () => {
  if (confirmInput.type === "password") {
    confirmInput.type = "text";
    confirmToggleBtn.textContent = "Hide";
  } else {
    confirmInput.type = "password";
    confirmToggleBtn.textContent = "Show";
  }
});

//Phone number seperator

phoneNum.addEventListener("input", () => {
    // Remove all non-digit characters
    let rawValue = phoneNum.value.replace(/\D/g, "");
  
    // Limit to 11 digits
    if (rawValue.length > 11) {
      rawValue = rawValue.slice(0, 11);
    }
  
    // Format with hyphen: 4 digits - 7 digits
    let formatted = rawValue;
    if (rawValue.length > 4) {
      formatted = rawValue.slice(0, 4) + '-' + rawValue.slice(4);
    }
  
    phoneNum.value = formatted;
  });
  


