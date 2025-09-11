---
description: これは機能、仕様、ハードウェアインターフェース、および部品リストの概要です。
title: ハードウェアと仕様
keywords:
  - Edge
  - reCamera
  - ハードウェア概要
image: https://files.seeedstudio.com/wiki/reCamera/image.webp
slug: /ja/recamera_hardware_and_specs
sidebar_position: 2
last_update:
  date: 05/15/2025
  author: Parker Hu
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# reCamera 概要

reCameraは、オープンソースで小型のAIカメラであり、プログラム可能かつカスタマイズ可能です。RISC-V SoCによって駆動され、デバイス上で1 TOPSのAI性能を提供し、5MP @30 FPSのビデオエンコードが可能です。モジュール式のハードウェア設計と拡張可能なインターフェースにより、ビジョンAIシステムを構築する開発者にとって最も多用途なプラットフォームを提供します。

## 特徴

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/reCamera_3x.png" alt="pir" width={600} height="auto" /></p>



## 仕様

<table style={{width: '72.2022%'}}>
            <tbody>
                <tr></tr>
                <tr>
                    <td style={{width: '35.3932%'}} colspan="2" rowspan="1" width="208">
                        <p><strong><span data-font-family='"Source Sans Pro", sans-serif'>reCamera 2002 シリーズ</span></strong></p>
                    </td>
                    <td style={{width: '28.7153%'}} colspan="1" rowspan="1" width="169">
                        <p><strong><span data-font-family='"Source Sans Pro", sans-serif'>reCamera 2002</span></strong></p>
                    </td>
                    <td style={{width: '35.7271%'}} colspan="1" rowspan="1" width="210">
                        <p><strong><span data-font-family='"Source Sans Pro", sans-serif'>reCamera 2002w</span></strong></p>
                    </td>
                </tr>
                <tr>
                    <td style={{width: '16.528%'}} colspan="1" rowspan="6" width="97">
                        <p><span data-font-family="Montserrat">プロセッサーシステム</span></p>
                    </td>
                    <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                        <p><span data-font-family="Montserrat">AI性能</span></p>
                    </td>
                    <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                        <p><span data-font-family="Montserrat">1TOPS@Int8</span></p>
                    </td>
                </tr>
                <tr>
                    <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                        <p><span data-font-family="Montserrat">SOC</span></p>
                    </td>
                    <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                        <p><span data-font-family="Montserrat">SG2002</span></p>
                    </td>
                </tr>
                <tr>
                    <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                        <p><span data-font-family="Montserrat">CPU</span></p>
                    </td>
                    <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                        <p><span data-font-family="Montserrat">C906@1GHz + C906@700MHz</span></p>
                    </td>
                </tr>
                <tr>
                    <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                        <p><span data-font-family="Montserrat">MCU</span></p>
                    </td>
                    <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                        <p><span data-font-family="Montserrat">8051@8KB SRAM</span></p>
                    </td>
                </tr>
                <tr>
                    <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                        <p><span data-font-family="Montserrat">メモリ</span></p>
                    </td>
                    <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                        <p><span data-font-family="Montserrat">256MB</span></p>
                    </td>
                </tr>
                <tr>
                    <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                        <p><span data-font-family="Montserrat">ビデオエンコード</span></p>
                    </td>
                    <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                        <p><span data-font-family="Montserrat">5MP @ 30Fps</span></p>
                    </td>
                </tr>
                <tr>
                    <td style={{width: '35.3932%'}} colspan="2" rowspan="1" width="208">
                        <p><span data-font-family="Montserrat">カメラセンサー</span></p>
                    </td>
                    <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                        <p><span data-font-family="Montserrat">OV5647</span></p>
                    </td>
                </tr>
                <tr>
                    <td style={{width: '16.528%'}} colspan="1" rowspan="2" width="97">
                        <p><span data-font-family="Montserrat">ストレージ</span></p>
                    </td>
                    <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                        <p><span data-font-family="Montserrat">eMMC</span></p>
                    </td>
                    <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                        <p><span data-font-family="Montserrat">(バージョン1) 8GB (バージョン2) 64GB</span></p>
                    </td>
                </tr>
                <tr>
                    <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                        <p><span data-font-family="Montserrat">拡張</span></p>
                    </td>
                    <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                        <p><span data-font-family="Montserrat">取り外し可能なTFカード (最大2TB、含まれません)</span></p>
                    </td>
                </tr>
                <tr>
                    <td style={{width: '16.528%'}} colspan="1" rowspan="6" width="97">
                        <p><span data-font-family="Montserrat">I/O</span></p>
                    </td>
                    <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                        <p><span data-font-family="Montserrat">イーサネット</span></p>
                    </td>
                    <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                        <p><span data-font-family="Montserrat">100Mbps</span></p>
                    </td>
                </tr>
                <tr>
                    <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                        <p><span data-font-family="Montserrat">ワイヤレス</span></p>
                    </td>
                    <td style={{width: '28.7153%'}} colspan="1" rowspan="1" width="169">
                        <p><span data-font-family="Montserrat">/</span></p>
                    </td>
                    <td style={{width: '35.7271%'}} colspan="1" rowspan="1" width="210">
                        <p><span data-font-family="Montserrat">WIFI2.4G/5G BT4.2/5.0</span></p>
                    </td>
                </tr>
                <tr>
                    <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                        <p><span data-font-family="Montserrat">USB</span></p>
                    </td>
                    <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                        <p><span data-font-family="Montserrat">USB Type-C(2.0)</span></p>
                    </td>
                </tr>
                <tr>
                    <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                        <p><span data-font-family="Montserrat">ボタン</span></p>
                    </td>
                    <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                        <p><span data-font-family="Montserrat">1 リセットボタン、1 ブートボタン</span></p>
                    </td>
                </tr>
                <tr>
                    <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                        <p><span data-font-family="Montserrat">補助光</span></p>
                    </td>
                    <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                        <p><span data-font-family="Montserrat">0.3w 白色光</span></p>
                    </td>
                </tr>
                <tr>
                    <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                        <p><span data-font-family="Montserrat">ステータスライト</span></p>
                    </td>
                    <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                        <p><span data-font-family="Montserrat">1 電源インジケーター、2 IO プログラム可能</span></p>
                    </td>
                </tr>
                <tr>
                    <td style={{width: '16.528%'}} colspan="1" rowspan="2" width="97">
                        <p><span data-font-family="Montserrat">オーディオ</span></p>
                    </td>
                    <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                        <p><span data-font-family="Montserrat">マイク</span></p>
                    </td>
                    <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                        <p><span data-font-family="Montserrat">オンボードマイク</span></p>
                    </td>
                </tr>
                <tr>
                    <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                        <p><span data-font-family="Montserrat">スピーカー</span></p>
                    </td>
                    <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                        <p><span data-font-family="Montserrat">外部スピーカー</span></p>
                    </td>
                </tr>
                <tr>
                    <td style={{width: '35.3932%'}} colspan="2" rowspan="1" width="208">
                        <p><span data-font-family="Montserrat">寸法</span></p>
                    </td>
                    <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                        <p><span data-font-family="Montserrat">40x40x36.5mm</span></p>
                    </td>
                </tr>
                <tr>
                    <td style={{width: '35.3932%'}} colspan="2" rowspan="1" width="208">
                        <p><span data-font-family="Montserrat">電源</span></p>
                    </td>
                    <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                        <p><span data-font-family="default">5V 1A</span></p>
                    </td>
                </tr>
            </tbody>
        </table>

