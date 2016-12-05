$(function () {
	LoadPk10Bscount();
});

function LoadPk10Bscount() {
	$.get('pk10/findLonghulishi.do', {
		gameId : 50,
		type : 2,
		rows : 16
	}, function(data) {
//		if (data == null) {
//			return;
////						data = [ {
////							"id" : 57,
////							"createTime" : "2015-01-11",
////							"gameId" : 50,
////							"valueData" : "9,4,6,7,6,7,7,6,8,5",
////							"type" : 1
////						} ]
//		}//{"1":"9,4,","2":"6,7,","3":"6,7,","4":"7,6,","5":"8,5,"}
////		var tr1 = $("#ballstatTable tr").eq(1);
//		var clsName = "odd";
//		var htmlstr = "";
//		for (var i = 0; i < data.length; i++) {
//			var numbers = data[i].valueData.split(',');
////			if (tr1) {
////				clsName = tr1.attr("class") == "odd" ? "even" : "odd";
////			}
//			clsName = clsName == "odd" ? "even" : "odd";
//			htmlstr += '<tr class="' + clsName + '"><td>' + data[i].createTime;
//			htmlstr += '</td>';
//			var tdName = "bg1";
//			for (var j = 0; j < numbers.length; j++) {
//				if (numbers[j] != "") {
//					htmlstr += '<td>' + numbers[j] + '</td>';
//				}
//			}
//			htmlstr += '</tr></td></tr>';
//		}

		$("#numberstatTable").append(data);
	});

}
