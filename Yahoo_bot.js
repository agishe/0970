// ==UserScript==
// @name         Bot for Yahoo
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Kadyrova Maria
// @match        https://www.yahoo.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

let keywords = [
  "Find the perfect spot in the US for your next stargazing adventure",
  "Why the Caribbean island of Montserrat celebrates St Patrick's Day",
  "Picture yourself in Argentina with Elsewhere by Lonely Planet",
];
let keyword = keywords[getRandom(0, keywords.length)];
let links = document.links;
let yahooInput = document.getElementById("ybar-sbq");
let btn = document.getElementById("ybar-search");

if (btn != undefined) {
  yahooInput.value = keyword;
  btn.click();
} else {
  for (let i = 0; i < links.length; i++) {
    if (links[i].href.indexOf("lonelyplanet.com") != -1) {
      let link = links[i];
      console.log("Найдена строка " + link);
      link.click();
    }
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

//https://www.lonelyplanet.com/articles/best-beaches-greece
