function themeSwitcher() {

  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-light");
    lightTheme();
  } else {
    setTheme("theme-dark");
    darkTheme()
  }
}

function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
}

(function () {
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-dark");
    darkTheme();
  } else {
    setTheme("theme-light");
    lightTheme();
  }
})();
/* https://medium.com/@haxzie/dark-and-light-theme-switcher-using-css-variables-and-pure-javascript-zocada-dd0059d72fa2 */


function lightTheme(){
  document.getElementById("themeSwitcher").classList.add("icon-moon");
  document.getElementById("themeSwitcher").classList.remove("icon-sun");
  document.getElementById("bg-img").classList.add("bg-img-light");
  document.getElementById("bg-img").classList.remove("bg-img-dark");
}

function darkTheme(){
  document.getElementById("themeSwitcher").classList.add("icon-sun");
  document.getElementById("themeSwitcher").classList.remove("icon-moon");
  document.getElementById("bg-img").classList.add("bg-img-dark");
  document.getElementById("bg-img").classList.remove("bg-img-light");
}