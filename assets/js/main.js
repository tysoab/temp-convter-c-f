// select elements
const converterForm = document.querySelector(".converter-form");
const btnSelect = document.querySelector(".sel-opt");
const inputEl = document.querySelector(".value-el");
const result = document.querySelector("#result");

// helper
function shortDec(param) {
  const str = String(param.temp).split(".");
  if (str[1] && str[1].length >= 3) {
    return `${param.temp.toFixed(2)}${param.unit}`;
  } else {
    return `${param.temp}${param.unit}`;
  }
}

// event listener
converterForm.addEventListener("submit", (event) => {
  // prevent default behavior
  event.preventDefault();
  const opt = btnSelect.value;

  //   get the degree
  const temp = +inputEl.value;

  if (opt === "" || inputEl.value === "") {
    return;
  }

  let calc;

  switch (true) {
    //   convert celsius to fahrenheit
    case opt === "cf":
      calc = {
        temp: (temp * 9) / 5 + 32,
        unit: "<sup>o</sup>F",
      };
      break;

    // convert celsius to kelvin
    case opt === "ck":
      calc = {
        temp: temp + 273.15,
        unit: "K",
      };
      break;

    // convert fahrenheit to celsius
    case opt === "fc":
      calc = {
        temp: (temp - 32) * (5 / 9),
        unit: "<sup>o</sup>C",
      };
      break;

    // convert fahrenheit to kelvin
    case opt === "fk":
      calc = {
        temp: (temp - 32) * (5 / 9) + 273.15,
        unit: "K",
      };
      break;

    // convert kelvin to celsius
    case opt === "kc":
      calc = {
        temp: temp - 273.15,
        unit: "<sup>o</sup>C",
      };
      break;

    // convert kelvin to fahrenheit
    case opt === "kf":
      calc = {
        temp: (temp - 273.15) * (9 / 5) + 32,
        unit: "<sup>o</sup>F",
      };
      break;
  }

  result.innerHTML = shortDec(calc);
});
