/* ==================================== navbar ==================================== */
$("#navbar-toggle").on('click', function() {
      var body = $("#navbar-body");
      $(this).toggleClass("change");
      if(body.attr('class') === "navbar-body"){
            body.addClass("responsive");
      }
      else{
            body.removeClass("responsive");
      }
});

$("#dropdown").on('click', function(){
      var body = $("#nav-dropdown-content");
      if(body.attr('class') === "nav-dropdown-content"){
            body.addClass("responsive");
      }
      else{
            body.removeClass("responsive");
      }
});

// PEGA O PAGINA ATUAL
var page = document.location.pathname;
page = page.split("/");
page = page[page.length-1];

// COLOCA A CLASSE active PARA O ELEMENTO QUE REDIRECIONA PARA ESTA PAGINA
$(".navbar-body").find('a').each(function(e){
      if (page == $(this).attr('href')) {
            $(this).addClass("active");
            if ($(this).parent().parent().parent().hasClass('dropdown')) {
                  $(".dropdown > a").addClass('active');
            }
            return;
      }
});
/* ==================================== end navbar ==================================== */

/* ==================================== tab ==================================== */
$(document).on('click', '.tab-links > .link', function() {
      var btns = $(this).parent().children();
      var tabs = $(this).parent().parent().find('div[class^="tab-content"]');
      var id = $(this).attr('id');

      console.log(tabs);
      $(btns).each(function (){
            $(this).removeClass('active');
      });
      $(this).addClass('active');

      $(tabs).each(function (){
            $(this).removeClass('activeTab');
            if ($(this).attr('data-link') == id) {
                  $(this).addClass('activeTab');
            }
      });
});
/* ==================================== end tab ==================================== */

/* ==================================== modal ==================================== */
if ($(".modal").length) {
      var modals = $('.modal');
      var modal = null;
      var btn = null;
      var spanClose = null;

      // When the user clicks on the button, open the modal
      $(document).on('click', 'button[id^="modal-"]', function() {
            // Get the button that opens the modal
            btn = $(this);
            // get the current modal
            $(modals).each(function(e) {
                  if ($(this).attr('data-modal') == btn.attr('id')) {
                        modal = $(this);
                        // Get the <span> element that closes the modal
                        spanClose = modal.find(".close");
                  }
            });

            modal.css({display : "block"});

            // When the user clicks on <span> (x), close the modal
            spanClose.on('click', function() {
                  modal.css({display : "none"});
            });
            // When the user clicks anywhere outside of the modal, close it
            $(window).on('click', function(event) {
                  if ($(event.target).attr('data-modal') == modal.attr('data-modal')) {
                        modal.css({display : "none"});
                  }
            });
      });
}
/* ==================================== end modal ==================================== */
