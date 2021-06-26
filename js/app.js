fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    // console.log(data[1]);
    document.getElementById('author').innerHTML = data[1].text;
  });