---
title: Grove - Mini Fan
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Grove-Mini_Fan/
slug: /ja/Grove-Mini_Fan
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove-Mini_Fan/img/Mini_Fan%20head.jpg)

**Grove - Mini Fan** モジュールは、AVR Atmega168 マイクロコントローラーをベースにした DC モータードライバーです。このモジュールには、マイクロコントローラーのコードを変更できるブレークアウトも提供されています。例えば、コードを変更してモジュールを [サーボモーター](https://en.wikipedia.org/wiki/Servomotor) を駆動するために使用することができます。デフォルトでは、このモジュールはミキサーパックに含まれている DC モーターを動作させるように設定されています。パックに含まれている柔らかい羽根のファンをモーターに取り付けることで、子供たちと楽しいプロジェクトを作ることができます。柔らかい羽根のため、ファンが高速で動いていても怪我の心配はありません。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Mini-Fan-v1-1.html)

## 特徴

---

* 入力センサーやスイッチングモジュールから受信した信号に基づいて DC モーターを動作させるユーザーフレンドリーな出力モジュール
* パックに含まれている DC モーターと併用
* JST 2.0 インターフェースを使用してモーターに接続
* DC モーターにはカラフルな柔らかい羽根のファンアクセサリーが付属（写真参照）
* オンボードマイクロコントローラーはモジュールの動作を変更するために再プログラム可能
* マイクロコントローラーは Arduino 互換コードを実行
* コードを変更して DC モーターの代わりにサーボモーターを駆動可能
* 他の Grove モジュールに接続するための標準 4 ピン Grove ケーブルを使用

<div>
  <span style={{color: 'red'}}>注意:</span> 最新バージョン(v1.1)では、モーターの出力電圧が 3.3 ボルトに更新されています。
</div>

## インターフェース機能

---
![](https://files.seeedstudio.com/wiki/Grove-Mini_Fan/img/Mini_fan.jpg)

<dl>
<dt>① UartSBee インターフェース: このインターフェースを使用してマイクロコントローラーのコードを変更します。[UartSBee](/ja/UartSBee_V4) モジュールを使用して Uart インターフェースを介してマイクロコントローラーに接続します。</dt>
<dt>② JST 2.0 インターフェース: 3.3 ボルト DC モーターに接続するために使用（3.3 ボルトのみ）</dt>
<dt>③ Grove インターフェース</dt>
<dt>④ ICSP インターフェース</dt>
<dt>⑤ Atmega168 マイクロコントローラー</dt>
<dt>⑥ サーボインターフェース</dt>
</dl>

## 使用方法

---
このモジュールを使用してサンプル回路を構築する手順は以下の通りです：

1. まず、JST2.0 二線式インターフェースを使用して DC モーターを **Grove - Mini Fan** モジュールに接続します。

2. Mini Fan モジュールを回路の出力側（電源モジュールの右側）に接続します。回路の入力側には、センサーをベースとした入力モジュール（[Grove - Light Sensor](/ja/Grove-Light_Sensor "Grove - Light Sensor"), [Grove - Sound Sensor](/ja/Grove-Sound_Sensor "Grove - Sound Sensor"), [Grove - Button](/ja/Grove-Button "Grove - Button") または [Grove - Slide Potentiometer](/ja/Grove-Slide_Potentiometer "Grove - Slide Potentiometer")）を使用できます。

3. 回路に電源を供給します。

4. 入力モジュールがトリガーを供給すると DC モーターが回転を開始します：

* [Grove - Button](/ja/Grove-Button "Grove - Button") モジュールのようなモーメンタリースイッチを使用する場合、ボタンを押すだけでモーターが ON になります。

* [Grove - Slide Potentiometer](/ja/Grove-Slide_Potentiometer "Grove - Slide Potentiometer") を使用する場合、スライダーを GND 位置から VCC 位置に移動すると、供給電圧が増加するにつれてモーターの速度が上がります。柔らかい羽根のファンを取り付ければ、熱を和らげるために好きな速度で動作する可変速度の個人用ファンが完成します！

* 回路の入力側に直接接続された [Grove - Light Sensor](/ja/Grove-Light_Sensor "Grove - Light Sensor") を使用する場合、明るい光の中でモーターが動作し、暗闇では停止することが確認できます：

![](https://files.seeedstudio.com/wiki/Grove-Mini_Fan/img/Light_Sensitive_Fan.gif)

* モーターを暗闇でのみ動作させたい場合は、光センサーと電源モジュールの間に Grove - NOT モジュールを追加します。
* [Grove - Sound Sensor](/ja/Grove-Sound_Sensor "Grove - Sound Sensor") を使用する場合、音を検出するとモーターが動作することが確認できます。逆の動作、つまり音がある場合を除いて常にモーターを ON にしたい場合は、音センサーと電源モジュールの間に Grove - NOT モジュールを追加します。

Grove 回路には Grove - USB Power モジュールまたは Grove - DC Jack Power モジュールを使用できます。

ポテンショメーターを使用してサーボモーターを制御する回路を構築する手順は以下の通りです：

1. コードを直接次のパスに開きます：\libraries\Servo\examples\Knob

2. コードをオンボード MCU にアップロードします。アップロード時に正しいボードタイプと COM ポートを選択することを確認してください。

3. これでポテンショメーターを使用してサーボモーターを制御できるようになります。

### Codecraft を使って遊ぶ

#### ハードウェア

**ステップ 1.** Grove - Mini Fan をポート D2 に接続し、Grove - Light Sensor を Base Shield のポート A0 に接続します。

**ステップ 2.** Base Shield を Seeeduino/Arduino に接続します。

**ステップ 3.** USB ケーブルを介して Seeeduino/Arduino を PC に接続します。

#### ソフトウェア

**ステップ 1.** [Codecraft](https://ide.chmakered.com/) を開き、Arduino サポートを追加し、メイン手順を作業エリアにドラッグします。

:::note
    初めて Codecraft を使用する場合は、[Codecraft を使用した Arduino のガイド](https://wiki.seeedstudio.com/ja/Guide_for_Codecraft_using_Arduino/) も参照してください。
:::

**ステップ 2.** 以下の画像のようにブロックをドラッグするか、このページの最後でダウンロードできる cdc ファイルを開きます。

![cc](https://files.seeedstudio.com/wiki/Grove-Mini_Fan/img/cc_Mini_Fan.png)

プログラムを Arduino/Seeeduino にアップロードします。

:::tip
    コードのアップロードが完了すると、Light Sensor の光を手で覆うとファンが動作します。
:::

## 入手可能性

---
この Grove モジュールは以下の Grove キットシリーズの一部として利用可能です：

* Grove Mixer Pack V2

また、Seeed Studio Bazaar で単体購入することもできます。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Mini_Fan/res/Grove-Mini_Fan_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

---

* [Grove - Mini Fan v1.0 (Eagle ファイル)](https://files.seeedstudio.com/wiki/Grove-Mini_Fan/res/Grove-Mini_Fan_v1.0.zip)

* [Grove - Mini Fan v1.0 (PDF)](https://files.seeedstudio.com/wiki/Grove-Mini_Fan/res/Grove-Mini_Fan_v1.0.pdf)

* [Codecraft CDC ファイル](https://files.seeedstudio.com/wiki/Grove-Mini_Fan/res/Grove_Mini_Fan_CDC_File.zip)

## プロジェクト

**Grove Mini Fan Controller + TI LaunchPad**: Seeed Grove と TI LaunchPad を使用して PWM でミニファンを駆動します。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/measley2/grove-mini-fan-controller-ti-launchpad-cba304/embed' width='350'></iframe>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>