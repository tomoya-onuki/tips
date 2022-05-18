# vscodeでTypeScriptプログラミング
## 開発環境のセットアップ

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

5. `webpack.config.js`を用意する（コピーする）
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

## 開発の進め方

1. HTMLファイル（index.htmlなど）とCSSファイル（style.cssなど）をdistに作成する
2. TypeScriptのソースプログラム（main.tsなど）をsrcに生成する
3. コンパイルする

```
$ npm run build
```

4. Webサーバー（Live Serverなど）を起動する