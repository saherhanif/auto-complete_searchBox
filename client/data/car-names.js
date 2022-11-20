export const testCarCollection = [
  "Alfa Romeo",
  "Aston Martin",
  "Audi",
  "Bentley",
  "BMW",
  "Bugatti",
  "Cadillac",
  "Chevrolet",
  "Chrysler",
  "Dacia",
  "Daewoo",
  "Daihatsu",
  "Dodge",
  "Ferrari",
  "Fiat",
  "Fisker",
  "Ford",
  "Honda",
  "Hummer",
  "Hyundai",
  "Infiniti",
  "Jaguar",
  "Jeep",
  "Kia",
  "Lamborghini",
  "Land Rover",
  "Lexus",
  "Lotus",
  "Maserati",
  "Maybach",
  "Mazda",
  "Mercedes-Benz",
  "Mini",
  "Mitsubishi",
  "Morgan",
  "Nissan",
  "Peugeot",
  "Porsche",
  "Renault",
  "Rolls-Royce",
  "Saab",
  "Smart",
  "Subaru",
  "Suzuki",
  "Tesla",
  "Toyota",
  "Volkswagen",
  "Volvo",
];
// module.exports = testCarCollection;
// const testCarCollection = [
//   'Audi',
//   'BMW',
//   'Toyota',
//   'Ferrari',
//   'samer'
// ]

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

// async function fetchCarsModels(carTypes) {
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

// var suggestions = fetchCarsModels(testCarCollection);
// module.exports = suggestions;
