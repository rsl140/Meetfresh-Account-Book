$(document).ready(function(){
			// 清空现有数据
		function emptyall(){
			$("#content").empty();
			$("#test").empty();
		}

		$("#button1").click(function(){		
			$("#test").empty();	

			/*目标*/
			var mb=$("#index_mb").val();
			/*实际销量*/
			var trues=$("#index_true").val();
			/*差异*/
			var cy=(trues-mb).toFixed(2);
			
			/*堂吃*/
			var tc=$("#index_tc").val();
			/*堂吃占比*/
			var tczb=Math.floor((tc/trues*100) * 100) / 100+"%";
			
			/*外带*/
			var wd=$("#index_wd").val();
			/*外带占比*/
			var wdzb=Math.floor((wd/trues*100) * 100) / 100+"%";
			
			/*外送*/
			var ws=$("#index_ws").val();
			/*外送占比*/
			var wszb=Math.floor((ws/trues*100) * 100) / 100+"%";
			
			/*自取*/
			var zq=$("#index_zq").val();
			/*自取占比*/
			var zqzb=Math.floor((zq/trues*100) * 100) / 100+"%";
			
			/*达标率*/
			var dbl=Math.floor((trues/mb*100) * 100) / 100+"%";
			
			/*杯单价*/
			var bs=$("#index_bs").val();
			var bsje=$("#index_bsje").val();
			var bdj=Math.floor((bsje/bs*100)) / 100;
			
			/*生产力*/
			var scl1=$("#index_true").val()/$("#index_scl").val();
			var scl=scl1.toFixed(2);

			var other=","+$("#xj").text()+$("#index_xj").val()+","+$("#ylk").text()+$("#index_yl").val()+","+$("#zfb").text()+$("#index_zfb").val()+
			","+$("#dzsh").text()+$("#index_dzsh").val()+","+$("#mtsf").text()+$("#index_mtsh").val()+","+$("#nmsf").text()+$("#index_nmsf").val()
			+","+$("#bdxs").text()+$("#index_bdxs").val()+","+$("#mtxs").text()+$("#index_mtxs").val()+","+$("#ele").text()+$("#index_elexs").val()
			+","+$("#wxhy").text()+$("#index_wxhy").val()+","+$("#wxzf").text()+$("#index_wxzf").val()+","+$("#dzj").text()+$("#index_dzj").val()
            	+","+$("#ggj").text()+$("#index_ggj").val()+","+$("#ydjf").text()+$("#index_ydjf").val()
            	+","+$("#chjf").text()+$("#index_chjf").val();
            
            var footer=","+$("#tc").text()+":"+$("#index_tc").val()+","+$("#tc").text()+"占比："+tczb+
            ","+$("#wd").text()+"："+$("#index_wd").val()+","+$("#wd").text()+"占比："+wdzb+
            ","+$("#ws").text()+"："+$("#index_ws").val()+","+$("#ws").text()+"占比："+wszb+
            ","+$("#zq").text()+"："+$("#index_zq").val()+","+$("#zq").text()+"占比："+zqzb
            +","+$("#bs").text()+"："+$("#index_bs").val()+",杯单价:"+bdj+",来客数："+$("#index_lks").val()+",客单价："+$("#index_kdj").val();
			
			var footer2=","+$("#o_1").text()+$("#index_o_1").val()+
			","+$("#o_2").text()+$("#index_o_2").val()+
			","+$("#o_3").text()+$("#index_o_3").val()+
			","+$("#o_4").text()+$("#index_o_4").val()+
			","+$("#o_5").text()+$("#index_o_5").val()+
			","+$("#o_6").text()+$("#index_o_6").val()+
			","+$("#o_7").text()+$("#index_o_7").val()+",生产力:"+scl+
			//","+$("#o_8").text()+$("#index_o_8").val()+
			","+$("#o_9").text()+$("#index_o_9").val()+
			","+$("#o_10").text()+$("#index_o_10").val()+
			","+$("#o_11").text()+$("#index_o_11").val()+
			","+$("#o_12").text()+$("#index_o_12").val()+
			","+$("#o_13").text()+$("#index_o_13").val()+
			","+$("#o_14").text()+$("#index_o_14").val()+
			","+$("#tq").text()+":"+$("#index_tq").val();
			
			var header=$("#index_name").val()+","+$("#index_data").val()+",目标:"+mb+
			",实际销量:"+trues+",差异:"+cy+",达标率:"+dbl+other+footer+footer2;
			
			$("#content").text(header);
		})
		
		$("#button2").click(function(){
			
			emptyall();
			/*目标*/
			var mb=$("#index_mb").val();
			/*实际销量*/
			var trues=$("#index_true").val();
			var wcbl=Math.floor((trues/mb*100) * 100) / 100+"%";
			var ywcbl=Math.floor(($("#index_ljyye").val()/$("#index_ygyye").val()*100) * 100) / 100+"%";
			var cph=($("#index_lks").val()/$("#index_scl").val()).toFixed(2);
			/*外送*/
			var ws=$("#index_ws").val();
			/*外送占比*/
			var wszb=Math.floor((ws/trues*100) * 100) / 100+"%";

			var wcbl=Math.floor((trues/mb*100) * 100) / 100+"%";
			var ywcbl=Math.floor(($("#index_ljyye").val()/$("#index_ygyye").val()*100) * 100) / 100+"%";
			var cph=($("#index_lks").val()/$("#index_scl").val()).toFixed(2);
			
			var line1="<li>"+"工作总结:"+"</li>"+
			"<li>"+"店面:"+$("#index_name").val()+"</li>"+
			"<li>"+"日期："+$("#index_data").val()+"</li>"+
			"<li>"+"星期：星期"+$("#index_xq").val()+"</li>"+
			"<li>"+"天气："+$("#index_tq").val()+"</li>"+
			"<li>"+"预估营业额："+$("#index_mb").val()+"</li>"+
			"<li>"+"实际完成："+$("#index_true").val()+"(支付宝"+$("#index_zfb").val()+")"+"</li>"+
			"<li>"+"完成比例："+wcbl+"</li>"+
			"<li>"+"本周目标："+$("#index_bzmb").val()+"</li>"+
			"<li>"+"本周实际："+$("#index_bzsj").val()+"</li>"+
			"<li>"+"累计营业额："+$("#index_ljyye").val()+"</li>"+
			"<li>"+"月完成比例："+ywcbl+"</li>"+
			"<li>"+"客单数："+$("#index_kds").val()+"</li>"+
			"<li>"+"客单价："+$("#index_kdj").val()+"</li>"+
			"<li>"+"CPH值："+cph+"</li>"+
			"<li>"+"美团外送："+$("#index_mtws").val()+"</li>"+
			"<li>"+"百度外送："+$("#index_bdws").val()+"</li>"+
			"<li>"+"饿了么外送："+$("#index_elmws").val()+"</li>"+
			"<li>"+"外送总金额："+$("#index_ws").val()+"</li>"+
			//"<li>"+"外送占比："+wszb+"</li>"+
			//"<li>"+"福袋售卖："+$("#index_o_8").val()+"</li>"+
			//"<li>"+"福袋第一阶段目标："+$("#index_fd_1").val()+"</li>"+
			//"<li>"+"福袋第二阶段售卖："+$("#index_fd_1m").val()+"</li>"+
			"<li>"+"微信支付："+$("#index_wxzf").val()+"</li>"+
			"<li>"+"小料数量："+$("#index_xlsl").val()+"</li>"+
			"<li>"+"小料金额："+$("#index_xlje").val()+"</li>"+
			"<li>"+"新品份数："+$("#index_xpfs").val()+"</li>"+
			"<li>"+"海苔酥售卖量："+$("#index_hts").val()+"</li>"+
			"<li>"+"今日未完成目标："+$("#index_wwcmb").val()+"</li>"+
			"<li>"+"值班人："+$("#index_zbr").val()+"</li>";
			$("#test").append(line1);
		})
		
	$("#button3").click(function(){
		emptyall();
			/*目标*/
			var mb=$("#index_mb").val();
			/*实际销量*/
			var trues=$("#index_true").val();
			/*完成比例*/
			var wcbl=Math.floor((trues/mb*100) * 100) / 100+"%";
			/*月完成比例*/
			var ywcbl=Math.floor(($("#index_ljyye").val()/$("#index_ygyye").val()*100) * 100) / 100+"%";
			/*CPH*/
			var cph=($("#index_lks").val()/$("#index_scl").val()).toFixed(2);
			/*外送*/
			var ws=$("#index_ws").val();
			/*外送占比*/
			var wszb=Math.floor((ws/trues*100) * 100) / 100+"%";
			
			var line1="<li>"+"工作总结:"+"</li>"+
			"<li>"+"店面:"+$("#index_name").val()+"</li>"+
			"<li>"+"日期："+$("#index_data").val()+"</li>"+
			"<li>"+"星期：星期"+$("#index_xq").val()+"</li>"+
			"<li>"+"天气："+$("#index_tq").val()+"</li>"+
			"<li>"+"预估营业额："+$("#index_mb").val()+"</li>"+
			"<li>"+"实际完成："+$("#index_true").val()+"</li>"+
			"<li>"+"完成比例："+wcbl+"</li>"+
			"<li>"+"同比上周："+$("#index_tbsz1").val()+"</li>"+
			"<li>"+"本周目标："+$("#index_bzmb").val()+"</li>"+
			"<li>"+"本周实际："+$("#index_bzsj").val()+"</li>"+
			"<li>"+"累计营业额："+$("#index_ljyye").val()+"</li>"+
			"<li>"+"月完成比例："+ywcbl+"</li>"+
			"<li>"+"客单数："+$("#index_kds").val()+"</li>"+
			"<li>"+"同比上周："+$("#index_tbsz2").val()+"</li>"+
			"<li>"+"客单价："+$("#index_kdj").val()+"</li>"+
			"<li>"+"CPH值："+cph+"</li>"+
			"<li>"+"美团外送："+$("#index_mtws").val()+"</li>"+
			"<li>"+"百度外送："+$("#index_bdws").val()+"</li>"+
			"<li>"+"饿了么外送："+$("#index_elmws").val()+"</li>"+
			"<li>"+"外送总金额："+$("#index_ws").val()+"</li>"+
			//"<li>"+"外送占比："+wszb+"</li>"+
			//"<li>"+"福袋售卖："+$("#index_o_8").val()+"</li>"+
			//"<li>"+"福袋第一阶段目标："+$("#index_fd_1").val()+"</li>"+
			//"<li>"+"福袋第二阶段目标："+$("#index_fd_2").val()+"</li>"+
			//"<li>"+"福袋第二阶段售卖："+$("#index_fd_1m").val()+"</li>"+
			"<li>"+"微信支付："+$("#index_wxzf").val()+"</li>"+
			"<li>"+"小料数量："+$("#index_xlsl").val()+"</li>"+
			"<li>"+"小料金额："+$("#index_xlje").val()+"</li>"+
			"<li>"+"新品份数："+$("#index_xpfs").val()+"</li>"+
			"<li>"+"海苔酥："+$("#index_hts").val()+"</li>"+
			"<li>"+"小时客单最低时段："+$("#index_xszd").val()+"</li>"+
			"<li>"+"今日完成预估目标："+$("#index_wcmb").val()+"</li>"+
			"<li>"+"值班人："+$("#index_zbr").val()+"</li>";
			$("#test").append(line1);
		})
	$("#zywd").click(function(){
		emptyall();
			/*目标*/
			var mb=$("#index_mb").val();
			/*实际销量*/
			var trues=$("#index_true").val();
			/*差异*/
			var cy=(trues-mb).toFixed(2);
			
			/*堂吃*/
			var tc=$("#index_tc").val();
			/*堂吃占比*/
			var tczb=Math.floor((tc/trues*100) * 100) / 100+"%";
			
			/*外带*/
			var wd=$("#index_wd").val();
			/*外带占比*/
			var wdzb=Math.floor((wd/trues*100) * 100) / 100+"%";
			
			/*外送*/
			var ws=$("#index_ws").val();
			/*外送占比*/
			var wszb=Math.floor((ws/trues*100) * 100) / 100+"%";
			
			/*自取*/
			var zq=$("#index_zq").val();
			/*自取占比*/
			var zqzb=Math.floor((zq/trues*100) * 100) / 100+"%";
			
			/*达标率*/
			var dbl=Math.floor((trues/mb*100) * 100) / 100+"%";
			
			/*杯单价*/
			var bs=$("#index_bs").val();
			var bsje=$("#index_bsje").val();
			var bdj=Math.floor((bsje/bs*100)) / 100;
			
			/*生产力*/
			var scl1=$("#index_true").val()/$("#index_scl").val();
			var scl=scl1.toFixed(2);

		var line1=
			"<li>"+"店面:"+$("#index_name").val()+"</li>"+
			"<li>"+"日期："+$("#index_data").val()+"</li>"+
			"<li>"+"实际销量："+$("#index_true").val()+"</li>"+
			"<li>"+"现金："+$("#index_xj").val()+"</li>"+
			"<li>"+"美团外卖线上支付："+$("#index_mtxs").val()+"</li>"+
			"<li>"+"堂吃："+tc+"</li>"+
			"<li>"+"堂吃占比："+tczb+"</li>"+
			"<li>"+"外带："+wd+"</li>"+
			"<li>"+"外带占比："+wdzb+"</li>"+
			"<li>"+"外送："+ws+"</li>"+
			"<li>"+"外送占比："+wszb+"</li>"+
			"<li>"+"杯数："+bs+"</li>"+
			"<li>"+"杯单价："+bdj+"</li>"+
			"<li>"+"来客数："+$("#index_lks").val()+"</li>"+
			"<li>"+"客单价："+$("#index_kdj").val()+"</li>"+
			"<li>"+"现金折扣小计："+$("#index_xjzkxj").val()+"</li>"+
			"<li>"+"小料："+$("#index_xlje").val()+"</li>"+
			"<li>"+"天气："+$("#index_tq").val()+"</li>"+
			"<li>"+"生产力："+scl+"</li>";
			
			$("#test").append(line1);
	})
})