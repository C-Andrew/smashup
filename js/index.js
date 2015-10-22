console.log("hello world!");

var local = {
  "factions" : {
    "gen1" : ["Robots", "Zombies", "Pirates", "Aliens", "Dinosaurs", "Ninjas", "Tricksters", "Wizards"],
    "gen2" : ["Bear Cavalry", "Ghosts", "Killer Plants", "Steampunks"],
    "gen3" : ["Giant Ants", "Mad Scientists", "Vampires"]
  }
};

$( document.body ).on( 'click', '.dropdown-menu li', function( event ) {

  var $target = $( event.currentTarget );

  $target.closest( '.btn-group' )
     .find( '[data-bind="label"]' ).text( $target.text() )
        .end()
     .children( '.dropdown-toggle' ).dropdown( 'toggle' );

  return false;

});

$(document).ready(function(){
    $(".nav-tabs a").click(function(){
        $(this).tab('show');
    });
    $('.nav-tabs a').on('shown.bs.tab', function(event){
        var x = $(event.target).text();         // active tab
        var y = $(event.relatedTarget).text();  // previous tab
        $(".act span").text(x);
        $(".prev span").text(y);
    });
});
 
function init(){
}

init();



