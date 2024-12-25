// TODO:
// 1. Creating functions for form validations as the 1st step.
// Step 1 Goal:
// Create validation for form to show cross-icon and change placeholder and input border color when an error takes place.
// 2. Create javascript code needed for adding the number countdown.
// Step 2 Goal:

// If you're choosing to make this date dynamic, set it to 30 days in the future from the moment the visitor views the page,
// If you're choosing to make this timer dynamic, have it countdown from the date you set above

// Form validation with submenu display

document.addEventListener("DOMContentLoaded", () => {
  const arrowIcon = document.getElementById("icon-arrow");
  const submenu = document.getElementById("submenu");
  const inputField = document.getElementById("basic-pack");
  const submenuOptions = submenu.querySelectorAll(".submenu-control");

  // Toggle submenu visibility and arrow rotation
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
    option.addEventListener("click", (event) => {
      const selectedOption = option.querySelector("a").textContent.trim();

      if (selectedOption) {
        inputField.value = selectedOption; // Update the input field with the selected pack
        submenu.style.display = "none"; // Close the submenu
        arrowIcon.style.transform = "rotate(0deg)"; // Reset arrow to default position
      }
    });
  });

  // Close submenu when clicking outside
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
  const packageField = document.getElementById("basic-pack");
  const submenu = document.getElementById("submenu");
  const submenuOptions = document.querySelectorAll(".submenu-control");
  const arrowIcon = document.getElementById("icon-arrow");
  const phoneField = document.getElementById("phone-number");
  const companyField = document.getElementById("company");
  const errorIcons = document.querySelectorAll(".icon-error");



  // Name validation
  if (!nameField.value.trim()) {
    nameField.style.borderBottom = "1px solid #F05B5B";
    errorIcons.forEach((icon) => (icon.style.display = "block"));
    isValid = false;
  } else {
    nameField.style.borderBottom = "1px solid #747B95";
    errorIcons.forEach((icon) => (icon.style.display = "none"));
  }

  // Email validation
  if (!emailField.value.trim()) {
    emailField.style.borderBottom = "1px solid #F05B5B";
    // errorIcons.forEach((icon) => (icon.style.display = "block"));
    isValid = false;
  } else if (!/^\S+@\S+\.\S+$/.test(emailField.value)) {
    // errorIcons.forEach((icon) => (icon.style.display = "block"));
    isValid = false;
  } else {
    emailField.style.borderBottom = "1px solid #747B95";
    errorIcons.forEach((icon) => (icon.style.display = "none"));
  }

  // Phone Number validation
  if (!phoneField.value.trim()) {
    phoneField.style.borderBottom = "1px solid #F05B5B";
    // errorIcons.forEach((icon) => (icon.style.display = "block"));
    isValid = false;
  } else {
    phoneField.style.borderBottom = "1px solid #747B95";
    // errorIcons.forEach((icon) => (icon.style.display = "none"));
  }

  // Company Validation
  if (!companyField.value.trim()) {
    companyField.style.borderBottom = "1px solid #F05B5B";
    // errorIcons.forEach((icon) => (icon.style.display = "block"));
    isValid = false;
  } else {
    companyField.style.borderBottom = "1px solid #747B95";
    // errorIcons.forEach((icon) => (icon.style.display = "none"));
  }

  if (isValid) {
    alert("Form submitted successfully!");
    // Additional actions for form submission can be added here
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
