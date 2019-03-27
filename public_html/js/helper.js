
$(document).ready(function () {


    webdomain = function(){
        return "DK";
    }

    webURL= function () {
        return "http://intra.intelrobotics.local";
    };

    apiURL = function () {
        return "http://api.intelrobotics.local";
    };

    getCookie = function(cookieName) {
        const name = cookieName + "=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    //Request to API
    request= function (endpoint, method, data, callback) {

        const token = getCookie("token");
        console.log(token);
        $.ajax({
            type: method,
            headers: {"Authorization" : "Bearer " + token},
            url: apiURL() + endpoint,
            data: data,
            success: function (result) {
                callback(result)
            },
            error: function (result) {
                console.log(result);
            }
        })
    }


    /**
     * createDismissibleMessage() is used for creating a dismissible bootstrap message
     * @param type
     * @param strongMsg
     * @param message
     * @returns {HTMLElement}
     */
    createDismissibleMessage = function (type, strongMsg, message) {
        // Create the strong part of the message
        let strong = document.createElement("strong");
        strong.append(strongMsg);

        // Create the span part of the message
        let span = document.createElement("span");
        span.setAttribute("aria-hidden", true);
        span.innerHTML = "&times;";

        // Create the button part of the message
        let button = document.createElement("button");
        button.type = "button";
        button.className = "close";
        button.setAttribute("data-dismiss", "alert");
        button.setAttribute("aria-label","Close");
        button.append(span);

        // Create the div part of the message
        let div = document.createElement("div");
        div.className = "alert alert-" + type + " alert-dismissible fade show";
        div.role = "alert";
        div.append(button);
        div.append(strong);
        div.append(" " + message + "\n");

        // Return all elements appended to the div
        return div;
    };


    $("#mainnavbar> nav > ul > li > a").each(function (e, t) {

        if (t.href === window.location.href){
            $($(this).closest("li")).addClass("active");
        }
    })


    checkRequired = function(form, title, msg, msgOut){
        var formChildren = form.find(':input');
        var toReturn = 0;
        $("label").removeClass("required-field");
        for(var i = 0; i < formChildren.length; i++){
            if(formChildren[i].getAttribute("required") != null){
                var input = $("#" + formChildren[i].id).val();
                if(!checkField(input)){
                    $('label[for='+  formChildren[i].id  +']').addClass("required-field");
                    msgOut.html(createDismissibleMessage("danger",title,msg));
                    // return false;
                    toReturn++;
                }
            }
        }
        return (toReturn > 0);
    };

    function checkField(input) {
        return (input !== undefined && input !== null && input !== '');
    }

});
