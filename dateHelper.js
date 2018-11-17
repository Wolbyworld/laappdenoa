
function dateHelper () {
    
    this.weeksAndDaysFrom = function(_fromDate){
        var today = this.todayDate();
        var _nweeks = this.weeksBetween(_fromDate,today);
        var _ndays = this.daysBetween(_fromDate,today);
        var _ydias = (_ndays-(_nweeks*7));
        return {nweeks:_nweeks, ndays:_ydias};
    },
    
    this.weeksBetween = function (d1, d2) {
        var diff =(d2.getTime() - d1.getTime()) / 1000;
         diff /= (60 * 60 * 24 * 7);
        return Math.abs(Math.trunc(diff));
    },
    this.daysBetween = function(d1, d2) {
        var diff =(d2.getTime() - d1.getTime()) / 1000;
         diff /= (60 * 60 * 24);
        return Math.abs(Math.round(diff));
    },
    
    this.todayDate= function () {
        var localDate = new Date();
        var utcOffset = localDate.getTimezoneOffset();
        var cetOffset = utcOffset + 60;
        var cestOffset = utcOffset + 120;
        var cetOffsetInMilliseconds = cetOffset * 60 * 1000;
        var cestOffsetInMilliseconds = cestOffset * 60 * 1000;
    
        var cestDateStart = new Date();
        var cestDateFinish = new Date();
        var localDateTime = localDate.getTime();
        var cestDateStartTime;
        var cestDateFinishTime;
        var result;
    
        cestDateStart.setTime(Date.parse('29 March ' + localDate.getFullYear() + ' 02:00:00 GMT+0100'));
        cestDateFinish.setTime(Date.parse('25 October ' + localDate.getFullYear() + ' 03:00:00 GMT+0200'));
    
        cestDateStartTime = cestDateStart.getTime();
        cestDateFinishTime = cestDateFinish.getTime();
    
        if(localDateTime >= cestDateStartTime && localDateTime <= cestDateFinishTime) {
            result = new Date(localDateTime + cestOffsetInMilliseconds);
        } else {
            result = new Date(localDateTime + cetOffsetInMilliseconds);
        }
    
        return result;
    }

    this.todayDateFormatted = function (){
        return this.todayDate().toISOString().replace(/T.+/, '').replace(/-/g,'')
    }
}
module.exports = dateHelper;