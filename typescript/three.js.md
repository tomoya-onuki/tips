2021/12/4  
小貫智弥  

# TypeScriptとThree.jsでWebGL開発
## 開発環境
- mac OS Monterey v12.0
- MacBook Pro(14inch, 2021, Apple M1 Pro)
- Typescript, three.js, jQuery

## セットアップ

1. package.jsonの作成
```
npm init -y
```
scriptの部分に以下を追加  
```
"build": "webpack",
"watch": "webpack -w"
```

2. モジュールのインストール
```
npm i -D webpack webpack-cli typescript ts-loader
npm i -S three @types/three
```

3. ディレクトリを作る
```
mkdir dist
mkdir src
```

4. tsconfig.jsonを作る
```
npx tsc --init
```
必要な行もコメントアウトされている可能性があるので注意
必要な行↓
```
{
  "compilerOptions": {
    "target": "ES2016",
    "module": "commonjs",
    "moduleResolution": "node",
    "strict": true,
    "lib": [
      "ES2020",
      "DOM"
    ]
  }
}
```

5. webpack.config.jsをつくる
```
module.exports = {
    // モード値を production に設定すると最適化された状態で、
    // development に設定するとソースマップ有効でJSファイルが出力される
    mode: "development",
  
    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: "./src/main.ts",
    // ファイルの出力設定
    output: {
      //  出力ファイルのディレクトリ名
      path: `${__dirname}/dist`,
      // 出力ファイル名
      filename: "main.js"
    },
    module: {
      rules: [
        {
          // 拡張子 .ts の場合
          test: /\.ts$/,
          // TypeScript をコンパイルする
          use: "ts-loader"
        }
      ]
    },
    // import 文で .ts ファイルを解決するため
    resolve: {
      extensions: [".ts", ".js"]
    }
  };
```


## 開発
1. インポート
```
import * as THREE from "three";
```


1. htmlファイルの作成
```
<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8" />
  <script defer src="main.js"></script>
</head>

<body>
</body>

</html>
```

1. コンパイル
```
npm run build
```

1. 実行
```
live server でGoLiveする
```


# 参考
- [最新版TypeScript+webpack5の環境構築まとめ](https://ics.media/entry/16329/)
- [【Mac版】node.jsのアンインストールと再インストール手順メモ](https://qiita.com/wagi0716/items/94193a80502f9d81a9e0)
- [MacでPATHを通す](https://qiita.com/nbkn/items/01a11392921119fa0153)
- [VScodeでLiveServerを使う際、GoLiveが表示されない時](https://qiita.com/FnUjPIrQ3mWkBJI/items/8af568fab0f3fa3fc32e)
- [【TypeScript】外部ライブラリ（jQueryなど）を使用する方法をまとめてみる](https://tsudoi.org/weblog/4550/)