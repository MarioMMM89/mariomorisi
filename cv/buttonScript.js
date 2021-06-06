$("#formazione, #skills, #esperienze").on("click", function (e) {
    e.stopPropagation();
    $("#spacer2").hide();
    if(this.id == "formazione") {
        $("#formazione-target").fadeIn();
        $("#skills-target").fadeOut();
        $("#esperienze-target").fadeOut();
    }
    if(this.id == "skills") {
        $("#formazione-target").fadeOut();
        $("#skills-target").fadeIn();
        $("#esperienze-target").fadeOut();
    }
    else if(this.id == "esperienze") {
        $("#esperienze-target").fadeIn();
        $("#formazione-target").fadeOut();
        $("#skills-target").fadeOut();
    }

})