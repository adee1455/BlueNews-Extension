
apikey = '24fee0144e4860040a4f5f4182579f5b';
url = 'https://gnews.io/api/v4/search?q=example&lang=en&country=in&min=10&max=30&apikey=' + apikey;

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    articles = data.articles;

    let articlesHTML = ''; // Initialize an empty string to store HTML content
    let articlesLink = '';

    for (i = 0; i < articles.length; i++) {
        articlesHTML += '<li id="newsElement" ><a id="newsLink" href="' + articles[i]['url'] + '" target="_blank">' + articles[i]['title'] + '</a></li>'; // Create a link for each article's title      
    }

    document.getElementById("news").innerHTML = articlesHTML; // Set the entire HTML string as content
   
  });
