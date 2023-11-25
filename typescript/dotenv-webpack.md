2023/11/25  
Tomoya Onuki  

# webpackでtypescriptコードをビルドするプロジェクトにdotenvを使用する
## webpackでtypescriptコードをビルドする方法
1. [vscode.md](vscode.md)

## dotenv-webpack
1. dotenvのインストール
```sh
npm i dotenv-webpack
```

2. webpack.config.jsの記述
```js
const Dotenv = require('dotenv-webpack');

module.exports = {
  plugins: [
    // { systemvars: true } を設定するとシステム環境変数も読み込まれるようになる
    new Dotenv({ systemvars: true }),
  ],
};
```

3. main.ts
```ts
const value = process.env.TEST_VALUE;
console.log(value);
```