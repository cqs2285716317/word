<?php
// +----------------------------------------------------------------------
// | author: well <485457170@qq.com>
// +----------------------------------------------------------------------
// | Copyright (c) 20014-2020.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: well <485457170@qq.com>
// +----------------------------------------------------------------------
/**
 * @todo     php���java�������ά��ͼƬ��URL��ַ
 * @category Extend
 * @package  Extend
 * @author   well <485457170@qq.com>
 */
 class  utils{
 	
	/**
     	* @access static
     	* @param  $imagepath String ͼƬ������·��
	* @param  $host      String �����磺127.0.0.1
	* @param  $port      String �˿ں��磺20147
     	* @return string ��������URL
    	*/
	static function deCodeBitMap($imagepath,$host,$port){
		$socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP) or die($imagepath." Could not connet server create\n"); // ����һ��Socket
		if(!$socket){
			return "";
		}
		$connection = socket_connect($socket, $host, $port) or die($imagepath." Could not connet server connection\n");    //  ����
		if(!$connection){
			return "";
		}
		socket_write($socket, $imagepath) or die("Write failed\n"); // ���ݴ��� �������������Ϣ

		$buff = socket_read($socket, 1024, PHP_NORMAL_READ);
		return $buff;
	}
	
 }
?>
