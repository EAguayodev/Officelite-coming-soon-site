# Frontend Mentor - Officelite coming soon site solution

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- See error states when the contact form is submitted if:
  - The `Name` and/or `Email Address` fields are empty
  - The `Email Address` is not formatted correctly
- **Bonus**: See a live countdown timer that ticks down every second
- **Bonus**: See a custom-styled `select` form control in the sign-up form

### Links

- Solution URL: [](Github)
- Live Site URL: [https://officelite-coming-soon-site-delta.vercel.app/](Vercel)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript
- Desktop-first workflow


### What I learned


To see how you can add code snippets, see below:

```html
  <div class="form-controls">
    <input class="input-field error" id="name" type="name" placeholder="Name">
    <img class="icon-error" src="assets/sign-up/icon-cross.svg" alt="cross">
  </div>
  <div class="form-controls">
    <input class="input-field error" id="email" type="email" placeholder="Email Address">
    <img class="icon-error" src="assets/sign-up/icon-cross.svg" alt="cross">
  </div>
  <div class="form-controls">
    <input class="input-field" id="basic-pack" type="text" placeholder="Basic Pack Free">
    <img class="arrow-down" id="icon-arrow" src="assets/sign-up/icon-arrow-down.svg" alt="arrow-down">
  </div>
```
```css
 .input-field.error-placeholder::placeholder {
    color: #F05B5B;
}
```
```js
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
```

### Continued development


### Useful resources

- [W3schools](https://www.w3schools.com/howto/howto_js_dropdown.asp) - The w3schools resource helped me with restructuring the package submenu design for the challenge.

## Author

- Website - [Eric Aguayo](https://www.ericaguayo.com)
- Frontend Mentor - [@EAguayodev](https://www.frontendmentor.io/profile/EAguayodev/solutions)

## Acknowledgments
