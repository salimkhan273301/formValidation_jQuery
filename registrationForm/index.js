function validateCountryCode(inputId, i) {
  const inputElement = $("#" + inputId + i);
  const countryCode = inputElement.val();

  // Remove non-numeric characters
  const numericCountryCode = countryCode.replace(/\D/g, "");

  inputElement.val(numericCountryCode);

  $("#" + inputId + "Error" + i).text("");

  updateLabels(i);
}

function validateMobileNumber(inputId, i) {
  const inputElement = $("#" + inputId + i);
  const mobileNumber = inputElement.val();

  // Remove non-numeric characters
  const numericMobileNumber = mobileNumber.replace(/\D/g, "");
  const updatedMobileNo = inputElement.val(numericMobileNumber);

  if (/^\d+$/.test(numericMobileNumber)) {
    if (numericMobileNumber.length < 10 && numericMobileNumber.length > 0) {
      $("#" + inputId + "Error" + i)
        .css("color", "red")
        .text("Mobile number must be at least 10 digits.");
    } else {
      $("#" + inputId + "Error" + i).text("");
    }
  } else {
    $("#" + inputId + "Error" + i)
      .css("color", "red")
      .text("");
  }

  updateLabels(i);
}

function updateLabels(i) {
  const countryCodeInput = $("#countryCode" + i);
  const mobileInput = $("#mobile" + i);

  if (countryCodeInput.val() || mobileInput.val()) {
    $("#countryCodeLabel" + i).addClass("required-label");
    $("#mobileLabel" + i).addClass("required-label");
  } else {
    $("#countryCodeLabel" + i).removeClass("required-label");
    $("#mobileLabel" + i).removeClass("required-label");
  }
}

function generateForms(count) {
  const div = $("#formsDiv");
  div.empty(); // Clear existing forms

  const formFieldsHtml = function (i) {
    return `
      <label for="name${i}">Name:</label>
      <input type="text" id="name${i}" name="name${i}" required />

      <label for="email${i}">Email:</label>
      <input type="email" id="email${i}" name="email${i}" required />

      <label for="countryCode${i}" id="countryCodeLabel${i}">Country Code:</label>
      <input
        type="text"
        id="countryCode${i}"
        name="countryCode${i}"
        oninput="validateCountryCode('countryCode', ${i})"
        required
        minlength="2"
        maxlength="5"
      />
      <span id="countryCodeError${i}" class="error-message"></span>

      <label for="mobile${i}" id="mobileLabel${i}">Mobile Number:</label>
      <input
        type="text"
        id="mobile${i}"
        oninput="validateMobileNumber('mobile', ${i})"
        name="mobile${i}"
        required
        minlength="10"
        maxlength="10"
      />
      <span id="mobileError${i}" class="error-message"></span>

      <label for="dob${i}">Date of Birth:</label>
      <input type="date" id="dob${i}" name="dob${i}" required />

      <label>Gender:</label>
      <input type="radio" name="gender${i}" value="male" required /> Male
      <input type="radio" name="gender${i}" value="female" required /> Female

      <label for="password${i}">Password:</label>
      <input type="password" id="password${i}" name="password${i}" required />
    `;
  };

  for (let i = 1; i <= count; i++) {
    const formHtml = `
      <form id="form${i}" class="styled-form">
        <h2>Form ${i}</h2>
        ${formFieldsHtml(i)}
        <button type="submit">Submit</button>
      </form>
    `;
    div.append(formHtml);
  }
}

$(document).ready(function () {
  $("#generateFormsButton").click(function () {
    const formCount = parseInt($("#formCountInput").val(), 10);
    generateForms(formCount);
  });
});
