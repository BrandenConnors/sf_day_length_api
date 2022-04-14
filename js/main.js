//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://api.sunrise-sunset.org/json?lat=37.773972&lng=-122.431297&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        console.log(data.results.sunrise)
        // if (data.media_type === "image"){
        //   document.querySelector('img').src = data.hdurl
        // }
        // else if (data.media_type === 'video'){
        //   document.querySelector('iframe').src = data.url
        // }
        document.querySelector ('.span1').innerText = data.results.sunrise
        document.querySelector ('.span2').innerText = data.results.sunset
        document.querySelector ('.span3').innerText = data.results.day_length
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

