$(document).ready(function () {


    webdomain = function () {
        return "DK";
    }

    webURL = function () {
        return "http://intra.intelrobotics.local";
    };

    apiURL = function () {
        return "http://api.intelrobotics.local";
    };

    function clearContents() {
        element.value = '';
    }

    $("#searchbutton").click(function (e) {
        e.preventDefault();

        const form = $($(this).parent("form"));


        request("/api/user/searchUserList/", "POST", form.serialize() + "&webDomain=" + webdomain(), function (result) {


            document.getElementById("users-textbox").innerHTML = "";

            for (let i = 0; i < result.search_result.length; i++) {

                let span = document.createElement("span");

                span.innerHTML = "Fuldenavn : " + result.search_result[i].fullname + "<br>" + "Cpr-nr : " + result.search_result[i].social_security_number + "<br>" + "Land : " + result.search_result[i].country + "<br>" + "Afdeling : " + result.search_result[i].department;

                let hr = document.createElement("hr");


                document.getElementById("users-textbox").appendChild(span);

                document.getElementById("users-textbox").appendChild(hr);
            }
        })


    });

});