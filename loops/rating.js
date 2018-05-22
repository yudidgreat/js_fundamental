const movie = {
  title: "Shrek4",
  duration: "1H 30m",
  category: "Animaiton,Comedy",
  rating: 20
};

//for-loop
let stars ="";
for(let w = 0; w < movie.rating;w++){
    stars += "*";
}
console.log(stars);