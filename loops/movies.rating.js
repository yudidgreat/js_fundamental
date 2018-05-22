const moviesData = [
  {
    title: "Shrek4",
    duration: "1H 30m",
    category: "Animaiton,Comedy",
    rating: 4
  },
  {
    title: "BlackPanther",
    duration: "45m",
    category: "Superhero",
    rating: 5
  },
  {
    title: "Bourne-Ultimatum",
    duration: "1H 10m",
    category: "",
    rating: 3
  },
  {
    title: "Avenger - Infinity Wars II",
    duration: "2H 30m",
    category: "Superhero",
    rating: 4
  },
  {
    title: "Fast and Furious 5",
    duration: "1H 30m",
    category: "Action",
    rating: 2
  }
];

//for loop hasil yang dinginkan --> title *** for all movie

moviesData.map((data, idx) => {
  const title_movie = data.title;
  const rating_movie = data.rating;
  let stars = "";
  for (let a = 0; a < rating_movie; a++) {
    stars += " * ";
  }
  console.log(`${title_movie}  ${stars}`);
});
