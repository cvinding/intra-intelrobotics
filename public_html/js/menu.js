$(document).ready(function () {

    let enviroment = window.location.href.split(".")[2].split("/")[0];

    const names = {

        "news":{
            "com":"Home",
            "dk":"Hjem",
            "jp":"家"
        },
        "users":{
            "com":"Users",
            "dk":"Brugere",
            "jp":"ユーザー"
        },
        "webnews":{
            "com":"News",
            "dk":"Nyheder",
            "jp":"ニュース"
        },
        "addwebnews":{
            "com":"Add news",
            "dk":"Opret nyheder",
            "jp":"ニュースを作成"
        },
        "webproducts":{
            "com":"Products",
            "dk":"Produkter",
            "jp":"プロダクト"
        },
        "addwebproducts":{
            "com":"Add products",
            "dk":"Opret produkter",
            "jp":"商品を作成する"
        },
        "webabout":{
            "com":"About",
            "dk":"Virksomhedsinfo",
            "jp":"会社情報"
        }
    };

    function createMenuItem(page) {

        if(enviroment === "local"){
            enviroment = "com";
        }

        let a = document.createElement("a");
        a.innerHTML = names[page][enviroment];
        a.href = "/" + page;
        a.style = "color:white";

        let li = document.createElement("li");

        li.appendChild(a);

        return li;
    }

    request("/api/intra/getMenu/", "GET", "", function (result) {

        $("#mainnavbar>nav>ul").html("");

        for (let i = 0; i < result.menu.length; i++){
            $("#mainnavbar>nav>ul").append(createMenuItem(result.menu[i]));
        }

    })

});