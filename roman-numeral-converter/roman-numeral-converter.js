"use strict";

const convertToRoman = n => {

  const romanNumerals = [
    {
      "number": 1000,
      "symbol": "M"
    },
    {
      "number": 900,
      "symbol": "CM"
    },
    {
      "number": 500,
      "symbol": "D"
    },
    {
      "number": 400,
      "symbol": "CD"
    },
    {
      "number": 100,
      "symbol": "C"
    },
    {
      "number": 90,
      "symbol": "XC"
    },
    {
      "number": 50,
      "symbol": "L"
    },
    {
      "number": 40,
      "symbol": "XL"
    },
    {
      "number": 10,
      "symbol": "X"
    },
    {
      "number": 9,
      "symbol": "IX"
    },
    {
      "number": 5,
      "symbol": "V"
    },
    {
      "number": 4,
      "symbol": "IV"
    },
    {
      "number": 1,
      "symbol": "I"
    }
  ];

  let letters = "";

  for (let i = 0, j = romanNumerals.length; i < j; i++) {
    const number = romanNumerals[i].number;
    const symbol = romanNumerals[i].symbol;
    while (n >= number) {
      letters += symbol;
      n -= number;
    }
  }

  return letters;

};

convertToRoman(36);