 // BEST SELLING BOOKS
 fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=GfUzh1jhHRECkhKfb6YJA7MVLh72mdWQ') 
 .then((resp) => resp.json()) 
 .then(function (data) {
    const text = document.querySelectorAll(".text")
     data.results.books.slice(0, 15).forEach((div, i) => { 
     text[i].innerHTML = ` <h2>${div.title}</h2> 
     <p><strong>Ranked no. ${div.rank}</strong></p>
     <p><strong>${div.author}</strong></p>
     <p id="date"><strong>${div.description}</strong></p>
     <p><strong><a class="NYTimeslink" href=${div.amazon_product_url}>
    Buy now on Amazon</a></strong></p>` 
       }) 
     })
     fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=GfUzh1jhHRECkhKfb6YJA7MVLh72mdWQ') 
     .then((resp) => resp.json()) 
     .then(function (data) {
        const image = document.querySelectorAll(".image")
         data.results.books.slice(0, 15).forEach((div, i) => { 
         image[i].innerHTML = `
         <img src="${div.book_image}" width="238" height="359"/>
         ` 
           }) 
         })
