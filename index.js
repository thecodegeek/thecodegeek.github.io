
var newsArr = [];


async function fetchData() {
    const response = await fetch('https://github.win11react.com/api-cache/news.json');
    newsArr = [];
    const myJson = await response.json();
    newsArr = myJson.articles;
    console.log(newsArr[0]);   
    displayNews();
    return;
}

function displayNews() {

    newsdetails.innerHTML = "";

    newsArr.slice(-5).forEach(news => {

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

        var dateInfo = document.createElement("p");
        dateInfo.className = "card-text text-muted";
        dateInfo.innerHTML = date[1];

        var link = document.createElement("a");
        link.href = news.url;
        link.className = "btn btn-sm btn-primary";
        link.innerHTML = "Read full Article";

        var cardText = document.createElement("p");
        cardText.className = "card-text";
        cardText.innerHTML = news.description;

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(link);
        cardBody.appendChild(dateInfo);
        card.appendChild(cardBody);
        content.appendChild(card);
        newsdetails.appendChild(placeholder);
        newsdetails.appendChild(content);
        
        
    })
}

fetchData();