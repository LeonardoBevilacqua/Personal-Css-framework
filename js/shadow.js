/* ==================================== Globals ==================================== */
var hasModal = $(".modal").length ? true : false;
/* ==================================== End Globals ==================================== */
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
function openModal(modal) {
      var spanClose = null;
      // get the current modal
      var modal = $('div.modal[data-IdModal="' + modal + '"]');

      if(modal){
            spanClose = modal.find('[data-ActionModal="close"]');
            modal.css({display : "block"});

            // When the user clicks on <span> (x), close the modal
            spanClose.on('click', function() {
                  modal.css({display : "none"});
            });
      }
}

if (hasModal) {
      var btn = null;

      // When the user clicks on the button, open the modal
      $(document).on('click', 'button[data-IdModal]', function() {
            // Get the button that opens the modal
            btn = $(this);
            // Open the modal if exists
            openModal(btn.attr('data-IdModal'));
      });
}
/* ==================================== end modal ==================================== */

/* ==================================== infoPanel ==================================== */
$(document).on('click', function(event){
	event = event.target;
	if ($(event).attr('class') === 'close') {
		$(event).parent().addClass("closed");
	}
});
/* ==================================== end infoPanel ==================================== */
