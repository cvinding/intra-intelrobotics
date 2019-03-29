
$(document).ready(function(){

    populateProducts();

    function createProducts(title, bodytext, author, date, id) {

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


        let deleteproductbutton = document.createElement("button");
        deleteproductbutton.className = "delete-products btn btn-primary btn-sm";
        deleteproductbutton.type = "button";
        deleteproductbutton.innerHTML = "Slet";
        deleteproductbutton.id = "deleteproductbutton-" + id;
        deleteproductbutton.style.marginLeft = "1px";

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
        buttonrow.appendChild(deleteproductbutton);

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


    function populateProducts() {
        request("/api/info/getProducts/" + webdomain(), "GET", "", function (result) {

            const output = $("#product-output");
            output.html("");

            for (let i = 0; i < result.products.length; i++) {

                output.append(createProducts(result.products[i].title, result.products[i].description, result.products[i].updated, result.products[i].author, result.products[i].id));
            }

            $(".delete-products").on("click", clickDeleteProducts)
        });
    }

    function showProductModal() {
        $("#productsmodal").modal('show');
    }

    function clickDeleteProducts(e) {
        e.preventDefault();

        const id = $(this)[0].id;

        showProductModal();


        $("#deleteproducts-yes").attr("data-id", id.split("-")[1]);
        $("#deleteproducts-yes").on("click", clickDeleteConfirm);
    }

    function clickDeleteConfirm(e) {
        e.preventDefault();

        let productID = $(this).attr("data-id");

        request("/api/info/deleteProduct", "POST", "id=" + productID, function (result) {

            $(".delete-products").off("click", clickDeleteProducts);
            $("#deleteproducts-yes").off("click", clickDeleteConfirm);

            const uiBox =$(".UI-message");


            if (result.status){
                uiBox.html(createDismissibleMessage("success", "Gjort", "Produktet er slettet"));

            }
            if (!result.status){
                uiBox.html(createDismissibleMessage("danger", "Fejl", "Produktet er ikke blevet slettet"));
            }

            populateProducts()
        });
    }

});