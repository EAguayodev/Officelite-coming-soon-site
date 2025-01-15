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