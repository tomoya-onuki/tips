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
$ npx tsc --init
```

5. webpack.config.jsを用意する（コピーする）
6. VSCodeにLive Serverもインストールしておくと便利

## ディレクトリ構成

### dist
Webサーバーで公開するファイル（HTMLとCSS）をここに置く。
TypeScriptのプログラムをJavaScriptに変換したmain.jsがここに作られる。
実行時に必要なファイルはこのファルダの中のファイルだけ。

### src
TypeScriptのソースプログラム（main.tsなど）をここに置く。

## 開発の進め方

1. HTMLファイル（index.htmlなど）とCSSファイル（style.cssなど）をdistに作成する
2. TypeScriptのソースプログラム（main.tsなど）をsrcに生成する
3. コンパイルする

```
$ npm run build
```

4. Webサーバー（Live Serverなど）を起動する