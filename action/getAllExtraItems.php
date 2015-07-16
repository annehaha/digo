<?php
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
	//$alliance=$_GET['alliance'];
	$url="http://mydgsd.com/api/menu/menuAPI.php";
	$data="act=getAllFoods&token=dhklfao3jsdlaj89cvsadas476";
	$result=httpPost($url,$data);
    echo $result;
?>