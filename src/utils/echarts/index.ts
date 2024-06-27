import { useDebounceFn } from '@vueuse/core';
import * as echarts from 'echarts';

class AutoEchart {
    node: HTMLElement;
    chart: echarts;
    constructor(nodeIns: HTMLElement) {
        this.node = nodeIns;
        this.initChart();
    }

    // 初始化图表
    initChart() {
        if (this.node) {
            this.chart = echarts.init(this.node);
            this.chart.showLoading({
                color: '#4960a6',
                maskColor: 'rgba(255, 255, 255, 0.2)',
                zlevel: 0,
            });
        }
    }

    // 设置图表的配置
    async setOption(option: any, fetchEchartData: any, params: any) {
        const res = await fetchEchartData(params);
        if (res && this.chart) {
            const { data, x } = res;
            option.series[0].data = data;
            option.xAxis.data = x;
            this.chart.hideLoading();
            this.chart.setOption(option);
        }
    }

    // 更新图表的数据
    updateData(params:any) {
        if (this.chart) {
            const { data, x } = params;
            const option = this.chart.getOption();
            this.chart.clear();
            option.series[0].data = data;
            option.xAxis.data = x;
            this.chart.setOption(option, true);
        }
    }

    // 处理图表的resize
    resize = useDebounceFn(() => {
        if (this.chart) {
            this.chart.resize();
        }
    }, 300);

    // 下载
    downloadImage() {
        const url = this.chart.getDataURL({
            type: 'png',
            pixelRatio: 2,
            backgroundColor: '#fff',
        });
        const link = document.createElement('a');
        link.href = url;
        link.download = 'chart.png';
        link.click();
    }

    // 销毁图表实例
    dispose() {
        if (this.chart) {
            this.chart.dispose();
            this.chart = null;
        }
    }
}

export default AutoEchart;
