---
description: XIAO照明ドライバー：Li-Po電源、3スイッチ + 4PWM、3V COBフィラメント駆動—ミニチュア、ジオラマ、ウェアラブルを照らします。
title: XIAO用COB LEDドライバーボード
image: https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/first_COB-LED-Driver-Board-for-Seeed-Studio-XIAO.webp
slug: /ja/getting_started_with_cob_led_dirver_board
last_update:
  date: 11/27/2025
  author: Brandy
---
# Seeed Studio XIAO用COB LEDドライバーボード入門ガイド

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/first.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/COB-LED-Driver-Board-for-Seeed-Studio-XIAO-p-6602.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div><br />

これはSeeed Studio XIAO用に設計された7チャンネルCOB LEDドライバードックです。この拡張ボードはGPIOの電力制限を突破し、7つの出力チャンネルを提供し、特に超薄型1mm 3V COB LEDストリップに特化しています。統合されたPMICバッテリー管理により、コンパクトで高輝度なワイヤレス照明セットアップを構築するための理想的なプラグアンドプレイソリューションです。

 **推奨読書：**[安全注意事項](#add-board)

## 概要

### 特徴

- **1mm 3V COB LEDストリップに対応** 

  オンボードハードウェア電流制限は、3V 1mmフレキシブルCOBストリップの電気特性に合わせて特別に調整されています。段階的な300mAと100mAの電流制限により、様々な長さのストリップを効果的に駆動し、メーカーに安全で安定したプラグアンドプレイ体験を提供します。

- **戦略的7チャンネルハイブリッド出力** 

  単一のボードで照明セットアップ全体を効率的に管理します。明るいメイン照明用の3つの高出力チャンネル（300mA）と、繊細な呼吸や フェード効果用の4つの調光可能チャンネル（80mA）を備えています。1つのボードですべてを処理—メインライトを明るく保ち、エフェクトをダイナミックに。

- **ワイヤレスプロジェクト用バッテリー管理** 

  統合電源回路は3.7V Li-Poバッテリーまたは高出力5V USBアダプターをサポートします。ワイヤレス設置と高輝度デスクトップアンビエント照明の両方の構築に最適です。

- **簡単なセンサー拡張** 

  標準Grove I2Cコネクターを含み、センサーへの手間のない接続を可能にし、照明プロジェクトが環境にインテリジェントに反応できるようにします。

  ### 仕様
<table className="spec-table">
  <tbody>
    <tr>
      <th>LED電源サポート</th>
      <td>DC 3V</td>
    </tr>
    <tr>
      <th>電源入力</th>
      <td>
        5V USB（XIAO経由）<br/>
        <small>注：フルロード動作には5V/2A+ウォールアダプターを推奨します。</small><br/>
        3.7V Li-Poバッテリー（オンボードバッテリーポート経由）
      </td>
    </tr>
    <tr>
      <th>3×高出力ポート<br/>（ネジ端子）</th>
      <td>
        3チャンネル出力<br/>
        駆動能力：最大300mA/チャンネル<br/>
        制御ロジック：1×常時オン + 2×GPIOスイッチ（D0、D1）<br/>
        <small>注：オン/オフスイッチのみ、PWMサポートなし</small>
      </td>
    </tr>
    <tr>
      <th>4×FX/PWMポート<br/>（底面パッド）</th>
      <td>
        4チャンネル出力<br/>
        駆動能力：最大80mA/チャンネル<br/>
        制御ロジック：完全調光可能（PWM）D2、D3、D8、D9経由<br/>
        <small>注：アクティブLOWロジック</small>
      </td>
    </tr>
    <tr>
      <th>オンボード</th>
      <td>
        Grove I²Cコネクター ×1<br/>
        電源スイッチ ×1<br/>
        電源LED ×1<br/>
        バッテリーコネクター ×1
      </td>
    </tr>
    <tr>
      <th>寸法</th>
      <td>`30mm*41mm*16mm`（Seeed Studio XIAO付き）</td>
    </tr>
  </tbody>
</table>

### ハードウェア概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/IO.png" style={{width:1000, height:'auto'}}/></div>

- **(1) D1-高出力ポート：** 最大300mAの電流をサポートする高出力ポートで、オン/オフスイッチ制御のみ可能（PWM調光はサポートされていません）、高出力負荷の接続に使用されます。
- **(2) D0-高出力ポート：** 最大300mAの電流をサポートする高出力ポートで、オン/オフスイッチ制御のみ可能（PWM調光はサポートされていません）、高出力負荷の接続に使用されます。
- **(3) VCC-常時オンポート：** 最大300mAの電流をサポートする常時電源供給VCCポートで、電源スイッチによって制御されず、常に供給電圧を出力し、継続的な電力を必要とするデバイスに電力を供給できます。
- **(4) GND：** 回路の共通グランドポートで、すべてのモジュールのグランド線を接続するために使用されます。
- **(5) I²C Groveポート：** Grove標準I²Cインターフェース（VCC、GND、SDA、SCLピンを含む）で、I²CプロトコルをサポートするGrove モジュール（センサー、ディスプレイなど）の接続に使用されます。
- **(6) 電源スイッチ：** 電源制御スイッチ。"ON"に切り替えると高/低出力ポートに電力を供給し、"OFF"に切り替えると電力を遮断します（VCC常時オンポートはこのスイッチによって制御されません）。
- **(7) 電源LED：** 電源状態インジケーターライトで、電源スイッチが"ON"に切り替えられたときに点灯し、モジュールに電力が供給されていることを示します。
- **(8) バッテリーコネクター：** 3.7Vリチウムバッテリーの接続をサポートし、モジュールに電力を供給するバッテリーインターフェースです。
- **(9) D2-低出力ポート：** 最大80mAの電流をサポートする低出力ポートで、PWM調光をサポートし、アクティブLOWロジックを使用します（レベルが低いときに負荷が動作します）。
- **(10) GND：** 低出力エリアのグランドポートで、低出力負荷のグランド線を接続するために使用されます。
- **(11) D3-低出力ポート：** 最大80mAの電流をサポートする低出力ポートで、PWM調光をサポートし、アクティブLOWロジックを使用します（レベルが低いときに負荷が動作します）。
- **(12) D9-低出力ポート：** 最大80mAの電流をサポートする低出力ポートで、PWM調光をサポートし、アクティブLOWロジックを使用します（レベルが低いときに負荷が動作します）。
- **(13) D8-低出力ポート：** 最大80mAの電流をサポートする低出力ポートで、PWM調光をサポートし、アクティブLOWロジックを使用します（レベルが低いときに負荷が動作します）。

#### サポートされるCOB LEDガイド
#### サポートされるLEDガイド

<div class="table-center">
 <table style={{textAlign:'center'}}>
  <tr>
    <th>製品</th>
    <th>名前</th>
    <th>長さ</th>
    <th>動作電流</th>
     <th>  光束</th>
  </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/1-100052952-Double-Ended-COB-LED-Strip---White(6500K)-38mm.jpg" style={{width:150, height:'auto'}}/></td>
      <td><a href="https://www.seeedstudio.com/Double-Ended-COB-LED-Strip-White-6500K-38mm-10PCS-p-6592.html">両端COB LEDストリップ - ホワイト（6500K）</a></td>
      <td>38mm</td>
      <td>100mA（推奨）</td>
       <td>  &gt;20 lm（@ 100mA）</td>
  </tr>
  <tr>
      <td><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/1-Double Ended COB LED Strip - White(6500K) 300mm.jpg" style={{width:150, height:'auto'}}/></td>
      <td><a href="https://www.seeedstudio.com/Double-Ended-COB-LED-Strip-White-6500K-130mm-5PCS-p-6593.html">両端COB LEDストリップ - ホワイト（6500K）</a></td>
      <td>130mm </td>
      <td>300mA（推奨）</td>
      <td>21-25 lm（@ 300mA）</td>
  </tr>

  <tr>
      <td><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/1-Double Ended COB LED Strip - White(6500K) 300mm.jpg" style={{width:150, height:'auto'}}/></td>
      <td><a href="https://www.seeedstudio.com/Double-Ended-COB-LED-Strip-White-6500K-300mm-5PCS-p-6594.html">両端COB LEDストリップ - ホワイト（6500K）</a></td>
      <td>300mm</td>
      <td>300mA（推奨）</td>
       <td>&gt;50 lm（@ 300mA）</td>
  </tr>
  <tr>
      <td><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/1-100036812-Single-Ended-COB-LED-Strip---White(6500K)-110mm.jpg" style={{width:150, height:'auto'}}/></td>
      <td><a href="https://www.seeedstudio.com/Single-Ended-COB-LED-Strip-White-6500K-110mm-5PCS-p-6590.html"> 片端COB LEDストリップ - ホワイト（6500K）</a></td>
      <td>110mm</td>
      <td>100mA（推奨）</td>
       <td> &gt;23 lm（@ 200mA）</td>
  </tr>
  <tr>
      <td><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/1-100061492-Single-Ended-COB-LED-Strip---White(6500K)-300mm.jpg" style={{width:150, height:'auto'}}/></td>
      <td><a href="https://www.seeedstudio.com/Single-Ended-COB-LED-Strip-White-6500K-300mm-5PCS-p-6591.html">片端COB LEDストリップ - ホワイト（6500K）</a></td>
      <td>300mm </td>
      <td>100mA（推奨）</td>
       <td>&gt;22 lm（@ 100mA）</td>
  </tr>
  </table>
</div>

## 入門ガイド

COB LEDドライバーボードの潜在能力を最大限に引き出し、最高の体験を楽しむために、Seeed Studio XIAOボードと当社の対応COB LEDストリップとの組み合わせを強く推奨します。

:::note
安全のため：  
- **Li-ionバッテリーを充電する際は**、LEDストリップやその他の周辺機器を取り外してください。  
- **プログラミングやデバッグ用にUSB-C 5Vを接続する際は**、バッテリーを取り外してください。  

バッテリー単体**または**5V外部電源単体の使用は安全です。充電中に周辺機器を接続することは推奨されません。
:::

### Arduinoで遊ぶ

XIAO用のArduino環境を設定し、オンボードパッケージを追加する必要があります。

:::tip
Arduinoを初めて使用する場合は、[Arduino入門ガイド](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強く推奨します。
:::

#### ソフトウェア準備

**ステップ1.** Arduinoアプリケーションを起動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
        <strong><span><font color={'FFFFFF'} size={"4"}>Arduino IDEをダウンロード</font></span></strong>
    </a>
</div>

**ステップ2.** 開発ボードモデルを選択し、Arduino IDEに追加します。

- 後のルーチンで**Seeed Studio XIAO RP2040**を使用したい場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO-RP2040-with-Arduino/#software-setup)**を参照して追加を完了してください。

- 後のルーチンで **Seeed Studio XIAO RP2350** を使用したい場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/xiao_rp2350_arduino/#setting-up-the-software)** を参照して追加を完了してください。

- 後のルーチンで **Seeed Studio XIAO nRF52840** を使用したい場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO_BLE/#software-setup)** を参照して追加を完了してください。

- 後のルーチンで **Seeed Studio XIAO ESP32-C3** を使用したい場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_Getting_Started#software-setup)** を参照して追加を完了してください。

- 後のルーチンで **Seeed Studio XIAO ESP32-C6** を使用したい場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/xiao_esp32c6_getting_started/#software-preparation)** を参照して追加を完了してください。

- 後のルーチンで **Seeed Studio XIAO ESP32-S3** を使用したい場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/xiao_esp32s3_getting_started#software-preparation)** を参照して追加を完了してください。

- 後のルーチンで **Seeed Studio XIAO RA4M1** を使用したい場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/getting_started_xiao_ra4m1/#software-preparation)** を参照して追加を完了してください。

- 後のルーチンで **Seeed Studio XIAO MG24** を使用したい場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/xiao_mg24_getting_started/#software-preparation)** を参照して追加を完了してください。

:::tip
XIAO SAMD21 と XIAO nRF54L15 は USB-C 経由で電源供給された場合のみ動作し、バッテリー単体では使用できません。また、nRF54L15 は Arduino 環境では動作しません。
:::
####  低電力ポートドライバーの例

最大電流 80mA をサポートし、PWM 調光をサポートし、アクティブ LOW ロジック（レベルが低いときに負荷が動作）を使用する低電力ポート。

**ステップ 1.** ハードウェアの準備

<table align="center">
 <tr>
  <th>Seeed Studio XIAO ESP32-C3</th>
        <th> COB LED ドライバーボード</th>
        <th>シングルエンド COB LED ストリップ</th>
 </tr>
 <tr>

   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:150, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/COB-LED-Driver-Board-for-Seeed-Studio-XIAO.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/1-100061492-Single-Ended-COB-LED-Strip---White(6500K)-300mm.jpg" style={{width:250, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/COB-LED-Driver-Board-for-Seeed-Studio-XIAO-p-6602.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Single-Ended-COB-LED-Strip-White-6500K-300mm-5PCS-p-6591.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>


:::tip
XIAO をドライバーボードに接続する際は、必ず USB ケーブルを抜いてください。
:::
**ステップ 2.**  以下に示すように、Seeed Studio XIAO ESP32-C3、XIAO 用 COB LED ドライバーボード、シングルエンド COB LED ストリップを接続します：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/4-100061492-Single-Ended-COB-LED-Strip---White(6500K)-300mm.jpg" style={{width:500, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/D2_ready2_new.jpg" style={{width:400, height:'auto'}}/></div>


**ステップ 3.** XIAO を USB フラッシュプログラムに接続します。関連するサンプルスケッチをコピーしてダウンロードします。
```cpp
#define LED_BUILTIN     D2
// the setup function runs once when you press reset or power the board
void setup() {
  // initialize digital pin LED_BUILTIN as an output.
  pinMode(LED_BUILTIN, OUTPUT);
}

// the loop function runs over and over again forever
void loop() {
  digitalWrite(LED_BUILTIN, LOW);   // turn the LED on by making the voltage LOW
 // digitalWrite(LED_BUILTIN, HIGH);  // turn the LED off (HIGH is the voltage level)
}

```
:::tip 

コメント内の「Low-Power Port」はアクティブローを意味します：
ピンを LOW にプルしてストリップを ON にし、リリース（HIGH）して OFF にします。

:::
このコードは単純に GPIO ピンを HIGH または LOW に制御します。
ドライバーボードは既に設定されているため、追加のライブラリをダウンロードする必要はありません。
画像リンクに従って、プログラムをアップロードし、COB LED ドライバーボードに電源を供給します。すべてがうまくいけば、次のように見えるはずです：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/D2_new.jpg" style={{width:700, height:'auto'}}/></div>

#### 高電力ポートドライバーの例

最大電流 300mA をサポートし、ON/OFF スイッチ制御のみを許可し（PWM 調光はサポートされていません）、高電力負荷の接続に使用される高電力ポート。

**ステップ 1.**  ハードウェアの準備
<table align="center">
 <tr>
  <th>Seeed Studio XIAO ESP32-C3</th>
        <th> COB LED ドライバーボード</th>
        <th>ダブルエンド COB LED ストリップ</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:150, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/COB-LED-Driver-Board-for-Seeed-Studio-XIAO.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/1-Double Ended COB LED Strip - White(6500K) 300mm.jpg" style={{width:250, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/COB-LED-Driver-Board-for-Seeed-Studio-XIAO-p-6602.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Double-Ended-COB-LED-Strip-White-6500K-300mm-5PCS-p-6594.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>



**ステップ 2.**  以下に示すように、Seeed Studio XIAO ESP32-C3、XIAO 用 COB LED ドライバーボード、ダブルエンド COB LED ストリップを接続します：
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/4-100074846-Double-Ended-COB-LED-Strip---White(6500K)-130mm.jpg" style={{width:400, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/D4_new.jpg" style={{width:400, height:'auto'}}/></div>

**ステップ 3.** XIAO を USB フラッシュプログラムに接続します。関連するサンプルスケッチをコピーしてダウンロードします。

```cpp
#define LED_BUILTIN       D0

// the setup function runs once when you press reset or power the board
void setup() {
  // initialize digital pin LED_BUILTIN as an output.
  pinMode(LED_BUILTIN, OUTPUT);
}

// the loop function runs over and over again forever
void loop() {
  digitalWrite(LED_BUILTIN, HIGH);  // turn the LED on (HIGH is the voltage level)
 // digitalWrite(LED_BUILTIN, LOW);   // turn the LED off by making the voltage LOW
}

```


このコードは単純に GPIO ピンを HIGH または LOW に制御します。
ドライバーボードは既に設定されているため、追加のライブラリをダウンロードする必要はありません。
画像リンクに従って、プログラムをアップロードし、COB LED ドライバーボードに電源を供給します。すべてがうまくいけば、次のように見えるはずです：


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/D4_new_light.jpg" style={{width:700, height:'auto'}}/></div>

####   低電力ポートドライバー PWM の例

最大電流 80mA をサポートし、PWM 調光をサポートし、アクティブ LOW ロジック（レベルが低いときに負荷が動作）を使用する低電力ポート。
**ステップ 1.**   ハードウェアの準備

<table align="center">
 <tr>
  <th>Seeed Studio XIAO ESP32-C3</th>
        <th> COB LED ドライバーボード</th>
        <th>シングルエンド COB LED ストリップ</th>
        <th>ダブルエンド COB LED ストリップ</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:150, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/COB-LED-Driver-Board-for-Seeed-Studio-XIAO.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/1-100061492-Single-Ended-COB-LED-Strip---White(6500K)-300mm.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/1-Double Ended COB LED Strip - White(6500K) 300mm.jpg" style={{width:250, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/COB-LED-Driver-Board-for-Seeed-Studio-XIAO-p-6602.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Single-Ended-COB-LED-Strip-White-6500K-300mm-5PCS-p-6591.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Double-Ended-COB-LED-Strip-White-6500K-300mm-5PCS-p-6594.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

**ステップ 2.**  以下に示すように、Seeed Studio XIAO ESP32-C3、XIAO用COB LEDドライバーボード、シングルエンドCOB LEDストリップ、ダブルエンドCOB LEDストリップを接続します：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/Breath_new_ready.jpg"style={{width:700, height:'auto'}}/></div>

**ステップ 3.** XIAOをUSBフラッシュプログラムに接続します。関連するサンプルスケッチをコピーしてダウンロードします。

```cpp
#include <Arduino.h>

// ================= Define Pins =================
const int PIN_STRIP_1 = D2; 
const int PIN_STRIP_2 = D3; 

// ================= Parameter Configuration =================
// Breathing speed: larger number = slower, smaller number = faster
const int BREATH_SPEED = 2000; 

// Breathing phase offset: determines if the two light strips "light up together" or "alternate lighting"
// float PHASE_OFFSET = 0;    // Set to 0 -> fully synchronized
float PHASE_OFFSET = PI;   // Set to PI (3.14) -> fully alternating (complementary)
// float PHASE_OFFSET = PI/2; // Set to PI/2 -> slightly staggered rhythm

// ================= Helper Function: Handle Active LOW Lighting Logic =================
// This step is crucial, do not modify
// Input: brightness (0=off, 255=maximum brightness)
void setLedBrightness(int pin, int brightness) {
  // 1. Safety limit range
  brightness = constrain(brightness, 0, 255);

  // 2. Logic inversion (Active LOW)
  // Brightness 255 -> Output 0 (GND) -> Light at maximum brightness
  // Brightness 0   -> Output 255 (VCC) -> Light off
  int pwmValue = 255 - brightness;

  analogWrite(pin, pwmValue);
}

// ================= Math Function for Calculating Breathing Brightness =================
// Using the algorithm (e^sin(x) - 1/e), which mimics human breathing curve better than ordinary triangular wave
int calculateBreathBrightness(unsigned long time, float phaseOffset) {
  // Calculate angle: time / speed factor
  float angle = (time / (float)BREATH_SPEED) * PI;

  // Add phase offset
  angle += phaseOffset;

  // Core formula
  float val = (exp(sin(angle)) - 0.36787944) * 108.0;

  return (int)val;
}

void setup() {
  pinMode(PIN_STRIP_1, OUTPUT);
  pinMode(PIN_STRIP_2, OUTPUT);

  // Initialization: turn off all lights first
  setLedBrightness(PIN_STRIP_1, 0);
  setLedBrightness(PIN_STRIP_2, 0);
}

void loop() {
  unsigned long currentMillis = millis();

  // 1. Calculate brightness for D2 (no offset)
  int bright1 = calculateBreathBrightness(currentMillis, 0);
  setLedBrightness(PIN_STRIP_1, bright1);

  // 2. Calculate brightness for D3 (with offset)
  int bright2 = calculateBreathBrightness(currentMillis, PHASE_OFFSET);
  setLedBrightness(PIN_STRIP_2, bright2);

  // The delay here doesn't need to be too long, just give the CPU a short break
  delay(5);
}

```

これはバッテリー駆動のプロジェクトです。これは呼吸ライトスタイルのコードです。お気に入りの場合は、光らせたい場所でこのスタイルを使用できます。
プログラムをアップロードしてCOB LEDドライバーボードに電源を供給します。すべてがうまくいけば、次のように見えるはずです：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/PWM.gif"style={{width:500, height:'auto'}}/></div>
:::tip

定格電流制限が300mAまたは100mAのLEDストリップは、どちらも最大出力80mAのポートに安全に接続できます（ポートの出力電流≤LEDストリップの電流制限で、安全な冗長性を確保）。ただし、定格電流制限が100mAのLEDストリップは、最大出力300mAのポートに接続することはできません。ポートの最大出力電流がLEDストリップの電流制限を大幅に超えるため、過電流によりストリップが損傷する可能性があります。
:::
:::note
**ホットプラグは厳禁です！**
常にXIAOとドライバーボードを最初に組み立ててから、USBケーブルを接続してください。
XIAOがUSBケーブルに接続されている間は、決して接続を試みないでください。PMICが故障する可能性があります。
:::


### ESPHome経由でHome Assistantと連携

#### ハードウェア準備

<div class="table-center">
  <table style={{textAlign:'center'}}>
    <tr>
      <th>Home Assistantデバイス</th>
    </tr>
    <tr>
        <td><img src="https://files.seeedstudio.com/wiki/Home-Assistant/1.png" style={{width:300, height:'auto'}}/></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/home_assistant_topic/#-devices-for-home-assistant-" target="_blank" rel="noopener noreferrer">
          <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

#### ソフトウェア準備

[ESPHome](https://esphome.io/)は、ESPボードの管理を可能な限り簡単にすることを目的としたツールです。YAML設定ファイルを読み込み、ESPデバイスにインストールするカスタムファームウェアを作成します。ESPHomeの設定に追加されたデバイスやセンサーは、Home AssistantのUIに自動的に表示されます。ESPHomeは、データをHome Assistantデバイスに接続して送信するのに役立ちます。

:::note
Home AssistantとESPHomeを初めて使用する場合は、Home Assistantのインストールに関するステップバイステップガイドについて<strong>[こちら](https://www.home-assistant.io/installation/)</strong>をご覧ください。
:::

ESPHomeは**Home Assistantアドオン**として利用でき、アドオンストア経由で簡単にインストールできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/1.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 1.** **INSTALL**をクリック

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/2.png" style={{width:900, height:'auto'}}/></div>

- **ステップ 2.** すべてのオプションを有効にして**START**をクリック

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/3.png" style={{width:900, height:'auto'}}/></div>

ESPHomeが正常に読み込まれると、次のウィンドウが表示されます

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/4.png" style={{width:900, height:'auto'}}/></div>

#### 夕暮れから夜明けまでのLEDランプ

**概要**

夕暮れから夜明けまでのLEDランプのデモを作ってみましょう。ライトは一日を通して光の強度に応じて変化します。興味がある場合は、読み続けてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/HA_demo.jpg" style={{width:500, height:'auto'}}/></div>
**ステップ 1.**   ハードウェア準備

<table align="center" style={{textAlign:'center', overflowX: 'scroll', border: '1px solid #ccc', }}>
 <tr>
  <th>XIAO ESP32-C3</th>
        <th>XIAO用COB LEDドライバーボード</th>
        <th>Grove - デジタル光センサー</th>
        <th>シングルエンドCOB LEDストリップ</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:150, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/COB-LED-Driver-Board-for-Seeed-Studio-XIAO.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/img/hardware%20overview.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/1-100061492-Single-Ended-COB-LED-Strip---White(6500K)-300mm.jpg" style={{width:250, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/COB-LED-Driver-Board-for-Seeed-Studio-XIAO-p-6602.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Digital-Light-Sensor-TSL2561.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Single-Ended-COB-LED-Strip-White-6500K-300mm-5PCS-p-6591.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

**ステップ 2.** Seeed Studio XIAO ESP32-C3、XIAO用COB LEDドライバーボード、シングルエンドCOB LEDストリップ - ホワイトを以下のように接続します：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/4-100061492-Single-Ended-COB-LED-Strip---White(6500K)-300mm.jpg" style={{width:500, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/connect2.png" style={{width:500, height:'auto'}}/></div>

**ステップ 3.** ESPHomeページを開き、**+ NEW DEVICE**をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/5.png" style={{width:900, height:'auto'}}/></div>

**ステップ 4.** **CONTINUE**をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/6.png" style={{width:900, height:'auto'}}/></div>

**ステップ 5.** デバイスの**Name**を入力し、**Network name**や**Password**などのWiFi認証情報を入力します。その後、**NEXT**をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/Dusk-to-dawn_LED_lamp_1.1.png" style={{width:400, height:'auto'}}/></div>

**ステップ 6.** **ESP32-C3**を選択してクリックします

**ステップ 7.** このボードを手動で設定するため、**SKIP**をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/14.png" style={{width:400, height:'auto'}}/></div>

**ステップ 8.** 新しく作成されたボードの下にある**EDIT**をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/Dusk-ro-dawm_LED_lamp_2.2.png" style={{width:400, height:'auto'}}/></div>

**ステップ 9.** 以下のコードを.yamlファイルの末尾に部分的にコピーします。XIAO ESP32-C3はGroveデジタル光センサーから光の値を読み取り、光の強度に応じてD2ピンの電流レベルを変更し、ライトバーを制御します

```yaml

# ----------- Additional section (TSL2561, address 0x29) starts -----------
i2c:
  sda: 6
  scl: 7
  scan: true

# Global variables
globals:
  # Record the end timestamp of sensor ignore period (milliseconds)
  - id: ignore_sensor_until
    type: uint32_t
    restore_value: no
    initial_value: '0'
  # Flag: True means current operation is from sensor
  - id: is_robot
    type: bool
    restore_value: no
    initial_value: 'false'

sensor:
  - platform: tsl2561
    name: "Ambient Light"
    address: 0x29
    # Ultra-fast response configuration
    update_interval: 200ms
    integration_time: 101ms
    gain: 1X
    id: lux
    on_value:
      then:
        - lambda: |-
            // 1. Check if in manual control ignore period
            if (millis() < id(ignore_sensor_until)) {
              return;
            }

            // 2. Ultra-fast light control logic
            bool should_turn_on = (x < 180); // Threshold for turning on (dark)
            bool should_turn_off = (x > 220); // Threshold for turning off (bright)

            // Get current light state
            bool is_currently_on = id(light_strip).remote_values.is_on();

            if (should_turn_off && is_currently_on) {
              ESP_LOGD("custom", "Environment brightened (Lux: %.1f), sensor auto-off light", x);

              // Key: Inform Light component this is automated operation
              id(is_robot) = true;

              auto call = id(light_strip).turn_off();
              call.set_transition_length(1000); // 1 second fade
              call.perform();
            } 
            else if (should_turn_on && !is_currently_on) {
              ESP_LOGD("custom", "Environment darkened (Lux: %.1f), sensor auto-on light", x);

              // Key
              id(is_robot) = true;

              auto call = id(light_strip).turn_on();
              call.set_transition_length(1000); // 1 second fade
              call.perform();
            }

output:
  - platform: ledc
    pin: 4
    id: pwm_output
    frequency: 1000Hz
    inverted: true

light:
  - platform: monochromatic
    output: pwm_output
    name: "Light Strip"
    id: light_strip
    restore_mode: ALWAYS_OFF
    default_transition_length: 1s

    # Monitor all state changes (on/off/dimming)
    on_state:
      - lambda: |-
          // Check who triggered this state change
          if (id(is_robot)) {
            // If triggered by Sensor:
            ESP_LOGD("custom", "Detected automated operation, not ignoring sensor");
            // Task completed, wait for next cycle
            id(is_robot) = false;
          } else {
            // Triggered by human (HA/Switch):
            ESP_LOGD("custom", "Detected manual operation, ignoring sensor for 30 seconds");
            // Set ignore end time = current time + 30000 milliseconds
            id(ignore_sensor_until) = millis() + 30000;
          }
```
:::tip
Home Assistantの設定では、sda、scl、pinの番号は常にGPIO番号を指し、XIAOボードに印刷されたシルクスクリーンラベルではありません。
:::

**ステップ 10.** 右上角のInstallボタンをクリックします。その後、最後の項目**Manual download**を選択し、**Modern format**を選択します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/Dusk-to-dawn_LED_lamp_3.png" style={{width:500, height:'auto'}}/></div>

その後、ダウンロードとコンパイルに長時間かかりますので、お待ちください。すべての準備が整うと、ファームウェア（XX.bin）が自動的にコンピューターにダウンロードされます。コンパイルが成功すると、以下の図のように表示されます

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/Dusk-to-dawn_LED_lamp_4.3.png" style={{width:350, height:'auto'}}/></div>

**ステップ 11.** [ESPhome Webツール](https://web.esphome.io/?dashboard_install)を使用してXIAO ESP32にファームウェアをアップロードし、**CONNECT**をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/34.png" style={{width:800, height:'auto'}}/></div>

ポップアップウィンドウでXIAO ESP32のシリアルポートを選択し、**INSTALL**をクリックして、上記の手順でダウンロードした.binファイルを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/35.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/38.png" style={{width:500, height:'auto'}}/></div>

**ステップ 12.** インストールが成功すると、以下のように表示されます：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/demo.gif" style={{width:700, height:'auto'}}/></div>
光が強いときはナイトライトが消灯し、光が弱いときはナイトライトが点灯します。

**ステップ 13.** インストールが成功したら、ログを開くとフィードバックメッセージが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/Dusk-to-dawn_LED_lamp_5.png" style={{width:500, height:'auto'}}/></div>


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/Dusk-to-dawn_LED_lamp_6.png" style={{width:500, height:'auto'}}/></div>


気に入った場合は、上記の手順に従って、あなただけのユニークなナイトライトを作ることもできます！

:::tip
ボードコンポーネントは-40°Cから85°Cまで定格されていますが、すべての7チャンネルを最大負荷（合計>1A）で駆動すると、大量の熱が発生します。密閉された空間（例：密閉されたプラスチックモデル内）に設置する場合は、PMICの熱シャットダウン保護の作動を防ぐため、受動的な換気を確保してください。
:::

## 特別な感謝
3Dプリント作業への貴重な貢献をしてくださったXinyuさんに特別な感謝を申し上げます。

 オリジナルデザインは卓越した創造性と実用的価値を示しています。オリジナルデザインをご覧になりたい方は、以下のリンクからデモンストレーション動画と作者のホームページをご利用いただけます。

**[LEDランプ3Dプリントケース](https://makerworld.com.cn/zh/models/126527-leddeng-b3#profileId-11109)**

**[作者のホームページ](https://makerworld.com.cn/zh/@GLB_xinyulin/upload)**

## リソース

[PDF] **[Seeed Studio COB LEDドライバーボード回路図](https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/SCH_Sch_V1.2_2025-11-21.pdf)**

[ZIP] **[Seeed Studio COB LEDドライバーボードPCB](https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/Gerber_PCB_V1.2_2025-11-25.zip)**

[STEP] **[Seeed Studio COB LEDドライバーボード3Dモデル](https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/cob_led_driver_board.STEP)**

## 安全注意事項{#add-board}



**操作禁止事項と安全規則**
 - 充電中は周辺機器を接続しないでください。USB-Cケーブルを接続する前に、まずライトバーを取り外してください。
 - USB-Cポートをデバッグする際は、バッテリーホルダーを空にしてください（バッテリーを取り付けない）。
 - 1A以上のフル負荷電流の場合は、筐体に放熱穴を開けることを確認してください。そうしないと、PMICが過熱してシャットダウンします。
 - ボード裏面のPMIC部分を素手で触らないでください：静電気放電（ESD）によりチップが損傷する可能性があり、フル負荷時には表面が火傷するほどの温度に達する場合があります。
**コア安全リマインダー**
 - 安全な操作のために、これら4つの規則を遵守してください：
 - 周辺機器接続時は単一電源供給
 - 配線/切断前に電源を切る
 - 適切な放熱穴を設ける
 - ボードの裏面に触れない

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/safety.png" style={{width:250, height:'auto'}}/></div>

## よくある質問

**Q1. なぜボードが熱くなるのですか？**
  - ホットスワップ現象が発生するためです。XIAOをUSBに接続してからドライバーボードに再接続する際、この過程で開発ボードの電流経路にショートサーキットが発生し、場合によっては焼損することがあります。


## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験を可能な限りスムーズにするため、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>