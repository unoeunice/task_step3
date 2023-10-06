

$("#submitNeighbour").click(function(e){
    e.preventDefault();
    $.ajax({
    url: "../php/neighbourhood.php", 
    
   dataType:"json",

   method: "post",
    
   data:{
    "lat":$('#api1param').val(),
    "lng":$('#api2param').val()
       

   },
    success: function(result){
        $("#result").html(result['data'][0]['countryName']);
      }});
    });
  


