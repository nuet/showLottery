//显示柱形图表
//title:标题
//xdata:x轴显示文字（数组）
//ydata:y轴数值（数组）
//fun:鼠标移动显示提示
function showColumn(title, data, fun, useColor) {
    var xData = [];
    var chartData = [];
    for (var i = 0; i < data.length; i++) {
        xData.push(data[i].Name);
        var obj = { name: data[i].Key, y: data[i].Value };
        if(useColor){
            obj.color= getColor(data[i].Key)
        }
        chartData.push(obj);
    }

    var chart = new Highcharts.Chart({
        chart: {
            renderTo: 'chartcontainer',
            defaultSeriesType: 'column'
        },
        title: {
            text: title,
            style: { fontWeight: 'bold' }
        },
        xAxis: {
            categories: xData,
            labels: {
                style: { fontWeight: 'bold' }
            }
        },
        yAxis: {
            // min: 0,
            // max: 15,
            // tickPixelInterval:50,
            title: { text: '' }
        },
        legend: { enabled: false },
        tooltip: {
            enable: fun ? true : false,
            formatter: fun
        },
        plotOptions: {
            column: {
                pointPadding: 0,
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold'
                    }
                }
            }
        },
        credits: {
            enabled: true,
            href: '',
            text: '',
            target:'_blank',
            position: {
                align: 'right',
                y: 15,
                verticalAlign: 'top'
            },
            style: {
                fontWeight: 'bold'
            }
        },
        series: [{ name: 'data', data: chartData}]
    });
}
//显示曲线图表
//title:标题
//data:x轴显示文字（Json数组）
//fun:鼠标移动显示提示
//ymin:y轴显示最小值
//ymax:y轴显示最大值
function showChartline(title,data, fun, ymin, ymax,showLogo,colorIndex,container) {
    var xData = [];
    var chartData = [];
    var color = chartColor[colorIndex];
    for (var i = 0; i < data.length; i++) {
        xData.push(data[i].Key);
        var obj = { name: data[i].Key, y: data[i].Value };
        chartData.push(obj);
    }
    //alert(container+','+title);
    var chart = new Highcharts.Chart({
        chart: {
            renderTo:  container  || 'container',
            defaultSeriesType: 'spline'
        },
        title: {
            text: title,
            style: { 'font-weight': 'bold' }
        },
        xAxis: {
            categories: xData,
            labels: {
                style: { fontWeight: 'bold' }
            }
        },
        yAxis: {
            min: ymin,
            max: ymax,
            tickPixelInterval: 50,
            title: { text: '' }
        },
        legend: { enabled: false },
        tooltip: {
            enable: fun ? true : false,
            formatter: fun
        },
        plotOptions: {
            spline: {
                pointPadding: 0,
                borderWidth: 0,
                dataLabels: { enabled: true }
            }
        },
        credits: {
            enabled: showLogo,
            href: '',
            text: '',
            position: {
                align: 'right',
                y: 15,
                verticalAlign: 'top'
            },
            style: {
                fontWeight: 'bold'
            }
        },
        series: [{ name: 'data', data: chartData, color: color}]
    });
}



//获取颜色
function getColor(name) {
    //默认颜色
    if(name.length==0||name=="default"){
        return chartColor[0];
    }
    return chartColor[0];
}
var chartColor = ['#AA4643', '#4572A7', '#89A54E', '#80699B', '#3D96AE', '#DB843D', '#92A8CD', '#A47D7C', '#B5CA92'];
//ydata数值有3种常用格式：
//1、[29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]    //简单数组
//2、 [[0, 29.9], [1, 71.5], [3, 106.4]]                                               //[[键,值],[键,值]...]
//3、[{name: 'Point 1',color: '#00FF00',y: 1}, {name: 'Point 2',color: '#FF00FF',y: 5}]  //对象数组