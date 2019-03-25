
$(document).ready(function () {


$("#mainnavbar> nav > ul > li > a").each(function (e, t) {

    if (t.href === window.location.href){
        $($(this).closest("li")).addClass("active");
    }
})


});
