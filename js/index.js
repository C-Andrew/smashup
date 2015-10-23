console.log("hello world!");



$( document.body ).on( 'click', '.dropdown-menu li', function( event ) {

  var $target = $( event.currentTarget );

  $target.closest( '.btn-group' )
     .find( '[data-bind="label"]' ).text( $target.text() )
        .end()
     .children( '.dropdown-toggle' ).dropdown( 'toggle' );

  return false;

});

$(document).ready(function(){
    // For every entry in factions, create a tab.
    $.each(expansions, function(gen, val) {
      // Add Expansion to tab
      var genItem = "<li><a href=\"#" + val.gen +  "\">" + val.name + "</a></li>";
      $("#faction-list").append(genItem);

      // Add tab-pane for that Expansion
      var pane = "<div id=\"" + val.gen + "\" class=\"tab-pane fade row\"></div>";
      $(".tab-content").append(pane);


      // For every faction in expansion
      $.each(val.list, function(){
        var faction_name = this.valueOf();
        var faction_id = faction_name.replace(/ /g,'');
        var $div = $("<div>", {
          id: faction_id, 
          class: "well well-sm col-sm-3",
          html: faction_name
        });

        $div.click(function(){
          console.log("clicked");
          var hasFaction = available_factions.indexOf(faction_id);
          if(hasFaction > -1){
            available_factions.splice(hasFaction, 1);
          } else {
            available_factions.push(faction_id);
          }
        });

        $("#" + val.gen).append($div);
        available_factions.push(faction_id);
      })  
    });

    $('#faction-list a[href="#Gen1"]').tab('show');

    $(".nav-tabs a").click(function(){
        $(this).tab('show');
        console.log("hello");
    });
    $('.nav-tabs a').on('shown.bs.tab', function(event){
        // var x = $(event.target).text();         // active tab
        // var y = $(event.relatedTarget).text();  // previous tab
        // $(".act span").text(x);
        // $(".prev span").text(y);
    });

    $("#deal-btn").click(function(){ 
      // Deep copy array
      dealt_factions = available_factions.slice();

      var numOfPlayers = $("#numOfPlayers").val();
      var numOfFactions = $("#numOfFactions").val();

      // Clear all dealt factions
      $(".panel-body > p").remove()

      // Deal factions to all players
      for(var x = 1; x <= numOfPlayers; x++){
        console.log(dealt_factions);
        console.log("Player " + x + ":");
        for(var y = 0; y < numOfFactions; y++){
          var index = getRandomInt(0, dealt_factions.length-1);
          var hand = "hand" + x;
          var $p = $("<p>", {
            html: dealt_factions[index]
          });

          // Add faction to player's hand
          $("#" + hand).append($p);
          console.log(dealt_factions[index]);
          // Remove faction from factions
          dealt_factions.splice(index, 1);
        }
      }

    }); 

    $( "#numOfPlayers" ).change(function() {
      switch(parseInt($("#numOfPlayers").val())){
        case 2:
          $('#player2').removeClass('hide');
          $('#player3').addClass('hide');
          $('#player4').addClass('hide');
          $('#player5').addClass('hide');
          $('#player6').addClass('hide');    
          break;    
        case 3:
          $('#player3').removeClass('hide');
          $('#player4').addClass('hide');
          $('#player5').addClass('hide');
          $('#player6').addClass('hide');
          break;
        case 4:
          $('#player4').removeClass('hide');
          $('#player5').addClass('hide');
          $('#player6').addClass('hide');
          break;
        case 5:
          $('#player5').removeClass('hide');
          $('#player6').addClass('hide');
          break;
        case 6:
          $('#player6').removeClass('hide');
          break;
        default: 
          break;
      }

      console.log($("#numOfPlayers").val());
    });

});
 

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}






