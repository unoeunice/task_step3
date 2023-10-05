

$("#myButtonNeighbour").click(function(){
    $.ajax({url: "task_step3/php/neightbourhood.php", type: 'POST',dataType: 'json',success: function(result){
        $("#result").html(result['data'][0]['countryName']);
      }});
    });
  




document.getElementById('result').innerHTML="hehe";

