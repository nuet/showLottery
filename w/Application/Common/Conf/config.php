<?php
/* vim: set expandtab tabstop=4 shiftwidth=4: */
// +----------------------------------------------------------------------+
// | PHP version 5                                                        |
// +----------------------------------------------------------------------+
// | Copyright (c) 1997-2004 The PHP Group                                |
// +----------------------------------------------------------------------+
// | This source file is subject to version 3.0 of the PHP license,       |
// | that is bundled with this package in the file LICENSE, and is        |
// | available through the world-wide-web at the following url:           |
// | http://www.php.net/license/3_0.txt.                                  |
// | If you did not receive a copy of the PHP license and are unable to   |
// | obtain it through the world-wide-web, please send a note to          |
// | license@php.net so we can mail you a copy immediately.               |
// +----------------------------------------------------------------------+
// | Authors: Original Author <author@example.com>                        |
// |          Your Name <you@example.com>                                 |
// +----------------------------------------------------------------------+
//
// $Id:$

return array(
    'AUTOLOAD_NAMESPACE' => array(
        'Addons' => ONETHINK_ADDON_PATH
    ) ,
    'MODULE_DENY_LIST' => array(
        'Common',
        'User'
    ) ,
    'MODULE_ALLOW_LIST' => array(
        'fuzhi',
        'Admin',
        'Home2'
    ) ,
    'DEFAULT_MODULE' => 'fuzhi',
    'DATA_AUTH_KEY' => '.<q?*9Sp;rTQ0h^m&MnogOY,F7lIK]wRJ=x5:4Pt',
    'SHOW_PAGE_TRACE' => true,
    'USER_MAX_CACHE' => 1000,
    'USER_ADMINISTRATOR' => 1,
    'URL_CASE_INSENSITIVE' => true,
    'URL_MODEL' => 3,
    'VAR_URL_PARAMS' => '',
    'URL_PATHINFO_DEPR' => '/',
    'DEFAULT_FILTER' => '',
    'DB_TYPE' => 'mysqli',
    'DB_HOST' => 'localhost',
    'DB_NAME' => 'coco2d',
    'DB_USER' => 'root',
    'DB_PWD' => 'root',
    'DB_PORT' => '3306',
    'DB_PREFIX' => 'ot_',
    'DOCUMENT_MODEL_TYPE' => array(
        2 => '主题',
        1 => '目录',
        3 => '段落'
    ) ,
'DATA_CACHE_TYPE' => 'file',
'MEMCACHED_HOST' => '127.0.0.1',
'MEMCACHED_PORT' => '11211',
);














