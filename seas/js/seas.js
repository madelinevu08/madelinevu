"use strict";
window.onload = function () {
  var form = document.getElementById("donationForm");
  var amountRadios = document.getElementsByName("amount");
  var customAmountInput = document.getElementById("custom-amount");
  var customBox = document.getElementById("custom-box");

  var silver = document.getElementById("silver");
  var gold = document.getElementById("gold");
  var diamond = document.getElementById("diamond");
  var emerald = document.getElementById("emerald");

  function hideAllTiers() {
    silver.classList.add("d-none");
    gold.classList.add("d-none");
    diamond.classList.add("d-none");
    emerald.classList.add("d-none");
  }

  function updateTierDisplay() {
    var selected = null;

    for (var i = 0; i < amountRadios.length; i++) {
      if (amountRadios[i].checked) {
        selected = amountRadios[i].value;
      }
    }

    hideAllTiers();

   
    if (selected === "option1") {
      silver.classList.remove("d-none");
      customBox.classList.add("d-none");
    } else if (selected === "option2") {
      gold.classList.remove("d-none");
      customBox.classList.add("d-none");
    } else if (selected === "option3") {
      diamond.classList.remove("d-none");
      customBox.classList.add("d-none");
    } else if (selected === "option4") {
      customBox.classList.remove("d-none");
      }

  }

  customAmountInput.addEventListener("keyup", function() {
    var amount = customAmountInput.value;
    if (amount > 100) {
      emerald.classList.remove("d-none");
      silver.classList.add("d-none");
      gold.classList.add("d-none");
      diamond.classList.add("d-none");
    }
    else if (amount > 0 && amount <= 25) {
      silver.classList.remove("d-none");
      emerald.classList.add("d-none");
      gold.classList.add("d-none");
      diamond.classList.add("d-none");
    }
    else if (amount > 25 && amount <= 50) {
      gold.classList.remove("d-none");
      emerald.classList.add("d-none");
      silver.classList.add("d-none");
      diamond.classList.add("d-none");
    }
    else if (amount > 50 && amount <= 100) {
      diamond.classList.remove("d-none");
      emerald.classList.add("d-none");
      silver.classList.add("d-none");
      gold.classList.add("d-none");
    }
    else {
      emerald.classList.add("d-none");
      diamond.classList.add("d-none");
      gold.classList.add("d-none");
      silver.classList.add("d-none");
    }
  })
  
// Changes tier level when each amount is clicked
  for (var i = 0; i < amountRadios.length; i++) {
    amountRadios[i].addEventListener("change", updateTierDisplay);
  }

  // Validation messages

  form.addEventListener("submit", function (e) {
    var firstNameInput = document.getElementById("firstName");
    var lastNameInput = document.getElementById("lastName");
    var emailInput = document.getElementById("email");
    var phoneInput = document.getElementById("phone");
    var customInput = document.getElementById("custom-amount");
    var addressInput = document.getElementById("address");
    var cityInput = document.getElementById("city");
    var stateInput = document.getElementById("state");
    var zipInput = document.getElementById("zip");
    var cardNameInput = document.getElementById("cardName");
    var cardNumberInput = document.getElementById("cardNumber");
    var cvcInput = document.getElementById("cvc");
    var expMonth =document.getElementById("expMonth");
    var expYear = document.getElementById("expYear");
  
    var isValid = true;

    // information custom messages
  
    if (firstNameInput.value === "") {
      firstNameInput.setCustomValidity("Please enter your first name.");
      isValid = false;
    } else {
      firstNameInput.setCustomValidity("");
    }
  
    if (lastNameInput.value === "") {
      lastNameInput.setCustomValidity("Please enter your last name.");
      isValid = false;
    } else {
      lastNameInput.setCustomValidity("");
    }
  
    if (emailInput.value === "") {
      emailInput.setCustomValidity("Please enter your email address.");
      isValid = false;
    } else {
      emailInput.setCustomValidity("");
    }

    if (phoneInput.value === "") {
      phoneInput.setCustomValidity("Please enter your phone number.");
      isValid = false;
    } else {
      phoneInput.setCustomValidity("");
    }

    var selectedAmount = null;
    for (var i = 0; i < amountRadios.length; i++) {
      if (amountRadios[i].checked) {
        selectedAmount = amountRadios[i].value;
      }
    }
    
    // If "Custom" is selected, check if the custom amount field is filled
    if (selectedAmount === "option4" && customInput.value === "") {
      customInput.setCustomValidity("Please enter a custom amount.");
      isValid = false;
    } else {
      customInput.setCustomValidity("");
    }
    
    if (addressInput.value === "") {
      addressInput.setCustomValidity("Please enter your street address.");
      isValid = false;
    } else {
        addressInput.setCustomValidity("");
      }

  
    // Card Info Custom Messages

    if (cityInput.value === "") {
      cityInput.setCustomValidity("Please enter your city.");
      isValid = false;
    } else {
      cityInput.setCustomValidity("");
    }
  
    if (stateInput.value === "") {
      stateInput.setCustomValidity("Please select your state.");
      isValid = false;
    } else {
      stateInput.setCustomValidity("");
    }
  
    if (zipInput.value === "" || zipInput.value.length !== 5 || isNaN(zipInput.value)) {
      zipInput.setCustomValidity("Please enter a valid 5-digit ZIP code.");
      isValid = false;
    } else {
      zipInput.setCustomValidity("");
    }

    if (cardNameInput.value === "") {
      cardNameInput.setCustomValidity("Please enter your cardholder's name.")
      isValid = false;
    } else {
      cardNameInput.setCustomValidity("");
    }

    if (cardNumberInput.value === "" || cardNumberInput.value.length < 13 || cardNumberInput.value.length > 19 || isNaN(cardNumberInput.value)) {
      cardNumberInput.setCustomValidity("Please enter a valid credit card number.");
      isValid = false;
    } else {
      cardNumberInput.setCustomValidity("");
    }

    if (cvcInput.value === "" || cvcInput.value.length !== 3 || isNaN(cvcInput.value)) {
      cvcInput.setCustomValidity("Please enter a valid 3-digit CVC");
      isValid = false;
    } else {
      cvcInput.setCustomValidity("");
    }

    if (expMonth.value === "") {
      expMonth.setCustomValidity("Please select your expiration month.");
      isValid = false;
    } else {
      expMonth.setCustomValidity("");
    }

    if (expYear.value === "") {
      expYear.setCustomValidity("Please select your expiration year.");
      isValid = false;
    } else {
      expYear.setCustomValidity("");
    }


    if (!isValid) {
      e.preventDefault();
      form.reportValidity();
    }
  });
}