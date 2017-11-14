$(document).ready(function () {
    // 清空现有数据
    function emptyall() {
        $("#content").empty();
        $("#test").empty();
    }

    var DataNow = new Date();
    $("#index_data").val(DataNow.toLocaleDateString() + "," + DataNow.getDay());
    var xingqi = "";
    switch (DataNow.getDay()) {
        case 0:
            xingqi = "星期天";
            break;
        case 1:
            xingqi = "星期一";
            break;
        case 2:
            xingqi = "星期二";
            break;
        case 3:
            xingqi = "星期三";
            break;
        case 4:
            xingqi = "星期四";
            break;
        case 5:
            xingqi = "星期五";
            break;
        case 6:
            xingqi = "星期六";
            break;
    }
    $("#zywd").click(function () {
        emptyall();
        /*目标*/
        var mb = $("#index_mb").val();
        /*实际销量*/
        var trues = $("#index_true").val();
        /*差异*/
        var cy = (trues - mb).toFixed(2);

        /*堂吃*/
        var tc = $("#index_tc").val();
        /*堂吃占比*/
        var tczb = Math.floor((tc / trues * 100) * 100) / 100 + "%";

        /*外带*/
        var wd = $("#index_wd").val();
        /*外带占比*/
        var wdzb = Math.floor((wd / trues * 100) * 100) / 100 + "%";

        /*外送*/
        var ws = $("#index_ws").val();
        /*外送占比*/
        var wszb = Math.floor((ws / trues * 100) * 100) / 100 + "%";

        /*自取*/
        var zq = $("#index_zq").val();
        /*自取占比*/
        var zqzb = Math.floor((zq / trues * 100) * 100) / 100 + "%";

        /*达标率*/
        var dbl = Math.floor((trues / mb * 100) * 100) / 100 + "%";

        /*目标达成*/
        var mbz = (trues - mb).toFixed(2);

        /*杯单价*/
        var bs = $("#index_bs").val();
        //var bsje = $("#index_bsje").val();
        var bdj = Math.floor((trues / bs * 100)) / 100;

        /*生产力*/
        var scl1 = $("#index_true").val() / $("#index_scl").val();
        var scl = scl1.toFixed(2);

        var line1 =
            "<li>" + "店面:" + $("#index_name").val() + "</li>" +
            "<li>" + "日期：" + DataNow.toLocaleDateString() + "</li>" +
            "<li>" + xingqi + "</li>" +
            "<li>" + "实际销量：" + $("#index_true").val() + "</li>" +
            "<li>" + "现金：" + $("#index_xj").val() + "</li>" +
            "<li>" + "微信支付：" + $("#index_wx").val() + "</li>" +
            "<li>" + "支付宝：" + $("#index_zfb").val() + "</li>" +
            "<li>" + "银行卡：" + $("#index_yhk").val() + "</li>" +
            "<li>" + "美团外卖线上支付：" + $("#index_mtxs").val() + "</li>" +
            "<li>" + "百度外卖线上支付：" + $("#index_bdxs").val() + "</li>" +
            "<li>" + "饿了么外卖线上支付：" + $("#index_elmxs").val() + "</li>" +
            "<li>" + "堂吃：" + tc + "</li>" +
            "<li>" + "堂吃占比：" + tczb + "</li>" +
            "<li>" + "外带：" + wd + "</li>" +
            "<li>" + "外带占比：" + wdzb + "</li>" +
            "<li>" + "外送：" + ws + "</li>" +
            "<li>" + "外送占比：" + wszb + "</li>" +
            "<li>" + "杯数：" + bs + "</li>" +
            "<li>" + "杯单价：" + bdj + "</li>" +
            "<li>" + "来客数：" + $("#index_lks").val() + "</li>" +
            "<li>" + "客单价：" + $("#index_kdj").val() + "</li>" +
            "<li>" + "现金折扣小计：" + $("#index_xjzkxj").val() + "</li>" +
            "<li>" + "小料：" + $("#index_xlje").val() + "</li>" +
            "<li>" + "天气：" + $("#index_tq").val() + "</li>" +
            "<li>" + "生产力：" + scl + "</li>" +
            "<li>" + "目标：" + $("#index_mb").val() + "&nbsp&nbsp&nbsp" + mbz + "</li>";

        $("#test").append(line1);
    })
})
