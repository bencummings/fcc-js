"use strict";

const rot13 = s => {

  const min = "A".charCodeAt(0);
  const max = "Z".charCodeAt(0);
  let decoded = "";

  for (let i = 0, j = s.length; i < j; i++) {
    const current = s.charCodeAt(i);
    if (current >= min && current <= max) {
      if (current - 13 < min) {
        decoded += String.fromCharCode(current - 13 + 26);
      } else {
        decoded += String.fromCharCode(current - 13);
      }
    } else {
      decoded += s[i];
    }
  }

  return decoded;

};

rot13("SERR PBQR PNZC");