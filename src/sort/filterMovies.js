function filterMovies(movies, limit) {
    let res = []
    let counter = {}
    movies.forEach(({title, genre}) => {
        counter[genre] ??= 0
        counter[genre] += 1
        console.log(counter)
        if (counter[genre] <= limit) {
            res.push(title)
        }
    })
    return res
}

const movies = [
    {
      "title": "The Godfather",
      "genre": "Drama"
    },
    {
      "title": "Dilwale Dulhania Le Jayenge",
      "genre": "Comedy"
    },
    {
      "title": "The Shawshank Redemption",
      "genre": "Drama"
    },
    {
      "title": "Impossible Things",
      "genre": "Family"
    },
    {
      "title": "The Godfather Part II",
      "genre": "Drama"
    },
    {
      "title": "Schindler's List",
      "genre": "Drama"
    },
    {
      "title": "Life Is Beautiful",
      "genre": "Comedy"
    },
  ];
  
/*   console.log(filterMovies(movies, 1));
  const output1 = [
    'The Godfather',                // ← Drama #1
    'Dilwale Dulhania Le Jayenge',  // ← Comedy #1
    'Impossible Things',            // ← Family #1
  ];

  console.log(filterMovies(movies, 2));
const output2 = [
  'The Godfather',                // ← Drama #1
  'Dilwale Dulhania Le Jayenge',  // ← Comedy #1
  'The Shawshank Redemption',     // ← Drama #2
  'Impossible Things',            // ← Family #1
  'Life Is Beautiful',            // ← Comedy #2
]; */

console.log(filterMovies(movies, 3));
const output3 = [
  'The Godfather',                // ← Drama #1
  'Dilwale Dulhania Le Jayenge',  // ← Comedy #1
  'The Shawshank Redemption',     // ← Drama #2
  'Impossible Things',            // ← Family #1
  'The Godfather Part II',        // ← Drama #3
  'Life Is Beautiful',            // ← Comedy #2
];