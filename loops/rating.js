const movie = {
  title: "Shrek4",
  duration: "1H 30m",
  category: "Animaiton,Comedy",
  rating: 4
};

//for-loop
let stars = "";
for (let w = 0; w < 5; w++) {
  if (w < movie.rating) {
    stars += "*";
  } else {
    stars += "O";
  }
}
console.log(stars);
