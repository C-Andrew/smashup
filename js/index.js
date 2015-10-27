console.log("hello world!");



$( document.body ).on( 'click', '.dropdown-menu li', function( event ) {

  var $target = $( event.currentTarget );

  $target.closest( '.btn-group' )
     .find( '[data-bind="label"]' ).text( $target.text() )
        .end()
     .children( '.dropdown-toggle' ).dropdown( 'toggle' );

  return false;

});

function addDisableGenButton(gen, factions){
  var $a = $("<a>", {
    id: "disable-" + gen,
    "data-enabled": true,
    class: "list-group-item",
    html: "Disable"
  })
  var $div = $("<div>", {
    class: "col-sm-2",
    html: $a
  });

  $div.click(function(){
    var enabled = $.parseJSON($a.attr("data-enabled"));
    $.each(factions, function(){
      var hasFaction = available_factions.indexOf(this.valueOf());
      var faction_id = this.valueOf().replace(/ /g,'');
      console.log(enabled);
      if(enabled){  
        $("#" + faction_id).addClass("removed");
        available_factions.splice(hasFaction, 1);
      } else {
        $("#" + faction_id).removeClass("removed");
        available_factions.push(faction_id);
      }
    });

    if(enabled){  
      console.log($a.attr("data-enabled"));
      console.log("enabled so disable");
      $a.attr("data-enabled", false);
      $a.html("Enable");
    } else {
      console.log("disabled so enable");
      $a.attr("data-enabled", true);
      $a.html("Disable");
    }
    
  });

  $("#" + gen).append($div);
};

function mulligan(e){
  e = e || window.event;
  var target = e.target || e.srcElement;
  var hand = $(target).parent().parent().parent().children().get(1).id;

  $.each($(target).parent().parent().siblings().children(), function(){ 
      dealt_factions.push(this.innerHTML); 
  });

  // Clear my dealt factions
  $("#" + hand).empty();

  for(var y = 0; y < $("#numOfFactions").val(); y++){
      var index = getRandomInt(0, dealt_factions.length-1);
      var $p = $("<p>", {
        html: dealt_factions[index]
      });

      // Add faction to player's hand
      $("#" + hand).append($p);

      // Remove faction from factions
      dealt_factions.splice(index, 1);
  }
};

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
        var $a = $("<a>", {
          id: faction_id,
          class: "list-group-item",
          html: faction_name
        })

        var $div = $("<div>", {
          class: "col-sm-2",
          html: $a
        });



        $div.click(function(){
          console.log("clicked");
          var hasFaction = available_factions.indexOf(faction_name);
          if(hasFaction > -1){
            $("#" + faction_id).addClass("removed");
            available_factions.splice(hasFaction, 1);
          } else {
            $("#" + faction_id).removeClass("removed");
            available_factions.push(faction_id);
          }
        });

        $("#" + val.gen).append($div);
        available_factions.push(faction_name);
      })
      
      addDisableGenButton(val.gen, val.list);
    });

    $('#faction-list a[href="#Gen1"]').tab('show');

    $(".nav-tabs a").click(function(e){
        e.preventDefault();
        e.stopImmediatePropagation();
        $(this).tab('show');
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
        for(var y = 0; y < numOfFactions; y++){
          var index = getRandomInt(0, dealt_factions.length-1);
          var hand = "hand" + x;
          var $p = $("<p>", {
            html: dealt_factions[index]
          });

          // Add faction to player's hand
          $("#" + hand).append($p);
          // Remove faction from factions
          dealt_factions.splice(index, 1);
        }
      }

    }); 

    $( "#numOfFactions" ).change(function() {
      if($("#numOfFactions").val() > 4){
        $("#numOfFactions").val(4);
      }
    });

    $( "#numOfPlayers" ).change(function() {
      if($("#numOfPlayers").val() > 6){
        $("#numOfPlayers").val(6);
      }
      switch(parseInt($("#numOfPlayers").val())){
        case 2:
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
          $('#player3').removeClass('hide');
          $('#player4').removeClass('hide');
          $('#player5').addClass('hide');
          $('#player6').addClass('hide');
          break;
        case 5:
          $('#player3').removeClass('hide');
          $('#player4').removeClass('hide');
          $('#player5').removeClass('hide');
          $('#player6').addClass('hide');
          break;
        case 6:
          $('#player3').removeClass('hide');
          $('#player4').removeClass('hide');
          $('#player5').removeClass('hide');
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






