var DataNow = new Date();
var app = new Vue({
    el: '#app',
    data: {
        name: '',
        sjxl: '4000',
        qxxj: '3000',
        wxzf: '1',
        zfb: '1',
        yhk: '1',
        mtwmxsd: '1',
        mtwmxsy: '1',
        elmwmxsd: '1',
        elmwmxsy: '1',
        mttgd: '1',
        mttgy: '1',
        tc: '3440',
        wd: '764',
        ws: '306.5',
        bs: '10',
        lks: '90',
        kdj: '33',
        xjzkxjd: '0',
        xjzkxjy: '0',
        xl: '0',
        gs: '45',
        tq: '阴',
        xingqi: '',
        rq: '',
        tczb: '',
        wdzb: '',
        wszb: '',
        bdj: '',
        scl: '',
        zje: '',
        textarea: '',
        newMember: '0',
        texttishi: '点我复制哦！！！',
        show: false,
        options: [{
          value: '眉山万达鲜芋仙',
          label: '眉山万达鲜芋仙'
        }, {
          value: '资阳万达鲜芋仙',
          label: '资阳万达鲜芋仙'
        }, {
          value: '雅安万达鲜芋仙',
          label: '雅安万达鲜芋仙'
        }, {
          value: '遂宁万达鲜芋仙',
          label: '遂宁万达鲜芋仙'
        }],
        useElement: false,
        useMtTuanGou: false
    },
    methods: {
        count: function () {
            this.texttishi = '点我复制哦！！！'
            /*日期*/
            this.rq = DataNow.toLocaleDateString()
            switch (DataNow.getDay()) {
                case 0:
                    this.xingqi = "星期天";
                    break;
                case 1:
                    this.xingqi = "星期一";
                    break;
                case 2:
                    this.xingqi = "星期二";
                    break;
                case 3:
                    this.xingqi = "星期三";
                    break;
                case 4:
                    this.xingqi = "星期四";
                    break;
                case 5:
                    this.xingqi = "星期五";
                    break;
                case 6:
                    this.xingqi = "星期六";
                    break;
            }
            /*堂吃占比*/
            this.tczb = Math.floor((this.tc / this.sjxl * 100) * 100) / 100 + "%"

            /*外带占比*/
            this.wdzb = Math.floor((this.wd / this.sjxl * 100) * 100) / 100 + "%";

            /*外送占比*/
            this.wszb = Math.floor((this.ws / this.sjxl * 100) * 100) / 100 + "%";

            /*杯单价*/
            this.bdj = Math.floor((this.sjxl / this.bs * 100)) / 100;

            /*生产力*/
            this.scl = (this.sjxl / this.gs).toFixed(2);

            /*总金额*/
            this.zje = Number(this.qxxj) + Number(this.wxzf) + Number(this.zfb) + Number(this.yhk) + Number(this.mtwmxsy)

            if (this.useElement) {
              this.zje += Number(this.elmwmxsy)
            }
            if (this.useMtTuanGou) {
              this.zje += Number(this.mttgy)
            }
            /*复制到剪切板*/
            this.textarea = "店面：" + this.name + "\n"
                + "日期：" + this.rq + "\n" + this.xingqi + "\n"
                + "实际销量：" + this.sjxl + "\n"
                + "现金总和：" + this.zje + "\n"
                + "钱箱现金：" + this.qxxj + "\n"
                + "微信支付：" + this.wxzf + "\n"
                + "支付宝：" + this.zfb + "\n"
                + "银行卡：" + this.yhk + "\n"
                + "美团外卖线上支付：" + this.mtwmxsd + "单" + this.mtwmxsy + "元" + "\n"

            if (this.useElement) {
              this.textarea += "饿了么外卖线上支付：" + this.elmwmxsd + "单" + this.elmwmxsy + "元" + "\n"
            }
            if (this.useMtTuanGou) {
              this.textarea += "美团团购：" + this.mttgd + "单" + this.mttgy + "元" + "\n"
            }

            this.textarea += "堂吃：" + this.tc + "\n"
                + "堂吃占比：" + this.tczb + "\n"
                + "外带：" + this.wd + "\n"
                + "外带占比：" + this.wdzb + "\n"
                + "外送：" + this.ws + "\n"
                + "外送占比：" + this.wszb + "\n"
                + "杯数：" + this.bs + "\n"
                + "杯单价：" + this.bdj + "\n"
                + "来客数：" + this.lks + "\n"
                + "客单价：" + this.kdj + "\n"
                + "现金折扣小计：" + this.xjzkxjd + "单" + this.xjzkxjy + "元" + "\n"
                + "小料：" + this.xl + "\n"
                + "天气：" + this.tq + "\n"
                + "生产力：" + this.scl + "\n"
                + "新增会员数：" + this.newMember + "\n"

            this.show = true

        },
        onCopy: function (e) {
            this.texttishi = "已复制!"
        },
        onError: function (e) {
            this.texttishi = "复制失败!"
        }
    }
})