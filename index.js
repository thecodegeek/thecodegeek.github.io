
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

        var placeholder = document.createElement("div");
        placeholder.className = "col-9";

        var content = document.createElement("div");
        content.className = "col-3";

        var card = document.createElement("div");
        card.className = "card mb-3";
        

        var cardBody = document.createElement("div");
        cardBody.className = "card-body";

        var cardTitle = document.createElement("h5");
        cardTitle.className = "card-title";
        cardTitle.innerHTML = news.title;

        card.appendChild(cardTitle);
        cardBody.appendChild(card);
        content.appendChild(cardBody);
        newsdetails.appendChild(placeholder);
        newsdetails.appendChild(content);
        
        
    })
}

fetchData();