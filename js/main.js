// TODO:
// debug package selection
// DONE: countdown, error-icon, and highlighted error completed 
// Form validation with submenu display

document.addEventListener("DOMContentLoaded", () => {
  const arrowIcon = document.getElementById("icon-arrow");
  const submenu = document.getElementById("submenu");
  const packageField = document.getElementById("basic-pack");
  const submenuOptions = submenu.querySelectorAll("[data-package]");


  arrowIcon.addEventListener("click", () => {
    if (submenu.style.display === "block") {
      submenu.style.display = "none";
      arrowIcon.style.transform = "rotate(0deg)";
    } else {
      submenu.style.display = "block";
      arrowIcon.style.transform = "rotate(180deg)";
    }
  });

  // Handle submenu option selection
  submenuOptions.forEach((option) => {
    option.addEventListener("click", () => {
      const selectedOption = option.getAttribute("data-package");

      if (selectedOption) {
        packageField.value = selectedOption;
        submenu.style.display = "none"; 
        arrowIcon.style.transform = "rotate(0deg)"; 
      }
    });
  });

 
  document.addEventListener("click", (event) => {
    if (
      !event.target.closest(".form-controls") &&
      !event.target.closest("#submenu")
    ) {
      if (submenu.style.display === "block") {
        submenu.style.display = "none";
        arrowIcon.style.transform = "rotate(0deg)";
      }
    }
  });
});


const form = document.getElementById("form-pack");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let isValid = true;

  const nameField = document.getElementById("name");
  const emailField = document.getElementById("email");
  const phoneField = document.getElementById("phone-number");
  const companyField = document.getElementById("company");
  const errorIcons = document.querySelectorAll(".icon-error");

   const setErrorPlaceholder = (field, hasError) => {
     if (hasError) {
       field.classList.add("error-placeholder");
     } else {
       field.classList.remove("error-placeholder");
     }
   };

  // Name validation
  if (!nameField.value.trim()) {
    nameField.style.borderBottom = "1px solid #F05B5B";
    errorIcons.forEach((icon) => (icon.style.display = "block"));
    setErrorPlaceholder(nameField, true);
    isValid = false;
  } else {
    nameField.style.borderBottom = "1px solid #747B95";
    errorIcons.forEach((icon) => (icon.style.display = "none"));
    setErrorPlaceholder(nameField, false);
  }

  // Email validation
  if (!emailField.value.trim()) {
    emailField.style.borderBottom = "1px solid #F05B5B";
    setErrorPlaceholder(emailField, true);
    // errorIcons.forEach((icon) => (icon.style.display = "block"));
    isValid = false;
  } else if (!/^\S+@\S+\.\S+$/.test(emailField.value)) {
    // errorIcons.forEach((icon) => (icon.style.display = "block"));
    isValid = false;
  } else {
    emailField.style.borderBottom = "1px solid #747B95";
    errorIcons.forEach((icon) => (icon.style.display = "none"));
    setErrorPlaceholder(emailField, false);
  }

  // Phone Number validation
  if (!phoneField.value.trim()) {
    phoneField.style.borderBottom = "1px solid #F05B5B";
      setErrorPlaceholder(phoneField, true);
    // errorIcons.forEach((icon) => (icon.style.display = "block"));
    isValid = false;
  } else {
    phoneField.style.borderBottom = "1px solid #747B95";
      setErrorPlaceholder(phoneField, false);
    // errorIcons.forEach((icon) => (icon.style.display = "none"));
  }

  // Company Validation
  if (!companyField.value.trim()) {
    companyField.style.borderBottom = "1px solid #F05B5B";
      setErrorPlaceholder(companyField, true);
    // errorIcons.forEach((icon) => (icon.style.display = "block"));
    isValid = false;
  } else {
    companyField.style.borderBottom = "1px solid #747B95";
      setErrorPlaceholder(companyField, false);
    // errorIcons.forEach((icon) => (icon.style.display = "none"));
  }

  if (isValid) {
    alert("Form submitted successfully!");
  }
});

// counter starts
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 30);

// Function to update the countdown timer
function updateCountdown() {
  const now = new Date();
  const timeDifference = targetDate - now;

  if (timeDifference <= 0) {
    // Timer has reached zero; stop the countdown
    document.getElementById("counter-day").textContent = "0";
    document.getElementById("counter-hour").textContent = "0";
    document.getElementById("counter-minute").textContent = "0";
    document.getElementById("counter-second").textContent = "0";
    clearInterval(countdownInterval);
    return;
  }

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Update the HTML with the new values
  document.getElementById("counter-day").textContent = days;
  document.getElementById("counter-hour").textContent = hours.toString().padStart(2, '0');
  document.getElementById("counter-minute").textContent = minutes.toString().padStart(2, '0');
  document.getElementById("counter-second").textContent = seconds.toString().padStart(2, '0');
}

// Update the countdown timer every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Initialize the countdown on page load
updateCountdown();
