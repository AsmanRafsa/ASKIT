const navigation = document.getElementsByTagName("nav")[0];
const navRightSetting = document.querySelectorAll(".nav__right__setting")[0];
const navRightHistory = document.querySelectorAll(".nav__right__update")[0];
const buttonTheme = document.querySelectorAll(".buttonTheme")[0];
const bodyTheme = document.getElementsByTagName("body")[0];
const themeSwitcher = document.getElementById("themeSwitcher");
const modalSetting = document.getElementById("mode-setting");
const exModal = document.getElementById("exModal");
const darkMode = document.getElementById("dark");
const lightMode = document.getElementById("light");
const replyItem = document.createElement("p");
const custom = document.getElementById("default");
const colorTheme = document.querySelectorAll(".colorTheme")[0];
const colorThemeOne = document.querySelectorAll(".colorTheme")[1];
const colorThemeTwo = document.querySelectorAll(".colorTheme")[2];
const itemOne = document.getElementById("itemOne");
const itemTwo = document.getElementById("itemTwo");
const itemThree = document.getElementById("itemThree");
exModal.addEventListener("click", function () {
  themeSwitcher.style.display = "none";
});
modalSetting.addEventListener("click", function () {
  themeSwitcher.style.display = "block";
});

custom.addEventListener("click", function () {
  bodyTheme.style.backgroundColor = "black";
  navigation.style.backgroundColor = "plum";
  navRightSetting.style.backgroundColor = "rgba(191, 36, 176, 0.3)";
  navRightHistory.style.backgroundColor = "rgba(191, 36, 176, 0.3)";
  buttonTheme.style.backgroundColor = "rgb(123, 0, 123)";
  colorTheme.style.backgroundColor = "rgb(123, 0, 123)";
  colorThemeOne.style.backgroundColor = "rgb(123, 0, 123)";
  colorThemeTwo.style.backgroundColor = "rgb(123, 0, 123)";
  itemOne.style.backgroundColor = "rgb(123, 0, 123)";
  itemTwo.style.backgroundColor = "rgb(123, 0, 123)";
  itemThree.style.backgroundColor = "rgb(123, 0, 123)";
});
lightMode.addEventListener("click", function () {
  bodyTheme.style.backgroundColor = "white";
  navigation.style.backgroundColor = "plum";
  navRightSetting.style.backgroundColor = "rgba(191, 36, 176, 0.3)";
  navRightHistory.style.backgroundColor = "rgba(191, 36, 176, 0.3)";
  buttonTheme.style.backgroundColor = "rgb(123, 0, 123)";
  colorTheme.style.backgroundColor = "rgb(123, 0, 123)";
  colorThemeOne.style.backgroundColor = "rgb(123, 0, 123)";
  colorThemeTwo.style.backgroundColor = "rgb(123, 0, 123)";
  itemOne.style.backgroundColor = "rgb(123, 0, 123)";
  itemTwo.style.backgroundColor = "rgb(123, 0, 123)";
  itemThree.style.backgroundColor = "rgb(123, 0, 123)";
});

darkMode.addEventListener("click", function () {
  bodyTheme.style.backgroundColor = "black";
  navigation.style.backgroundColor = "grey";
  navRightSetting.style.backgroundColor = "rgba(0,0,0,0.3)";
  navRightHistory.style.backgroundColor = "rgba(0,0,0,0.3)";
  buttonTheme.style.backgroundColor = "grey";
  colorTheme.style.backgroundColor = "grey";
  colorThemeOne.style.backgroundColor = "grey";
  colorThemeTwo.style.backgroundColor = "grey";
  itemOne.style.backgroundColor = "grey";
  itemTwo.style.backgroundColor = "grey";
  itemThree.style.backgroundColor = "grey";
});
