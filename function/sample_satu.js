// create functions
// // functional programing --> specific untuk 1 tugas dari function tersebut
// const perkalian = (a, b) => {
//   const c = a * b;
//   return c;
// };

// function pembagian(d, e) {
//   const f = d / e;
//   return f;
// }

// const penjumlahan = (g, h) => {
//   const i = g + h;
//   return i;
// };

// const penjumlahan = (x, y) => x + y;
// jika 1 line maka bisa di dimplified dengan menggunakan cara di line 18 fat arrow juga berfungsi untuk mereturn

// // Call the function
// console.log(perkalian(4, 5));
// const hasil_pembagian = pembagian(20, 10);
// console.log(hasil_pembagian);

// const hasil_penjumlahan = penjumlahan(2, 3);
// console.log(hasil_penjumlahan);

const angkaSatu = 8;
const angkaDua = 16;
//1. create function perkalian, pembagian, penjumlahan, pengurangan
//2. hasil_perkalian dibawa untuk pembagian
//3. hasil_pembagian dibawa untuk penjumlahan
//perkalian, pembagian, penjumlahan
//5,2

const pengurangan = (j, k) => {
  const l = j - k;
  return l;
};

const perkalian = (a, b) => {
  const c = a * b;
  return c;
};

const pembagian = (e, f) => {
  const g = e / f;
  return g;
};

const penjumlahan = (h, i) => {
  const j = h + i;
  return j;
};

const hasil_perkalian = perkalian (angkaSatu, angkaDua)
const hasil_pembagian = pembagian(hasil_perkalian, 5);
const hasil_penjumlahan = penjumlahan(hasil_pembagian, 2);
console.log(hasil_penjumlahan);
