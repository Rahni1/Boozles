        //  MOVIES
        fetch('https://api.nytimes.com/svc/movies/v2/reviews/search.json?&api-key=wNlQwTPHXugb4lbLIub3epBGksr6nXA9') 
        .then((resp) => resp.json()) 
        .then(function (data) {
           const text = document.querySelectorAll(".text")
            data.results.slice(0, 15).forEach((div, i) => { 
            text[i].innerHTML = ` <h2>${div.display_title}</h2> 
            <p><strong>${div.summary_short}</strong></p>
            <p><strong>${div.mpaa_rating}</strong></p>
            <p id="date"><strong>${div.publication_date}</strong></p>
            <p><strong><a class="NYTimeslink" href=${div.link.url}>
            ${div.link.suggested_link_text}</a></strong></p>` 
              }) 
            })
            fetch('https://api.nytimes.com/svc/movies/v2/reviews/search.json?&api-key=wNlQwTPHXugb4lbLIub3epBGksr6nXA9') 
        .then((resp) => resp.json()) 
        .then(function (data) {
           const image = document.querySelectorAll(".image")
            data.results.slice(0, 15).forEach((div, i) => { 
            image[i].innerHTML = `
            <img src="${div.multimedia.src}" width="255" height="190"/>
            ` 
              }) 
            })
        