$(document).ready(function(){
  function hideAll (){
 $("#question1").hide();
  $("#explanation1").hide();
  $("#question2").hide();
  $("#question2a").hide();
  $("#explanation2ayes").hide();
  $("#explanation2ano").hide();
  $("#explanation2b").hide();
  $("#question3").hide();
  $("#explanation3").hide();
  $("#question4").hide();
  $("#explanation4").hide();
  $("#question2b").hide();
  $("#end").hide();
  $("#sourcelist1").hide();
};



hideAll ();

$("#sources1").click(function(){
  $("#sourcelist1").slideToggle();
});

$("#continue").click(function(){
  $("#beginning").hide();
  $("#question1").show();
});

$("#yes1").click(function(){
  $("#question1").hide();
  $("#explanation1").show();
});

$("#no1").click(function(){
  $("#question1").hide();
  $("#explanation1").show();
});

$("#continue2").click(function(){
  $("#explanation1").hide();
  $("#question2").show();
});


$("#yes2").click(function(){
  $("#question2").hide();
  $("#question2a").show();
});


$("#no2").click(function(){
  $("#question2").hide();
  $("#question3").show();
});

$("#yes2a").click(function(){
  $("#question2a").hide();
  $("#explanation2ayes").show();
});

$("#no2a").click(function(){
  $("#question2a").hide();
  $("#explanation2ano").show();
});

$("#continue2ayes").click(function(){
    $("#explanation2ayes").hide();
    $("#question2b").show();
});

$("#renew").click(function(){
  $("#question2b").hide();
  $("#explanation2b").show();
});

$("#lapse").click(function(){
  $("#question2b").hide();
  $("#explanation2b").show();
});

$("#continue2b").click(function(){
  $("#explanation2b").hide();
  $("#question3").show();
});

$("#continue2ano").click(function(){
    $("#explanation2ano").hide();
    $("#question3").show();
});


$("#yes3").click(function(){
  $("#question3").hide();
  $("#explanation3").show();
});

$("#no3").click(function(){
  $("#question3").hide();
  $("#explanation3").show();
});

$("#continue3").click(function(){
  $("#question4").show();
  $("#explanation3").hide();
});

$("#option1").click(function(){
  $("#question4").hide();
  $("#explanation4").show();
});

$("#option2").click(function(){
  $("#question4").hide();
  $("#explanation4").show();
});

$("#continue4").click(function(){
  $("#end").show();
  $("#explanation4").hide();
  $("#graph").hide();
  $("#sourcelinks").hide();
});

$("#years").click(function(){
  $("#graph").slideToggle();
});

$("#sources").click(function() {
  $("#sourcelinks").slideToggle();
});

})
