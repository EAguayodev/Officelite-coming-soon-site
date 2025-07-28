# Frontend Mentor - Officelite coming soon site solution

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

### Links

- Solution URL: [https://github.com/EAguayodev/Officelite-coming-soon-site](Github)
- Live Site URL: [https://officelite-coming-soon-site-delta.vercel.app/](Vercel)

## My process

1. **Planning the HTML Structure**  
   - Listed the tags needed for the layout.
   - Created a skeleton HTML structure to organize content.

2. **Defining SCSS Classes**  
   - Planned reusable class names for SCSS, ensuring a modular and scalable approach to styles.
   - Focused on converting SCSS into compiled CSS for styling flexibility and ease of maintenance.

3. **JavaScript Functionality**  
   - Reviewed JavaScript documentation to implement form validation, ensuring the form behaves as expected.
   - Completed the countdown timer bonus section by dynamically updating the timer using JavaScript.

4. **Workflow**  
   - Adopted a desktop-first workflow to prioritize large screens and adjust for smaller devices later.
   - Used SCSS for consistent styling and responsive design tweaks.


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript
- Desktop-first workflow


### What I learned  

I used JavaScript to create a dynamic countdown timer for the bonus section, setting a future date and ensuring it accurately counts down 30 days. Additionally, I confidently implemented JavaScript functionality to display and close a submenu, seamlessly enhancing the user experience. I also developed an intuitive system for users to select their preferred package, combining logic and interactivity to make the feature both functional and user-friendly.


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
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
```

### Continued development
For continued development, I'll be doing more frontendmentor challenges to hone my skills when it comes to improving on my understanding of Javascript. This will be important as I begin to start opening up oppoprtunities for front end developer roles coming from being a web content editor and email developer.

### Useful resources

- [W3schools](https://www.w3schools.com/howto/howto_js_dropdown.asp) - The w3schools resource helped me with restructuring the package submenu design for the challenge.

## Author

- Website - [Eric Aguayo](https://www.ericaguayo.com)
- Frontend Mentor - [@EAguayodev](https://www.frontendmentor.io/profile/EAguayodev/solutions) 