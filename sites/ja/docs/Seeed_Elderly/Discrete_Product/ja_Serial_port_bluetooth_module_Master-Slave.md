---
description: シリアルポートBluetoothモジュール（マスター/スレーブ）
title: シリアルポートBluetoothモジュール（マスター/スレーブ）
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Serial_port_bluetooth_module_Master-Slave
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Serial_port_bluetooth_module_Master-Slave/img/newblue_LRG.jpg)

このモジュールは、透明なワイヤレスシリアル接続用に設計された、使いやすいBluetooth SPP（シリアルポートプロトコル）モジュールです。

シリアルポートBluetoothモジュールは、完全に認定されたBluetooth V2.0+EDR（Enhanced Data Rate）3Mbps変調を備えた2.4GHz無線トランシーバーとベースバンドを備えています。CSR Bluecore 04-ExternalシングルチップBluetoothシステムをCMOS技術とAFH（Adaptive Frequency Hopping Feature）と共に使用しています。フットプリントはわずか12.7mm x 27mmと小型で、設計/開発サイクルを簡素化することが期待されます。

**モデル: [WLS123A1M](https://www.seeedstudio.com/depot/serial-port-bluetooth-module-masterslave-p-572.html?cPath=139_142)**

## 特徴

### ハードウェアの特徴

* 典型的な-80dBm感度
* 最大+4dBm RF送信出力
* 低電力1.8V動作、1.8〜3.6V I/O
* PIO制御
* プログラム可能なボーレートを備えたUARTインターフェース
* 統合アンテナ
* エッジコネクタ

### ソフトウェアの特徴

* デフォルトのボーレート: 38400、データビット: 8、ストップビット: 1、パリティ: なし、データ制御: あり。サポートされるボーレート:

9600, 19200, 38400, 57600, 115200, 230400, 460800。

* CTSとRTSを使用してデータストリームを制御。
* PIO0に上昇パルスを与えると、デバイスが切断されます。
* ステータス指示ポートPIO1: 低-切断、高-接続。
* PIO10とPIO11は、それぞれ赤と青のLEDに接続可能。マスターとスレーブがペアリングされると、赤と青のLEDが2秒間隔で1回点滅。切断時は青のLEDのみが1秒間に2回点滅。

* デフォルトで電源投入時に最後に接続したデバイスに自動接続。
* デフォルトでペアリングデバイスの接続を許可。
* デフォルトの自動ペアリングPINコード: "0000"。
* 接続範囲外で切断された場合、30分以内に自動再接続。

## 応用アイデア

* リモートコントローラー
* ワイヤレス通信

## 注意事項

* Seeeduino / Arduinoと使用する場合、動作電圧を5Vに設定してください。それ以外の場合は適切なロジックレベルコンバータを使用してください。
* UartSBeeと使用する場合、動作電圧を5Vに設定してください。
* ボーレートを変更するコマンドはリセット後も保持されます。そのため、次回使用時のボーレートを覚えておいてください。

## 仕様

![](https://files.seeedstudio.com/wiki/Serial_port_bluetooth_module_Master-Slave/img/Bluetooth-module-pin.JPG)

<table>
<tr>
<th>ピン</th>
<th>#</th>
<th>パッドタイプ</th>
<th>説明</th>
</tr>
<tr>
<td>PIO11</td>
<td>34</td>
<td>双方向</td>
<td>プログラム可能な入出力ライン</td>
</tr>
<tr>
<td>PIO10</td>
<td>33</td>
<td>双方向</td>
<td>プログラム可能な入出力ライン</td>
</tr>
<tr>
<td>PIO9</td>
<td>32</td>
<td>双方向</td>
<td>プログラム可能な入出力ライン</td>
</tr>
<tr>
<td>PIO8</td>
<td>31</td>
<td>双方向</td>
<td>プログラム可能な入出力ライン</td>
</tr>
<tr>
<td>PIO7</td>
<td>30</td>
<td>双方向</td>
<td>プログラム可能な入出力ライン</td>
</tr>
<tr>
<td>PIO6</td>
<td>29</td>
<td>双方向</td>
<td>プログラム可能な入出力ライン</td>
</tr>
<tr>
<td>PIO5</td>
<td>28</td>
<td>双方向</td>
<td>プログラム可能な入出力ライン</td>
</tr>
<tr>
<td>PIO4</td>
<td>27</td>
<td>双方向</td>
<td>プログラム可能な入出力ライン</td>
</tr>
<tr>
<td>PIO3</td>
<td>26</td>
<td>双方向</td>
<td>プログラム可能な入出力ライン</td>
</tr>
<tr>
<td>PIO32</td>
<td>25</td>
<td>双方向</td>
<td>プログラム可能な入出力ライン</td>
</tr>
<tr>
<td>PIO1</td>
<td>24</td>
<td>双方向 TX EN</td>
<td>プログラム可能な入出力ライン、PA（装着されている場合）の制御出力</td>
</tr>
<tr>
<td>PIO0</td>
<td>23</td>
<td>双方向 RX EN</td>
<td>プログラム可能な入出力ライン、LNA（装着されている場合）の制御出力</td>
</tr>
<tr>
<td>GND</td>
<td>13,21,22</td>
<td>VSS</td>
<td>グランドポット</td>
</tr>
<tr>
<td>USB±</td>
<td>15,20</td>
<td>双方向</td>
<td></td>
</tr>
<tr>
<td>SPI_CLK</td>
<td>19</td>
<td>弱い内部プルダウンを備えたCMOS入力</td>
<td>シリアルペリフェラルインターフェイスクロック</td>
</tr>
<tr>
<td>SPI_MISO</td>
<td>18</td>
<td>弱い内部プルダウンを備えたCMOS入力</td>
<td>シリアルペリフェラルインターフェイスデータ出力</td>
</tr>
<tr>
<td>SPI_MOSI</td>
<td>17</td>
<td>弱い内部プルダウンを備えたCMOS入力</td>
<td>シリアルペリフェラルインターフェイスデータ入力</td>
</tr>
<tr>
<td>SPI_CSB</td>
<td>16</td>
<td>弱い内部プルアップを備えたCMOS入力</td>
<td>シリアルペリフェラルインターフェイス用チップセレクト、アクティブロー</td>
</tr>
<tr>
<td>NC</td>
<td>14</td>
<td></td>
<td></td>
</tr>
<tr>
<td>3.3VCC</td>
<td>12</td>
<td>3.3V</td>
<td>オンチップリニアレギュレータ出力を備えた統合3.3V（+）供給（3.15〜3.3V内）</td>
</tr>
<tr>
<td>RESETB</td>
<td>11</td>
<td>弱い内部プルアップを備えたCMOS入力</td>
<td>低の場合リセット。入力はデバウンスされているため、リセットを引き起こすには5ms以上低である必要があります。</td>
</tr>
<tr>
<td>AIO1</td>
<td>10</td>
<td>双方向</td>
<td>プログラム可能な入出力ライン</td>
</tr>
<tr>
<td>AIO0</td>
<td>9</td>
<td>双方向</td>
<td>プログラム可能な入出力ライン</td>
</tr>
<tr>
<td>PCM_SYNC</td>
<td>8</td>
<td>双方向</td>
<td>同期PCMデータストローブ</td>
</tr>
<tr>
<td>PCM_IN</td>
<td>7</td>
<td>CMOS入力</td>
<td>同期PCMデータ入力</td>
</tr>
<tr>
<td>PCM_OUT</td>
<td>6</td>
<td>CMOS出力</td>
<td>同期PCMデータ出力</td>
</tr>
<tr>
<td>PCM_CLK</td>
<td>5</td>
<td>双方向</td>
<td>同期PCMデータクロック</td>
</tr>
<tr>
<td>UART_RTS</td>
<td>4</td>
<td>弱い内部プルアップを備えたCMOS出力トライステート</td>
<td>UART送信要求、アクティブロー</td>
</tr>
<tr>
<td>UART_CTS</td>
<td>3</td>
<td>弱い内部プルダウンを備えたCMOS入力</td>
<td>UARTデータ入力</td>
</tr>
<tr>
<td>UART_RX</td>
<td>2</td>
<td>弱い内部プルダウンを備えたCMOS出力トライステート</td>
<td>UARTデータ入力</td>
</tr>
<tr>
<td>UART_TX</td>
<td>1</td>
<td>弱い内部プルアップを備えたCMOS出力トライステート</td>
<td>UARTデータ出力</td>
</tr>
</table>

## ソフトウェア説明  

#### 作業スケッチマップ  

![](https://files.seeedstudio.com/wiki/Serial_port_bluetooth_module_Master-Slave/img/Bluetooth-1.jpg)

#### フローチャート  

![](https://files.seeedstudio.com/wiki/Serial_port_bluetooth_module_Master-Slave/img/Bluetooth-2.jpg)

#### デフォルト設定を変更するためのコマンド  

**1. 動作モードを設定する**

<table>
<tr>
<td>コマンド</td>
<td>説明</td>
</tr>
<tr>
<td>\r\n+STWMOD=0\r\n</td>
<td>デバイスの動作モードをクライアント（スレーブ）として設定します。保存して再起動します。</td>
</tr>
<tr>
<td>\r\n+STWMOD=1\r\n</td>
<td>デバイスの動作モードをサーバー（マスター）として設定します。保存して再起動します。</td>
</tr>
</table>

**注意:** **\r\n** は操作に必要で、16進数では **0x0D 0x0A** の値です。**\r** は **キャリッジリターン**、**\n** は **ラインフィード**（次の行）を表します。

**2. ボーレートを設定する**

<table>
<tr>
<td>コマンド</td>
<td>説明</td>
</tr>
<tr>
<td>\r\n+STBD=115200\r\n</td>
<td>ボーレートを115200に設定します。保存して再起動します。</td>
</tr>
<tr>
<td colspan="2">サポートされているボーレート: 9600, 19200, 38400, 57600, 115200, 230400, 460800。</td>
</tr>
</table>

**3. デバイス名を設定する**

<table>
<tr>
<td>コマンド</td>
<td>説明</td>
</tr>
<tr>
<td>\r\n+STNA=abcdefg</td>
<td>デバイス名を「abcdefg」に設定します。保存して再起動します。</td>
</tr>
</table>

**4. 電源投入時に最後にペアリングしたデバイスに自動接続する**

<table>
<tr>
<td>コマンド</td>
<td>説明</td>
</tr>
<tr>
<td>\r\n+STAUTO=0\r\n</td>
<td>自動接続を禁止します。保存して再起動します。</td>
</tr>
<tr>
<td>\r\n+STAUTO=1\r\n</td>
<td>自動接続を許可します。保存して再起動します。</td>
</tr>
</table>

**5. ペアリング済みデバイスが接続を許可する**

<table>
<tr>
<td>コマンド</td>
<td>説明</td>
</tr>
<tr>
<td>\r\n+STOAUT=0\r\n</td>
<td>禁止します。保存して再起動します。</td>
</tr>
<tr>
<td>\r\n+STOAUT=1\r\n</td>
<td>許可します。保存して再起動します。</td>
</tr>
</table>

**6. PINコードを設定する**

<table>
<tr>
<td>コマンド</td>
<td>説明</td>
</tr>
<tr>
<td>\r\n +STPIN=2222\r\n</td>
<td>PINコードを「2222」に設定します。保存して再起動します。</td>
</tr>
</table>

**7. PINコードを削除する（MCUでPINコードを入力）**

<table>
<tr>
<td>コマンド</td>
<td>説明</td>
</tr>
<tr>
<td>\r\n+DLPIN\r\n</td>
<td>PINコードを削除します。保存して再起動します。</td>
</tr>
</table>

**8. ローカルアドレスコードを読み取る**

<table>
<tr>
<td>コマンド</td>
<td>説明</td>
</tr>
<tr>
<td>\r\n+RTADDR\r\n</td>
<td>デバイスのアドレスを返します。</td>
</tr>
</table>

**9. マスターデバイスが有効範囲外になった場合の自動再接続（スレーブデバイスは有効範囲外になった場合、30分以内に自動再接続します）**

<table>
<tr>
<td>コマンド</td>
<td>説明</td>
</tr>
<tr>
<td>\r\n+LOSSRECONN=0\r\n</td>
<td>自動再接続を禁止します。</td>
</tr>
<tr>
<td>\r\n+LOSSRECONN=1\r\n</td>
<td>自動再接続を許可します。</td>
</tr>
</table>

#### 通常操作のためのコマンド:  

**1. 検索**

**a) マスター**

<table>
<tr>
<td>コマンド</td>
<td>説明</td>
</tr>
<tr>
<td>\r\n+INQ=0\r\n</td>
<td>検索を停止します。</td>
</tr>
<tr>
<td>\r\n+INQ=1\r\n</td>
<td>検索を開始/再開します。</td>
</tr>
</table>

**b) スレーブ**

<table>
<tr>
<td>コマンド</td>
<td>説明</td>
</tr>
<tr>
<td>\r\n+INQ=0\r\n</td>
<td>検索されることを無効にします。</td>
</tr>
<tr>
<td>\r\n+INQ=1\r\n</td>
<td>検索されることを有効にします。</td>
</tr>
</table>

**+INQ=1** コマンドが成功すると、赤と緑のLEDが交互に点滅します。

**2. Bluetoothモジュールが検索結果を返す**

<table>
<tr>
<td>応答</td>
<td>説明</td>
</tr>
<tr>
<td>\r\n+RTINQ=aa,bb,cc,dd,ee,ff;name\r\n</td>
<td>アドレス「aa,bb,cc,dd,ee,ff」と名前「name」を持つシリアルBluetoothデバイスが検索されました。</td>
</tr>
</table>

**3. デバイスに接続する**

<table>
<tr>
<td>コマンド</td>
<td>説明</td>
</tr>
<tr>
<td>\r\n+CONN=aa,bb,cc,dd,ee,ff\r\n</td>
<td>アドレス「aa,bb,cc,dd,ee,ff」を持つデバイスに接続します。</td>
</tr>
</table>

**4. BluetoothモジュールがPINコードの入力を要求する**

\r\n+INPIN\r\n

**5. PINコードを入力する**

<table>
<tr>
<td>コマンド</td>
<td>説明</td>
</tr>
<tr>
<td>\r\n+RTPIN=code\r\n</td>
<td></td>
</tr>
<tr>
<td>例: RTPIN=0000</td>
<td>PINコード「0000」を入力します。</td>
</tr>
</table>

**6. デバイスを切断する**  
PIO0を高にすると、現在接続中のBluetoothデバイスが切断されます。

**7. ステータスを返す**  
\r\n+BTSTA:**xx**\r\n  
 **xx** ステータス:

*   0 - 初期化中
*   1 - 準備完了
*   2 - 検索中
*   3 - 接続中
*   4 - 接続済み

(**注意:** これはコマンドではなく、モジュールが各コマンド後に返す情報です)  

## 追加のアイデア  

*   [PCをシリアルBluetooth Groveと接続する方法](https://forum.seeedstudio.com/viewtopic.php?f=18&amp;t=1436&amp;p=5637#p5637)

*   [2つのBluetoothモジュール間の接続をステップバイステップで設定する方法](https://forum.seeedstudio.com/viewtopic.php?f=4&amp;t=687)

## リソース  

- **[ソフトウェア]**   [ソフトウェアの説明書](https://files.seeedstudio.com/wiki/Serial_port_bluetooth_module_Master-Slave/res/Bluetooth_Software_Instruction.pdf)

- **[データシート]**  [Bluetoothモジュールのデータシート](https://files.seeedstudio.com/wiki/Serial_port_bluetooth_module_Master-Slave/res/Bluetooth_module.pdf)

## サポート  

質問やより良い設計アイデアがある場合は、[フォーラム](https://www.seeedstudio.com/forum)または**Wish**で議論することができます。

## 購入方法  

こちらをクリックして購入: [シリアルポートBluetoothモジュール (マスター/スレーブ)](https://www.seeedstudio.com/depot/serial-port-bluetooth-module-masterslave-p-572.html?cPath=139_142)

## 関連リンク  

*   [Grove - シリアルBluetooth](https://www.seeedstudio.com/depot/grove-serial-bluetooth-p-795.html?cPath=139_142)

*   [Bluetooth Bee - スタンドアロン](https://www.seeedstudio.com/depot/bluetooth-bee-standalone-p-1157.html?cPath=139_142)

*   [Bluetoothシールド](https://www.seeedstudio.com/depot/bluetooth-shield-p-866.html?cPath=132_134)

*   [Bluetooth Bee](https://www.seeedstudio.com/depot/bluetooth-bee-p-598.html?cPath=139_142)

## ライセンス  

このドキュメントはCreative Commons [Attribution-ShareAlike License 3.0](http://creativecommons.org/licenses/by-sa/3.0/)の下でライセンスされています。ソースコードとライブラリは[GPL/LGPL](http://www.gnu.org/licenses/gpl.html)の下でライセンスされています。詳細はソースコードファイルを参照してください。

## 外部リンク  

アプリケーションアイデア、ドキュメント/データシート、またはソフトウェアライブラリを提供する外部ウェブページへのリンク

## 関連プロジェクト  

シリアルポートBluetoothモジュールを使用して素晴らしいプロジェクトを作成したい場合、以下のプロジェクトを参考にしてください。

### Androidアプリから複数のサーボモーターを制御する  

![](https://files.seeedstudio.com/wiki/Serial_port_bluetooth_module_Master-Slave/img/Control_Multiple_servo_Motor_From_android_app.jpg)

これはArduinoと[Grove](https://seeeddoc.github.io/Grove_System/)を使用して作成された興味深いデモです。  
Androidアプリから複数のサーボモーターを制御する方法に関する完全なチュートリアルです。

[**作ってみたい！**](https://www.seeedstudio.com/recipe/255-control-multiple-servo-motor-from-android-app.html)

### 素晴らしいプロジェクトを私たちと共有しましょう  

作ることと共有することの精神を持って生まれた、それが私たちが信じる「メイカー」を作るものです。

そして、これがあるからこそ、オープンソースコミュニティは今日のように繁栄しています。

あなたが何者であれ、何を作ったかは関係ありません。ハッカー、メイカー、アーティスト、エンジニア、

他の人とあなたの作品を共有し始める限り、

あなたはオープンソースコミュニティの一員となり、貢献をしているのです。

今すぐ[Recipe](https://www.seeedstudio.com/recipe/)で素晴らしいプロジェクトを私たちと共有し、Seeedのコアユーザーになるチャンスを手に入れましょう。

*   コアユーザーとは、Seeed製品に高い関心を持ち、重要な貢献をしている人々のことです。
*   私たちはコアユーザーと協力して新製品の開発を行います。つまり、コアユーザーはSeeedの新製品を公式発売前に体験する機会を得ることができ、その見返りとして製品性能やユーザー体験を向上させるための貴重なフィードバックを期待しています。ほとんどの場合、コアユーザーが何かを作るための良いアイデアを持っている場合、私たちはハードウェア部品、PCBAサービス、技術サポートを提供します。また、コアユーザーとのさらなる商業的協力の可能性も非常に高いです。

<font color="#FF0000">コアユーザーに関する詳細情報は、recipe@seeed.ccまでメールでお問い合わせください。</font>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>