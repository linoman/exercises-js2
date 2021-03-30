/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 * 
 * 
 */
 let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" }
];
exerciseOne(people)





function exerciseOne(arrayOfPeople) {
  
  let content = document.querySelector("#content");

 
arrayOfPeople.map(people => {
  let nameHead = document.createElement("h1");
  let nameJob = document.createElement("h2");

  content.appendChild(nameHead);
  content.appendChild(nameJob);

  nameHead.innerText = people.name
  nameJob.innerText = people.job

})
}





/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 * 
 *
 */

 let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

 exerciseTwo(shopping);


function exerciseTwo(shopping) {
  let content = document.querySelector("#content");
  const listUl = document.createElement("ul")
   listUl.innerText = "Supermercado";
   listUl.style.fontStyle ="cursive"
   listUl.style.fontSize = 20 
   content.appendChild(listUl)
 shopping.map(producto => {
   let items= document.createElement("li")
   listUl.appendChild(items)
   items.innerText = producto
 })
}

/**
    I'd like to display my three favorite books inside a nice webpage!

    const books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true
        }
    ];

    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).

    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/
function exerciseThree(books) {
  let content = document.querySelector("#content")
  let ulLista = document.createElement("ul")
  content.appendChild(ulLista)

  let img1 = '/img/telechager1.jpg';
  let img2 = "/img/telecharger2.jpg";
  let img3 = "/img/telecharger3.jpg";
  let imgs = [img1,img2,img3]

  books.forEach((book,index) => {
    // Objetos declarado
    let parafo = document.createElement("p");
    let listPara = document.createElement("li");
    let img = document.createElement("img")
    // valores
    parafo.textContent =` titulo es: ${ book.title} - author es: ${ book.title}`;
    img.src= imgs[index] ;
    // append
    ulLista.appendChild(listPara);
    listPara.appendChild(parafo);
    listPara.appendChild(img);


  });


 
}

//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//





const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

exerciseThree(books);