## ハードウェア概要
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-12.png" /></div>

### [コアボード-C101](https://github.com/litxaohu/OSHW-reCamera-Series/tree/main?tab=readme-ov-file#core-board)
<!-- GitHubの説明と画像を転記 -->
| ボード         | 特徴                           | バージョン |
| ------------- | ---------------------------------- | ------------ |
| C1_2002w    | - eMMC <br /> - WiFi/BLEモジュール <br /> - オンボードアンテナ <br /> - 外部アンテナコネクタ | 1.2 |
| C1_2002       | - eMMC <br /> - ベースボード用の追加SDIO <br /> - ベースボード用の追加UART | 1.2 |

上面図             | 下面図
:-------------------------:|:-------------------------:
<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/C1_2002w_Up.png" /></div>  |  <div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/C1_2002w_Bottom.png" /></div>

### [センサーボード-S101](https://github.com/litxaohu/OSHW-reCamera-Series/tree/main?tab=readme-ov-file#sensor-board)
<!-- GitHubの説明と画像を転記 -->

上面図             | 下面図
:-------------------------:|:-------------------------:
<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/S1_ov5647_UP.png" /></div> | <div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/S1_ov5647_Bottom.png" /></div>

#### ⚙️ 特徴:

<div>

<table ><tbody>
<tr >
    <td >センサー</td>
    <td class="dbon">OV5647</td>
    <td class="dbon">CMOSサイズ</td>
    <td class="dbon">1/4"</td>
