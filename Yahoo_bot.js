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

let keywords = ["Best PC games 2022: the must-play titles you don’t want to miss", "The 12 best beaches in Greece", "Moscow City Centre"];
let keyword = keywords[getRandom(0, keywords.length)];
let links = document.links;




//https://www.techradar.com/news/best-pc-games
//https://www.lonelyplanet.com/articles/best-beaches-greece
//https://www.expedia.com/Car-Rentals-In-Moscow-City-Centre.d3000662241.Car-Rental-Guide
