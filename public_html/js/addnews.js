$(document).ready(function () {


    $("#add-news").click(function (e) {
        e.preventDefault();

        const form = $($(this).parent("form"));

        const uiBox = $(form.children(".ui-message"));

        if(!checkRequired(form, "Vigtigt","Skriv lige i felterne", uiBox)) {

            request("/api/info/createNews", "POST", form.serialize() + "&webDomain=" + webdomain(), function (callback) {

                uiBox.html(createDismissibleMessage("success", "Tilløk", "Du gjorde det"))
                
            })


        }



        /**/

    });



});