//Weather api key and call

function search(event) {
  const apiKey = "8a92b213be2f2795d755864e0cfa1f5b";
  const cityName = document.querySelector("#localInput").value;
  const apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
  
  fetch(apiCall).then((res) => {
    const jsonP = res.json();
    jsonP.then((data) => {
      console.log(data)
      const temperature = Math.trunc(data.main.temp) - 273;
      const description = data.weather[0].description;

      document.getElementById('results'
      ).innerHTML = `<p> The temperature of ${cityName} is ${temperature} and the cloud description is ${description} </p>`
    document.querySelector('#localInput').value = '';
    })
  }).catch((err) => {
    console.log(err)
  });

  event.preventDefault();
}


document.querySelector("#BTN").addEventListener("click", (event) => {
  search(event);
});
// fetch(apiCall).then((reponse) =>{
//   return reponse.json();
// }).then((data) => {
//   console.log(data.weather)
//   document.querySelector('p').textContent = `The speed of the wind s ${data.wind.speed}`;
// })
