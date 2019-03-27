$(document).ready(function () {


    $("#add-news").click(function (e) {
        e.preventDefault();

        const form = $($(this).parent("form"));

        const uiBox = $(form.children(".ui-message"));

        $.ajax({
            type: "POST",
            url: apiURL() + "/api/info/createNews",
            data: form.serialize(),
            success: function(result){

                });
            },
            error: function (result) {
                console.log(result);
            }
        });
    });



}