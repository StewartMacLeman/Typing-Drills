"use strict";

/* Fonts Array ---------------------- */
let fontsArray = [
{ group: "sans-serif", family: "arial" },
{ group: "sans-serif", family: "futura" },
{ group: "sans-serif", family: "geneva" },
{ group: "sans-serif", family: "gill sands" },
{ group: "sans-serif", family: "helvetica" },
{ group: "sans-serif", family: "impact" },
{ group: "sans-serif", family: "lucida grande" },
{ group: "sans-serif", family: "optima" },
{ group: "sans-serif", family: "tahoma" },
{ group: "sans-serif", family: "trebuchet MS" },
{ group: "sans-serif", family: "verdana" },
{ group: "serif", family: "american typewriter" },
{ group: "serif", family: "baskerville" },
{ group: "serif", family: "big caslon" },
{ group: "serif", family: "didot" },
{ group: "serif", family: "georgia" },
{ group: "serif", family: "hoefler text" },
{ group: "serif", family: "lucida bright" },
{ group: "serif", family: "palatino" },
{ group: "serif", family: "times new roman" },
{ group: "monospaced", family: "andale mono" },
{ group: "monospaced", family: "courier" },
{ group: "monospaced", family: "courier new" },
{ group: "monospaced", family: "lucida sans typewriter" },
{ group: "monospaced", family: "monaco" },
{ group: "fantasy", family: "copperplate" },
{ group: "fantasy", family: "luminari" },
{ group: "fantasy", family: "papyrus" },
{ group: "script / cursive", family: "bradley hand" },
{ group: "script / cursive", family: "comic sans ms" },
{ group: "script / cursive", family: "brush script mt" }
];

// Global variables. --------------------------------------
let getTextButton = document.getElementById("getTx");
let sampleTextParagraph = document.getElementById("sampTx");
let typingArea = document.getElementById("typeArea");

let displayFontsButton = document.getElementById("fontBut");
let fontsDiv = document.getElementById("fontCont");

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
// Create and add the font scroll list. ------------------
document.addEventListener("DOMContentLoaded", createFontDivs);

function createFontDivs(scrollBox){
  for (let i = 0; i < fontsArray.length; i++){
    let div = document.createElement('div');
    div.classList.add("fontScrollItemDiv");

    let paragraph = document.createElement('p');
    paragraph.classList.add("fontItemText");
    let paragraphText = document.createTextNode(`${fontsArray[i].group}: ${fontsArray[i].family}`);
    paragraph.style.fontFamily = `${fontsArray[i].family}`;
    paragraph.addEventListener("click", addFont);

    paragraph.appendChild(paragraphText);
    div.appendChild(paragraph);
    fontsDiv.appendChild(div);
  }
}

// Adds the font to the text sample and updates the respective text. ------
function addFont(e){
  let font = e.target.style.fontFamily;

  sampleTextParagraph.style.fontFamily = font;
  typingArea.style.fontFamily = font;
}

// Display the fonts list. --------------------------------
displayFontsButton.addEventListener("click", displayFontsDiv);

function displayFontsDiv(){
  console.log("hello");
}
// Reset function. ------------------------------------------
resetButton.addEventListener("click", reset);

function reset(){
  sampleTextParagraph.textContent = textArray[0];
  sampleTextParagraph.style.fontFamily = "helvetica";
  typingArea.style.fontFamily = "helvetica";
  typingArea.textContent = "";

}
