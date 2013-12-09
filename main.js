var Page = {

  setNavigationClicks: function() {
    $('.navigation-wrapper a').click(function(e) {
      e.preventDefault();
      Page.scrollToSection($(e.currentTarget).attr('href'));
    });
  },

  scrollTo: function(yValue) {
    $('html body').animate({
      'scrollTop':yValue
    }, 1000);
  },

  scrollToSection: function(sectionString) {
    var sectionClass = "." + sectionString;
    Page.scrollTo($(sectionClass).offset().top - 100);
  }

};

$(function() {
  Page.setNavigationClicks();
});