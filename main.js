const navbar = document.getElementById("navbar");
const text = document.getElementById("text");
const logo = document.getElementById("logo");

window.onscroll = () => {

  if (window.scrollY >= 250) {
    navbar.classList.add("colored");
    logo.classList.add("hidden");
  } else {
    navbar.classList.remove("colored");
    logo.classList.remove("hidden");
  }

  if (window.scrollY > 100) {
    text.style.transform = "scale(0)";
  } else {
    text.style.transform = "scale(1)";
  }
}

function pesan() {
  Swal.fire({
    title: "Kepo ya?",
    confirmButtonText: "Iya",
    customClass: "swal-wide"
  }).then((result) => {
    if (result.value) {
      window.location.href = "#about";
    }
  })
}