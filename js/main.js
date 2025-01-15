// document.addEventListener("DOMContentLoaded", () => {
//   const arrowIcon = document.getElementById("icon-arrow");
//   const submenu = document.getElementById("submenu");
//   const packageField = document.getElementById("basic-pack");
//   const submenuOptions = submenu.querySelectorAll("[data-package]");


//   arrowIcon.addEventListener("click", () => {
//     if (submenu.style.display === "block") {
//       submenu.style.display = "none";
//       arrowIcon.style.transform = "rotate(0deg)";
//     } else {
//       submenu.style.display = "block";
//       arrowIcon.style.transform = "rotate(180deg)";
//     }
//   });


//   submenuOptions.forEach((option) => {
//     option.addEventListener("click", () => {
//       const selectedOption = option.getAttribute("data-package");

//       if (selectedOption) {
//         packageField.value = selectedOption;
//         submenu.style.display = "none"; 
//         arrowIcon.style.transform = "rotate(0deg)"; 
//       }
//     });
//   });

 
//   document.addEventListener("click", (event) => {
//     if (
//       !event.target.closest(".form-controls") &&
//       !event.target.closest("#submenu")
//     ) {
//       if (submenu.style.display === "block") {
//         submenu.style.display = "none";
//         arrowIcon.style.transform = "rotate(0deg)";
//       }
//     }
//   });
// });


// const form = document.getElementById("form-pack");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let isValid = true;

//   const nameField = document.getElementById("name");
//   const emailField = document.getElementById("email");
//   const phoneField = document.getElementById("phone-number");
//   const companyField = document.getElementById("company");
//   const errorIcons = document.querySelectorAll(".icon-error");

//    const setErrorPlaceholder = (field, hasError) => {
//      if (hasError) {
//        field.classList.add("error-placeholder");
//      } else {
//        field.classList.remove("error-placeholder");
//      }
//    };

 
//   if (!nameField.value.trim()) {
//     nameField.style.borderBottom = "1px solid #F05B5B";
//     errorIcons.forEach((icon) => (icon.style.display = "block"));
//     setErrorPlaceholder(nameField, true);
//     isValid = false;
//   } else {
//     nameField.style.borderBottom = "1px solid #747B95";
//     errorIcons.forEach((icon) => (icon.style.display = "none"));
//     setErrorPlaceholder(nameField, false);
//   }


//   if (!emailField.value.trim()) {
//     emailField.style.borderBottom = "1px solid #F05B5B";
//     setErrorPlaceholder(emailField, true);
//     isValid = false;
//   } else if (!/^\S+@\S+\.\S+$/.test(emailField.value)) {
//     isValid = false;
//   } else {
//     emailField.style.borderBottom = "1px solid #747B95";
//     errorIcons.forEach((icon) => (icon.style.display = "none"));
//     setErrorPlaceholder(emailField, false);
//   }


//   if (!phoneField.value.trim()) {
//     phoneField.style.borderBottom = "1px solid #F05B5B";
//       setErrorPlaceholder(phoneField, true);
//     isValid = false;
//   } else {
//     phoneField.style.borderBottom = "1px solid #747B95";
//       setErrorPlaceholder(phoneField, false);
//   }


//   if (!companyField.value.trim()) {
//     companyField.style.borderBottom = "1px solid #F05B5B";
//       setErrorPlaceholder(companyField, true);
//     isValid = false;
//   } else {
//     companyField.style.borderBottom = "1px solid #747B95";
//       setErrorPlaceholder(companyField, false);
//   }

//   if (isValid) {
//     alert("Form submitted successfully!");
//   }
// });


// const targetDate = new Date();
// targetDate.setDate(targetDate.getDate() + 30);


// function updateCountdown() {
//   const now = new Date();
//   const timeDifference = targetDate - now;

//   if (timeDifference <= 0) {
  
//     document.getElementById("counter-day").textContent = "0";
//     document.getElementById("counter-hour").textContent = "0";
//     document.getElementById("counter-minute").textContent = "0";
//     document.getElementById("counter-second").textContent = "0";
//     clearInterval(countdownInterval);
//     return;
//   }

//   const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
//   const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

