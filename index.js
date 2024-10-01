const form = document.getElementById("form");

// console.log(form.parentElement);

const uname = document.getElementById("uname");

const email = document.getElementById("email");

const password = document.getElementById("password");

const cpassword = document.getElementById("confirm-password");

const terms = document.getElementById("terms");

var a;

var nameValue = uname.value.trim();

var mailRex = /^[a-z0-9_.$#*]+@[a-z0-9]+\.+[a-z]{2,4}$/;

var passRex = /^[A-Z][a-zA-Z0-9]+[@#%&.][a-zA-Z0-9]{1,}$/;

console.log(passRex.test("Surya@2003"));

uname.addEventListener("keyup", function () {
  if (uname.value.length < 11 || uname.value == "") {
    document
      .querySelector(".field-1")
      .getElementsByClassName("error-container")[0].style.display =
      "inline-block";
    document
      .querySelector(".field-1")
      .getElementsByTagName("input")[0].style.border = "1px solid red";
    document
      .querySelector(".field-1")
      .getElementsByClassName("success")[0].style.display = "none";
  } else {
    document
      .querySelector(".field-1")
      .getElementsByClassName("error-container")[0].style.display = "none";
    document
      .querySelector(".field-1")
      .getElementsByTagName("input")[0].style.border = "1px solid green";
    document
      .querySelector(".field-1")
      .getElementsByClassName("success")[0].style.display = "inline-block";
  }
});

email.addEventListener("keyup", function () {
  if (!mailRex.test(email.value)) {
    document
      .querySelector(".field-2")
      .getElementsByClassName("error-container")[0].style.display =
      "inline-block";
    document
      .querySelector(".field-2")
      .getElementsByTagName("input")[0].style.border = "1px solid red";
    document
      .querySelector(".field-2")
      .getElementsByClassName("success")[0].style.display = "none";
  } else {
    document
      .querySelector(".field-2")
      .getElementsByClassName("error-container")[0].style.display = "none";
    document
      .querySelector(".field-2")
      .getElementsByTagName("input")[0].style.border = "1px solid green";
    document
      .querySelector(".field-2")
      .getElementsByClassName("success")[0].style.display = "inline-block";
  }
});

password.addEventListener("keyup", function () {
  if (
    password.value.length < 8 ||
    password.value == "" ||
    !passRex.test(password.value)
  ) {
    document
      .querySelector(".field-3")
      .getElementsByClassName("error-container")[0].style.display =
      "inline-block";
    document
      .querySelector(".field-3")
      .getElementsByClassName("success")[0].style.display = "none";
  } else {
    document
      .querySelector(".field-3")
      .getElementsByClassName("error-container")[0].style.display = "none";
    document
      .querySelector(".field-3")
      .getElementsByClassName("success")[0].style.display = "inline-block";
  }
});

// var cbool1 = cpassword.value.length < 8 || cpassword.value == "";

// var cbool2 =
//   !passRex.test(cpassword.value) && password.value != cpassword.value;

cpassword.addEventListener("keyup", function () {
  if (
    cpassword.value.length < 8 ||
    cpassword.value == "" ||
    !passRex.test(cpassword.value)
  ) {
    document
      .querySelector(".field-4")
      .getElementsByClassName("error-container")[0].style.display =
      "inline-block";
    document
      .querySelector(".field-4")
      .getElementsByClassName("success")[0].style.display = "none";
  } else {
    document
      .querySelector(".field-4")
      .getElementsByClassName("error-container")[0].style.display = "none";
    document
      .querySelector(".field-4")
      .getElementsByClassName("success")[0].style.display = "inline-block";
  }
});

cpassword.addEventListener("keyup", function () {
  if (cpassword.value != "" && password.value == cpassword.value) {
    document
      .querySelector(".field-4")
      .getElementsByClassName("error-container")[0].style.display = "none";
    document
      .querySelector(".field-4")
      .getElementsByClassName("success")[0].style.display = "inline-block";
  } else if (cpassword.value == "" || password.value != cpassword.value) {
    document
      .querySelector(".field-4")
      .getElementsByClassName("error-container")[0].style.display =
      "inline-block";
    document
      .querySelector(".field-4")
      .getElementsByClassName("success")[0].style.display = "none";
  }
});

terms.addEventListener("click", function () {
  if (!terms.checked) {
    document.querySelector(".terms-error").style.display = "block";
    // alert("Please check the terms and conditions");
  } else {
    document.querySelector(".terms-error").style.display = "none";
  }
});

form.addEventListener("submit", (evnt) => {
  evnt.preventDefault();

  validate();

  // alert("Form Submitted Successfully");
});

function validate() {
  var nameValue = uname.value.trim();

  var emailValue = email.value.trim();

  var passwordValue = password.value;

  var cpasswordValue = cpassword.value;

  // var termsValue = terms.value;

  // console.log(terms.checked);
  // console.log(termsValue.checked);

  if (nameValue == "") {
    document
      .querySelector(".field-1")
      .getElementsByClassName("error-container")[0].style.display =
      "inline-block";
    document
      .querySelector(".field-1")
      .getElementsByClassName("success")[0].style.display = "none";
  }

  // console.log(emailValue);
  // console.log(!mailRex.test(emailValue));

  if (!mailRex.test(emailValue)) {
    document
      .querySelector(".field-2")
      .getElementsByClassName("error-container")[0].style.display =
      "inline-block";
    document
      .querySelector(".field-2")
      .getElementsByClassName("success")[0].style.display = "none";
  }
  // var a = "suryamanoj.1709@gmail.com";
  // console.log(mailRex.test(a));

  if (password.value == "") {
    document
      .querySelector(".field-3")
      .getElementsByClassName("error-container")[0].style.display =
      "inline-block";
    document
      .querySelector(".field-3")
      .getElementsByClassName("success")[0].style.display = "none";
  }

  if (cpassword.value == "") {
    document
      .querySelector(".field-4")
      .getElementsByClassName("error-container")[0].style.display =
      "inline-block";
    document
      .querySelector(".field-4")
      .getElementsByClassName("success")[0].style.display = "none";
  }

  if (!terms.checked) {
    document.querySelector(".terms-error").style.display = "block";
    // alert("Please check the terms and conditions");
  } else {
    document.querySelector(".terms-error").style.display = "none";
  }
}
