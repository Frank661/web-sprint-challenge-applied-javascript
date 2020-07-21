// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
// .cards-container
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.


const cardCont = document.querySelector('.cards-container')
const articleURL = 'https://lambda-times-backend.herokuapp.com/articles'

axios.get(articleURL)
    .then((response) => {
    const articlesOne = response.data.articles
    for(let names in articlesOne){
        articlesOne[names].forEach(element => {
            cardCont.append(articles(element))
        });
    }
    })



function articles(obj){
    const divOne = document.createElement('div')
    const divTwo = document.createElement('div')
    const divThree = document.createElement('div')
    const divFour = document.createElement('div')
    const imgOne = document.createElement('img')
    const spanOne = document.createElement('span')

    divOne.className = "card"
    divTwo.className = "headline"
    divThree.className = "author"
    divFour.className = "img-container"

    divTwo.textContent = obj.headline
    imgOne.src = obj.authorPhoto
    
    spanOne.textContent = obj.authorName

  

    divOne.append(divTwo,divThree)
    divThree.append(divFour)
    divFour.append(imgOne)
    divThree.append(spanOne)

    
    divTwo.addEventListener("click", () =>{
        console.log(obj.headline)
        alert(obj.headline)
    })

    return divOne

}




