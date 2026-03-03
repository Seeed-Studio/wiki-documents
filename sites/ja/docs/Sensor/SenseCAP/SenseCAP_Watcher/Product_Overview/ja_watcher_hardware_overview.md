---
description: SenseCAP Watcherのハードウェアコンポーネント。
title: ハードウェア概要
image: https://files.seeedstudio.com/wiki/watcher_getting_started/hardware_overview_1.webp
slug: /ja/watcher_hardware_overview
sidebar_position: 1
last_update:
  date: 10/18/2024
  author: Citric, Djair
---

# SenseCAP Watcher ハードウェア概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/hardware_overview.jpg" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://www.youtube.com/watch?v=ny22Z0cAIqE" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Watcherの動画</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://github.com/Seeed-Studio/OSHW-SenseCAP-Watcher" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Githubリポジトリ</font></span></strong>
    </a>
</div><br />

このWikiのセクションでは、SenseCAP Watcherのハードウェアコンポーネント、その構造、および追加アクセサリーの使用に焦点を当てます。

## 仕様

<div class="table-center">
<table align="center">
        <tr>
            <th>ハードウェア</th>
            <th>説明</th>
        </tr>
        <tr>
            <td align="center">MCU</td>
            <td align="center">ESP32-S3 @240MHz 8MB PSRAM</td>
        </tr>
        <tr>
            <td align="center">内蔵AIプロセッサ</td>
            <td align="center">Himax HX6538 (Cortex M55 + Ethos-U55)</td>
        </tr>
        <tr>
            <td align="center">カメラ</td>
            <td align="center">OV5647 120° FOV <br /> 固定焦点 3メートル</td>
        </tr>
        <tr>
            <td align="center">Wi-Fi</td>
            <td align="center">IEEE 802.11b/g/n準拠<br />2.4GHz帯<br />無線範囲：最大100メートル（開放空間テスト）</td>
        </tr>
        <tr>
            <td align="center">Bluetooth LE</td>
            <td align="center">Bluetooth 5</td>
        </tr>
        <tr>
            <td align="center">アンテナ</td>
            <td align="center">内蔵Wi-FiおよびBLEアンテナ</td>
        </tr>
        <tr>
            <td align="center">ディスプレイ</td>
            <td align="center">1.45インチタッチスクリーン、412×412解像度</td>
        </tr>
        <tr>
            <td align="center">マイクロフォン</td>
            <td align="center">シングルマイクロフォン</td>
        </tr>
        <tr>
            <td align="center">スピーカー</td>
            <td align="center">1Wスピーカー出力</td>
        </tr>
        <tr>
            <td align="center">ホイール</td>
            <td align="center">上下スクロールとボタンをサポート</td>
        </tr>
        <tr>
            <td align="center">LED</td>
            <td align="center">表示用1xRGBライト</td>
        </tr>
        <tr>
            <td align="center">microSDカードスロット</td>
            <td align="center">最大32GB FAT32 microSDカードをサポート</td>
        </tr>
        <tr>
            <td align="center">フラッシュ</td>
            <td align="center">ESP32-S3用32MBフラッシュ<br />Himax HX6538用16MBフラッシュ</td>
        </tr>
        <tr>
            <td align="center">拡張インターフェース</td>
            <td align="center">1xGrove IICインターフェース<br />2x4メスヘッダー（1xIIC、2xGPIO、2xGND、1x3.3V_OUT、1x5V_IN）</td>
        </tr>
        <tr>
            <td align="center">USB-C</td>
            <td align="center">背面に1x USB-C（電源供給のみ）<br />底面に1x USB-C（電源供給およびプログラミング）</td>
        </tr>
        <tr>
            <td align="center">リセットボタン</td>
            <td align="center">底面の穴に1xRSTボタン</td>
        </tr>
        <tr>
            <td align="center">電源供給</td>
            <td align="center">5V DC電源</td>
        </tr>
        <tr>
            <td align="center">バッテリー</td>
            <td align="center">バックアップ電源として3.7V 400mAhリチウムイオンバッテリー</td>
        </tr>
        <tr>
            <td align="center">動作温度</td>
            <td align="center">0 ~ 45°C</td>
        </tr>
        <tr>
            <td align="center">取り付けブラケット</td>
            <td align="center">壁面、デスクトップ、ブラケット設置をサポート<br />粘着剤付きユニバーサルホイールとベースプレート1個<br />1/4"メスアダプターセット1個</td>
        </tr>
    </table>
</div>

## 機能

- デバイス上 + サーバーAI処理による高効率アーキテクチャ
- 無限モーダルによる拡張性
- オープンソースとオンプレミス展開によるプライバシー保護
- カスタマイズ可能な感情応答

## 正面図

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/hardware-1.png" style={{width:1000, height:'auto'}}/></div>

## 背面図

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/hardware-2.png" style={{width:1000, height:'auto'}}/></div>

## 内部

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/hardware-3.png" style={{width:1000, height:'auto'}}/></div>

## マウントインターフェース

Watcherデバイスの背面には、デバイスを様々な表面やアクセサリーに安全に取り付けることができるマウントブラケットがあります。現在、異なる設置ニーズに対応するため、2種類のマウントブラケットを提供しています：

