作成日　：2021/6/ 1<br>
最終更新：2021/6/10<br>
小貫智弥<br>

# vscodeでJavaFX開発

## JavaFXの準備

### ダウンロード
https://openjfx.io/ からSDKをダウンロードし、`/Library/Java/JavaVirtualMachines/`下におく。


### 環境変数の設定
ここでは環境変数をPATH_TO_FXとし、インストールしたディレクトリのlibに設定する。
環境変数の設定方法は自分で調べてください
- macOS : `/Library/Java/JavaVirtualMachines/javafx-sdk-11.0.2/lib`
- windows : `C:\Windows\Program Files\Java\javafx-sdk-11.0.2\lib`
ターミナルから`echo $PATH_TO_FX`で確認できます


### 試しにコマンドラインから実行してみる場合
- コンパイル
```
javac --module-path ./lib/javafx-sdk-11.0.2/lib --add-modules=javafx.controls,javafx.fxml -cp ./src:./lib/json-20190722.jar ./src/umidori/UmidoriApp01a.java -d ./bin/
```

- 実行
```
java --module-path ./lib/javafx-sdk-11.0.2/lib --add-modules=javafx.controls,javafx.fxml -cp ./bin:./lib/json-20190722.jar umidori.UmidoriApp01a
```

ここでは必要なライブラリ(javafx, jsonライブラリ)をlibディレクトリに置いて参照しています．
javafxのモジュールパスに関しては[Java11でJavaFXを動かす](https://qiita.com/tsudon/items/ea2e78171e32b3cb1578)を参考にしてください．

javafxはモジュールパスで参照していますが，モジュールシステムはjava9以降に追加された機能です．したがってjava8以前を使っている場合は上記の方法ではうまくいきません．注意してください．



## VScodeの設定
### JavaFXライブラリをプロジェクトに追加
JavaFXライブラリのlib以下の.jarを下画像のインターフェースから追加する
<img src="../img/vscode0.png" width="200"><br>

### launch.jsonの作成
.vscode/lauch.jsonを作る
```
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "java",
            "name": "Launch Current File",
            "request": "launch",
            "mainClass": "${file}"
        },
        {
            "type": "java",
            "name": "Launch UmidoriApp01a",
            "request": "launch",
            "mainClass": "umidori.UmidoriApp01a",
            "projectName": "Onuki2020Umidori_408d6be2",
            // 追加する内容
            // macOS
            "vmArgs": "--module-path /Library/Java/JavaVirtualMachines/javafx-sdk-11.0.2/lib --add-modules javafx.controls,javafx.fxml"
            // windows
            "vmArgs": "--module-path \"C:\\Program Files\\javafx-sdk-15.0.1\\lib\" --add-modules javafx.controls,javafx.fxml"
            // ここまで
        }
    ]
}
```

## 実行
- デバッグあり: `F5`
- デバッグなし: `Ctrl + F5`


### 参考サイト
1. https://qiita.com/kazushi47/items/66fbd4a6b3db8e7c2851
2. https://qiita.com/tsudon/items/ea2e78171e32b3cb1578