</tr>
<tr >
    <td class="dbon">画素数</td>
    <td class="dbon">5MP</td>
    <td class="dbon">絞り値</td>
    <td class="dbon">F2.8</td>
</tr>
<tr >
    <td >焦点距離</td>
    <td class="dbon">3.46mm</td>
    <td class="dbon">視野角</td>
    <td >65°</td>
</tr>
<tr >
    <td >歪み</td>
    <td >&lt;1%</td>
    <td >画像</td>
    <td >2592 x 1944（静止画）</td>
</tr>
<tr >
    <td >画像</td>
    <td  colspan="3">2592 x 1944 静止画解像度</td>
</tr>
<tr >
    <td >ビデオ</td>
    <td  colspan="3">1920 x 1080p @30fps, 1280 x 720p @60fps, 640 x 480p @60fps, 640 x 480p @90fps</td>
</tr></tbody>
</table>
</div>

- 4 x LED補助ライト
- 1 x マイク
- 1 x スピーカー
- 3 x LEDインジケーター

### [ベースボード-B101](https://github.com/litxaohu/OSHW-reCamera-Series/tree/main?tab=readme-ov-file#base-board)
<!-- GitHubの説明と画像を転記 -->
上面図             | 下面図
:-------------------------:|:-------------------------:
<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/B1_Default_Upper.png" /></div>  |  <div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/B1_Default_Bottom.png" /></div>

#### ⚙️ 特徴:

- 1 x Type-Cポート（電源入力および通信用）
- 1 x シングルポートトランスフォーマモジュール（イーサネット通信対応）
- 1 x SDカードリーダー（データ保存および交換用）

## ハードウェアインターフェース

