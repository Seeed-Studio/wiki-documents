---
description: SenseCAP Watcher のハードウェアコンポーネント。
title: ハードウェア概要
image: https://files.seeedstudio.com/wiki/watcher_getting_started/hardware_overview_1.webp
slug: /ja/watcher_hardware_overview
sidebar_position: 1
last_update:
  date: 05/15/2025
  author: Citric, Djair
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# SenseCAP Watcher ハードウェア概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/hardware_overview.jpg" style={{width:1000, height:'auto'}}/></div>


<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://www.youtube.com/watch?v=ny22Z0cAIqE" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Watcher のビデオを見る</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://github.com/Seeed-Studio/OSHW-SenseCAP-Watcher" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Github リポジトリ</font></span></strong>
    </a>
</div><br />

この Wiki のセクションでは、SenseCAP Watcher のハードウェアコンポーネント、その構造、および追加アクセサリの使用について説明します。

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
            <td align="center">内蔵 AI プロセッサ</td>
            <td align="center">Himax HX6538 (Cortex M55 + Ethos-U55)</td>
        </tr>
        <tr>
            <td align="center">カメラ</td>
            <td align="center">OV5647 120° FOV <br /> 固定焦点 3 メートル</td>
        </tr>
        <tr>
            <td align="center">Wi-Fi</td>
            <td align="center">IEEE 802.11b/g/n 準拠<br />2.4GHz 帯域<br />無線範囲: 最大 100 メートル (オープンスペーステスト)</td>
        </tr>
        <tr>
            <td align="center">Bluetooth LE</td>
            <td align="center">Bluetooth 5</td>
        </tr>
        <tr>
            <td align="center">アンテナ</td>
            <td align="center">内蔵 Wi-Fi および BLE アンテナ</td>
        </tr>
        <tr>
            <td align="center">ディスプレイ</td>
            <td align="center">1.45 インチ、412×412 解像度のタッチスクリーン</td>
        </tr>
        <tr>
            <td align="center">マイク</td>
            <td align="center">単一マイク</td>
        </tr>
        <tr>
            <td align="center">スピーカー</td>
            <td align="center">1W スピーカー出力</td>
        </tr>
        <tr>
            <td align="center">ホイール</td>
            <td align="center">上下スクロールおよびボタン操作対応</td>
        </tr>
        <tr>
            <td align="center">LED</td>
            <td align="center">1xRGB ライト (インジケーション用)</td>
        </tr>
        <tr>
            <td align="center">microSD カードスロット</td>
            <td align="center">最大 32GB FAT32 microSD カード対応</td>
        </tr>
        <tr>
            <td align="center">フラッシュ</td>
            <td align="center">ESP32-S3 用 32MB フラッシュ<br />Himax HX6538 用 16MB フラッシュ</td>
        </tr>
        <tr>
            <td align="center">拡張インターフェース</td>
            <td align="center">1xGrove IIC インターフェース<br />2x4 メスヘッダー (1xIIC, 2xGPIO, 2xGND, 1x3.3V_OUT, 1x5V_IN)</td>
        </tr>
        <tr>
            <td align="center">USB-C</td>
            <td align="center">背面に 1x USB-C (電源供給のみ)<br />底面に 1x USB-C (電源供給およびプログラミング対応)</td>
        </tr>
        <tr>
            <td align="center">リセットボタン</td>
            <td align="center">底面の穴に 1xRST ボタン</td>
        </tr>
        <tr>
            <td align="center">電源供給</td>
            <td align="center">5V DC 電源</td>
        </tr>
        <tr>
            <td align="center">バッテリー</td>
            <td align="center">3.7V 400mAh リチウムイオンバッテリー (バックアップ電源)</td>
        </tr>
        <tr>
            <td align="center">動作温度</td>
            <td align="center">0 ~ 45°C</td>
        </tr>
        <tr>
            <td align="center">取り付けブラケット</td>
            <td align="center">壁、デスクトップ、ブラケット設置対応<br />1 x ユニバーサルホイールと接着剤付きベースプレート<br />1 x 1/4 インチ メスアダプターセット</td>
        </tr>
    </table>
