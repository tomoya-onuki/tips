
# TypeScriptでjqueryを使う

## セットアップ

```
npm install jquery --save
npm i --save-dev @types/jquery
```

## 開発
1. インポート
```
import $ = require('jquery');
declare var require: any;
```

2. コンパイル
```
npm run build
```
or
```
mac: Shift + Command + B
win: Shift + Control + B
```
