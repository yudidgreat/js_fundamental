// looping or iteration or perulangan

const cars = ["Toyota", "Mitsubishi", "Honda", "Mitsubishi", "Honda"];

// map
// cars.map((dataMobil, index) => {
//   const nama = "Yudi";
//   const dataHasil = `${dataMobil} is ${nama}'S Car`;
//   const dataHasilBeda = dataMobil + "is" + nama + " Car ";
//   console.log(dataHasil);
//   console.log(dataHasilBeda);
// });
// Cara di const dataHasil dan dataHasilBeda akan menghasilakn result yang sama

// for-loop
// for (let a = 0; a < cars.length; a++) {
//   console.log(`${cars[a]} is a great car!`);
// }

const carsInfo = [
  {
    brand: "Suzuki",
    type: "Ertiga",
    year: 2017,
    category: "MPV"
  },
  {
    brand: "Mitsubishi",
    type: "Mirage",
    year: 2015,
    category: "Small Hatchback"
  },
  {
    brand: "Honda",
    type: "Jazz",
    year: 2012,
    category: "Hatchback"
  },
  {
    brand: "Toyota",
    type: "Yaris",
    year: 2014,
    category: "Harchback"
  },
  {
    brand: "Hoda",
    type: "Civic",
    year: 2018,
    category: "Sedan"
  }
];

// //map
// carsInfo.map((mobils, index) => {
//   console.log(`${mobils.category}`);
// });

// for-loop

for (let a =0; a <carsInfo.length; a++) {
    console.log (`${carsInfo[a].category}`);
}
