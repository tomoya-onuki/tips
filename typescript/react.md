# TypeScriptとReactでプログラム開発

## Setup
```sh
npx create-react-app --template typescript myapp
```


## Run
- `npm start` : サーバーの起動
- `npm run build` : ビルド
- `npm test` : jestによるテスト


## Object Oriented Programing (App.tsx)
```typescript
export default class App extends React.Component {
  public render(): React.ReactNode {
    return ('<div></div>');
  }
}
```