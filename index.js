// template_cs8nw2d
// service_s8irmsj

// WbND19bG0tioRYVP6

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";

  emailjs
    .sendForm(
      "service_s8irmsj",
      "template_cs8nw2d",
      event.target,
      "WbND19bG0tioRYVP6"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly at jmvillez.dev@gmail.com"
      );
    });
}
