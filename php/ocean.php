<?php
ini_set('display_errors', 'On');
error_reporting(E_ALL);



$url='http://api.geonames.org/oceanJSON?lat='.$_REQUEST['lat3']."&lng=".$_REQUEST["lng3"]."&username=eunicesung";

//http://api.geonames.org/oceanJSON?lat=40.78343&lng=-43.96625&username=eunicesung

//initiliza client url session 
$ch = curl_init();


curl_setopt($ch, CURLOPT_POST, true);

// Set CURLOPT_RETURNTRANSFER to 1 to return the response as a string
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);


//fetch the url using the handle option
curl_setopt($ch, CURLOPT_URL, $url);


// Execute the cURL session after the option/request
$result = curl_exec($ch);

// Check for cURL errors if needed
if (curl_errno($ch)) {
    echo 'Curl error: ' . curl_error($ch);
}

// Close the cURL session
curl_close($ch);

// Now, $response contains the response data as a string

$decode = json_decode($result,true);



$output['status']['code'] = "200";
	$output['status']['name'] = "ok";
	$output['status']['description'] = "success";
	//$output['status']['returnedIn'] = intval((microtime(true) - $executionStartTime) * 1000) . " ms";
	$output['data'] = $decode;
	
	header('Content-Type: application/json; charset=UTF-8');

	echo json_encode($output); 
	

?>