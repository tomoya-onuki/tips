# Type ScriptでFFTをする方法

## 設定
1. インストールする
```
npm i fft-js
```

1. index.d.tsを https://github.com/vail-systems/node-fft からコピーする
1. `node_modules/@types/`に`fft-js/`をつくり、index.d.tsをおく

## テスト
### コード
```
import FFT from "fft-js";

var signal = [1, 1, 1, 1, 0, 0, 0, 0];
var phasors = FFT.fft(signal);
var frequencies = FFT.util.fftFreq(phasors, 44100);
var magnitudes = FFT.util.fftMag(phasors);
var both = frequencies.map(function (f, ix) {
    return { frequency: f, magnitude: magnitudes[ix] };
});
console.log(phasors);
console.log(both);
```

### 実行結果
```
[[4, 0], 
[1, -2.414213562373095], 
[0, 0],
[1, -0.4142135623730949], 
[0, 0], 
[0.9999999999999999, 0.4142135623730949], 
[0, 0],
[0.9999999999999997, 2.414213562373095]]

[{frequency: 0, magnitude: 4},
{frequency: 5512.5, magnitude: 2.613125929752753}, 
{frequency: 11025, magnitude: 0}, 
{frequency: 16537.5, magnitude: 1.0823922002923938}]
```
