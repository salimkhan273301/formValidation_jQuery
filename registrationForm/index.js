function validateCountryCode(inputId) {
  const inputElement = $("#" + inputId);
  const countryCode = inputElement.val();

  // Remove non-numeric characters
  const numericCountryCode = countryCode.replace(/\D/g, "");

  if (numericCountryCode.length <= 5) {
    inputElement.val(numericCountryCode);
    $("#" + inputId + "Error")
      .css("color", "red")
      .text("");
    if (/^\d+$/.test(numericCountryCode)) {
      $("#mobileLabel").addClass("required-label");
      $("#countryCodeLabel").addClass("required-label");
    } else {
      $("#countryCodeLabel").removeClass("required-label");
      $("#mobileLabel").removeClass("required-label");
    }
  } else if (numericCountryCode.length === 0) {
    $("#countryCodeLabel").removeClass("required-label");
    $("#mobileLabel").removeClass("required-label");
    $("#" + inputId + "Error").text("");
  } else {
    $("#" + inputId + "Error")
      .css("color", "red")
      .text("Country code must be between 2 and 5 digits.");
    $("#countryCodeLabel").removeClass("required-label");
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
    if (numericMobileNumber.length < 10) {
      $("#" + inputId + "Error")
        .css("color", "red")
        .text("Mobile number must be at least 10 digits.");
    } else {
      $("#" + inputId + "Error").text("");
    }

    if (/^\d+$/.test(numericMobileNumber)) {
      $("#countryCodeLabel").addClass("required-label");
      $("#mobileLabel").addClass("required-label");
    } else {
      $("#countryCodeLabel").removeClass("required-label");
      $("#mobileLabel").removeClass("required-label");
    }
  } else if (numericMobileNumber.length === 0) {
    $("#countryCodeLabel").removeClass("required-label");
    $("#mobileLabel").removeClass("required-label").html("Mobile Number:");
    $("#" + inputId + "Error").text("");
  } else {
    $("#" + inputId + "Error")
      .css("color", "red")
      .text("Mobile number must be exactly 10 digits.");
    $("#countryCodeLabel").removeClass("required-label");
    $("#mobileLabel").removeClass("required-label");
  }
}

// $("#countryCode").on("input", function () {
//   if ($(this).val().length > 0) {
//     validateCountryCode("countryCode");
//   } else {
//     $("#countryCodeLabel").removeClass("required-label");
//     $("#mobileLabel").removeClass("required-label");
//   }
// });

// $("#mobile").on("input", function () {
//   if ($(this).val().length > 0) {
//     validateMobileNumber("mobile");
//   } else {
//     $("#countryCodeLabel").removeClass("required-label");
//     $("#mobileLabel").removeClass("required-label");
//     $("#mobileError").text("");
//   }
// });
