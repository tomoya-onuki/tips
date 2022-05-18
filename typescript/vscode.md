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

## 開発の進め方

1. HTMLファイル（index.htmlなど）とCSSファイル（style.cssなど）をdistに作成する
2. TypeScriptのソースプログラム（main.tsなど）をsrcに生成する
3. コンパイルする

```
$ npm run build
```

4. Webサーバー（Live Serverなど）を起動する