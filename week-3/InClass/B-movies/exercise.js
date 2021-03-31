/*
================
You are given the following list of movies

Task 1
Create a function called "showMovies" that
- iterates through the "movies" array and
- for each movie, it creates a <p> element with 
  the movie title and director and append it to the #all-movies div.
- it sets the innerText of the #movies-number element to
  the total number of the movies in the array "movies"

Task 2
Amend your function above to only show movies after 1 second. Remember to use setTimeout to achieve that
Create a new function called "addMovie"
- it receives a movie object as an argument - your can create a new object for your favorite movie following using the "myMovies" objects as a guide 
- it adds the new movie to the list of movies after 2 seconds. Remember to setTimeout to achieve that
Call addMovies to add the new movie to the list and then showMovies to see the movies added on the screen.
How many movies can you see on your page?

Task 3
Can you make sure the new movie you just added is showing on the screen? 
TIP: use callbacks

Task 4
Create a form anywhere on your page. The form should have
- 4 input text fields, one for each property of your movie object
- a "save" button.
When the button is clicked
- The field values should be used to create a new movie object literal
- The new movie is then added to the list of movies and gets displayed on your page
TIP: Use the functions you created on tasks 1-3

================
*/
var movies = [
  {
    title: "Color Out of Space",
    director: "Richard Stanley",
    type: "sci-fi",
    haveWatched: true,
  },
  {
    title: "A Twelve-Year Night",
    director: "Álvaro Brechner",
    type: "horror",
    haveWatched: false,
  },
  {
    title: "The Whistlers",
    director: "Corneliu Porumboiu",
    type: "comedy",
    haveWatched: true,
  },
  {
    title: "The Invisible Man",
    director: "Leigh Whannell",
    type: "horror",
    haveWatched: false,
  },
];

// create showMovies function
function showMovies() {
  const allMoviesDiv = document.getElementById('all-movies')

  // Limpiar los <p> que habian antes
  document.querySelectorAll(`#all-movies p:not(.alert)`).forEach(
    element => element.remove()
  )

  movies.forEach(movie => {
    const description = `${movie.title} - ${movie.director}`
    const paragraph = document.createElement('p')
    paragraph.append(description)

    allMoviesDiv.appendChild(paragraph)
  })

  const moviesNumberElement = document.querySelector(`#movies-number`)
  moviesNumberElement.innerText = movies.length
}

setTimeout(() => showMovies(), 1000)

// create a new movie object for your favorite movie
const newMovie = {
  title: "Avengers",
  director: "John Willow",
  type: "action",
  haveWatched: true,
}

// create addMovies function
function addMovie(movie) {
  setTimeout(() => {
    movies.push(movie)
    showMovies()
  }, 2000)
}
addMovie(newMovie)

// Task 3
// Can you make sure the new movie you just added is showing on the screen? 
// TIP: use callbacks

// Task 4
const submitButton = document.getElementById('submitButton')
submitButton.addEventListener('click', event => {
  event.preventDefault()
  const titleTextField = document.getElementById('titleTextField')
  const directorTextField = document.getElementById('directorTextField')
  const typeTextField = document.getElementById('typeTextField')
  const haveWatchedTextField = document.getElementById('haveWatchedTextField')
  const movie = {
    title: titleTextField.value,
    director: directorTextField.value,
    type: typeTextField.value,
    haveWatched: haveWatchedTextField.value
  }

  addMovie(movie)
})

