
$(document).ready(function(){

    function createabout(bodytext) {


        let card = document.createElement("div");
        card.id = "aboutbox";

        let textbox = document.createElement("textarea");
        textbox.className = "abouttextbox form-control";
        textbox.innerText = bodytext;

        card.appendChild(textbox);

        return card;
    }


    request("/api/info/getAbout/" + webdomain(), "GET", "", function (result) {

        const output = $("#aboutbox");
        output.html("");

        output.append(createabout(result.about.description));


    })



});





