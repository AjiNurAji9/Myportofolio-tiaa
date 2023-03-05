const navbar = document.getElementById("navbar");
const text = document.getElementById("text");
window.onscroll = () => {

  if (window.scrollY >= 250) {
    navbar.classList.add("colored");
  } else {
    navbar.classList.remove("colored");
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
  })
}