
//mistake 1 no method is found:open in live html, php should be open in browser: localhost/task_step3
//mistake 2 typo:curl_setopt($ch, CURLOPT_POST, true);, i didnt refer to $ch but another variable , copy from internet 
//mistake 3 $output['data'] = $decode;:i included ['geoname'] after $decode, copying from the solution 



$("#submitNeighbour").click(function(e){
    e.preventDefault();
    $.ajax({
    url: "php/neighbourhood.php", 
    
   dataType:"json",

   type: "post",
    
   data:{
    "lat2":$('#api1param').val(),
    "lng2":$('#api2param').val()
       

   },
    success: function(result){

      console.log(JSON.stringify(result))

      if(result['data']['neighbourhood']){

        $("#result").html(JSON.stringify(result['data']["neighbourhood"]['city']));
      }else{
     
      $("#result").html('no neighbourhood is found');

     
      };

     

      
      }});
    });
  
    



$("#submitNearby").click(function(e){
  e.preventDefault();
  $.ajax({
  url: "php/nearbyStreet.php", 
  
 dataType:"json",

 type: "post",
  
 data:{
  "lat2":$('#api3param').val(),
  "lng2":$('#api4param').val()
     

 },
  success: function(result){

   
    

 
    if(JSON.stringify(result['data']["streetSegment"])){


      $("#result").html(JSON.stringify(result['data']["streetSegment"][2]['name']));
     }else{

      $("#result").html('no nearby street is found');

     }
    

    
    }});
  });

  /*

  {"status":{"code":"200","name":"ok","description":"success"},
  "data":{"streetSegment":[{"adminCode2":"081","adminCode1":"CA","distance":"0.029","line":"-122.178317 37.449089,-122.178597 37.449256,-122.179438 37.449759,-122.179681 37.449904,-122.179709 37.44987","mtfcc":"S1400","placename":"Menlo Park","adminName2":"San Mateo","fraddl":"501","postalcode":"94025","countryCode":"US","toaddr":"610","name":"Kenwood Dr","adminName1":"California","toaddl":"599","fraddr":"500"},{"adminCode2":"081","adminCode1":"CA","distance":"0.03","line":"-122.179709 37.44987,-122.179803 37.449757,-122.180086 37.449417,-122.180181 37.449305","mtfcc":"S1400","placename":"Menlo Park","adminName2":"San Mateo","fraddl":"601","postalcode":"94025","countryCode":"US","toaddr":"698","name":"Kenwood Dr","adminName1":"California","toaddl":"699","fraddr":"612"},
  {"adminCode2":"081","adminCode1":"CA","distance":"0.044","line":"-122.18045 37.450172,-122.18056 37.450228,-122.180893 37.450398,-122.181004 37.450455","mtfcc":"S1400","placename":"Menlo Park","adminName2":"San Mateo","fraddl":"707","postalcode":"94025","countryCode":"US","toaddr":"799","name":"Curtis Way","adminName1":"California","toaddl":"705","fraddr":"701"},{"adminCode2":"081","adminCode1":"CA","distance":"0.079","line":"-122.178765 37.448555,-122.179048 37.448705,-122.179897 37.449155,-122.180181 37.449305","mtfcc":"S1400","placename":"Menlo Park","adminName2":"San Mateo","fraddl":"501","postalcode":"94025","countryCode":"US","toaddr":"598","name":"Morey Dr","adminName1":"California","toaddl":"599","fraddr":"500"},{"adminCode2":"081","adminCode1":"CA","distance":"0.102","line":"-122.181004 37.450455,-122.181147 37.450283,-122.181577 37.449769,-122.181721 37.449598","mtfcc":"S1400","placename":"Menlo Park","adminName2":"San Mateo","fraddl":"701","postalcode":"94025","countryCode":"US","toaddr":"798","name":"Roble Ave","adminName1":"California","toaddl":"783","fraddr":"700"},{"adminCode2":"081","adminCode1":"CA","distance":"0.104","line":"-122.180842 37.450649,-122.180874 37.45061,-122.180971 37.450493,-122.181004 37.450455","mtfcc":"S1400","placename":"Menlo Park","adminName2":"San Mateo","fraddl":"","postalcode":"","countryCode":"US","toaddr":"","name":"Roble Ave","adminName1":"California","toaddl":"","fraddr":""},{"adminCode2":"081","adminCode1":"CA","distance":"0.104","line":"-122.180842 37.450649,-122.181005 37.450735,-122.181494 37.450994,-122.181658 37.451081","mtfcc":"S1400","placename":"Menlo Park","adminName2":"San Mateo","fraddl":"801","postalcode":"94025","countryCode":"US","toaddr":"898","name":"Curtis St","adminName1":"California","toaddl":"899","fraddr":"800"},{"adminCode2":"081","adminCode1":"CA","distance":"0.105","line":"-122.17979 37.451908,-122.18 37.451656,-122.180631 37.4509,-122.180842 37.450649","mtfcc":"S1400","placename":"Menlo Park","adminName2":"San Mateo","fraddl":"601","postalcode":"94025","countryCode":"US","toaddr":"698","name":"Roble Ave","adminName1":"California","toaddl":"697","fraddr":"600"},{"adminCode2":"081","adminCode1":"CA","distance":"0.158","line":"-122.181721 37.449598,-122.182027 37.449229,-122.182948 37.448121,-122.183255 37.447753","mtfcc":"S1400","placename":"Menlo Park","adminName2":"San Mateo","fraddl":"785","postalcode":"94025","countryCode":"US","toaddr":"898","name":"Roble Ave","adminName1":"California","toaddl":"899","fraddr":"800"},{"adminCode2":"081","adminCode1":"CA","distance":"0.158","line":"-122.181721 37.449598,-122.181884 37.449684,-122.182373 37.449943,-122.182537 37.45003","mtfcc":"S1400","placename":"Menlo Park","adminName2":"San Mateo","fraddl":"801","postalcode":"94025","countryCode":"US","toaddr":"898","name":"Blake St","adminName1":"California","toaddl":"899","fraddr":"800"}]}}
  8*/



  $("#submitOcean").click(function(e){
    e.preventDefault();
    $.ajax({
    url: "php/ocean.php", 
    
   dataType:"json",
  
   type: "post",
    
   data:{
    "lat3":$('#api5param').val(),
    "lng3":$('#api6param').val()
       
  
   },
    success: function(result){
  
     
      
      if(JSON.stringify(result['data']["ocean"])){


        $("#result").html(JSON.stringify(result['data']['ocean']['name']));
       }else{
  
        $("#result").html('no ocean or sea is found');
  
       }
   
    
      
  
      
      }});
    });
  
   /* {"status":{"code":"200","name":"ok","description":"success"},
   "data":{"ocean":{"distance":"0","geonameId":3411923,"name":"North Atlantic Ocean"}}}*/


   /*{"status":{"code":"200","name":"ok","description":"success"},
   "data":{"status":{"message":"we are afraid we could not find an ocean for latitude and longitude :10.0,10.0","value":15}}} */