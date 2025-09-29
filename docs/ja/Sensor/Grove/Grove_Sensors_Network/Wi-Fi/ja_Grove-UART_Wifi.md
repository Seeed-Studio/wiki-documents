---
title: Grove - UART Wi-Fi
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Grove-UART_Wifi/
slug: /ja/Grove-UART_Wifi
last_update:
  date: 05/15/2025
  author: gunengyu
---


![画像をここに挿入](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/img/main.jpg)

Grove - UART WiFiは、広く普及しているESP8266 IoT SoCを搭載したシリアルトランシーバーモジュールです。統合されたTCP/IPプロトコルスタックにより、このモジュールはマイクロコントローラーがわずかなコードでWiFiネットワークとやり取りできるようにします。各ESP8266モジュールはATコマンドセットファームウェアが事前にプログラムされており、簡単なテキストコマンドを送信するだけでデバイスを制御できます。このSoCは統合されたWEP、WPA/WPA2、TKIP、AES、WAPIエンジンを備え、DHCPを使用してアクセスポイントとして機能し、既存のWiFiネットワークに参加し、MACおよびIPアドレスを設定可能です。

<p style={{}}><a href="https://www.seeedstudio.com/Grove-Uart-Wifi-p-2495.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## バージョン

| パラメータ     | V1.0     | V2.0     |
| :------------- | :------------- | :------------- |
| 製品リリース日       | 2016年6月24日       | 2018年3月26日 |
| WiFiチップ | ESP8266 | ESP8285 |
| アンテナタイプ | 外部 | オンボード |
| LED | 3つのLED - 電源/WiFi/ATコマンド | 2つのLED - 電源/WiFi |
| ボタン | 1つのボタン: 短押しで**リセット** 長押しで**UARTブートモード**に入る | これら2つの機能用の2つのボタン |

![](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/img/Version_tracker.jpg)

:::note
ESP8266とESP8285の違いについて疑問に思うかもしれません。ESP8285はESP8266のアップデート版で、1MBの内蔵フラッシュを追加しています。それ以外はほぼ同じです。
:::

## 特徴

* Grove 4ピンコネクタ (RX, TX, VCC, GND)
* 802.11 b/g/nプロトコル (2.4GHz)
* WiFi Direct (P2P)、ソフトAP
* 3つのモードをサポート: AP、STA、AP+STA共存モード
* 統合されたTCP/IPプロトコルスタック
* LwIP (軽量IP)
* 統合された低消費電力32ビットCPUはアプリケーションプロセッサとして再プログラム可能
* 統合された温度センサー
* シリアルUARTインターフェース
* マルチキューQoS管理
* < 2msで起動してパケットを送信
* 金属シールド
* オンボードセラミックアンテナ
* リセットスイッチ

:::tip
Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::

## ハードウェア概要

以下はGrove - UART WiFiモジュールのブロック図で、以下の部品で構成されています。

![画像をここに挿入](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/img/Grove_uart_wifi_wiki_hardware_overview.jpg)

* Grove - SeeeduinoやGrove Base Shieldなどのベースボードのソケットを介してプロセッサに接続するために使用されます。
* WiFiアンテナ - ESP8266（モジュールモデル）のアンテナ
* ボタン - 多機能を備えています
  * リセット - ボタンを押してすぐに離します。
  * ESP8266（モジュールモデル）をUARTブートモードに設定 - ボタンを押し続け、中央の赤いLEDインジケーターが点灯するまで保持します。
* LEDインジケーター - 動作状態を示し、ユーザーによる操作に使用されます。
  * 左 - 青色LEDインジケーター - コマンド "AT+LEDON" および "AT+LEDOFF" を使用してユーザーが制御します。
  * 中央 - 赤色LEDインジケーター - WiFi接続時またはUARTブートモードに入ると点灯します。
  * 右 - 緑色LEDインジケーター - 電源オン時に点灯します。

## 仕様

* 入力電圧: 3V / 5V
* ボーレート: 115200
* ESP8266 ESP-06 SoC ベース
* ATファームウェア: esp_iot_sdk_v1.1.0 + Seeedによる修正:
  * 青色のLink LEDを制御するための追加ATコマンド2つ。
  * 赤色のWiFi LEDをESP8266のWiFi状態LEDに登録。
