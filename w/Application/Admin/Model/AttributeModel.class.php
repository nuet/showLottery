<?php
 namespace Admin\Model; use Think\Model; class AttributeModel extends Model { protected $_validate = array( array('name', 'require', '字段名必须', self::MUST_VALIDATE, 'regex', self::MODEL_BOTH), array('name', '/^[a-zA-Z][\w_]{1,29}$/', '字段名不合法', self::MUST_VALIDATE, 'regex', self::MODEL_BOTH), array('name', 'checkName', '字段名已存在', self::MUST_VALIDATE, 'callback', self::MODEL_BOTH), array('field', 'require', '字段定义必须', self::MUST_VALIDATE, 'regex', self::MODEL_BOTH), array('field', '1,100', '注释长度不能超过100个字符', self::VALUE_VALIDATE, 'length', self::MODEL_BOTH), array('title', '1,100', '注释长度不能超过100个字符', self::VALUE_VALIDATE, 'length', self::MODEL_BOTH), array('remark', '1,100', '备注不能超过100个字符', self::VALUE_VALIDATE, 'length', self::MODEL_BOTH), array('model_id', 'require', '未选择操作的模型', self::MUST_VALIDATE, 'regex', self::MODEL_BOTH), ); protected $_auto = array( array('status', 1, self::MODEL_INSERT, 'string'), array('create_time', 'time', self::MODEL_INSERT, 'function'), array('update_time', 'time', self::MODEL_BOTH, 'function'), ); protected $table_name = null; public function update($data = null, $create = true){ $data = empty($data) ? $_POST : $data; $data = $this->create($data); if(empty($data)){ return false; } if(empty($data['id'])){ $id = $this->add(); if(!$id){ $this->error = '新增属性出错！'; return false; } if($create){ $res = $this->addField($data); if(!$res){ $this->error = '新建字段出错！'; $this->delete($id); return false; } } } else { if($create){ $res = $this->updateField($data); if(!$res){ $this->error = '更新字段出错！'; return false; } } $status = $this->save(); if(false === $status){ $this->error = '更新属性出错！'; return false; } } $model_name = M('Model')->field('name')->find($data['model_id']); $cache_name = C('DB_NAME').'.'.preg_replace('/\W+|\_+/','',$model_name['name']); F($cache_name, null, DATA_PATH.'_fields/'); action_log('update_attribute', 'attribute', $data['id'] ? $data['id'] : $id, UID); return $data; } protected function checkName(){ $name = I('post.name'); $model_id = I('post.model_id'); $id = I('post.id'); $map = array('name'=>$name, 'model_id'=>$model_id); if(!empty($id)){ $map['id'] = array('neq', $id); } $res = $this->where($map)->find(); return empty($res); } protected function checkTableExist($model_id){ $Model = M('Model'); $model = $Model->where(array('id'=>$model_id))->field('name,extend')->find(); if($model['extend'] == 0){ $table_name = $this->table_name = C('DB_PREFIX').strtolower($model['name']); }else{ $extend_model = $Model->where(array('id'=>$model['extend']))->field('name,extend')->find(); $table_name = $this->table_name = C('DB_PREFIX').strtolower($extend_model['name']).'_'.strtolower($model['name']); } $sql = <<<sql
				SHOW TABLES LIKE '{$table_name}';
sql;
$res = M()->query($sql); return count($res); } protected function addField($field){ $table_exist = $this->checkTableExist($field['model_id']); if($field['value'] === ''){ $default = ''; }elseif (is_numeric($field['value'])){ $default = ' DEFAULT '.$field['value']; }elseif (is_string($field['value'])){ $default = ' DEFAULT \''.$field['value'].'\''; }else { $default = ''; } if($table_exist){ $sql = <<<sql
				ALTER TABLE `{$this->table_name}`
ADD COLUMN `{$field['name']}`  {$field['field']} {$default} COMMENT '{$field['title']}';
sql;
}else{ $model_info = M('Model')->field('engine_type,need_pk')->getById($field['model_id']); if($model_info['need_pk']){ $sql = <<<sql
				CREATE TABLE IF NOT EXISTS `{$this->table_name}` (
				`id`  int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '主键' ,
				`{$field['name']}`  {$field['field']} {$default} COMMENT '{$field['title']}' ,
				PRIMARY KEY (`id`)
				)
				ENGINE={$model_info['engine_type']}
				DEFAULT CHARACTER SET=utf8 COLLATE=utf8_general_ci
				CHECKSUM=0
				ROW_FORMAT=DYNAMIC
				DELAY_KEY_WRITE=0
				;
sql;
}else{ $sql = <<<sql
				CREATE TABLE IF NOT EXISTS `{$this->table_name}` (
				`{$field['name']}`  {$field['field']} {$default} COMMENT '{$field['title']}'
				)
				ENGINE={$model_info['engine_type']}
				DEFAULT CHARACTER SET=utf8 COLLATE=utf8_general_ci
				CHECKSUM=0
				ROW_FORMAT=DYNAMIC
				DELAY_KEY_WRITE=0
				;
sql;
} } $res = M()->execute($sql); return $res !== false; } protected function updateField($field){ $table_exist = $this->checkTableExist($field['model_id']); $last_field = $this->getFieldById($field['id'], 'name'); $default = $field['value']!='' ? ' DEFAULT '.$field['value'] : ''; $sql = <<<sql
			ALTER TABLE `{$this->table_name}`
CHANGE COLUMN `{$last_field}` `{$field['name']}`  {$field['field']} {$default} COMMENT '{$field['title']}' ;
sql;
$res = M()->execute($sql); return $res !== false; } public function deleteField($field){ $table_exist = $this->checkTableExist($field['model_id']); $sql = <<<sql
			ALTER TABLE `{$this->table_name}`
DROP COLUMN `{$field['name']}`;
sql;
$res = M()->execute($sql); return $res !== false; } } 