// TV Shows
fetch('https://api.tvmaze.com/shows?page=1')
.then((resp) => resp.json())
.then(function(data) {
  const text = document.querySelectorAll('.text')
  for (let i = 0; i < 1; i++) {
  data.slice(0, 15).forEach((div, i) => {
    text[i].innerHTML += ` <h2><strong>${div.name}</strong></h2>
    <p><strong>${data[i].summary}</strong></p>
    <p><strong>Genre: ${div.genres}</strong></p>
    <p><strong>Schedule: ${data[i].schedule.days} at ${data[i].schedule.time}</strong></p>
    <p><strong><a class="link" href=${div.url}>More Info</a></strong></p>
  `;
  });
}
document.body.appendChild(divElement)
})

fetch('https://api.tvmaze.com/shows?page=1')
  .then((resp) => resp.json())
  .then(function(data) {
    const image = document.querySelectorAll('.image')
    data.slice(0, 15).forEach((div, i) => {
      image[i].innerHTML += ` <img src="${div.image.medium}"/>
    `
    })
    document.body.appendChild(divElement)
  })
