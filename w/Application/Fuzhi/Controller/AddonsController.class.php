<?php
namespace Fuzhi\Controller;

use Think\Controller;

class AddonsController extends Controller
{
    protected $addons = null;

    public function execute($_addons = null, $_controller = null, $_action = null)
    {
        if (C('URL_CASE_INSENSITIVE')) {
            $_addons = ucfirst(parse_name($_addons, 1));
            $_controller = parse_name($_controller, 1);
        }
        if (!empty($_addons) && !empty($_controller) && !empty($_action)) {
            $Addons = A("Addons://{$_addons}/{$_controller}")->$_action();
        } else {
            $this->error('没有指定插件名称，控制器或操作！');
        }
    }
}