<?php
    function httpGet($url)
    {
        $curl = curl_init();
        curl_setopt_array($curl, array(
                CURLOPT_RETURNTRANSFER => 1,
                CURLOPT_URL => $url,
                CURLOPT_HEADER => 0,
                CURLOPT_TIMEOUT => 30
                ));
        $tmpInfo = curl_exec($curl);
        if (curl_errno($curl)) {
            echo 'Errno' . curl_error($curl);
        }
        curl_close($curl);
        return $tmpInfo;
    }
   function httpPost($url,$data)
    {
        $curl = curl_init();
        curl_setopt_array($curl, array(
                CURLOPT_RETURNTRANSFER => 1,
                CURLOPT_URL => $url,
                CURLOPT_POST => 1,
                CURLOPT_POSTFIELDS => $data,
                CURLOPT_HEADER => 0,
                CURLOPT_TIMEOUT => 30
                ));
        $tmpInfo = curl_exec($curl);
        if (curl_errno($curl)) {
            echo 'Errno' . curl_error($curl);
        }
        curl_close($curl);
        return $tmpInfo;
    }
    $address=$_POST["address"];
	$url="http://api.map.baidu.com/geocoder/v2/?ak=7dTYZ7mnQTSUhpXoxK3obmY4&output=json&city=上海&address=".$address;
	//$url="http://api.map.baidu.com/geocoder/v2/?ak=2b7cd51e1518a56095f4455ddaf85ed6&output=json&city=上海&address=".$address;
    $result=httpGet($url);
    $json=json_decode($result);

    if($json->status!="0")
        return;
    $lat=$json->result->location->lat;
    $lon=$json->result->location->lng;   
    $url="http://mydgsd.com/api/order/orderAPI.php";
    $data=array(
        'act'=>'checkAddrBelong',
        'token'=>'31wdfaa311ef9cd20aa89dnkmdka476',
        'lat'=>$lat,
        'lng'=>$lon
    );
    $result=httpPost($url,$data);
    echo $result;
?>