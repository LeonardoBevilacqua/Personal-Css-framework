/* navbar */
document.getElementById("navbar-toggle").onclick = function(){
      var body = document.getElementById("navbar-body");
      this.classList.toggle("change");
      if(body.className === "navbar-body"){
            body.className += " responsive";
      }
      else{
            body.className = "navbar-body";
      }
}

document.getElementById("dropdown").onclick = function(){
      var body = document.getElementById("nav-dropdown-content");
      if(body.className === "nav-dropdown-content"){
            body.className += " responsive";
      }
      else{
            body.className = "nav-dropdown-content";
      }
}

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
/* end navbar */

/* tab */
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
/* end tab */
