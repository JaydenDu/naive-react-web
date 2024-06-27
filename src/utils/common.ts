import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import numeral from 'numeral';
import { useCopyToClipboard } from 'usehooks-ts';

// duration插件
dayjs.extend(duration);

/**
 * @desc  睡一会儿，让子弹暂停一下
 * @param {number} time 毫秒数
 * @returns
 */
export function sleep(time: number) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

// 超长字符截取展示
export function getEllipsisText(address = '', start = 5, end = -6) {
    return address ? `${address.slice(0, start)}...${address.slice(end)}` : '-';
}

// 秒数转成时间
export function transferSeconds(seconds:string, format = 'YYYY-MM-DD HH:mm:ss') {
    const transferTime = dayjs.unix(+seconds);
    const timer = transferTime.get('hour') <= 12 ? `${transferTime.format(format)} AM` : `${transferTime.format(format)} PM`;
    return timer;
}

// 将秒转成时分
export function secondsToHoursMinutes(intervalTime: string) {
    const duration = dayjs.duration(+intervalTime, 'seconds');
    const hours = duration.hours();
    const minutes = duration.minutes();
    let curTime = hours ? `${hours}h ${minutes}m` : minutes ? `${minutes}m` : null;
    return curTime;
}

// 当前时间 和 目标时间差
export function getTimeDifference(startTime: string, endTime: string) {
    const secondTime = dayjs(endTime).diff(dayjs(+startTime * 1000), 's');
    const duration = dayjs.duration(secondTime, 'seconds');
    const hours = duration.hours();
    const minutes = duration.minutes();
    return hours ? `${hours}h ${minutes}m` : `${minutes}m`;
}

// 复制文案
export const copyTextEvent = (text: string) => {
    const [copiedText, copy] = useCopyToClipboard();
    copy(text);
    //   window.$message.success('Copied');
};

// 处理千分位
export const separateCommas = (number: number) => {
    if (!number) return number;
    return numeral(number).format('0,0'); // 使用 '0,0' 格式符表示千位分隔
};

// 从 'k' 到 'Y' 的单位
export const formatNumUnit = (number: string, newUnits: string) => {
    const units = newUnits || ['k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y']; // 单位数组，包含从 'k' 到 'Y' 的单位
    let formattedNum = number; // 初始化格式化后的数字

    // 从大到小循环遍历单位数组
    for (let i = units.length - 1; i >= 0; i--) {
        const unit = units[i]; // 获取当前单位
        const divider = Math.pow(10, (i + 1) * 3); // 计算当前单位对应的除数

        // 如果数字大于等于当前单位对应的除数，则进行格式化
        if (+number >= divider) {
            formattedNum = `${numeral(+number / divider).format('0.00')} ${unit}`; // 使用 numeral 格式化数字并添加单位
            break; // 格式化完成，跳出循环
        }
    }

    return formattedNum; // 返回格式化后的数字
};

// 计算算力
export const calculateHashRate = (hashes: number) => {
    const units = ['H/s', 'KH/s', 'MH/s', 'GH/s', 'TH/s', 'PH/s', 'EH/s'];
    let hashRate = hashes;
    let unitIndex = 0;

    while (hashRate >= 1000 && unitIndex < units.length - 1) {
        hashRate /= 1000;
        unitIndex++;
    }

    return `${numeral(hashRate).format('0,0')} ${units[unitIndex]}`;
};

// 获取当前年月日
export const getCurrentTime = () => {
    const now = dayjs();
    return `统计时间: ${now.year()}-${now.month() + 1}-${now.date()}`;
};
