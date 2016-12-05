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
    'TAGLIB_PRE_LOAD' => 'OT\\TagLib\\Article,OT\\TagLib\\Think',
    'DEFAULT_THEME' => 'default',
    'DATA_CACHE_PREFIX' => 'onethink_',
    'DATA_CACHE_TYPE' => 'File',
    'DOWNLOAD_UPLOAD' => array(
        'mimes' => '',
        'maxSize' => 5 * 1024 * 1024,
        'exts' => 'jpg,gif,png,jpeg,zip,rar,tar,gz,7z,doc,docx,txt,xml',
        'autoSub' => true,
        'subName' => array(
            'date',
            'Y-m-d'
        ) ,
        'rootPath' => './Uploads/Download/',
        'savePath' => '',
        'saveName' => array(
            'uniqid',
            ''
        ) ,
        'saveExt' => '',
        'replace' => false,
        'hash' => true,
        'callback' => false,
    ) ,
    'EDITOR_UPLOAD' => array(
        'mimes' => '',
        'maxSize' => 2 * 1024 * 1024,
        'exts' => 'jpg,gif,png,jpeg',
        'autoSub' => true,
        'subName' => array(
            'date',
            'Y-m-d'
        ) ,
        'rootPath' => './Uploads/Editor/',
        'savePath' => '',
        'saveName' => array(
            'uniqid',
            ''
        ) ,
        'saveExt' => '',
        'replace' => false,
        'hash' => true,
        'callback' => false,
    ) ,
    'TMPL_PARSE_STRING' => array(
        '__STATIC__' => __ROOT__ . '/Public/static',
        '__ADDONS__' => __ROOT__ . '//' . MODULE_NAME . '/Addons',
        '__IMG__' => __ROOT__ . '/Public/' . MODULE_NAME . '/images',
        '__CSS__' => __ROOT__ . '/Public/' . MODULE_NAME . '/css',
        '__JS__' => __ROOT__ . '/Public/' . MODULE_NAME . '/js',
    ) ,
    'SESSION_PREFIX' => 'fz_home',
    'COOKIE_PREFIX' => 'fz_home_',
    'ATTACHMENT_DEFAULT' => array(
        'is_upload' => true,
        'allow_type' => '0,1,2',
        'driver' => 'Local',
        'driver_config' => null,
    ) ,
    'ATTACHMENT_UPLOAD' => array(
        'mimes' => '',
        'maxSize' => 5 * 1024 * 1024,
        'exts' => 'jpg,gif,png,jpeg,zip,rar,tar,gz,7z,doc,docx,txt,xml',
        'autoSub' => true,
        'subName' => array(
            'date',
            'Y-m-d'
        ) ,
        'rootPath' => './Uploads/Attachment/',
        'savePath' => '',
        'saveName' => array(
            'uniqid',
            ''
        ) ,
        'saveExt' => '',
        'replace' => false,
        'hash' => true,
        'callback' => false,
    ) ,
    "LOAD_EXT_FILE" => "SqlInjectDog",
);
