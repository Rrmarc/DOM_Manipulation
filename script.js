var quotes = [
  "I live my life a quarter mile at a time",
  "I said a ten-second car, not a ten-minute car",
  "You can have any brew you want... as long as it's a Corona.",
  "You almost had me? You never had me - you never had your car!",
  "I don't have friends. I have family.",
  "It don't matter if you win by an inch or a mile. Winning's winning."
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  var randomQuote = function() {
    document.querySelector("#quote-of-the-day").textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener

  // Part 1
  let mainTitle = document.getElementById("main-title");
  mainTitle.innerHTML = "Dom Toretto";

  // Part 2
  let bodyElement = document.querySelector("body");
  bodyElement.style.backgroundColor = "pink";

  // Part 3
  let favList = document.getElementById("favlist").querySelectorAll("li");
  //how can i do this using javascript methods??
  favList[favList.length - 1].innerHTML = "";
  // Part 4
  let specialTitle = document.getElementsByClassName("special-title");
  for (let i = 0; i < specialTitle.length; i++) {
    specialTitle[i].style.fontSize = "2rem";
  }

  // Part 5

  // Part 6

  // Part 7

  // Part 8

  // Part 9
});
