

$("#myButtonNeighbour").click(function(e){
    e.preventDefault();
    $.ajax({
    url: "task_step3/php/neighbourhood.php", 
    type: 'POST',
    dataType:"json",
    
   data:{
    "lat":$('#api1param').val(),
    "lng":$('#api2param').val()
       

   },
    success: function(result){
        $("#result").html(result['data'][0]['countryName']);
      }});
    });
  