</div>

## 特徴

- デバイス内およびサーバーAI処理を組み合わせた高効率アーキテクチャ
- 無限モーダルでの拡張性
- オープンソースおよびオンプレミス展開によるプライバシーの確保
- カスタマイズ可能な感情応答

## 前面ビュー

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/hardware-1.png" style={{width:1000, height:'auto'}}/></div>

## 背面ビュー

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/hardware-2.png" style={{width:1000, height:'auto'}}/></div>

## 内部

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/hardware-3.png" style={{width:1000, height:'auto'}}/></div>

## 取り付けインターフェース

Watcherデバイスの背面には、さまざまな表面やアクセサリーにデバイスを安全に取り付けるための取り付けブラケットがあります。現在、異なる設置ニーズに対応するために、2種類の取り付けブラケットを提供しています：

:::tip
Watcher本体には360°回転ブラケットのみが付属しています。1/4ネジ三脚ブラケットが必要な場合は、[こちら](https://www.seeedstudio.com/Mini-Tripod-p-5978.html)から別途購入してください。
:::

### 360°回転ブラケット

   - このブラケットは、壁やその他の垂直面への簡単な取り付けを目的としています。
   - 360度の回転が可能で、Watcherデバイスの向きを調整して希望の視野角を得ることができます。
   - 回転ブラケットは、位置の柔軟性を提供し、壁への安全な取り付けを保証します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/omni_wheel_bracket.gif" style={{width:650, height:'auto'}}/></div><br />

### 1/4ネジ三脚ブラケット

   - このブラケットは、机、テーブル、棚などの平らな表面にWatcherを設置するのに最適です。
   - 標準的な1/4インチネジを備えており、ほとんどの三脚やその他の取り付けアクセサリーと互換性があります。
   - 三脚ブラケットは安定性を提供し、特定のニーズに応じてWatcherをさまざまな高さや角度に配置することができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/threaded_bracket.gif" style={{width:650, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Mini-Tripod-p-5978.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入</font></span></strong>
    </a>
</div>

これらの取り付けブラケットを使用するには、以下の一般的な手順に従ってください：

1. 設置場所（壁または平らな表面）に基づいて適切なブラケットを選択します。

2. 選択したブラケットをWatcherデバイスの背面にある取り付けブラケットに取り付けます。偶発的な取り外しを防ぐために、しっかりと接続してください。

3. 360°回転ブラケットの場合：
   - Watcherを設置したい壁の場所を特定します。
   - 必要に応じて、付属のネジとアンカーを使用してブラケットを壁にしっかりと取り付けます。
   - Watcherの向きを調整し、希望の角度に回転させます。

4. 1/4ネジ三脚ブラケットの場合：
   - Watcherを設置したい安定した平らな表面を選択します。
   - 三脚を使用する場合は、1/4インチネジを使用して三脚をブラケットに取り付けます。
   - 三脚の高さと角度を調整し、Watcherの最適な視野位置を確保します。

5. いずれかのブラケットを使用してWatcherを安全に取り付けたら、電源を接続し、好みに応じて設定を行うことができます。

これらの2種類の取り付けブラケットオプションを提供することで、Watcherデバイスをさまざまな環境に柔軟かつ便利に統合できるようにしています。壁掛け設置やデスクフレンドリーな配置のいずれを好む場合でも、当社のブラケットは安全で調整可能な取り付けを保証します。

:::tip
Watcher本体には以下のスタンドは付属していませんので、スタンドが必要な場合は別途購入してください。
:::

## ハードウェア図

Watcher のハードウェアアーキテクチャについて続けて、図に示された詳細を掘り下げていきます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/Diagram.png" style={{width:1000, height:'auto'}}/></div>

Watcher の中心部は、**ESP32-S3** チップで構成されたメイン MCU です。この強力なマイクロコントローラーは 240MHz で動作し、効率的な処理とメモリ管理のために 8MB の PSRAM を備えています。

ESP32-S3 は以下のさまざまな周辺機器やインターフェースと通信します：

1. **ディスプレイ**: SPI/I2C インターフェースを介して **1.45インチ 412*412** LCD タッチスクリーンに接続されており、直感的なユーザー操作と鮮やかな視覚出力を可能にします。

2. **オーディオ**: I2S インターフェースを使用してスピーカーとマイクに接続され、音声入力および出力機能を提供します。

3. **ストレージ**: SPI インターフェースを介して接続された Flash 32M モジュールを搭載しており、ファームウェア、データ、ユーザーファイルの保存に十分な容量を提供します。

4. **ワイヤレス接続**: ESP32-S3 は Wi-Fi と BLE 機能を統合しており、他のデバイスやネットワークとのシームレスなワイヤレス通信を可能にします。

5. **拡張性**: I2C インターフェースを介して接続された拡張ポートにより、将来のハードウェア追加やカスタマイズが可能です。

6. **ユーザー入力**: GPIO/PWM を介して接続されたダイヤルホイールにより、Watcher の機能を直感的に操作および制御できます。

7. **外部ストレージ**: SPI インターフェースを介した Micro SD カードスロットにより、追加のデータやメディアファイルの保存のために Watcher のストレージ容量を拡張できます。

8. **電源とデータ**: USB ポートを使用して 400mAh バッテリーを充電し、Watcher と他のデバイス間でデータを転送できます。

AI MCU には Cortex M55 と US5 コアを備えた Himax HX6538 チップが採用されており、メイン MCU と連携して AI 関連のタスクや計算を処理し、Watcher のインテリジェントな機能を強化します。

最後に、Watcher には MIPI インターフェースを介して接続される可能性が高い Camera OV5647 モジュールが搭載されており、コンピュータビジョンアプリケーションや視覚センサー機能を提供します。

この包括的なハードウェアアーキテクチャにより、Watcher はディスプレイ、オーディオ、ワイヤレス接続、ストレージ、AI 機能をコンパクトで効率的なデザインに統合し、豊富で多用途なユーザー体験を提供します。

## Watcher の充電

Watcher には合計 2 つの USB-C ポートが搭載されており、ユーザーは各 Watcher の設置場所に最適な電源を見つけることができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/charging.png" style={{width:1000, height:'auto'}}/></div>

Watcher を充電する際は、通常のメーカー製の電源アダプターを使用してください。Watcher を充電するためには、**5V/1A** の電源仕様を使用することを推奨します。Watcher と通信したい場合は、信号ケーブル付きの適合する USB-C ケーブルを使用する必要があります。

:::caution
Watcher に対応した電源プラグを使用してください。Watcher は 5V の電源で動作する必要があり、非対応の電源アダプターや 5V を超える電圧の電源を使用すると故障する可能性があります！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/adapter.jpg" style={{width:350, height:'auto'}}/></div>

上記の図は推奨されるアダプター仕様を示しています。適切なアダプターの購入先がわからない場合は、以下のリンクから直接購入することができます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/USB-Power-Adapter-for-Raspberry-Pi-4-5V-3A-p-4089.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>
:::

## シリアルコンソールへの接続

Watcher を USB 経由で接続すると、Windows は新しいシリアルポートを 2 つ登録します。私の場合、COM23 と COM24 でした。Circuitpython のファンであり、REPL が大好きな私は、シリアルターミナルで何が表示されるか試してみることにしました。このために Putty を使用し、115200 ボーのシリアルポートを設定しました（運よく、最初の COM23 ポートがコマンドコンソールを発見するために必要なものでした）。もう一方の COM24 は、Grove Vision AI V2 と同様に Xmodem プロトコルを使用してファームウェアをアップグレードするために使用されます。

すぐに、ターミナルにはデバイスのメモリに関する一連の情報が表示されます。Enter キーを押すと、プロンプトが表示され、以下にリストしたいくつかのコマンドを入力することができます：

```
help  [<string>] 
引数が指定されていない場合は登録されているすべてのコマンドの概要を表示し、指定された場合はそのコマンドの概要を表示します。<string> はコマンド名です。

wifi_sta  [-s <ssid>] [-p <password>]
WiFi をステーションモードに設定し、指定されたソフトAPに接続します。
-s <ssid> AP の SSID
-p <password> AP のパスワード

ota  [-t <int>] [--url=<string>] バージョンチェックを無視して OTA を強制実行します。
-t, --ota_type=<int> 0: AI モデル, 1: Himax, 2: ESP32
-url=<string> AI モデル、Himax または ESP32 ファームウェアの URL

taskflow  [-iej] [-f <string>]
i, --import タスクフローをインポート
e, --export タスクフローをエクスポート
f, --file=<string> ファイルパス。SD 経由でタスクフロー JSON をインポートまたはエクスポートします。例: test.json
j, --json 標準入力からタスクフロー JSON をインポート

例: JSON 文字列または SD ファイルでタスクフローをインポート: taskflow -i -f "test.json".
例: 標準出力または SD ファイルにタスクフローをエクスポート: taskflow -e -f "test.json"

factory_info
工場出荷時の情報を取得します。

battery
バッテリーの残量を取得します。

bsp  subcmd [subcmd args] 
BSP 関数を呼び出します。

例: 指定された I2C バスをスキャン: bsp i2cdetect <0|1>

reboot 
デバイスを再起動します。

factory_reset 
工場出荷時設定にリセットしてデバイスを再起動します。

record  [-t <int>] [-f <string>]
オーディオを録音して SD に保存します。
-t, --time=<int> 録音時間（秒）
-f, --file=<string> ファイルパス。PCM オーディオデータを SD カードに保存します。

vi_ctrl  [-sec] [-z <int>] 
音声インタラクション制御（おそらく Push to Talk 機能と併用されます）
-s, --start ウェイクアップを開始し、録音を開始
-e, --end 録音を終了
-c, --stop 分析または再生中の音声インタラクションを停止し、アイドル状態にします。
-z, --exit=<int> 0: VI を終了, 1: VI を終了して新しいタスクフローを実行

iperf  [-suVa] [-c <ip>] [-p <port>] [-l <length>] [-i <interval>] [-t <time>] [-b <bandwidth>]
接続性能を確認します。Linux の iperf コマンドに似ています。
-c, --client=<ip> クライアントモードで実行し、<host> に接続
-s, --server サーバーモードで実行
-u, --udp TCP の代わりに UDP を使用
-V, --ipv6_domain IPv4 の代わりに IPv6 アドレスを使用
-p, --port=<port> サーバーポートをリッスン/接続
-l, --len=<length> 読み書きバッファサイズを設定
-i, --interval=<interval> 定期的な帯域幅レポートの間隔（秒）
-t, --time=<time> 送信時間（秒、デフォルトは 10 秒）
-b, --bandwidth=<bandwidth> 送信帯域幅（Mbits/sec）
-a, --abort 実行中の iperf を中止

rgb  [-r <int>] [-g <int>] [-b <int>] [-m <int>] [-v <int>] [-t <int>]
RGB LED の値を設定します。例: rgb -r 255 -g 0 -b 0 -m 3
-r, --red=<int> 赤の値、0~255
-g, --green=<int> 緑の値、0~255
-b, --blue=<int> 青の値、0~255
-m, --mode=<int> 1: 呼吸, 2: 点滅, 3: 固定（デフォルトは 3）
-v, --step_value=<int> RGB ステップ値（デフォルトは 3）
-t, --step_time_ms=<int> RGB ステップ時間（ミリ秒、デフォルトは 5）
``` 

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>