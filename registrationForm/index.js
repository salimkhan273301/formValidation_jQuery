function validateCountryCode(inputId) {
  const inputElement = $("#" + inputId);
  const countryCode = inputElement.val();

  // Remove non-numeric characters
  const numericCountryCode = countryCode.replace(/\D/g, "");

  if (numericCountryCode.length >= 1 && numericCountryCode.length <= 5) {
    inputElement.val(numericCountryCode);
    $("#" + inputId + "Error").text("");
    // $("#mobileLabel").text("Mobile Number: *");
    $("#mobileLabel").addClass("required-label");
  } else {
    $("#" + inputId + "Error").text(
      "Country code must be between 2 and 5 digits."
    );
    // $("#mobileLabel").text("Mobile Number:");
    $("#mobileLabel").removeClass("required-label");
  }
}

function validateMobileNumber(inputId) {
  const inputElement = $("#" + inputId);
  const mobileNumber = inputElement.val();

  // Remove non-numeric characters
  const numericMobileNumber = mobileNumber.replace(/\D/g, "");

  if (numericMobileNumber.length <= 10) {
    inputElement.val(numericMobileNumber);
    $("#" + inputId + "Error").text("");
    // $("#countryCodeLabel").text("Country Code: *");
    $("#countryCodeLabel").addClass("required-label");
  } else {
    $("#" + inputId + "Error").text("Mobile number must be exactly 10 digits.");
    // $("#countryCodeLabel").text("Country Code:");
    $("#countryCodeLabel").removeClass("required-label");
  }
}

$("#countryCode").on("input", function () {
  validateCountryCode("countryCode");
});

$("#mobile").on("input", function () {
  validateMobileNumber("mobile");
});

// Initial label text
//$("#countryCodeLabel").text("Country Code:");
//$("#mobileLabel").text("Mobile Number:");

$("#countryCodeLabel").removeClass("required-label");
$("#mobileLabel").removeClass("required-label");
