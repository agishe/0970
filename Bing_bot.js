// ==UserScript==
// @name         Bot for Bing
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description
// @author       Kadyrova Maria
// @match        https://www.bing.com/*
// @match        https://napli.ru/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

let keywords = ["10 самых популярных шрифтов от Google", "VS Code", "Отключение редакций и ревизий в WordPress", "как использовать DevTools браузера", "Вывод произвольных типов записей и полей в WordPress"];
let keyword = keywords[getRandom(0, keywords.length)];
let links = document.links;
let bingInput = document.getElementsByName("q")[0];
let btn = document.getElementsByName("search")[0];

if (btn != undefined) {
  let i = 0;
  let timerId = setInterval(() => {
    bingInput.value += keyword[i];
    i++;
    if (i == keyword.length) {
      clearInterval(timerId);
      btn.click();
    }
  }, 500);
} else if (location.hostname == "napli.ru") {
  console.log("Мы на целевом сайте");
  setInterval(() => {
    let index = getRandom(0, links.length);
    if (getRandom(0, 101) >= 70) {
      location.href = "https://www.bing.com/";
    }
    if (links.length == 0) {
      location.href = "https://napli.ru/";
    }
    if (links[index].href.indexOf("napli.ru") != -1) {
      links[index].click();
    }
  }, getRandom(2000, 5000));
} else {
  let nextBingPage = true;
  for(let i = 0; i < links.length; i++) {
    if (links[i].href.indexOf("napli.ru") != -1) {
      let link = links[i];
      nextBingPage = false;
      console.log("Нашел строку " + link);
      setTimeout(() => link.click(), getRandom(2500, 4000));
      break;
    }
  }
  let elementExist = setInterval(() => {
    let element = document.querySelector(".sb_pagS");
    if (element != null) {
      if (element.innerText == "5") {
        nextBingPage = false;
        location.href = "https://www.bing.com/";
      }
      clearInterval(elementExist);
    }
  }, 100)

  if (nextBingPage) {
    setTimeout(() => document.getElementsByClassName("sb_pagN")[0].click(), getRandom(2000, 4000));
  }
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
