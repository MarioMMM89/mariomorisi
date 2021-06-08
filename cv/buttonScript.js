$("#formazione, #skills, #esperienze, #pulsante-logo").on("click", function (e) {
    e.stopPropagation();
    if(this.id == "formazione") {
        $("#formazione-target").fadeIn();
        $("#skills-target").fadeOut();
        $("#esperienze-target").fadeOut();
        $("#presentazione").fadeOut();
    }
    if(this.id == "skills") {
        $("#formazione-target").fadeOut();
        $("#skills-target").fadeIn();
        $("#esperienze-target").fadeOut();
        $("#presentazione").fadeOut();
    }
    if(this.id == "esperienze") {
        $("#esperienze-target").fadeIn();
        $("#formazione-target").fadeOut();
        $("#skills-target").fadeOut();
        $("#presentazione").fadeOut();
    }
    if(this.id == "pulsante-logo"){
        $("#esperienze-target").fadeOut();
        $("#formazione-target").fadeOut();
        $("#skills-target").fadeOut();
        $("#presentazione").fadeIn();
    }

})