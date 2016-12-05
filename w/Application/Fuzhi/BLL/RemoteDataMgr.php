<?php
namespace Fuzhi\BLL;
class RemoteDataMgr
{
    static function getData($url, $postParam = "", $cacheName = NULL, $expire = 60)
    {
        $ret = null;
        $refresh = true;
        if ($cacheName) {
            $ret = S($cacheName);
            if ($ret === false) {
            } else if ($ret != '') {
                $refresh = false;
            }
        }
        if ($refresh) {
            $ret = fopen_url($url, $postParam);
            if ($cacheName && $ret != '') {
                S($cacheName, $ret, array('type' => 'file', 'expire' => $expire));
            }
        }
        RemoteDataMgr::record($cacheName, $ret);
        return $ret;
    }

    static public function record($fileName, $data)
    {
        $fileName = str_replace(":", "_", $fileName);
        $fileName = str_replace("/", "_", $fileName);
        $fileName = str_replace("\\", "_", $fileName);
        $fileName = str_replace("|", "_", $fileName);
        $fileName = str_replace("?", "_", $fileName);
        $fileName = str_replace("<", "_", $fileName);
        $fileName = str_replace(">", "_", $fileName);
        $fileName = str_replace("*", "_", $fileName);
        $fileName = str_replace("\"", "_", $fileName);
        $values = serialize($data);
        $file = fopen("datapages/" . $fileName, 'w');
        if ($file) {
            fwrite($file, $values);
            fclose($file);
        } else return false;
    }
}