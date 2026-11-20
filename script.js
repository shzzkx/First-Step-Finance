// First Step Finance — homepage script (replaces script.js on index.html)
// The staircase topic selector needs no JavaScript; this only drives the quote.

const QUOTES = [
  ["Empty pockets never held anyone back. Only empty heads and empty hearts can do that.", "Norman Vincent Peale"],
  ["An investment in knowledge pays the best interest.", "Benjamin Franklin"],
  ["The mind is not a vessel to be filled but a fire to be kindled.", "Plutarch"],
  ["Money grows on the tree of persistence.", "Japanese proverb"],
  ["If we command our wealth, we shall be rich and free. If our wealth commands us, we are poor indeed.", "Edmund Burke"],
  ["Money is a terrible master but an excellent servant.", "P. T. Barnum"],
  ["You can be young without money, but you can’t be old without it.", "Tennessee Williams"],
  ["Fortune befriends the bold.", "Emily Dickinson"],
  ["We generate fears while we sit. We overcome them by action.", "Dr. Henry Link"],
];

const quoteEl = document.getElementById("quote-text");
const creditEl = document.getElementById("quote-credit");
const nextBtn = document.getElementById("quote-next");
let current = -1;

function showQuote() {
  let next;
  do {
    next = Math.floor(Math.random() * QUOTES.length);
  } while (next === current && QUOTES.length > 1);
  current = next;
  quoteEl.textContent = "“" + QUOTES[next][0] + "”";
  creditEl.textContent = QUOTES[next][1];
}

if (quoteEl && creditEl) {
  showQuote();
  if (nextBtn) nextBtn.addEventListener("click", showQuote);
}