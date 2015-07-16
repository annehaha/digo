<?php

	function httpsGet($url)
    {
        $curl = curl_init();
        curl_setopt_array($curl, array(
                CURLOPT_RETURNTRANSFER => 1,
                CURLOPT_URL => $url,
                CURLOPT_SSL_VERIFYPEER => 0,
                CURLOPT_SSL_VERIFYHOST => 0,
                //CURLOPT_SSLVERSION => 3,
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
    $test=$_POST["test"];
    if($test){
        $json='{"access_token":"OezXcEiiBSKSxW0eoylIeG_-b4mfbJ8PKq27-_W3aoG5EDG9nEP4nK4aaaUq_ys51PjKajaZe-iVNd-U5c7_euRt9WPlJuyrrS3Gzs8LZmJSZXl_j4Lyhv3LXI9lvBkQSlqsUMy2h0CCq7XHIc03ZQ","expires_in":7200,"refresh_token":"OezXcEiiBSKSxW0eoylIeG_-b4mfbJ8PKq27-_W3aoG5EDG9nEP4nK4aaaUq_ys5ueQtQvVLQRuu_a5K-vu_5I_d3GK_eoRrgEqUDXyAt1VGj7qW5ERBU8Z8CFzp0TUKDzQQtmjxb9Ov52JDPPG1uw","openid":"onAC0t54NJwFZSf7PnW7_R2N_cWI","scope":"snsapi_base"}';
        echo $json;
		echo "<script language=javascript>alert('您进入测试状态！');</script>";
    }else{
        $code=$_POST["code"];
        if(empty($code)){
            echo "获取code失败";
        }else{
			//这里要换
            define('APPID', 'wxfedc59b1640d0dcd');
            define('APPSECRET', '2d44a4b5467bdb530e70ee1bcd11f801');
            $url="https://api.weixin.qq.com/sns/oauth2/access_token?appid=".APPID."&secret=".APPSECRET."&code=".$code."&grant_type=authorization_code";
            //通过code换取网页授权access_token与openid
            $json=httpsGet($url);
            
            //通过access_token和openid拉取用户信息
            $jsonArr=json_decode($json,true);
            if(!empty($jsonArr["errcode"])){
                echo $json;
            }else{        
                $openId=$jsonArr["openid"];
                $accessToken=$jsonArr["access_token"];
                $scope=$jsonArr["scope"];
                if($scope==="snsapi_userinfo")//暂时不用
                {
                    $newUrl="https://api.weixin.qq.com/sns/userinfo?access_token=".$accessToken."&openid=".$openId."&lang=zh_CN";
                    $newJson=httpsGet($newUrl);
                    if(!empty($jsonArr["errcode"])){
                        echo $json;
                    }else{
                        echo $newJson;
                    }
                }else{
					echo $json;
					$f = fopen('log.txt', 'w'); 
					fwrite($f, $json); 
					fclose($f);
					
				}
					
            }
        }
    }

	   
?>