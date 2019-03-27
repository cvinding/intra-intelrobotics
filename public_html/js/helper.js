
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

        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhcGkuaW50ZWxyb2JvdGljcy5jb20iLCJzdWIiOiJVc2VyIEF1dGhvcml6YXRpb24gVG9rZW4iLCJhdWQiOiJhcGkuaW50ZWxyb2JvdGljcy5jb20iLCJleHAiOjE1NTM2OTAxMzksIm5iZiI6MTU1MzY3MjEzOSwiaWF0IjoxNTUzNjcyMTM4LCJqdGkiOjE3NDg0LCJ1aWQiOiJ0byIsInNlY3VyaXR5X2dyb3VwcyI6WyJBZG1pbmlzdHJhdGlvbl9TRyIsIklUX1NHIl19.EvVSJVFSc2XEHf3-58ycjpE64RSDQdbOk4xa9S8mdc0";
        $.ajax({
            type: method,
            headers: {"Authorization" : "Bearer " + token},
            url: webURL() + endpoint,
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


});
