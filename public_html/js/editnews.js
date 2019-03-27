
$(document).ready(function(){

    function createEditNews(title, bodytext, author, date) {

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

        let deletebutton = document.createElement("button");
        deletebutton.className = "btn btn-primary btn-sm";
        deletebutton.type = "button";
        deletebutton.innerHTML = "Slet";
        deletebutton.id = "delete";
        deletebutton.style.marginLeft = "1px";

        let editbutton = document.createElement("button");
        editbutton.className = "btn btn-primary btn-sm";
        editbutton.type = "button";
        editbutton.innerHTML = "Rediger";
        editbutton.id = "edit";

        let buttonrow = document.createElement("div");
        buttonrow.className = "row container";

        buttonrow.appendChild(editbutton);
        buttonrow.appendChild(deletebutton);


        cardbody.appendChild(cardtitle);
        cardbody.appendChild(cardtext);
        cardbody.appendChild(newrow);
        cardbody.appendChild(timebound);
        cardbody.appendChild(authorbound);


        let card = document.createElement("div");
        card.className = "card newsbox";

        card.appendChild(cardbody);
        card.appendChild(buttonrow);

        return card;
    }

    request("/api/info/getNews/50/300/" + webdomain(), "GET", "", function (result) {

        const output = $("#editnews-output");
        output.html("");
        console.log(result);

        for (let i = 0; i<result.news["internal"].length; i++){

            output.append(createEditNews(result.news["internal"][i].title, result.news["internal"][i].description, result.news["internal"][i].updated, result.news["internal"][i].author));
        }

        for (let i = 0; i<result.news["external"].length; i++){

            output.append(createEditNews(result.news["external"][i].title, result.news["external"][i].description, result.news["external"][i].updated, result.news["external"][i].author));
        }
    })



});