"use strict";

// Global variables. --------------------------------------
let getTextButton = document.getElementById("getTx");
let sampleTextParagraph = document.getElementById("sampTx");

let resetButton = document.getElementById("reset");

// Gets the a random text sample. -------------------------
getTextButton.addEventListener("click", getRandonText);

let textArray = [
  "The quick brown fox jumped over the lazy dog.",
  "Two driven jocks help fax my big quiz.",
  "The five boxing wizards jump quickly.",
  "Jackdaws love my big sphinx of quartz.",
  "abcdefg hijklomn qurst uvwxyz",
  "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday and Sunday",
  "January, February, March, April, May, June, July, August, September, October, November and December"
];

function getRandonText(){
  let randomIndex = Math.floor((Math.random() * textArray.length));
  let nextTextSample = textArray[randomIndex];
  let currentTextSample = sampleTextParagraph.textContent;
   // To ensure the next text is different from the current.
   if (nextTextSample != currentTextSample){
     sampleTextParagraph.textContent = nextTextSample;
   } else {
     getRandonText();
   }
}
// Reset function. ------------------------------------------
resetButton.addEventListener("click", reset);

function reset(){
  sampleTextParagraph.textContent = textArray[0];
}
