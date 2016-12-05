//是否存在指定函数 
function isExitsFunction(funcName) {
	try {
		if (typeof (eval(funcName)) == "function") {
			return true;
		}
	} catch (e) {
	}
	return false;
}
// 是否存在指定变量
function isExitsVariable(variableName) {
	try {
		if (typeof (variableName) == "undefined") {
			// alert("value is undefined");
			return false;
		} else {
			// alert("value is true");
			return true;
		}
	} catch (e) {
	}
	return false;
}
/**
 * doT编译 模板ID命名必须为xxx-tmpl格式,且要有个ID为xxx-html的对象该对象是编译完成后插入到位置
 * 
 * @param tempId
 * @param data
 */
function doTCompile(tempId, data) {
	$("#" + tempId + "-html").html(
			doT.template($("#" + tempId + "-tmpl").html())
					.apply(null, [ data ]));
}

/**
 * 分页控件 <br>
 * elemet:分页对象 <br>
 * page：当前页 <br>
 * rows：每页显示的行数 <br>
 * nextPageCallback：点击页数时回调的方法<br>
 */
var cpPageOption = {};

var cpPage = function(option) {
	if (!option.rows)
		option.rows = 10;// 默认第1页
	option.showCurPage = option.page - 1;// 设置当前页(页面显示从0开始)
	cpPageOption = option;
};
cpPage.prototype = {
	pagination : function() {
		// JS自定义分页
		$(cpPageOption.elemet).pagination(cpPageOption.totalCount, {
			callback : function(page_id, jq) {
				cpPageOption.page = page_id + 1;
				cpPageOption.nextPageCallback(cpPageOption);
				new cpPage(cpPageOption).pagination();
			},// 回调函数。
			prev_text : " 上一页",
			next_text : "下一页 ",
			items_per_page : cpPageOption.rows, // 每页的数据个数
			num_display_entries : 3, // 两侧首尾分页条目数
			current_page : cpPageOption.showCurPage, // 当前页码
			num_edge_entries : 2
		// 连续分页主体部分分页条目数
		});
	}
}

/**
 * 时间格式化
 * 
 * @param format
 * @returns
 * 
 * var d = new Date().format('yyyy-MM-dd'); <br>
 * console.log(d); // 2013-11-04
 */
Date.prototype.format = function(format) {
	var date = {
		"M+" : this.getMonth() + 1,
		"d+" : this.getDate(),
		"h+" : this.getHours(),
		"m+" : this.getMinutes(),
		"s+" : this.getSeconds(),
		"q+" : Math.floor((this.getMonth() + 3) / 3),
		"S+" : this.getMilliseconds()
	};
	if (/(y+)/i.test(format)) {
		format = format.replace(RegExp.$1, (this.getFullYear() + '')
				.substr(4 - RegExp.$1.length));
	}
	for ( var k in date) {
		if (new RegExp("(" + k + ")").test(format)) {
			format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? date[k]
					: ("00" + date[k]).substr(("" + date[k]).length));
		}
	}
	return format;
}



function numAscSort(a,b)
{
	return a - b;
}

function numDescSort(a,b)
{
	return b - a;
}

function numFromDesc(n1,n2,n3){
	if(n1==0)
		n1=10;
	if(n2==0)
		n2=10;
	if(n3==0)
		n3=10;
	var nums=[n1,n2,n3];
	nums.sort(numAscSort);
	var nfd="杂六";
	var isbs=false;
	var isdz=false;
	for(var i=0;i<3;i++){
		var t1 = nums[i];
		var t2;
		if (i == 2) {
			t2 = nums[0];
		} else {
			t2 = nums[i + 1];
		}
		if (t1 == t2) {
			if (isdz) {
				nfd = "豹子";
				break;
			}
			isdz = true;
			nfd = "对子";
		} else if (!isdz && (t1 - t2 == 1 || t1 - t2 == -1 || t1 - t2 == 9 || t1 - t2 == -9)) {// 判断半顺
			if (isbs
					&& (nums[2] - nums[0] == 2 || nums[2] - nums[0] == -2
							|| nums[2] - nums[0] == 9 || nums[2] - nums[0] == -9)) {// 判断顺子
				nfd = "顺子";
				break;
			}
			isbs = true;
			nfd = "半顺";
		}
	}
	return nfd;
}