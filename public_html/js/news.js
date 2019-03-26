
$(document).ready(function(){

    function createNews(title, bodytext, author, date) {

        let cardtitle = document.createElement("h4");
        cardtitle.className = "card-title";
        cardtitle.innerHTML = title;

        let cardtext = document.createElement("p");
        cardtext.className = "card-text";
        cardtext.innerText = bodytext;

        let newrow = document.createElement("div");
        newrow.className = "row rownews";

        let timebound = document.createElement("span");
        timebound.className = "spanright";
        timebound.innerText = date;



        let authorbound = document.createElement("span");
        authorbound.className= "spanleft";
        authorbound.innerText = author;


        let cardbody = document.createElement("div");
        cardbody.className = "card-body";


        cardbody.appendChild(cardtitle);
        cardbody.appendChild(cardtext);
        cardbody.appendChild(newrow);
        cardbody.appendChild(timebound);
        cardbody.appendChild(authorbound);


        let card = document.createElement("div");
        card.className = "card newsbox";

        card.appendChild(cardbody);

        return card;
    }

    request("api/info/getExtNews/20/300/3/" + webdomain(), "GET", "", function (result) {

        const output = $("#news-output");
        output.html("");

        for (let i = 0; i<result.news.length; i++){

            output.append(createNews(result.news[i].title, result.news[i].description, result.news[i].updated, result.news[i].author));
        }


    })



});