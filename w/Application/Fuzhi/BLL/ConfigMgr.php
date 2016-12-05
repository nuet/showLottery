<?php
namespace Fuzhi\BLL;

class ConfigMgr
{
    function getString($module, $group, $key)
    {
        $ret = '';
        $sql = "select zmt_value from `lot_zst_meta` where zmt_group=UPPER('{$group}') and zmt_key=UPPER('{$key}')";
		//die($sql);
        $arrayResult = $module->query($sql);
        if (count($arrayResult) > 0) {
            $ret = $arrayResult[0]['zmt_value'];
        }
        return $ret;
    }
    function getInt($module, $group, $key)
    {
        return (int) $this->getString($module, $group, $key);
    }
    function setValue($module, $group, $key, $value)
    {
        $sql = '';
        $ret = 0;
        $oldValue = $this->getString($module, $group, $key);
        if ($oldValue == '') {
            $sql = "insert into `lot_zst_meta` values(UPPER('{$group}'),UPPER('{$key}'),'{$value}')";
        } else {
            if ($oldValue != $value) {
                $value = wjStrFilter($value);
                $sql = "update `lot_zst_meta` set zmt_value='{$value}' where zmt_group=UPPER('{$group}') and zmt_key=UPPER('{$key}')";
            }
        }
        if ($sql != '') {
            $ret = $module->execute($sql);
        }
        return $ret;
    }
}