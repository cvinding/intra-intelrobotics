
$(document).ready(function(){

    function createabout(bodytext) {


        let card = document.createElement("div");
        card.id = "aboutbox";

        let textbox = document.createElement("textarea");
        textbox.className = "abouttextbox form-control";
        textbox.innerText = bodytext;


     /*   let buttonrow = document.createElement("div");
        buttonrow.className = "row buttonrow";
*//*
        let editbutton = document.createElement("button");
        editbutton.className = "btn btn-primary btn-sm";
        editbutton.type = "button";
        editbutton.innerHTML = Rediger;
*//*
        let savebutton = document.createElement("button");
        savebutton.className = "btn btn-primary btn-sm";
        savebutton.type = "button";
        savebutton.innerHTML = Rediger;
*//*
        buttonrow.appendChild(editbutton);
        buttonrow.appendChild(savebutton);
*/
        //card.appendChild(editbutton);
        //card.appendChild(savebutton);

        card.appendChild(textbox);
        //card.appendChild(savebutton);

        return card;
    }

    /*
    * <div id="aboutbox">
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" style="margin-top: 100px; min-height: 350px"></textarea>

                <div class="row" style="margin-top: 1px; float: right">
                    <button type="button" class="btn btn-primary btn-sm">Rediger</button>
                    <button type="button" class="btn btn-primary btn-sm" style="margin-left: 1px">Gem</button>
                </div>
            </div>
    *
    * */

    request("api/info/getAbout/" + webdomain(), "GET", "", function (result) {

        const output = $("#aboutbox");
        output.html("");

        output.append(createabout(result.about.description));


    })



});





