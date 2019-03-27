
$(document).ready(function () {


    $("#add-products").click(function (e) {
        e.preventDefault();

        const form = $($(this).parent("form"));

        const uiBox = $(form.children(".ui-message"));

        if(!checkRequired(form, "Vigtigt","Skriv lige i felterne", uiBox)) {

            request("/api/info/createProduct", "POST", form.serialize() + "&webDomain=" + webdomain(), function (callback) {

                uiBox.html(createDismissibleMessage("success", "Produktet er gemt", "Du gjorde det"))

                form[0].reset();
            })

        }

    });

});