$("#formazione, #skills, #esperienze, #pulsante-logo").on("click", function (e) {
    e.stopPropagation();
    /*ho scambiato esperienze con formazione */
    if(this.id == "formazione") {
        $("#formazione-target").fadeOut();
        $("#skills-target").fadeOut();
        $("#esperienze-target").fadeIn();
        $("#presentazione").fadeOut();
    }
    if(this.id == "skills") {
        $("#formazione-target").fadeOut();
        $("#skills-target").fadeIn();
        $("#esperienze-target").fadeOut();
        $("#presentazione").fadeOut();
    }
    if(this.id == "esperienze") {
        $("#esperienze-target").fadeOut();
        $("#formazione-target").fadeIn();
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