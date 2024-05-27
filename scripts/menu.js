/* Custom sidebar menu toggle function */
function toggleNav() {
  var sidebar = document.getElementById("sidebarMenu");
  var icon = document.getElementById("menuButtonIcon");

  if (sidebar.style.width === "0px" || sidebar.style.width === "") {
    sidebar.style.width = "250px";
    icon.innerHTML = "close";
  } else {
    sidebar.style.width = "0px";
    icon.innerHTML = "menu";
  }

  var main = document.getElementById("main");
  if (main.style.marginLeft === "0px" || main.style.marginLeft === "") {
    main.style.marginLeft = "250px";
  } else {
    main.style.marginLeft = "0px";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const processSupportLink = document.querySelector("a.process-support");
  processSupportLink.addEventListener("click", function (e) {
    e.preventDefault();
    this.classList.toggle("active");
    const subnav = this.nextElementSibling;
    if (subnav && subnav.classList.contains("subnav-content")) {
      if (subnav.style.display === "block") {
        subnav.style.display = "none";
      } else {
        subnav.style.display = "block";
      }
    }
  });
});
