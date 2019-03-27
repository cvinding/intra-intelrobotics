
$(document).ready(function(){

    function createEditNews(title, bodytext, author, date, id) {

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
        deletebutton.className = "delete-news btn btn-primary btn-sm";
        deletebutton.type = "button";
        deletebutton.innerHTML = "Slet";
        deletebutton.id = "deletebutton-" + id;
        deletebutton.style.marginLeft = "1px";
/*
        let editbutton = document.createElement("button");
        editbutton.className = "btn btn-primary btn-sm";
        editbutton.type = "button";
        editbutton.innerHTML = "Rediger";
        editbutton.id = "edit";
*/
        let buttonrow = document.createElement("div");
        buttonrow.className = "row container";

        //buttonrow.appendChild(editbutton);
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

        for (let i = 0; i<result.news["internal"].length; i++){

            output.append(createEditNews(result.news["internal"][i].title, result.news["internal"][i].description, result.news["internal"][i].updated, result.news["internal"][i].author, result.news["internal"][i].id));
        }

        for (let i = 0; i<result.news["external"].length; i++){

            output.append(createEditNews(result.news["external"][i].title, result.news["external"][i].description, result.news["external"][i].updated, result.news["external"][i].author, result.news["external"][i].id));
        }

        setOnClickEvent();
    });

    function showModal() {

        $("#newsmodal").modal('show');

    }

    function setOnClickEvent() {
        $(".delete-news").click(function (e) {
            e.preventDefault();

            const id = $(this)[0].id;

            console.log(id);

            $(".delete-news").on("click", showModal);

            $(".delete-yes").click(function (e) {
                e.preventDefault();

                const id = $(this)[0].id;
                id.split("-")[1];

                request("/api/info/deleteNews", "POST", "id=" + id, function (result) {


                });

            });
        });
    }

});