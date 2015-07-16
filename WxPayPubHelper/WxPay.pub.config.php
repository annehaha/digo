<?php
/**
* 	配置账号信息
*/

class WxPayConf_pub
{
	//=======【基本信息设置�?====================================
	//微信公众号身份的唯一标识。审核通过后，在微信发送的邮件中查�?
	const APPID = 'wxfedc59b1640d0dcd';
	//受理商ID，身份标�?
	const MCHID = '1225421202';
	//商户支付密钥Key。审核通过后，在微信发送的邮件中查�?
	const KEY = 'dgsd2014dgsd2014dgsd2014dgsd2014';
	//JSAPI接口中获取openid，审核后在公众平台开启开发模式后可查�?
	const APPSECRET = '2d44a4b5467bdb530e70ee1bcd11f801';
	
	//=======【JSAPI路径设置�?==================================
	//获取access_token过程中的跳转uri，通过跳转将code传入jsapi支付页面
	const JS_API_CALL_URL = 'http://mydgsd.com/digo/call.php';
	
	//=======【证书路径设置�?====================================
	//证书路径,注意应该填写绝对路径
	const SSLCERT_PATH = '/xxx/xxx/xxxx/WxPayPubHelper/cacert/apiclient_cert.pem';
	const SSLKEY_PATH = '/xxx/xxx/xxxx/WxPayPubHelper/cacert/apiclient_key.pem';
	
	//=======【异步通知url设置�?==================================
	//异步通知url，商户根据实际开发过程设�?
	const NOTIFY_URL = 'http://mydgsd.com/wxpayment/demo/notify_url.php';

	//=======【curl超时设置�?==================================
	//本例程通过curl使用HTTP POST方法，此处可修改其超时时间，默认�?0�?
	const CURL_TIMEOUT = 30;
}
	
?>