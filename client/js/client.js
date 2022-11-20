const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
const carImg = searchWrapper.querySelector("car-img");
let webLink;
import { testCarCollection } from "../data/car-names.js";
// import suggestions from "/data/car-names.js";

// if user press any key and release
const returnCarModels = async (make) => {
  const response = await fetch(
    `https://api.api-ninjas.com/v1/cars?limit=50&make=${make}`,
    {
      method: "GET",
      headers: {
        "x-api-key": "6jcggFNiA/gEk3cyslBfBA==yUhA49i4BE2Q9oMo",
      },
    }
  );

  const cars = await response.json();
  if (cars === undefined || cars.length === 0) {
    console.log("Car does not exist: " + make);
    return 0;
  }
  const carModelArr = new Set();
  for (let car of cars) {
    carModelArr.add(make + " " + car.model);
  }
  return carModelArr;
};

console.log(suggestions);

async function fetchCarsModels(carTypes) {
  let sugg = [];
  Array.isArray(carTypes);
  var promises = [];
  for (let carName of carTypes) {
    promises.push(returnCarModels(carName));
  }
  sugg = await Promise.all(promises);

  return Object.values(sugg)
    .map((x) => Array.from(x))
    .flat(1);
}

var suggestions = await fetchCarsModels(testCarCollection);
console.log(suggestions);

inputBox.onkeyup = (e) => {
  let userData = e.target.value; //user enetered data
  let emptyArray = [];
  if (userData) {
    icon.onclick = () => {
      console.log(userData);
      webLink = `https://www.google.com/search?q=${userData}`;
      linkTag.setAttribute("href", webLink);
      linkTag.click();
    };

    emptyArray = suggestions.filter((data) => {
      return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
    });
    emptyArray = emptyArray.map((data) => {
      return (data = `<li>${data}</li>`);
    });
    searchWrapper.classList.add("active"); //show autocomplete box
    showSuggestions(emptyArray);
    let allList = suggBox.querySelectorAll("li");
    for (let i = 0; i < allList.length; i++) {
      allList[i].addEventListener("click", select);
    }
  } else {
    searchWrapper.classList.remove("active"); //hide autocomplete box
  }
};

function select(event) {
  let selectData = event.target.textContent;
  inputBox.value = selectData;
  icon.onclick = () => {
    webLink = `https://www.google.com/search?q=${selectData}`;
    linkTag.setAttribute("href", webLink);
    linkTag.click();
  };
  searchWrapper.classList.remove("active");
}

function showSuggestions(list) {
  let listData;
  if (!list.length) {
    userValue = inputBox.value;
    listData = `<li>${userValue}</li>`;
  } else {
    listData = list.join("");
  }
  suggBox.innerHTML = listData;
}