* ATコマンドセット
* SDIO 1.1/2.0、SPI、UART
* 5つの電源状態: OFF、DEEP_SLEEP、SLEEP、WAKEUP、ON
* スタンバイ時の消費電力 < 1.0mW (DTIM=3)
* 統合されたTRスイッチ、バラン、LNA、パワーアンプ、マッチングネットワーク
* 統合されたPLL、レギュレータ、DCXO、電源管理ユニット
* 802.11bモードでの+19.5dBm出力パワー
* 電源オフ時のリーク電流 < 10uA
* CCMP (CBC-MAC, カウンターモード)、TKIP (MIC, RC4)、WAPI (SMS4)、WEP (RC4)、CRC用のハードウェアアクセラレータ
* WPA/WPA2 PSK、およびWPSドライバ
* A-MPDU & A-MSDU集約 & 0.4msガードインターバル
* 寸法: 25.43mm x 20.35mm

**超低消費電力技術**

ESP8266は、特許取得済みの電源管理技術を使用して、非必須機能を削減し、スリープパターンを調整することで非常に低いエネルギー消費を実現するよう設計されています。以下の5つの電源状態があります:

* OFF
* DEEP_SLEEP - リアルタイムクロックは動作しますが、チップの他の部分はすべて停止します。
* SLEEP - 消費電力は12uA未満で、リアルタイムクロックとウォッチドッグのみが動作します。MAC、ホスト、RTC、または外部割り込みでチップが起動します。
* WAKEUP - システムがスリープ状態からオン状態に移行中。クリスタルオシレータとPLLが有効になります。
* ON - 消費電力は1.0mW未満 (DTIM = 3) または0.5mW (DTIM = 10)。

リアルタイムクロックは、指定された期間内にESP8266を起動するようにプログラムできます。

DTIM期間が長いほど、デバイスはより長くスリープできるため、デバイスの消費電力をさらに節約できます。

モバイルアプリケーションやウェアラブル電子機器の電力要件を満たすために、全体的な消費電力を削減するために、PA出力パワーをファームウェアでカスタマイズできます。

## アプリケーションアイデア

* ホームオートメーション
* センサーネットワーク
* メッシュネットワーキング
* ウェアラブル電子機器
* ベビーモニター
* ネットワークカメラ
* 産業用無線制御
* WiFiビーコン
* スマート電源プラグ
* 位置情報対応アプリケーション

## はじめに

このセクションの後、Grove - UART WiFiを数ステップで動作させることができます。

### Arduinoで遊ぶ

:::note
    Arduinoを初めて使用する場合は、開始前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)をご覧になることを強くお勧めします。
:::

#### 必要な材料

| Seeeduino Lite | Grove-OLED | Grove-UART Wifi |
|----------------|------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/lite.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_OLED_Display_0.96/images/grove%20oled%200.96_s.jpg)|![](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-Lite-p-1487.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Grove---OLED-Display-0.96%22-p-781.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Grove-Uart-Wifi-p-2495.html" target="_blank">今すぐ購入</a>|

:::note
    **1** USBケーブルを優しく差し込んでください。そうしないとポートが損傷する可能性があります。内部に4本のワイヤーがあるUSBケーブルを使用してください。2本のワイヤーしかないケーブルはデータを転送できません。お持ちのケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます。

    **2** 各Groveモジュールには購入時にGroveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)をクリックして購入できます。
:::

#### ハードウェア

* **ステップ1.** Grove-UART WifiをSeeeduino Liteの**SERIAL**ポートに接続します。

* **ステップ2.** Grove-OLEDをSeeeduino Liteの**I2C**ポートに接続します。

* **ステップ3.** Seeeduino LiteをMicro-USBケーブルでPCに接続します。

![](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/img/Arduino_connect_1.jpg)

#### ソフトウェア

