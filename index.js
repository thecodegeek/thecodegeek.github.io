
var newsArr = [];

async function fetchData() {
    const response = await fetch('https://saurav.tech/NewsAPI/top-headlines/category/general/in.json');
    newsArr = [];
    const myJson = await response.json();
    newsArr = myJson.articles;
    console.log(newsArr);   
    displayNews();
    return;
}

function displayNews() {

    newsdetails.innerHTML = "";

    newsArr.forEach(news => {

        var date = news.publishedAt.split("T");

        var col = document.createElement("div");
        col.className = "col p-2 card";

        var card = document.createElement("div");
        card.className = "card";

        var cardBody = document.createElement("div");
        cardBody.className = "card-body";

        var cardTitle = document.createElement("h5");
        cardTitle.className = "card-title";
        cardTitle.innerHTML = news.title;

        card.appendChild(cardTitle);
        cardBody.appendChild(card);
        newsdetails.appendChild(cardBody);
        
    })
}

fetchData();