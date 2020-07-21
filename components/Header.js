// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    const firstDiv = document.createElement('div')
    const firstSpan = document.createElement('span')
    const thisH1 = document.createElement('h1')
    const secSpan = document.createElement('span')

    firstDiv.className = "header"
    firstSpan.className = "date"
    secSpan.className = "temp"

    firstSpan.textContent = "March 28, 2020"
    thisH1.textContent = "Lambda Times"
    secSpan.textContent = "98°"
    
    firstDiv.append(firstSpan,thisH1,secSpan)
    

    return firstDiv

}
let appendhead = document.querySelector('.header-container');
let headerFunc = Header();
appendhead.appendChild(headerFunc)


console.log(headerFunc);