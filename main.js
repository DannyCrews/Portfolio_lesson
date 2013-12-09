var Page = {

  setNavigationClicks: function() {
    $('.navigation-wrapper a').click(function(e) {
      e.preventDefault();
    });
  }

};

$(function() {
  Page.setNavigationClicks();
});