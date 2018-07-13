"use strict";

const palindrome = s => {
  const sanitised = s.match(/[a-z0-9]/gi).join("").toLowerCase();
  for (let i = 0, j = (sanitised.length - 1), k = j / 2; i <= k; i++) {
    if (sanitised[i] !== sanitised[j - i])
      return false;
  }
  return true;
};

palindrome("eye");