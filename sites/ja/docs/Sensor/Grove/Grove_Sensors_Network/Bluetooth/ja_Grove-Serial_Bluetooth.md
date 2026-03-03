---
title: Grove Serial Bluetooth
nointro:
keywords:
  - docs
  - docusaurus
image:  https://files.seeedstudio.com/wiki/wiki-platform/S.png
slug: /ja/Grove-Serial_Bluetooth
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth/img/Twigbt00.jpg)

Grove - Serial Bluetooth は、既存の Grove Base Shield と互換性があり、透明なワイヤレスシリアル接続のセットアップを簡単にするモジュールです。このシリアルポート Bluetooth モジュールは、完全に認定された Bluetooth V2.0+EDR（Enhanced Data Rate）2Mbps モジュレーションを備えた完全な 2.4GHz ラジオトランシーバーとベースバンドを提供します。CSR Bluecore 04-External シングルチップ Bluetooth システムを CMOS 技術と AFH（Adaptive Frequency Hopping Feature）を使用して構築しています。最小フットプリントは 12.7mm x 27mm です。これにより、設計/開発サイクル全体が簡素化されることを期待しています。

モデル：[WLS31746P](https://www.seeedstudio.com/depot/grove-serial-bluetooth-p-795.html?cPath=139_142)

## 仕様 ##

- 動作電圧: 5.0VDC

- データレート: 2Mbps

- RF送信出力（最大）: +4dBm

- 感度: -80dBm

- 完全認定 Bluetooth V2.0+EDR 3Mbps モジュレーション

- 選択可能なボーレート

- 接続範囲外になった場合、30分以内に自動再接続

## デモンストレーション ##

このライブラリには、マスターモードとスレーブモードで動作するプロジェクト用の2つのデモが含まれています。
2つの Bluetooth モジュールは以下のように動作します：
![](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth/img/Bluetooth-1.jpg)

モジュールを [Grove - Base Shield](https://seeeddoc.github.io/Grove-Base_Shield/) の D6 ポートに接続します：
![](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth/img/Grove-Serial-Bluetooth.JPG)

「Resources」セクションでライブラリをインストールしてください。プロジェクトをマスターモードで実行したい場合は、次のパスでデモを見つけてください：File - Examples - Bluetooth_demo_code - Master。同じパスでスレーブモードのデモも見つけることができます。

Grove - Serial Bluetooth モジュールがペアリング状態の場合、緑と赤のLEDが交互に点滅します。接続が成功すると、緑のLEDが2秒ごとに点滅します。接続が失敗すると、赤のLEDが0.5秒ごとに点滅します。

## 参考資料 ##

#### フローチャート ####

![](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth/img/Bluetooth-2.jpg)

### デフォルト設定を変更するためのコマンド ###

**1. 動作モードを設定**

|||
|---|
 |\r\n+STWMOD=0\r\n|デバイスをクライアント（スレーブ）として動作するように設定します。保存してリセットします。|
 |\r\n+STWMOD=1\r\n|デバイスをサーバー（マスター）として動作するように設定します。保存してリセットします。|

**注意:** **\r\n** は操作に必要であり、Hex の値は **0x0D 0x0A** です。**\r** と **\n** はそれぞれ **キャリッジリターン** と **ラインフィード**（または次の行）を表します。

**2. ボーレートを設定**

|||
|---|
 |\r\n+STBD=115200\r\n|ボーレートを 115200 に設定します。保存してリセットします。|
 |対応ボーレート: 9600, 19200, 38400, 57600, 115200, 230400, 460800.|

**3. デバイス名を設定**

|||
|---|
 |\r\n+STNA=abcdefg\r\n|デバイス名を「abcdefg」に設定します。保存してリセットします。|

**4. 電源投入時に最後にペアリングしたデバイスに自動接続**

|||
|---|
 |\r\n+STAUTO=0\r\n|自動接続を禁止します。保存してリセットします。|
 |\r\n+STAUTO=1\r\n|自動接続を許可します。保存してリセットします。|

**5. ペアリングされたデバイスが接続を許可する**

|||
|---|
 |\r\n+STOAUT=0\r\n|禁止します。保存してリセットします。|
 |\r\n+STOAUT=1\r\n|許可します。保存してリセットします。|

**6. PINコードを設定**

|||
|---|
 |\r\n+STPIN=2222\r\n|PINコード「2222」を設定します。保存してリセットします。|

**7. PINコードを削除（MCUによるPINコード入力）**

|||
|---|
 |\r\n+DLPIN\r\n|PINコードを削除します。保存してリセットします。|

**8. ローカルアドレスコードを読み取る**

|||
|---|
 |\r\n+RTADDR\r\n|デバイスのアドレスを返します。|

**9. マスターデバイスが有効範囲外の場合の自動再接続（スレーブデバイスは有効範囲外の場合30分以内に自動再接続します）**

|||
|---|
 |\r\n+LOSSRECONN=0\r\n|自動再接続を禁止します。|
 |\r\n+LOSSRECONN=1\r\n|自動再接続を許可します。|

### 通常操作のためのコマンド ###

#### 1. 問い合わせ

**a) マスター**

|||
|---|
 |\r\n+INQ=0\r\n|問い合わせを停止します。|
 |\r\n+INQ=1\r\n|問い合わせを開始/再開します。|

**b) スレーブ**

|||
|---|
|\r\n+INQ=0\r\n |問い合わせを無効にします。|
|\r\n+INQ=1\r\n| 問い合わせを有効にします。|

**+INQ=1** コマンドが成功すると、**赤** と **緑** のLEDが交互に点滅します。

**2. Bluetoothモジュールが問い合わせ結果を返す**

|||
|---|
 |\r\n+RTINQ=aa,bb,cc,dd,ee,ff;name\r\n|
 |アドレス「aa,bb,cc,dd,ee,ff」と名前「name」を持つシリアルBluetoothデバイスが問い合わせられました。|

**3. デバイスに接続**

|||
|---|
 |\r\n+CONN=aa,bb,cc,dd,ee,ff\r\n|アドレス「aa,bb,cc,dd,ee,ff」を持つデバイスに接続します。|

**4. BluetoothモジュールがPINコード入力を要求**

\r\n+INPIN\r\n

**5. PINコードを入力**

|||
|---|
 |\r\n+RTPIN=code\r\n||
 |例: RTPIN=0000| PINコード「0000」を入力します。|

**6. デバイスを切断** PIO0 を高にすると現在動作中のBluetoothデバイスが切断されます。

**7. ステータスを返す** \r\n+BTSTA:**xx**\r\n
**xx** ステータス:

- 0 - 初期化中

- 1 - 準備完了

- 2 - 問い合わせ中

- 3 - 接続中

- 4 - 接続済み

(**注意:** これはコマンドではなく、モジュールが各コマンド後に返す情報です。)

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="res/Grove-Serial_Bluetooth_eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース ##

- [シリアルBluetoothライブラリ](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth/res/Bluetooth_demo_code.zip)
- [シリアルBluetooth Eagleファイル](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth/res/Grove-Serial_Bluetooth_eagle_file.zip)
- [Bluetoothソフトウェア説明書](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth/res/Bluetooth_Software_Instruction.pdf)
- [Bluetoothモジュールデータシート](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth/res/Bluetooth_module.pdf)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>