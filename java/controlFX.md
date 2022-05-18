作成日　：2021/07/05<br>
最終更新：2021/07/14<br>
M1 小貫智弥

# vscodeでJavaFX開発(ControlsFXの導入)

## ControlsFX とは
JavaFXのUIの拡張です。JavaFxの標準にはないけどよく使うコンポーネントを利用できるという痒い所に手が届くライブラリです。

## Download
https://javalibs.com/artifact/org.controlsfx/controlsfx
- (11.0.2を使用)

## launch.json の設定
とくに設定をせずに実行すると以下のようなエラーメッセージがでます。
```
Caused by: java.lang.IllegalAccessError: superclass access check failed: class impl.org.controlsfx.behavior.RangeSliderBehavior (in unnamed module @0x31cb922e) cannot access class com.sun.javafx.scene.control.behavior.BehaviorBase (in module javafx.controls) because module javafx.controls does not export com.sun.javafx.scene.control.behavior to unnamed module @0x31cb922e
```
要するに、`com.sun.javafx.scene.control.behavior`を無名モジュールにエクスポートしろということですので

```
--add-exports javafx.controls/com.sun.javafx.scene.control.behavior=ALL-UNNAMED 
```
をlaunch.jsonのvmargsに追加します。

今回はRangeSliderを使用したのですが、他にもエクスポートに関するエラーが出たので結果的に以下の3行を追加しました。
```
--add-exports javafx.controls/com.sun.javafx.scene.control.behavior=ALL-UNNAMED 
--add-exports javafx.controls/com.sun.javafx.scene.control.inputmap=ALL-UNNAMED 
--add-exports javafx.graphics/com.sun.javafx.scene.traversal=ALL-UNNAMED
```

以下が完全なlaunch.json
```
{
    // IntelliSense を使用して利用可能な属性を学べます。
    // 既存の属性の説明をホバーして表示します。
    // 詳細情報は次を確認してください: https://go.microsoft.com/fwlink/?linkid=830387
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
            "vmArgs": "--module-path /Library/Java/JavaVirtualMachines/javafx-sdk-11.0.2/lib --add-modules javafx.controls,javafx.fxml --add-exports javafx.controls/com.sun.javafx.scene.control.behavior=ALL-UNNAMED --add-exports javafx.controls/com.sun.javafx.scene.control.inputmap=ALL-UNNAMED --add-exports javafx.graphics/com.sun.javafx.scene.traversal=ALL-UNNAMED"
        }
    ]
}
```

## コーディング
```
import org.controlsfx.control.RangeSlider;
```
ちゃんとインポートしましょう。

### RangeSlider
https://java.keicode.com/lib/controlsfx-rangeslider.php


### 参考サイト
https://www.it-swarm-ja.com/ja/java/java-9：名前のないモジュールへのパッケージのエクスポートが失敗する/833532542/