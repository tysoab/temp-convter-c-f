// select elements
const converterForm = document.querySelector(".converter-form");
const btnSelect = document.querySelector(".sel-opt");
const degValue = document.querySelector(".value-el");
const result = document.querySelector("#result");

// helper
function shortDec(num) {
  const str = String(num).split(".");
  if (str[1] && str[1].length >= 3) {
    return num.toFixed(2);
  } else {
    return num;
  }
}

// event listener
converterForm.addEventListener("submit", (event) => {
  // prevent default behavior
  event.preventDefault();
  const opt = btnSelect.value;

  //   get the degree
  let deg = degValue.value;

  //   convert string to number
  deg = Number(deg);

  if (opt === "") {
    return;
  }

  //   convert celsius to fahrenheit
  if (opt === "c") {
    // (0°C × 9/5) + 32

    const calc = (deg * 9) / 5 + 32;

    result.innerHTML = shortDec(calc) + "<sup>o</sup>F";
  }

  //   convert fahrenheit to celsius
  if (opt === "f") {
    // (32°F − 32) × 5/9
    const calc = ((deg - 32) * 5) / 9;

    result.innerHTML = shortDec(calc) + "<sup>o</sup>C";
  }
});
