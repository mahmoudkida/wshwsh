Template.header.rendered = function() {
    $('.ui.dropdown').dropdown({
        allowCategorySelection:true
    });
    $('.ui.checkbox').checkbox();
}
Template.header.helpers({
    category: function(){
        return "";
    },
    langauge : function(){
        return "English";
    }
});