let activePage = window.location.pathname;
// console.log(activePage);
let navLinks = document.querySelectorAll("nav a").forEach((links) => {
  if (links.href.includes(`${activePage}`)) {
    // console.log(`${activePage}`);
    links.classList.add("active");
  }
});
