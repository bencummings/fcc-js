"use strict";

const telephoneCheck = s => {
  const pattern = /^1?[- ]?(\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$/;
  return pattern.test(s);
};

telephoneCheck("555-555-5555");