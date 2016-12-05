<?php
namespace Fuzhi\Controller;

class IndexController extends HomeController
{
    public function index()
    {
        $perPage = 10;
        $ids = D('Category')->getChildrenId(1);
		//dump($ids);die;
        $lists = D('Document')->page(1, $perPage)->lists(52);
        foreach ($lists as $seq => $doc) {
            if ($doc["category_id"] == "43") {
                $lists[$seq]["lottory"] = 'cqssc';
            } else {
                if ($doc["category_id"] == "2") {
                    $lists[$seq]["lottory"] = 'gdkl10';
                } else {
                    if ($doc["category_id"] == "39") {
                        $lists[$seq]["lottory"] = 'jsk3';
                    } else {
                        if ($doc["category_id"] == "40") {
                            $lists[$seq]["lottory"] = 'tjssc';
                        } else {
							if ($doc["category_id"] == "47") {
                            $lists[$seq]["lottory"] = 'xjssc';
                        } else {
                            if ($doc["category_id"] == "41") {
                                $lists[$seq]["lottory"] = 'kl8';
                            } else {
                                if ($doc["category_id"] == "42") {
                                    $lists[$seq]["lottory"] = 'pk10';
                                } else {
                                    if ($doc["category_id"] == "44") {
                                        $lists[$seq]["lottory"] = 'shssl';
                                    } else {
                                        if ($doc["category_id"] == "45") {
                                            $lists[$seq]["lottory"] = 'xync';
                                        }else{
											if ($doc["category_id"] == "48") {
                                            $lists[$seq]["lottory"] = 'gd11x5';
                                        }else{
											if ($doc["category_id"] == "49") {
                                            $lists[$seq]["lottory"] = 'xyft';
                                        }else{
											if ($doc["category_id"] == "50") {
                                            $lists[$seq]["lottory"] = 'fc3d';
                                        }else{
											if ($doc["category_id"] == "51") {
                                            $lists[$seq]["lottory"] = 'pl3';
                                        }
										}
										}
										}
										}
                                    }
                                }
						}}
                        }
                    }
                }
            }
        }
		$lists1 = D('Document')->page(1, $perPage)->lists(42);
        foreach ($lists1 as $seq => $doc) {
            if ($doc["category_id"] == "43") {
                $lists1[$seq]["lottory"] = 'cqssc';
            } else {
                if ($doc["category_id"] == "2") {
                    $lists1[$seq]["lottory"] = 'gdkl10';
                } else {
                    if ($doc["category_id"] == "39") {
                        $lists1[$seq]["lottory"] = 'jsk3';
                    } else {
                        if ($doc["category_id"] == "40") {
                            $lists1[$seq]["lottory"] = 'tjssc';
                        } else {
							if ($doc["category_id"] == "47") {
                            $lists1[$seq]["lottory"] = 'xjssc';
                        } else {
                            if ($doc["category_id"] == "41") {
                                $lists1[$seq]["lottory"] = 'kl8';
                            } else {
                                if ($doc["category_id"] == "42") {
                                    $lists1[$seq]["lottory"] = 'pk10';
                                } else {
                                    if ($doc["category_id"] == "44") {
                                        $lists1[$seq]["lottory"] = 'shssl';
                                    } else {
                                        if ($doc["category_id"] == "45") {
                                            $lists1[$seq]["lottory"] = 'xync';
                                        }else{
											if ($doc["category_id"] == "48") {
                                            $lists1[$seq]["lottory"] = 'gd11x5';
                                        }else{
											if ($doc["category_id"] == "49") {
                                            $lists1[$seq]["lottory"] = 'xyft';
                                        }else{
											if ($doc["category_id"] == "50") {
                                            $lists1[$seq]["lottory"] = 'fc3d';
                                        }else{
											if ($doc["category_id"] == "51") {
                                            $lists1[$seq]["lottory"] = 'pl3';
                                        }
										}
										}
										}
										}
                                    }
                                }
						}}
                        }
                    }
                }
            }
        }
		$this->assign('lists1', array_slice($lists1, 1, 4));
		$pktop = null;
        if (count($lists1) >= 1) {
            $pktop = $lists1[0];
        }
        $this->assign('pktop', $pktop);
        $this->assign('lists',$lists);
		$lists3 = D('Document')->page(1, $perPage)->lists(43);
        foreach ($lists3 as $seq => $doc) {
            if ($doc["category_id"] == "43") {
                $lists3[$seq]["lottory"] = 'cqssc';
            } else {
                if ($doc["category_id"] == "2") {
                    $lists3[$seq]["lottory"] = 'gdkl10';
                } else {
                    if ($doc["category_id"] == "39") {
                        $lists3[$seq]["lottory"] = 'jsk3';
                    } else {
                        if ($doc["category_id"] == "40") {
                            $lists3[$seq]["lottory"] = 'tjssc';
                        } else {
							if ($doc["category_id"] == "47") {
                            $lists3[$seq]["lottory"] = 'xjssc';
                        } else {
                            if ($doc["category_id"] == "41") {
                                $lists3[$seq]["lottory"] = 'kl8';
                            } else {
                                if ($doc["category_id"] == "42") {
                                    $lists3[$seq]["lottory"] = 'pk10';
                                } else {
                                    if ($doc["category_id"] == "44") {
                                        $lists3[$seq]["lottory"] = 'shssl';
                                    } else {
                                        if ($doc["category_id"] == "45") {
                                            $lists3[$seq]["lottory"] = 'xync';
                                        }else{
											if ($doc["category_id"] == "48") {
                                            $lists3[$seq]["lottory"] = 'gd11x5';
                                        }else{
											if ($doc["category_id"] == "49") {
                                            $lists3[$seq]["lottory"] = 'xyft';
                                        }else{
											if ($doc["category_id"] == "50") {
                                            $lists3[$seq]["lottory"] = 'fc3d';
                                        }else{
											if ($doc["category_id"] == "51") {
                                            $lists3[$seq]["lottory"] = 'pl3';
                                        }
										}
										}
										}
										}
                                    }
                                }
						}}
                        }
                    }
                }
            }
        }
        $pktop3 = null;
        if (count($lists3) >= 1) {
            $pktop3 = $lists3[0];
        }
        $this->assign('pktop3', $pktop3);
        $this->assign('lists3', array_slice($lists3, 1, 4));
		$lists4 = D('Document')->page(1, $perPage)->lists(2);
        foreach ($lists4 as $seq => $doc) {
            if ($doc["category_id"] == "43") {
                $lists4[$seq]["lottory"] = 'cqssc';
            } else {
                if ($doc["category_id"] == "2") {
                    $lists4[$seq]["lottory"] = 'gdkl10';
                } else {
                    if ($doc["category_id"] == "39") {
                        $lists4[$seq]["lottory"] = 'jsk3';
                    } else {
                        if ($doc["category_id"] == "40") {
                            $lists4[$seq]["lottory"] = 'tjssc';
                        } else {
							if ($doc["category_id"] == "47") {
                            $lists4[$seq]["lottory"] = 'xjssc';
                        } else {
                            if ($doc["category_id"] == "41") {
                                $lists4[$seq]["lottory"] = 'kl8';
                            } else {
                                if ($doc["category_id"] == "42") {
                                    $lists4[$seq]["lottory"] = 'pk10';
                                } else {
                                    if ($doc["category_id"] == "44") {
                                        $lists4[$seq]["lottory"] = 'shssl';
                                    } else {
                                        if ($doc["category_id"] == "45") {
                                            $lists4[$seq]["lottory"] = 'xync';
                                        }else{
											if ($doc["category_id"] == "48") {
                                            $lists4[$seq]["lottory"] = 'gd11x5';
                                        }else{
											if ($doc["category_id"] == "49") {
                                            $lists4[$seq]["lottory"] = 'xyft';
                                        }else{
											if ($doc["category_id"] == "50") {
                                            $lists4[$seq]["lottory"] = 'fc3d';
                                        }else{
											if ($doc["category_id"] == "51") {
                                            $lists4[$seq]["lottory"] = 'pl3';
                                        }
										}
										}
										}
										}
                                    }
                                }
						}}
                        }
                    }
                }
            }
        }
        $pktop4 = null;
        if (count($lists4) >= 1) {
            $pktop4 = $lists4[0];
        }
        $this->assign('pktop4', $pktop4);
        $this->assign('lists4', array_slice($lists4, 1, 4));
		$lists5 = D('Document')->page(1, $perPage)->lists(48);
        foreach ($lists5 as $seq => $doc) {
            if ($doc["category_id"] == "43") {
                $lists5[$seq]["lottory"] = 'cqssc';
            } else {
                if ($doc["category_id"] == "2") {
                    $lists5[$seq]["lottory"] = 'gdkl10';
                } else {
                    if ($doc["category_id"] == "39") {
                        $lists5[$seq]["lottory"] = 'jsk3';
                    } else {
                        if ($doc["category_id"] == "40") {
                            $lists5[$seq]["lottory"] = 'tjssc';
                        } else {
							if ($doc["category_id"] == "47") {
                            $lists5[$seq]["lottory"] = 'xjssc';
                        } else {
                            if ($doc["category_id"] == "41") {
                                $lists5[$seq]["lottory"] = 'kl8';
                            } else {
                                if ($doc["category_id"] == "42") {
                                    $lists5[$seq]["lottory"] = 'pk10';
                                } else {
                                    if ($doc["category_id"] == "44") {
                                        $lists5[$seq]["lottory"] = 'shssl';
                                    } else {
                                        if ($doc["category_id"] == "45") {
                                            $lists5[$seq]["lottory"] = 'xync';
                                        }else{
											if ($doc["category_id"] == "48") {
                                            $lists5[$seq]["lottory"] = 'gd11x5';
                                        }else{
											if ($doc["category_id"] == "49") {
                                            $lists5[$seq]["lottory"] = 'xyft';
                                        }else{
											if ($doc["category_id"] == "50") {
                                            $lists5[$seq]["lottory"] = 'fc3d';
                                        }else{
											if ($doc["category_id"] == "51") {
                                            $lists5[$seq]["lottory"] = 'pl3';
                                        }
										}
										}
										}
										}
                                    }
                                }
						}}
                        }
                    }
                }
            }
        }
         $pktop5 = null;
        if (count($lists5) >= 1) {
            $pktop5 = $lists5[0];
        }
        $this->assign('pktop5', $pktop5);
        $this->assign('lists5', array_slice($lists5, 1, 4));
        $lists2 = D('Document')->lists(46);
        foreach ($lists2 as $seq => $doc) {
            $pic = get_cover($doc["cover_id"]);
            $lists2[$seq]['cover_path'] = $pic["path"];
        }
        $this->assign('lists2', $lists2);
		//dump($lists2);die;
        $module = M();
        $threads = $module->query("SELECT a.* FROM dz_forum_thread as a order by tid desc limit 1");
        $this->assign('threads', $threads);
		
		$list_pk10 = $module->query("SELECT * FROM lot_data where dat_type=20 order by dat_open_time desc limit 4");
        $this->assign('list_pk10', $list_pk10);
		
		$list_cqssc = $module->query("SELECT * FROM lot_data where dat_type=1 order by dat_open_time desc limit 4");
        $this->assign('list_cqssc', $list_cqssc);
		
		$list_gdkl10 = $module->query("SELECT * FROM lot_data where dat_type=21 order by dat_open_time desc limit 4");
        $this->assign('list_gdkl10', $list_gdkl10);
		
		$list_xync = $module->query("SELECT * FROM lot_data where dat_type=18 order by dat_open_time desc limit 4");
        $this->assign('list_xync', $list_xync);
		
		$list_xjssc = $module->query("SELECT * FROM lot_data where dat_type=35 order by dat_open_time desc limit 4");
        $this->assign('list_xjssc', $list_xjssc);
		
		$list_tjssc = $module->query("SELECT * FROM lot_data where dat_type=3 order by dat_open_time desc limit 4");
        $this->assign('list_tjssc', $list_tjssc);
		
		$list_gd11x5 = $module->query("SELECT * FROM lot_data where dat_type=6 order by dat_open_time desc limit 4");
        $this->assign('list_gd11x5', $list_gd11x5);
		
		$list_jsk3 = $module->query("SELECT * FROM lot_data where dat_type=22 order by dat_open_time desc limit 4");
        $this->assign('list_jsk3', $list_jsk3);
		
        $this->display('Common:index');
    }
}