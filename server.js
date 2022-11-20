var http = require("http");
var path = require("path");

var express = require("express");
const { appendFile } = require("fs");

var router = express();
var server = http.createServer(router);

router.use(express.static(path.resolve(__dirname, "client")));

console.log("Booting up the server! Please wait until finished...");
server.listen(
  process.env.PORT || 3000,
  process.env.IP || "0.0.0.0",
  function () {
    var addr = server.address();
    console.log(
      "All ready! Server listening at",
      addr.address + ":" + addr.port
    );
  }
);


// const returnCarModels = async (make) => {
//   const response = await fetch(
//     `https://api.api-ninjas.com/v1/cars?limit=20&make=${make}`,
//     {
//       method: "GET",
//       headers: {
//         "x-api-key": "6jcggFNiA/gEk3cyslBfBA==yUhA49i4BE2Q9oMo",
//       },
//     }
//   );
//   const cars = await response.json();
//   if (cars === undefined || cars.length === 0) {
//     console.log("Car does not exist: " + make);
//     return 0;
//   }
//   const carModelArr = new Set();
//   for (let car of cars) {
//     carModelArr.add(make + " " + car.model);
//   }
//   return carModelArr;
// };

// module.exports = async function fetchCarsModels(carTypes) {
//   let suggestions = [];
//   Array.isArray(carTypes);
//   for (let carName of carTypes) {
//     let response = await returnCarModels(carName);
//     if (response != 0) {
//       for (let res of response) {
//         suggestions.push(res);
//       }
//     }
//   }
//   console.log(suggestions);
//   return suggestions;
// }


// var suggestions;
// fetchCarsModels(testCarCollection)
//   .then((result) => (suggestions = result))
//   .then((suggestions) => console.log(suggestions));

// module.exports = suggestions;
