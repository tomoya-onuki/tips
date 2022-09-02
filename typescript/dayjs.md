2022/ 9/ 2  
小貫智弥

# TypeScriptとdayjsで日付計算
## 開発環境
- mac OS Monterey v12.0
- MacBook Pro(14inch, 2021, Apple M1 Pro)
- Typescript, three.js, jQuery

## セットアップ

1. インストール
   ```
   npm install dayjs --save
   ```

2. コーディング
   ```
   import dayjs from 'dayjs'

   // UTCを使うためのおまじない
   import utc from "dayjs/plugin/utc"
   dayjs.extend(utc)

   // タイムゾーンを使うためのおまじない
   import timezone from "dayjs/plugin/timezone"
   dayjs.extend(timezone)
   ```

## タイムゾーンの扱い
dayjsでタイムゾーンを扱う、すなわちdayjsオブジェクトを作るときには考慮すべきことが2つある。

1. 時刻を意味する文字列はどのタイムゾーンの表現であるか  
   すなわち、2020/06/01 12:13:42.000はUTC時刻かJST時刻か、他の時刻か？ということ

2. 生成されたオブジェクトをどのタイムゾーンで表現するか
   すなわち、2020/06/01 12:13:42.000をどのタイムゾーンで表現するかということ

<br><br>

### 1. 時刻を意味する文字列はどのタイムゾーンの表現であるか  
- UTC, CET, JSTのそれぞれのパターンで、dayjsオブジェクトを生成する
  ```
  let time = '2020/06/01 12:13:42.000'

  let utc = dayjs.tz(time, 'UTC')
  let cet = dayjs.tz(time, 'CET')
  let jst = dayjs.tz(time, 'Asia/Tokyo')

  let utcMillis = utc.unix() * 1000
  let cetMillis = cet.unix() * 1000
  let jstMillis = jst.unix() * 1000

  let utcStr = utc.format('YYYY/MM/DD HH:MM:ss.SSS')
  let cetStr = cet.format('YYYY/MM/DD HH:MM:ss.SSS')
  let jstStr = jst.format('YYYY/MM/DD HH:MM:ss.SSS')

  console.log(`UTC : ${utcMillis} msec , ${utcStr}`)
  console.log(`CET : ${cetMillis} msec , ${cetStr}`)
  console.log(`JST : ${jstMillis} msec , ${jstStr}`)
  ```

- 結果：dayjsオブジェクトのもつ時刻(UNIX時間)が違い、文字列表現のフォーマットはどのタイムゾーンでも同じになる。
  ```
  UTC : 1591013622000 msec , 2020/06/01 12:06:42.000
  CET : 1591006422000 msec , 2020/06/01 12:06:42.000
  JST : 1590981222000 msec , 2020/06/01 12:06:42.000
  ```
<br>
<br>

### 2. 生成されたオブジェクトをどのタイムゾーンで表現するか
- dayjsオブジェクトを生成したのちに、タイムゾーンを指定する
  ```
  let time = '2020/06/01 12:13:42.000'

  let utc = dayjs(time).tz('UTC')
  let cet = dayjs(time).tz('CET')
  let jst = dayjs(time).tz('Asia/Tokyo')

  let utcMillis = utc.unix() * 1000
  let cetMillis = cet.unix() * 1000
  let jstMillis = jst.unix() * 1000

  let utcStr = utc.format('YYYY/MM/DD HH:MM:ss.SSS')
  let cetStr = cet.format('YYYY/MM/DD HH:MM:ss.SSS')
  let jstStr = jst.format('YYYY/MM/DD HH:MM:ss.SSS')

  console.log(`UTC : ${utcMillis} msec , ${utcStr}`)
  console.log(`CET : ${cetMillis} msec , ${cetStr}`)
  console.log(`JST : ${jstMillis} msec , ${jstStr}`)
  ```

- 結果：dayjsオブジェクトのもつ時刻(UNIX時間)は同じだが、文字列表現のフォーマットがタイムゾーンごとに違う。  
  ```
  UTC : 1590981222000 msec , 2020/06/01 03:06:42.000
  CET : 1590981222000 msec , 2020/06/01 05:06:42.000
  JST : 1590981222000 msec , 2020/06/01 12:06:42.000
  ```
  *dayjsオブジェクトはPCのローカルなタイムゾーン(ここではJST)で生成されている。