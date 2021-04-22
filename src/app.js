/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generateRandomNumber() {
  let number = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexNumber = Math.floor(Math.random() * number.length);
  return number[indexNumber];
}

function generateRandomPalo() {
  let palo = ["heart", "diamond", "club", "spade"];
  let indexPalo = Math.floor(Math.random() * palo.length);

  return palo[indexPalo];
}

function limpiarClases() {
  document.querySelector(".number").classList.remove("heart");
  document.querySelector(".number").classList.remove("diamond");
  document.querySelector(".number").classList.remove("club");
  document.querySelector(".number").classList.remove("spade");
}

function card() {
  limpiarClases();

  document.querySelector(".number").classList.add(generateRandomPalo());
  document.querySelector(".number").innerHTML = generateRandomNumber();
}

window.onload = function() {
  //write your code here

  card();
  let btn = document.getElementById("btnCard");

  btn.addEventListener("click", card);
};