* **ステップ1.** [128X64 OLEDライブラリ](https://github.com/Seeed-Studio/OLED_Display_128X64/archive/master.zip)をGithubからダウンロードします。

* **ステップ2.** [Arduinoライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照して、Arduino用のライブラリをインストールします。

* **ステップ3.** Arduino IDEを開き、以下のコードを新しいスケッチにコピーします。

```cpp
// Grove - UART WiFiのテスト
// APをスキャンしてGrove - OLED 0.96'に表示
// Loovee @ 2015-7-28

#include <Wire.h>
#include <SeeedOLED.h>

char ap_buf[30][16];
int ap_cnt = 0;

void setup()
{
    Serial1.begin(115200);

    delay(3000);
    Wire.begin();
    SeeedOled.init();                   // SEEED OLEDディスプレイを初期化

    SeeedOled.clearDisplay();           // 画面をクリアし、開始位置を左上隅に設定
    SeeedOled.setNormalDisplay();       // ディスプレイを通常モード（非反転モード）に設定
    SeeedOled.setPageMode();            // アドレッシングモードをページモードに設定
}

void loop()
{
    ap_cnt = 0;
    SeeedOled.clearDisplay();
    SeeedOled.setTextXY(3,0);    
    SeeedOled.putString("Wifi Scan..."); 

    cmd_send("AT+CWLAP");
    wait_result();
    
    display_ap();
    delay(5000);
}

// コマンド送信
void cmd_send(char *cmd)
{
    if(NULL == cmd)return;
    Serial1.println(cmd);
}

// APスキャン結果を待つ
// +CWLAP:(3,"360WiFi-UZ",-81,"08:57:00:01:61:ec",1)
void wait_result()
{
    while(1)
    {
LOOP1:
        char c1=0;
        if(Serial1.available()>=2)
        {
            c1 = Serial1.read();
            if(c1 == 'O' && 'K' == Serial1.read())return;       // OKは終了を意味する
        }
        
        if('('==c1)
        {
            while(Serial1.available()<3);
            Serial1.read();
            Serial1.read();
            Serial1.read();

            int d = 0;
            while(1)
            {
                if(Serial1.available() && '"' == Serial1.read());      // "を見つける
                {
                    while(1)
                    {
                        if(Serial1.available())
                        {
                            char c = Serial1.read();
                            ap_buf[ap_cnt][d++] = c;
                            if(c == '"' || d==16)
                            {
                                ap_buf[ap_cnt][d-1] = '\0';
                                ap_cnt++;
                                goto LOOP1;
                            }
                        }
                    }
                }
            }
        }
    }
}

// 表示
void display_ap()
{
    char strtmp[16];
    sprintf(strtmp, "get %d ap", ap_cnt);
    
    SeeedOled.clearDisplay();           // クリア
    SeeedOled.setTextXY(3,3);           // カーソルをXページ目、Y列目に設定
    SeeedOled.putString(strtmp);        // 文字列を表示
 
    delay(2000);
    
    int cnt = ap_cnt;
    int offset = 0;
    while(1)
    {
        SeeedOled.clearDisplay(); 
        if(cnt>=8)
        {
            for(int i=0; i<8; i++)
            {
                SeeedOled.setTextXY(i,0);           // カーソルをXページ目、Y列目に設定
                SeeedOled.putString(ap_buf[8*offset+i]);        // 文字列を表示
            }
            cnt-=8;
            offset++;
        }
        else 
        {
            for(int i=0; i<cnt; i++)
            {
                SeeedOled.setTextXY(i,0);           // カーソルをXページ目、Y列目に設定
                SeeedOled.putString(ap_buf[8*offset+i]);        // 文字列を表示
            }
            
            return;
        }
        
        delay(2000);
    }
}

```

* **ステップ 4.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

その後、OLEDが周囲のWiFiアクセスポイントを表示するのが確認できます。

![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/img/Grove_uart_wifi_result.jpg)

## ファームウェアの更新

:::warning
        このファームウェアはV1のみ対応しています。このファームウェアをGrove UART WIFI V2に書き込むと、モジュールが壊れる可能性があります。
:::

モジュールボードには工場設定用のファームウェアが書き込まれていますが、必要に応じて他のファームウェアを書き込むことができます。[こちら](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/res/Grove-Uart_Wifi_Firmware-code.zip)をクリックして、工場設定ファームウェアのソースコードをダウンロードしてください。

### 必要な材料

* ファームウェア更新にはUSBシリアルコンバータが必要です。[UartSBee V5](https://www.seeedstudio.com/UartSBee-V5-p-1752.html)を選択することをお勧めします。
* [Grove-Jump変換ケーブル](https://www.seeedstudio.com/Grove-4-pin-Female-Jumper-to-Grove-4-pin-Conversion-Cable-%285-PCs-per-PAck%29-p-1020.html)が必要で、販売も行っています。
* マイクロUSBケーブル（タイプAからタイプC）が必要です。

### ハードウェア

**ステップ 1.** Grove-Jump変換ケーブルの片方をGrove - Uart WifiのGroveソケットに接続し、もう片方をUartSBee V5に接続します。以下の図を参照してください。

![](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/img/UART_v1.jpg)

**ステップ 2.** 次に、以下の図のようにケーブルを接続します。

![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/img/Grove_uart_wifi_firmware_connect2.jpg)

### ソフトウェア

**ステップ 1.** 書き込みツールとファームウェアをダウンロードします。

* [FLASH DOWNLOAD TOOLS](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/res/FLASH_DOWNLOAD_TOOLS_v1.2_150512.zip)
* [ファームウェアのBinファイル](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/res/Grove-uart-wifi-firmware-bin.zip)

**ステップ 2.** 赤色LEDインジケータが点灯するまでボタンを押し続けます。これにより、ファームウェアの書き込み準備が整います。

**ステップ 3.** FLASH DOWNLOAD TOOLSファイル内の実行可能ファイルを起動します（ダブルクリック）。以下の手順で設定を行います。

![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/img/Grove_uart_wifi_firmware_tools1.jpg)

**1.** ダウンロードしたファームウェアBinファイルから必要なファイルを選択します。

**2.** **SpiAutoSet**チェックボックスを選択します。

**3.** COMポートとBAUDRATEを選択します。

**4.** **START**ボタンをクリックします。

* ファームウェア書き込みプロセス中に進行バーが表示されます。

![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/img/Grove_uart_wifi_firmware_tools2.1.jpg)

* 最終的にファームウェア書き込みが完了します。

![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/img/Grove_uart_wifi_firmware_tools3.jpg)

## ATコマンド

### ATコマンドのクイックスタート

#### ハードウェア

**必要な材料**と**ハードウェア接続**は[ファームウェアの更新](https://wiki.seeedstudio.com/ja/Grove-UART_Wifi/#firmware-update)と同じです。

ソフトウェア部分に進みましょう。

#### ソフトウェア

任意のシリアルツールを使用できますが、ここではArduinoを使用します。また、**USBシリアルコンバータ**がPCに接続されていることを確認してください。

**ステップ 1.** Arduino IDEを開き、**ツール**をクリックして対応する**ポート**を選択します。

![](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/img/1.png)

<div>
  **ステップ 2.** 次に、右上の<embed src="https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/img/COM.png" />ボタンをクリックしてArduinoの**シリアルモニタ**を開きます。
</div>

**ステップ 3.** 以下の画像のようにシリアルモニタを設定します。特に、2- **Both NL & CR**を選択し、3- **ボーレート**を115200に設定します。

![](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/img/result.png)

**ステップ 3.** コマンドラインに必要なATコマンドを入力し、**送信**ボタンをクリックします。上記の画像のように返答情報が表示されます。

### 基本ATコマンド

| コマンド | 説明 |
|-------------|---------------|
|AT |AT起動テスト|
|AT+RST| モジュールを再起動|
|AT+GMR| バージョン情報を表示|
|AT+GSLP| ディープスリープモードに入る|
|ATE| ATコマンドエコーの有効化/無効化|
|AT+RESTORE| 工場出荷時設定にリセット|
|AT+UART| UART設定(廃止予定)|
|AT+UART_CUR| 現在のUART設定 (Flashに保存されない)|
|AT+UART_DEF| デフォルトのUART設定 (Flashに保存)|
|AT+SLEEP |スリープモード|
|AT+RFPOWER| RF送信電力を設定|
|AT+RFVDD| VDD33に基づいてRF送信電力を設定|

### WiFi ATコマンド

|コマンド |説明|
|--------------|-------------|
|AT+CWMODE |WiFiモード (廃止予定)|
|AT+CWMODE_CUR |現在のWiFiモード (Flashに保存されない)|
|AT+CWMODE_DEF| デフォルトのWiFiモード (Flashに保存)|
|AT+CWJAP| APに接続 (廃止予定)|
|AT+CWJAP_CUR| 現在のAPに接続 (Flashに保存されない)|
|AT+CWJAP_DEF| デフォルトのAPに接続 (Flashに保存)|
|AT+CWLAP| 利用可能なAPをリスト表示|
|AT+CWQAP| APから切断|
|AT+CWSAP| softAPを設定 (廃止予定)|
|AT+CWSAP_CUR| 現在のsoftAPを設定 (Flashに保存されない)|
|AT+CWSAP_DEF| デフォルトのsoftAPを設定 (Flashに保存)|
|AT+CWLIF| softAPに接続されているステーションをリスト表示|
|AT+CWDHCP| DHCPの有効化/無効化 (廃止予定)|
|AT+CWDHCP_CUR| 現在のDHCPの有効化/無効化 (Flashに保存されない)|
|AT+CWDHCP_DEF| デフォルトのDHCPの有効化/無効化 (Flashに保存)|
|AT+CWAUTOCONN| 電源オン時に自動的にAPに接続|
|AT+CIPSTAMAC| ステーションMACアドレスを設定 (廃止予定)|
|AT+CIPSTAMAC_CUR| ステーションMACアドレスを設定 (Flashに保存されない)|
|AT+CIPSTAMAC_DEF| ステーションMACアドレスを設定 (Flashに保存)|
|AT+CIPAPMAC| softAP MACアドレスを設定 (廃止予定)|
|AT+CIPAPMAC_CUR| softAP MACアドレスを設定 (Flashに保存されない)|
|AT+CIPAPMAC_DEF| softAP MACアドレスを設定 (Flashに保存)|
|AT+CIPSTA| ステーションIPアドレスを設定 (廃止予定)|
|AT+CIPSTA_CUR| ステーションIPアドレスを設定 (Flashに保存されない)|
|AT+CIPSTA_DEF| ステーションIPアドレスを設定 (Flashに保存)|
|AT+CIPAP| softAP IPアドレスを設定 (廃止予定)|
|AT+CIPAP_CUR| softAP IPアドレスを設定 (Flashに保存されない)|
|AT+CIPAP_DEF| softAP IPアドレスを設定 (Flashに保存)|
|AT+CWSTARTSMART| SmartConfigを開始|
|AT+CWSTOPSMART| SmartConfigを停止|

### TCP/IP ATコマンド

|コマンド |説明|
|-------------|--------------|
|AT+CIPSTATUS| 接続ステータスを取得|
|AT+CIPSTART| TCP接続を確立またはUDPポートを登録|
|AT+CIPSEND| データを送信|
|AT+CIPSENDEX| データを送信、"\0"に達した場合データを送信|
|AT+CIPSENDBUF| データをTCP送信バッファに書き込む|
|AT+CIPBUFRESET| セグメントIDカウントをリセット|
|AT+CIPBUFSTATUS| TCP送信バッファのステータスを確認|
|AT+CIPCHECKSEQ| 特定のセグメントが送信されたかどうかを確認|
|AT+CIPCLOSE| TCP/UDP接続を閉じる|
|AT+CIFSR| ローカルIPアドレスを取得|
|AT+CIPMUX| 複数接続モードを設定|
|AT+CIPSERVER| サーバーとして設定|
|AT+CIPMODE| 送信モードを設定|
|AT+SAVETRANSLINK| フラッシュに透過送信リンクを保存|
|AT+CIPSTO| ESP8266がTCPサーバーとして動作する際のタイムアウトを設定|
|AT+CIUPDATE| ネットワーク経由でファームウェアをアップグレード|
|AT+PING| IPアドレスまたはホスト名にPingを送信|

### Seeed ATコマンド

|コマンド |説明|
|-------------|---------------|
|AT+LEDON| 青色のLINK LEDを点灯|
|AT+LEDOFF |青色のLINK LEDを消灯|

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/res/Grove-UART_WiFi_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

* **[PDF]** [PDF形式の回路図](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/res/Grove-UART_WiFi_v1.0.pdf)

* **[Zip]** [Eagle形式の回路図](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/res/Grove-UART_WiFi_sch_pcb.zip)
* **[Datasheet]** [Espressif Systems ESP8266](http://espressif.com/en/products/esp8266/)
* **[PDF]** [Espressif Systems ESP8266 ATコマンドセット - v0.24](http://bbs.espressif.com/download/file.php?id=450)
* **[MoreReading]** [http://www.esp8266.com](http://www.esp8266.com)
* **[MoreReading]** [ESP-06](http://www.esp8266.com/wiki/doku.php?id=esp8266-module-family#esp-06)
* **[MoreReading]** [HackadayのESP8266](http://hackaday.com/tag/esp8266/)
* **[MoreReading]** [https://nurdspace.nl/ESP8266](https://nurdspace.nl/ESP8266)

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