- [ライト](#jump2)
- [マイク＆スピーカー](#jump3)
- [Wi-Fi](#jump4)
- [SDカード](#jump5)
- [UART（デバッグ）](#jump6)
- [ユーザーボタン](#jump7)

### <span id="jump2">ライト</span>

reCameraには3つのインジケーターがあります。**赤と青**のライトはプログラム可能なインジケーターで、**緑**のインジケーターは電源インジケーターでプログラム不可です。**赤**はCPUのステータスインジケーターで、**青**はシステムeMMCの読み取りステータスインジケーターです。

**ライトインジケーターのステータス**:

| LED（色） | ステータス | 説明 |
| ---- | ---- | ---- |
| LED1 - 緑 | 点灯 | 電源オン |
| LED2 - 赤 | 点滅 | CPU動作中（ユーザー定義） |
| LED3 - 青 | 点滅 | eMMC読み書き中 |

例1: Linuxコマンドを使用して**赤色LED**の明るさをゼロに変更
``` bash
echo 0 | sudo tee /sys/class/leds/red/brightness
```

例2: **赤色ライト**を完全にオフにする
``` bash
echo none | sudo tee /sys/class/leds/red/trigger
```

カメラの補助ライトとして4つの**白色**ライトがあります。補助ライトのスイッチは以下の指示で制御できます。

``` bash
echo 1 > /sys/devices/platform/leds/leds/white/brightness //ライトオン
echo 0 > /sys/devices/platform/leds/leds/white/brightness //ライトオフ
```

### <span id="jump3">マイク＆スピーカー</span>

reCameraにはマイクとスピーカーが搭載されています。以下のコマンドを使用してマイクとスピーカーを呼び出すことができます。reCameraは**wav**形式のオーディオファイルを再生できます。

プレーヤーのデフォルトフォーマットは以下の通りです：16ビットビットレート、サンプリングレート16,000

```bash
sudo arecord -D hw:0,0 -r 16000 -f S16_LE -c 1 -d 5 /home/recamera/test.wav //5秒間の音声を録音

sudo aplay -D hw:1,0 /home/recamera/test.wav //音声を再生
```

### <span id="jump4">Wi-Fi</span>

reCameraの2002wバージョンにはハードウェアにWi-Fiモジュールが搭載されています。Wi-FiはAP+STAデュアルモードで、デバイスネットワークの設定やAPモードでのデバイス設定に使用できます。

APモードでのWi-Fiの**SSID**は：`reCamera_+ MACの最後の6桁`です。

APモードでのWi-Fiの**パスワード**は：`12345678`です。

Wi-Fi_APのSSIDとパスワードは、reCameraシステムの`/etc/hostapd_2g4.conf`ファイルで設定できます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-2.png" /></div>

reCameraのSTA設定ファイルは**/etc/wpa_supplicant.conf**にあり、ここでWi-Fiアカウントとパスワードを設定して接続します。
STAモードでは、**5G**帯域のWi-Fiに接続してください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-3.png" /></div>

ターミナルで以下のコマンドを使用してWi-Fiをスキャンおよび接続できます：

```bash
wpa_cli -i wlan0 scan                           #スキャンを開始

wpa_cli -i wlan0 scan_results                   #Wi-Fiスキャン結果を返す

wpa_cli add_network                             #新しいネットワークを追加、ネットワークIDを返す
wpa_cli set_network ID ssid "your_wifi_name"    #ネットワークSSIDを設定
wpa_cli set_network ID psk "your_wifi_password" #ネットワークパスワードを設定
wpa_cli enable_network ID                       #ネットワークを有効化して接続
wpa_cli status                                  #接続ステータスを確認
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-4.png" /></div>

### <span id="jump5">SDカード</span>

SDカードスロットは、reCameraのストレージ容量を拡張することができます。SDカードを挿入した後、`lsblk`コマンドを使用してSDカードの存在を確認できます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-5.png" /></div>

mmcblk1p1のようなストレージデバイスを見つけたら、以下のコマンドを使用してシステムにマウントすることができます。
<br/>

なお、reCameraは**ext4**ファイルシステムのみを認識します。

```bash
sudo blkid /dev/mmcblk1p1 #TYPEがext4でない場合、ファイルシステムをフォーマットする必要があります
/dev/mmcblk1p1: UUID="F080-C970" BLOCK_SIZE="512" TYPE="exfat" PARTUUID="04ec0085-01"

sudo mkfs.ext4 /dev/mmcblk1p1 #ファイルシステムをext4にフォーマット
mkdir /userdata/mmcblk1 #マウント用のディレクトリを作成
sudo mount -t ext4 /dev/mmcblk1p1 /userdata/mmcblk1 #SDカードを/userdata/mmcblk1パスにマウント
```
`lsblk`コマンドでマウント結果を確認してください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-6.png" /></div>

### <span id="jump6">UART（デバッグ）</span>

reCameraの基板にはtx、rx、gndの3つの接点があり、これがreCameraのデバッグ用シリアルポートとして機能します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/image-7.png" /></div>

デバイスのシリアルポートのボーレートは115200で、reCameraシステムにログインすることができます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-8.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-9.png" /></div>

### <span id="jump7">ユーザーボタン</span>

reCameraのusrボタンは、ユーザーがカスタマイズ可能です。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/image-10.png" /></div>

```bash
echo "510" > /sys/class/gpio/export
echo "in" > /sys/class/gpio/gpio510/direction #入力モードを有効化
cat /sys/class/gpio/gpio510/value #キーが押されると、0が出力されます
```
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-11.png" /></div>


## 部品リスト

| アイテム | 数量 |
|--|--|
| reCamera 2002シリーズ | x1 |
| USB Type-Cケーブル | x1 |
| イーサネットケーブル | x1 |

<!-- ## アクセサリーリスト -->




## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
