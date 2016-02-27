if (Meteor.isClient) {
    Meteor.startup(function () {
        //$('.ui.dropdown').dropdown();
    });
}

Router.configure({
    layoutTemplate: 'wshwshLayout'
});
Router.route("/", function () {

    this.render("header", {
        to: "header",
    });
    this.render("leftnav", {
        to: "leftnav",
    });
    this.render("main", {
        to: "main",
    });
    this.render("rightnav", {
        to: "rightnav",
    });
    this.render("footer", {
        to: "footer",
    });

});
Router.route("/:id", function () {

    this.render("header", {
        to: "header",
    });
    this.render("leftnav", {
        to: "leftnav",
    });
    this.render("main", {
        to: "main",
    });
    this.render("rightnav", {
        to: "rightnav",
    });
    this.render("footer", {
        to: "footer",
    });

});

