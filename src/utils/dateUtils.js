var nowDate = new Date();
var cloneNowDate = new Date();

var fullYear = nowDate.getFullYear();
var month = nowDate.getMonth() + 1; // getMonth 方法返回 0-11，代表1-12月
var date = nowDate.getDate();

var endOfMonth = new Date(fullYear, month, 0).getDate(); // 获取本月最后一天

// 格式化日期 (2016-02-14)
function getFullDate(targetDate) {
    var D, y, m, d;
    if (targetDate) {
        D = new Date(targetDate);
        y = D.getFullYear();
        m = D.getMonth() + 1;
        d = D.getDate();
    } else {
        y = fullYear;
        m = month;
        d = date;
    }
    m = m > 9 ? m : '0' + m;
    d = d > 9 ? d : '0' + d;

    return y + '-' + m + '-' + d;
}

// 一天的时间戳(毫秒为单位)
var timestampOfDay = 1000*60*60*24;

// 今天，昨天
var fullToday = getFullDate();
var fullYesterday = getFullDate(nowDate - timestampOfDay);

var nowDay = nowDate.getDay(); // getDay 方法返回0 表示星期天
nowDay = nowDay === 0 ? 7 : nowDay;

// 本周一，本周末(星期天)
// 注：在safari下（nowDate +- 0）不会转换为时间戳，这里在nowDate前加上运算符+，手动转换时间戳运算
var fullMonday = getFullDate( +nowDate - (nowDay-1)*timestampOfDay );
var fullSunday = getFullDate( +nowDate + (7-nowDay)*timestampOfDay );

// 月初，月末
var fullStartOfMonth = getFullDate( cloneNowDate.setDate(1) );
var fullEndOfMonth = getFullDate( cloneNowDate.setDate(endOfMonth) );

function getPreMonth (date) {
    var arr = date.split('-');
    var year = arr[0];
    var month = arr[1];
    var day = arr[2];
    var year2 = year;
    var month2 = parseInt(month) - 1;
    if(month2 == 0) {
        year2 = parseInt(year2) - 1;
        month2 = 12;
    }
    month2 = month2 > 9 ? month2 : '0' + month2;
    var days2 = new Date(year2,month2,0).getDate();
    return {
        beginMonth: year2 + '-' + month2 + '-' + day,
        endMonth:  year2 + '-' + month2 + '-' + days2
    }
}

function getNextMonth (date) {
    var arr = date.split('-');
    var year = arr[0];
    var month = arr[1];
    var day = arr[2];
    var year2 = year;
    var month2 = parseInt(month) + 1;
    if(month2 == 13) {
        year2 = parseInt(year2) + 1;
        month2 = 1;
    }
    month2 = month2 > 9 ? month2 : '0' + month2;
    var days2 = new Date(year2,month2,0).getDate();
    return {
        beginMonth: year2 + '-' + month2 + '-' + '01',
        endMonth:  year2 + '-' + month2 + '-' + days2
    }
}

module.exports = {
    fullToday: fullToday,
    fullYesterday: fullYesterday,
    fullMonday: fullMonday,
    fullSunday: fullSunday,
    fullStartOfMonth: fullStartOfMonth,
    fullEndOfMonth: fullEndOfMonth,
    nexMonth: getNextMonth,
    lastMonth: getPreMonth
};