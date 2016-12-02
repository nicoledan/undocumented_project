$(document).ready(function(){
function hideAll (){
  $("#question1").hide();
  $("#explanation1").hide();
  $("#question2").hide();
  $("#question2a").hide();
  $("#explanation2a").hide();
  $("#question3").hide();
  $("#explanation3").hide();
  $("#question4").hide();
  $("#explanation4").hide();
};

hideAll ();

$("#continue").click(function(){
  $("#question1").show();
  $("#beginning").hide();
});

$("#yes1").click(function(){
  $("#explanation1").show();
  $("#question1").hide();
});

$("#no1").click(function(){
  $("#explanation1").show();
  $("#question1").hide();
});

$("#continue2").click(function(){
  $("#question2").show();
  $("#explanation1").hide();
});


$("#yes2").click(function(){
  $("#question2").hide();
  $("#question2a").show();
});


$("#no2").click(function(){
  $("#question2").hide();
  $("#question3").show();
})

$("#yes3").click(function(){
  $("#question3").hide();
  $("#explanation3").show();
})

$("#no3").click(function(){
  $("#question3").hide();
  $("#explanation3").show();
})

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
})

})
