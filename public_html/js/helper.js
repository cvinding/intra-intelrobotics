
$(document).ready(function () {


    webdomain = function(){
        return "DK";
    }

    weburl= function () {
        return "http://intelrobotics.local/";
    };

    apiurl = function () {
        return "http://api.intelrobotics.local/";
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

        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhcGkuaW50ZWxyb2JvdGljcy5sb2NhbCIsInN1YiI6IlVzZXIgQXV0aG9yaXphdGlvbiBUb2tlbiIsImF1ZCI6ImFwaS5pbnRlbHJvYm90aWNzLmxvY2FsIiwiZXhwIjoxNTUzNjA2Njg1LCJuYmYiOjE1NTM1ODg2ODUsImlhdCI6MTU1MzU4ODY4NCwianRpIjoyNzM1LCJ1aWQiOiJ0byIsImNvbXBhbnlfZ3JvdXAiOlsiSFIiXX0.EiW_is2KXRD0P4seVgDqlyK8sXI6g4Fnzuy2IGg8k1M";
        $.ajax({
            type: method,
            headers: {"Authorization" : "Bearer " + token},
            url: apiurl() + endpoint,
            data: data,
            success: function (result) {
                callback(result)
            },
            error: function (result) {
                console.log(result);
            }
        })
    }

    $("#mainnavbar> nav > ul > li > a").each(function (e, t) {

        if (t.href === window.location.href){
            $($(this).closest("li")).addClass("active");
        }
    })


});
