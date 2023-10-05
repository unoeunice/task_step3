<?php
ini_set('display_errors', 'On');
error_reporting(E_ALL);


$URL='https://api.geonames.org/neighbourhoodJSON?lat='.$_REQUEST['lat']."&lng=".$_REQUEST["lng"]."&username=eunicesung";

//initiliza client url session 

$ch = curl_init();

//fetch the url using the handle option
curl_setopt($ch, CURLOPT_URL, $URL);

// Set CURLOPT_RETURNTRANSFER to 1 to return the response as a string
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

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
	$output['status']['returnedIn'] = intval((microtime(true) - $executionStartTime) * 1000) . " ms";
	$output['data'] = $decode['geonames'];
	
	header('Content-Type: application/json; charset=UTF-8');

	echo json_encode($output); 

?>