//   document.getElementById("counter-day").textContent = days;
//   document.getElementById("counter-hour").textContent = hours.toString().padStart(2, '0');
//   document.getElementById("counter-minute").textContent = minutes.toString().padStart(2, '0');
//   document.getElementById("counter-second").textContent = seconds.toString().padStart(2, '0');
// }

// const countdownInterval = setInterval(updateCountdown, 1000);

// updateCountdown();
document.addEventListener("DOMContentLoaded", () => {
  let t = document.getElementById("icon-arrow"),
    e = document.getElementById("submenu"),
    o = document.getElementById("basic-pack"),
    n = e.querySelectorAll("[data-package]");
  t.addEventListener("click", () => {
    "block" === e.style.display
      ? ((e.style.display = "none"), (t.style.transform = "rotate(0deg)"))
      : ((e.style.display = "block"), (t.style.transform = "rotate(180deg)"));
  }),
    n.forEach((n) => {
      n.addEventListener("click", () => {
        let r = n.getAttribute("data-package");
        r &&
          ((o.value = r),
          (e.style.display = "none"),
          (t.style.transform = "rotate(0deg)"));
      });
    }),
    document.addEventListener("click", (o) => {
      o.target.closest(".form-controls") ||
        o.target.closest("#submenu") ||
        "block" !== e.style.display ||
        ((e.style.display = "none"), (t.style.transform = "rotate(0deg)"));
    });
});
const form = document.getElementById("form-pack");
form.addEventListener("submit", (t) => {
  t.preventDefault();
  let e = !0,
    o = document.getElementById("name"),
    n = document.getElementById("email"),
    r = document.getElementById("phone-number"),
    l = document.getElementById("company"),
    a = document.querySelectorAll(".icon-error"),
    d = (t, e) => {
      e
        ? t.classList.add("error-placeholder")
        : t.classList.remove("error-placeholder");
    };
  o.value.trim()
    ? ((o.style.borderBottom = "1px solid #747B95"),
      a.forEach((t) => (t.style.display = "none")),
      d(o, !1))
    : ((o.style.borderBottom = "1px solid #F05B5B"),
      a.forEach((t) => (t.style.display = "block")),
      d(o, !0),
      (e = !1)),
    n.value.trim()
      ? /^\S+@\S+\.\S+$/.test(n.value)
        ? ((n.style.borderBottom = "1px solid #747B95"),
          a.forEach((t) => (t.style.display = "none")),
          d(n, !1))
        : (e = !1)
      : ((n.style.borderBottom = "1px solid #F05B5B"), d(n, !0), (e = !1)),
    r.value.trim()
      ? ((r.style.borderBottom = "1px solid #747B95"), d(r, !1))
      : ((r.style.borderBottom = "1px solid #F05B5B"), d(r, !0), (e = !1)),
    l.value.trim()
      ? ((l.style.borderBottom = "1px solid #747B95"), d(l, !1))
      : ((l.style.borderBottom = "1px solid #F05B5B"), d(l, !0), (e = !1)),
    e && alert("Form submitted successfully!");
});
const targetDate = new Date();
function updateCountdown() {
  let t = new Date(),
    e = targetDate - t;
  if (e <= 0) {
    (document.getElementById("counter-day").textContent = "0"),
      (document.getElementById("counter-hour").textContent = "0"),
      (document.getElementById("counter-minute").textContent = "0"),
      (document.getElementById("counter-second").textContent = "0"),
      clearInterval(countdownInterval);
    return;
  }
  (document.getElementById("counter-day").textContent = Math.floor(e / 864e5)),
    (document.getElementById("counter-hour").textContent = Math.floor(
      (e % 864e5) / 36e5
    )
      .toString()
      .padStart(2, "0")),
    (document.getElementById("counter-minute").textContent = Math.floor(
      (e % 36e5) / 6e4
    )
      .toString()
      .padStart(2, "0")),
    (document.getElementById("counter-second").textContent = Math.floor(
      (e % 6e4) / 1e3
    )
      .toString()
      .padStart(2, "0"));
}
targetDate.setDate(targetDate.getDate() + 30);
const countdownInterval = setInterval(updateCountdown, 1e3);
updateCountdown();