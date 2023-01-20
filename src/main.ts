import dayjs, { Dayjs } from 'dayjs';
// UTCを使うためのおまじない
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);
// タイムゾーンを使うためのおまじない
import timezone from "dayjs/plugin/timezone";
dayjs.extend(timezone);

window.addEventListener('load', () => {
    init();
}, false);

function init(): void {
    let time = '2020/06/01 12:13:42';

    let utc0 = dayjs.tz(time, 'UTC');
    let cet0 = dayjs.tz(time, 'CET');
    let jst0 = dayjs.tz(time, 'Asia/Tokyo');
    let utc0Millis = utc0.valueOf();
    let cet0Millis = cet0.valueOf();
    let jst0Millis = jst0.valueOf();
    let utc0Str = utc0.format('YYYY/MM/DD HH:MM:ss');
    let cet0Str = cet0.format('YYYY/MM/DD HH:MM:ss');
    let jst0Str = jst0.format('YYYY/MM/DD HH:MM:ss');
   
    let utc1 = dayjs(time).tz('UTC');
    let cet1 = dayjs(time).tz('CET');
    let jst1 = dayjs(time).tz('Asia/Tokyo');
    let utc1Millis = utc1.valueOf();
    let cet1Millis = cet1.valueOf();
    let jst1Millis = jst1.valueOf();
    let utc1Str = utc1.format('YYYY/MM/DD HH:MM:ss');
    let cet1Str = cet1.format('YYYY/MM/DD HH:MM:ss');
    let jst1Str = jst1.format('YYYY/MM/DD HH:MM:ss');

    console.log('dayjsオブジェクトを生成する際1タイムゾーンを指定する場合')
    console.table([
        ['Time Zone', 'UNIX時間(msec)', '日付'],
        ['UTC', utc0Millis, utc0Str],
        ['CET', cet0Millis, cet0Str],
        ['JST', jst0Millis, jst0Str],
    ]);

    console.log('dayjsオブジェクトを生成したのちに、タイムゾーンを指定する場合')
    console.table([
        ['Time Zone', 'UNIX時間(msec)', '日付'],
        ['UTC', utc1Millis, utc1Str],
        ['CET', cet1Millis, cet1Str],
        ['JST', jst1Millis, jst1Str],
    ]);
}