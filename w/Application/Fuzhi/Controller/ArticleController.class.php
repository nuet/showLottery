<?php
namespace Fuzhi\Controller;
class ArticleController extends HomeController
{
    public function index()
    {
        $category = $this->category();
        $this->assign('category', $category);
        $this->display($category['template_index']);
    }

    public function lists($p = 1)
    {
        $category = $this->category();
        $Document = D('Document');
        $list = $Document->page($p, $category['list_row'])->lists($category['id']);
        if (false === $list) {
            $this->error('获取列表数据失败！');
        }
        $this->assign('category', $category);
        $this->assign('list', $list);
        $this->display($category['template_lists']);
    }

    public function detail($id = 0, $p = 1)
    {
        if (!($id && is_numeric($id))) {
            $this->error('文档ID错误！');
        }
        $p = intval($p);
        $p = empty($p) ? 1 : $p;
        $Document = D('Document');
        $info = $Document->detail($id);
        if (!$info) {
            $this->error($Document->getError());
        }
        $category = $this->category($info['category_id']);
        if (!empty($info['template'])) {
            $tmpl = $info['template'];
        } elseif (!empty($category['template_detail'])) {
            $tmpl = $category['template_detail'];
        } else {
            $tmpl = 'Article/' . get_document_model($info['model_id'], 'name') . '/detail';
        }
        $map = array('id' => $id);
        $Document->where($map)->setInc('view');
        $this->assign('category', $category);
        $this->assign('info', $info);
        $this->assign('page', $p);
        $this->display($tmpl);
    }

    private function category($id = 0)
    {
        $id = $id ? $id : I('get.category', 0);
        if (empty($id)) {
            $this->error('没有指定文档分类！');
        }
        $category = D('Category')->info($id);
        if ($category && 1 == $category['status']) {
            switch ($category['display']) {
                case 0:
                    $this->error('该分类禁止显示！');
                    break;
                default:
                    return $category;
            }
        } else {
            $this->error('分类不存在或被禁用！');
        }
    }
}