:::tip
Watcher本体には360°回転ブラケットのみが付属していることにご注意ください。1/4ネジ三脚ブラケットが必要な場合は、別途[購入](https://www.seeedstudio.com/Mini-Tripod-p-5978.html)してください。
:::

### 360°回転ブラケット

- このブラケットは、壁やその他の垂直面への簡単な設置用に設計されています。
- 完全な360度回転を提供し、Watcherデバイスの向きを調整して希望する視野角を実現できます。
- 回転ブラケットは位置決めの柔軟性を提供し、壁への確実な取り付けを保証します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/omni_wheel_bracket.gif" style={{width:650, height:'auto'}}/></div><br />

### 1/4ネジ三脚ブラケット

- このブラケットは、机、テーブル、棚などの平面にWatcherを設置するのに最適です。
- 標準の1/4インチネジを備えており、ほとんどの三脚やその他のマウントアクセサリーと互換性があります。
- 三脚ブラケットは安定性を提供し、特定のニーズに応じて様々な高さと角度でWatcherを配置できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/threaded_bracket.gif" style={{width:650, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Mini-Tripod-p-5978.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入</font></span></strong>
    </a>
</div>

これらのマウントブラケットのいずれかを使用するには、以下の一般的な手順に従ってください：

1. 設置予定場所（壁または平面）に基づいて適切なブラケットを選択します。

2. 選択したブラケットをWatcherデバイス背面のマウントブラケットに取り付けます。偶発的な脱落を防ぐため、確実に接続してください。

3. 360°回転ブラケットの場合：
   - Watcherを設置したい壁上の希望する場所を特定します。
   - 付属のネジとアンカー（必要に応じて）を使用して、ブラケットを壁に確実に取り付けます。
   - Watcherを希望する角度に回転させて向きを調整します。

4. 1/4ネジ三脚ブラケットの場合：
   - Watcherを設置したい安定した平面を選択します。
   - 三脚を使用する場合は、1/4インチネジを使用して三脚をブラケットに取り付けます。
   - Watcherの最適な視野位置を実現するため、三脚の高さと角度を調整します。

5. いずれかのブラケットを使用してWatcherが確実にマウントされたら、電源に接続し、お好みに応じて設定を行うことができます。

これら2つのマウントブラケットオプションを提供することで、様々な環境へのWatcherデバイスの統合において柔軟性と利便性を提供することを目指しています。壁掛け設置または机上設置のいずれをお好みでも、当社のブラケットは確実で調整可能な設置を保証します。

:::tip
Watcher本体には以下のスタンドは付属していませんので、スタンドが必要な場合は別途購入してください。
:::

## ハードウェア図

Watcherのハードウェアアーキテクチャについて、図で提供された詳細を詳しく見ていきましょう。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/Diagram.png" style={{width:1000, height:'auto'}}/></div>

Watcherの心臓部はメインMCUで、これは**ESP32-S3**チップです。この強力なマイクロコントローラーは240MHzで動作し、効率的な処理とメモリ管理のために8MBのPSRAMを搭載しています。

ESP32-S3は様々な周辺機器とインターフェースと通信します：

1. **ディスプレイ**: SPI/I2Cインターフェースを介して**1.45インチ 412*412** LCD タッチスクリーンに接続し、直感的なユーザーインタラクションと鮮やかな視覚出力を可能にします。

2. **オーディオ**: I2Sインターフェースにより、ESP32-S3はスピーカーとマイクロフォンと通信し、音声入出力機能を実現します。

3. **ストレージ**: WatcherにはSPIインターフェース経由で接続されたFlash 32Mモジュールが搭載されており、ファームウェア、データ、ユーザーファイル用の十分なストレージを提供します。

4. **ワイヤレス接続**: ESP32-S3はWi-FiとBLE機能を統合し、他のデバイスやネットワークとのシームレスなワイヤレス通信を可能にします。

5. **拡張性**: I2Cインターフェース経由で接続された拡張ポートにより、将来のハードウェア追加とカスタマイゼーションが可能です。

6. **ユーザー入力**: GPIO/PWM経由で接続されたダイヤルホイールは、ユーザーがWatcherの機能をナビゲートし制御するための直感的な方法を提供します。

7. **外部ストレージ**: SPI経由でインターフェースされたMicro SDカードスロットにより、ユーザーは追加のデータとメディアファイル用にWatcherのストレージ容量を拡張できます。

8. **電源とデータ**: USBポートは400mAhバッテリーの充電とWatcherと他のデバイス間のデータ転送に利用できます。

AI MCUであるHimax HX6538チップは、Cortex M55とUS5コアを搭載し、メインMCUと連携してAI関連のタスクと計算を処理し、Watcherのインテリジェント機能を強化します。

最後に、WatcherはCamera OV5647モジュールを搭載しており、おそらくMIPIインターフェース経由で接続され、コンピュータビジョンアプリケーションと視覚センシングを可能にします。

この包括的なハードウェアアーキテクチャにより、Watcherはディスプレイ、オーディオ、ワイヤレス接続、ストレージ、AI機能をコンパクトで効率的な設計に組み合わせ、機能豊富で多用途なユーザーエクスペリエンスを提供できます。

## Watcherの充電

Watcherには合計2つのUSB-Cポートがあり、ユーザーは異なるWatcherの配置に対してそれぞれ最も適切な電源を見つけることができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/charging.png" style={{width:1000, height:'auto'}}/></div>

Watcherを充電する際は、必ず正規メーカーの電源アダプターを使用してください。Watcherの電源には**5V/1A**の電源仕様を使用することをお勧めします。Watcherと通信したい場合は、信号ケーブル付きの準拠したUSB-Cケーブルを使用する必要があります。

:::caution
Watcherと互換性のある電源プラグを使用してください。Watcherは5V電源で給電する必要があり、非準拠の電源アダプターや5Vを超える電圧の電源を使用すると焼損する可能性があります！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/adapter.jpg" style={{width:350, height:'auto'}}/></div>

上記の図は推奨アダプター仕様を示しています。適切なアダプターをどこで購入できるかわからない場合は、以下のリンクから直接購入することを選択できます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/USB-Power-Adapter-for-Raspberry-Pi-4-5V-3A-p-4089.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
</div>
:::

## シリアルコンソールへの接続

WatcherをUSB経由で接続すると、Windowsは2つの新しいシリアルポートを登録します。私の場合、COM23とCOM24でした。私はCircuitpythonのファンで、REPLが大好きなので、シリアルターミナルに何が表示されるかを確認する実験をすることにしました！このためにPuttyを使用し、115200ボーレートでシリアルポートを使用するように設定しました（幸運なことに、最初のCOM23ポートがすでにコマンドコンソールを発見するために必要なポートでした）。しかし、もう一方のCOM24は、Grove Vision AI V2と同じ方法でXmodemプロトコルを使用してファームウェアをアップグレードするために使用されます。

すぐに、ターミナルはデバイスのメモリに関する一連の情報を表示します。Enterキーを押すと、プロンプトが表示され、以下にリストするいくつかのコマンドを入力できます：

```
help  [<string>] 
Print the summary of all registered commands if no arguments are given, otherwise print summary of given command, where <string> is the name of command

wifi_sta  [-s <ssid>] [-p <password>]
WiFi is station mode, join specified soft-AP
s <ssid> SSID of AP
p <password> password of AP
ota  [-t <int>] [--url=<string>] force ota, ignoring version check
-t, --ota_type=<int> 0: ai model, 1: himax, 2: esp32
-url=<string> url for ai model, himax or esp32 firmware

taskflow  [-iej] [-f <string>]
i, --import import taskflow
e, --export export taskflow
f, --file=<string> File path, import or export taskflow json string by SD, eg: test.json
j, --json import taskflow json string by stdin

Example: Import taskflow by json string or SD file: taskflow -i -f "test.json".
Example: Export taskflow to stdout or SD file: taskflow -e -f "test.json"

factory_info
Get factory infomation

battery
Get battery percent

bsp  subcmd [subcmd args] 
Bsp call bsp functions

Example Scan the specified i2c bus: bsp i2cdetect <0|1>

reboot 
Reboot the device

factory_reset 
Factory reset and reboot the device

record  [-t <int>] [-f <string>]
Record audio and save to SD.
-t, --time=<int> record time, s
-f, --file=<string> File path, Store PCM audio data in SD card

vi_ctrl  [-sec] [-z <int>] 
Voice interaction ctrl (Probably will be used with Push to Talk function)
-s, --start start wakeup, and start record
-e, --end end record
-c, --stop stop voice interaction when analyzing or palying, Put it into idle.
-z, --exit=<int> 0: exit vi, 1:exit vi then run new taskflow

iperf  [-suVa] [-c <ip>] [-p <port>] [-l <length>] [-i <interval>] [-t <time>] [-b <bandwidth>]
Check conection performance. Similar to iperf linux command.
-c, --client=<ip> run in client mode, connecting to <host>
-s, --server run in server mode
-u, --udp use UDP rather than TCP
-V, --ipv6_domain use IPV6 address rather than IPV4
-p, --port=<port> server port to listen on/connect to
-l, --len=<length> Set read/write buffer size
-i, --interval=<interval> seconds between periodic bandwidth reports
-t, --time=<time> time in seconds to transmit for (default 10 secs)
-b, --bandwidth=<bandwidth> bandwidth to send at in Mbits/sec
-a, --abort abort running iperf

rgb  [-r <int>] [-g <int>] [-b <int>] [-m <int>] [-v <int>] [-t <int>]
Set the rgb LED value. eg: rgb -r 255 -g 0 -b 0 -m 3
-r, --red=<int> red value, 0~255
-g, --green=<int> green value, 0~255
-b, --blue=<int> blue value, 0~255
-m, --mode=<int> 1: breath, 2: blink, 3:solid, default 3
-v, --step_value=<int> RGB step value, default 3
-t, --step_time_ms=<int> RGB step time(ms), default 5
```

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験を可能な限りスムーズにするため、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しております。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
