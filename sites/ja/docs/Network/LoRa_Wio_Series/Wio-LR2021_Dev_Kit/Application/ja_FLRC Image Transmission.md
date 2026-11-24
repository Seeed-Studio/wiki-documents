---
description: 2台の Wio-LR2021 Dev Kit 間で 913.76 MHz の FLRC を使ってカメラ画像を送信し、送信機側で顔・ジェスチャ・水道メーターモデルを実行し、その結果をブラウザで表示します。
title: Wio-LR2021 Dev Kit FLRC 画像伝送デモ
keywords:
  - Wio-LR2021
  - LR2021
  - FLRC
  - 画像伝送
  - カメラ
  - 顔検出
  - ジェスチャ認識
  - 水道メーター
  - ESP32-S3
image: https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/1-100038329-Wio-LR2021-Dev-Kit.webp
slug: /wio_lr2021_dev_kit_flrc_image_transmission_demo
sku: 100038329
type: project
sidebar_position: 1
last_update:
  date: 11/19/2026
  author: David Du
createdAt: '2026-11-19'
updatedAt: '2026-11-19'
url: https://wiki.seeedstudio.com/ja/wio_lr2021_dev_kit_flrc_image_transmission_demo/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Wio-LR2021 Dev Kit FLRC 画像伝送デモ

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/1-100038329-Wio-LR2021-Dev-Kit.webp" style={{width:600, height:'auto'}}/>
</div>

<div className="table-center">
  <table align="center">
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/Wio-LR2021-Dev-Kit-p-7040.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span>
                <font color="#FFFFFF" size="4">
                  今すぐ入手 🖱️
                </font>
              </span>
            </strong>
          </a>
        </div>
  </table>
</div>

## はじめに

2台の Wio-LR2021 Dev Kit があれば、完全なワイヤレスカメラリンクを構成できます。1台は `320 × 240` フレームをキャプチャし、小さな検出器を **ESP32-S3** 上で実行し、結果を描画してフレームを JPEG に圧縮します。JPEG は **FLRC** で 2.6 Mbps で送信されます。もう1台は PSRAM 内で画像を再構成し、Web ページからそれを配信します。スマートフォンやノート PC は受信機のアクセスポイントに接続し、アプリをインストールすることなくブラウザでリンクを閲覧できます。結果は動画ストリームではなく、静止画像の連続になります。

このデモには4つの送信機ビルドがあります。3つはモデルを実行します：**顔検出**、**ハンドジェスチャ認識**、**水道メーター読み取り**。4つ目は推論を行わずにカメラ画像を送信し、リンクのベースラインを設定します。一度に1つのビルドだけを書き込むため、同じ送信機ハードウェアで4つのモードすべてを切り替えて表示できます。

<div class="table-center">
<iframe width="600" height="350" src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/video/flrc_demo_summary.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::note
顔ビルドは**顔検出器**であり、顔認証システムではありません。顔を検出してその周りに枠を描画しますが、その人物が誰であるかを識別することはなく、認証用途には適していません。
:::

### 作るもの

- 画像をキャプチャし、Swift-YOLO モデルを実行し、枠とラベルを描画し、注釈付き JPEG を FLRC 経由で送信する**送信機**。
- 画像を再構成し、検査し、最新の完全なフレームを Wi-Fi 経由で公開する**受信機**。
- 画像、完了した画像のカウント、および現在のフレームレートを表示する `192.168.4.1` 上の**ブラウザビュー**。

## 動作の仕組み

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/flrc_demo_architecture.png" style={{width:1000, height:'auto'}} alt="FLRC カメラリンクのブロック図：カメラ、ESP32-S3 による推論と JPEG、LR2021 送信機、FLRC バースト、LR2021 受信機、PSRAM での再構成、SoftAP とブラウザ"/>
</div>

### 送信機側の経路

送信機は1枚のボード上でパイプライン全体を実行します：

1. Media HAT 上の **GC2145** カメラが `320 × 240 RGB565` フレームをキャプチャします。
2. **ESP32-S3** がフレームをモデル入力サイズにリサイズし、推論を実行します。
3. ファームウェアは各検出結果をフレーム上に描画し、クラスラベルと信頼度のパーセンテージを含めます。水道メータービルドでは、各桁のスコアと `READING:` 行も描画します。
4. 注釈付きフレームは JPEG に圧縮されます。
5. LR2021 は JPEG をフラグメントに分割し、画像 ID と CRC32 を追加して、FLRC バーストで画像を送信します。

このファームウェアビルドでは、カメラと JPEG エンコーダは固定です。

### 受信機側の経路

受信機はモデルを実行しません。同じ FLRC 周波数を受信し、受信したパケットを SPI DMA で PSRAM に転送します。ESP32-S3 はフラグメントを再構成し、サイズと CRC32 をチェックして、最新の完全な画像を公開します。不完全な画像は、一部だけを表示するのではなく破棄されます。

ESP32-S3 は `SoftAP` と小さな HTTP サーバーも動かします。このページは約 200 ms ごとに最新の JPEG とカウンタを要求するため、ブラウザには常に最新の完全なフレームが表示されます。推論と描画はすべて送信前に行われ、ブラウザは完成した JPEG を受け取ります。

### なぜ FLRC なのか

LoRa はデータレートを犠牲にして通信距離を伸ばします。FLRC はその逆で、短い距離を受け入れる代わりに高いレートで短いバーストを送信します。2.6 Mbps では、1 枚の 320 × 240 JPEG が空中を占有する時間は一瞬です。これが、LoRa クラスの無線でカメラデモを可能にしている理由です。

2.6 Mbps という数値は FLRC の空中レートであり、フレームレートではありません。キャプチャ、推論、JPEG エンコード、送信、再構成のすべてに時間がかかります。[Performance](#パフォーマンス) セクションでは、クリップで測定した受信側のレートを示します。

## ハードウェアの準備

### 必要なもの

| 項目 | 数量 | 備考 |
| --- | --- | --- |
| Wio-LR2021 Dev Kit | 2 | 送信機 1 台、受信機 1 台 |
| GC2145 カメラ付き Media HAT | 1 | 送信機にのみ装着 |
| サブ GHz アンテナ | 2 | 各ボードに 1 本、`SUB-1G` と表示 |
| 2.4 GHz アンテナ | 1 | 受信機のみ；`LR-2.4G` SMA ではなく ESP32-S3 の 2.4 GHz U.FL パッドに装着 |
| USB-C ケーブル | 2 | 充電専用ではなくデータ通信可能なもの |
| USB 電源 | 2 | 5 V；PC のポートで十分 |
| スマートフォンまたはノート PC | 1 | 2.4 GHz Wi-Fi 対応 |

### ステップ 1 — アンテナを取り付ける

各ボードの `SUB-1G` コネクタにサブ GHz アンテナをねじ込みます。手で軽く締めるだけにしてください。受信機では、2.4 GHz アンテナを ESP32-S3 の `2.4G` と表示された U.FL パッドに取り付けます。`LR-2.4G` SMA は空けておきます。

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/install_antenna.jpg" style={{width:600, height:'auto'}}/>
</div>

:::caution
開放されたアンテナポートに向かって送信すると、パワーアンプに負荷がかかる可能性があります。どちらのボードも電源を入れる前にアンテナを取り付けてください。
:::

### ステップ 2 — カメラ HAT を送信機に取り付ける

Media HAT 上の 2 つの 16 ピンソケットを送信機側のヘッダと 1 番ピン同士が合うように揃えます。両端を均等に押し下げて差し込みます。カメラは HAT の一部なので、別途 FPC ケーブルを用意する必要はありません。

<div class="table-center">
<iframe width="600" height="350" src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/video/connect_media_hat.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::caution
ボードに電源が入っている状態でカメラ HAT を接続・取り外ししないでください。まずボードの電源を切り、USB-C を抜いてください。
:::

受信機にはカメラ HAT を取り付けないでください。サブ GHz アンテナ、2.4 GHz アンテナ、電源のみを使用し、カメラは不要です。

### ステップ 3 — 役割をマーキングする

書き込みを行う前に、ボードにラベルを付けておきます：

- **送信機:** カメラ HAT、サブ GHz アンテナ、電源および書き込み用の USB-C。
- **受信機:** サブ GHz アンテナ、ESP32-S3 の U.FL パッド上の 2.4 GHz アンテナ、PC または充電器への USB-C。

両方のボードは見た目が同じで、ファームウェアだけが異なります。背面にラベルを貼っておくと、後で書き込み直しをせずに済みます。

### ステップ 4 — 両方のボードに電源を入れる

両方のボードに USB-C を接続します。受信機はアクセスポイントと Web サーバーのために電源が必要で、送信機はカメラと無線のために電源が必要です。録画されたデモでは USB 電源を使用しています。

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/power_dev_kit.jpg" style={{width:600, height:'auto'}}/>
</div>

## ソフトウェアの準備

**受信機**用のファームウェアをダウンロードします： 
 - [Receiver Firmware](https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/res/demo_firmware/flrc-rx-260914-1522.bin)

**送信機**用のファームウェアをダウンロードします：
  - [Face Detection Firmware](https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/res/demo_firmware/flrc-tx-face-detection-260914-1520.bin)
  - [Gesture Detection Firmware](https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/res/demo_firmware/flrc-tx-gesture-detection-260914-1525.bin)
  - [Meter Reading Firmware](https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/res/demo_firmware/flrc-tx-digital-meter-water-260914-1523.bin)

### 受信機を書き込む

<Tabs groupId="flash-tool">
<TabItem value="esptool" label="esptool">

そのポートを使用しているシリアルターミナルをすべて閉じてから、次を実行します：

```bash
python -m esptool -p <PORT> -b 115200 --before default-reset --after hard-reset write-flash 0x0 flrc-rx-260914-1522.bin
```

`<PORT>` をボードのポートに置き換えます：

| システム | ポート |
| --- | --- |
| Windows | `COM5` またはデバイスマネージャーに表示される番号 |
| macOS | `/dev/cu.usbmodem*` |
| Linux | `/dev/ttyACM0` |

</TabItem>
<TabItem value="gui" label="ESP Flash Download Tool">

1. **ESP Flash Download Tool** を開き、**ESP32-S3** を選択します。
2. `flrc-rx-260914-1522.bin` を追加します。
3. ダウンロードアドレスを `0x0` に設定します。
4. ポートを選択してダウンロードを開始します。
5. ツールが完了したら、ボード上の **RESET** を押します。

</TabItem>
</Tabs>

### 送信機を書き込む

いずれか 1 つの送信機ビルドで同じ手順を繰り返します。まずは顔ビルドから始めてください：

```bash
python -m esptool -p <PORT> -b 115200 --before default-reset --after hard-reset write-flash 0x0 flrc-tx-face-detection-260914-1520.bin
```

モードを変更するには、別の送信機ビルドを書き込みます。受信機側はそのままで構いません。

:::caution
マージ済みイメージは `0x0` に書き込んでください。分割ビルドのブートローダーやアプリケーションのオフセットは使用しないでください。書き込み中にボードを抜かないでください。書き込みを行うと、工場出荷時のファームウェアは置き換えられます。
:::

### シリアルログを開く

両方のビルドは、`115200` ボー、`8 data bits`、`no parity`、`1 stop bit` で起動およびステータスメッセージを出力します。ポートは USB CDC なので、ボーレートは名目上の値です。

- AI 送信機はモデル名、カメラモード、FLRC 設定を出力します。
- 受信機はアクセスポイント、画像カウンタ、および破棄された画像を出力します。

## デモを実行する

### ステップ 1 — 受信機を起動する

受信機を USB-C に接続し、**RESET** を 1 回押します。アクセスポイントが現れるまで待ちます。SSID は `Wio-LR2021-FLRC-RX-` で始まり、受信機の Wi-Fi MAC アドレスから導出された 4 文字の 16 進数で終わります。パスワードは `12345678` です。

ネットワークが現れない場合は、シリアルログを開いてアクセスポイントのメッセージを探してください。受信機ビルドが書き込まれていること、2.4 GHz アンテナが ESP32-S3 の U.FL パッドに取り付けられていることを確認します。ボードに安定した 5 V 電源が供給されていることも確認してください。

### ステップ 2 — ブラウザを使うデバイスを接続する

スマートフォンまたはノート PC から `Wio-LR2021-FLRC-RX-xxxx` ネットワークに接続します。デバイスはこのネットワークに接続したままにし、インターネット接続は不要です。

一部のスマートフォンでは、アクセスポイントにインターネット接続がないとモバイルデータが優先されます。テスト中はモバイルデータをオフにするか、Wi-Fi 接続を維持するオプションを選択してください。

### ステップ 3 — ページを開く

ブラウザを開き、次のアドレスにアクセスします：

```
http://192.168.4.1
```

ページには黒い背景、2 行の白いテキスト、そして最新の画像が表示されます。ログインやコントロールパネルはありません。

### ステップ 4 — 送信機を向ける

送信機の電源を入れ、カメラを被写体に向けます。最初の画像が表示されるまで数秒かかる場合があります。最良の結果を得るには：

- 被写体をフレーム内に収め、適切な距離を保ってください。
- 均一な照明を使用してください。強い逆光や反射は被写体を見えにくくします。

## 表示内容

### ページヘッダー

ページには、画像の上に 2 つのカウンタとレートが表示されます：

```
Received frames: 174 (image 23)
FPS: 2.22
```

- **Received frames** は、受信機が受信完了した JPEG 画像の枚数をカウントします。
- **image** は、送信機が割り当てた画像 ID です。
- **FPS** は、受信機が測定したエンドツーエンドのレートです。

フレーム数と画像 ID は別々であり、一致している必要はありません。リセット後は値が異なる場合があります。

### 顔検出

<div class="table-center">
<iframe width="600" height="350" src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/video/face_detect.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

顔検出ビルドでは、検出された顔の周りにマゼンタ色のボックスと、`face` と信頼度のパーセンテージを表示するラベルバーを描画します。バーはボックスの左上隅に表示されます。ページ側でフレームの回転は行わないため、見たい向きになるようにカメラを取り付けてください。

検出器は人物を識別しません。異なる 2 人でも、同じ `face` ラベルになります。

### ジェスチャー認識

<div class="table-center">
<iframe width="600" height="350" src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/video/gesture_meter_recognition.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

ジェスチャービルドでは、手の周りにボックスを描画し、`paper`、`rock`、`scissors` のいずれかのラベルを付けます。このフレームでは、同じ握りこぶしに対してモデルが 2 つの重なり合う候補を返したため、送信機は 2 つのボックスと 2 つのラベルを描画しました。ファームウェアは重複した候補を統合しません。スコアが大きい方がより良い候補です。

片方の手だけを見せ、指がフレーム内に収まるようにしてください。背景がごちゃごちゃしないようにします。モデルは 3 つのジェスチャーで学習されており、任意の手のポーズには対応していません。

### 水道メーターの読み取り

水道メータービルドでは、各数字の周りにボックスを描画し、その上にスコアを表示します。画像の下部には黄色の `READING:` 行を追加します。読み取り値は検出された数字から組み立てられます。メーターが斜めになっていたり数字が一部隠れている場合、フレームごとに読み取り値が変わることがあります。

これは読み取り支援ツールであり、公的に認証されたメーターリーダーではありません。請求やレポートのワークフローで使用する前に、必ずメーター本体の値と照合してください。

### 生カメラのベースライン

<div class="table-center">
<iframe width="600" height="350" src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/video/raw_camera.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

Raw ビルドでは、推論を行わずにカメラ画像を送信します。これはデモの中で最も高速なモードであり、モデルを追加する前にリンクを確認する最良の方法です。クリップでは反転した画像が表示されていますが、受信機は到着した JPEG をそのまま表示し、回転は行いません。正しい向きで見えるように、カメラを正立させて取り付けてください。

## パフォーマンス

これらのレートは、デモクリップ内の受信機ページから読み取った値です。キャプチャ、推論、描画、JPEG エンコード、FLRC 送信、再構成までを含むエンドツーエンドのレートです。

| 送信機ビルド | デバイス上の処理 | 観測されたレート |
| --- | --- | --- |
| Raw camera | キャプチャ、JPEG、FLRC | 7.6–9.9 fps、ピーク `11.27` fps |
| Face detection | 96 × 96 モデル、描画、JPEG、FLRC | 約 `2.2` fps |
| Gesture recognition | 192 × 192 モデル、描画、JPEG、FLRC | 約 `0.9` fps |
| Water-meter reading | 192 × 192 モデル、描画、JPEG、FLRC | 約 `0.8` fps |

このデモでは、Raw ビルドはパイプラインの上限であり、保証されたレートではありません。AI ビルドは、各フレームでモデルを実行するため、より低速になります。192 × 192 モデルは、96 × 96 の顔モデルよりも時間がかかります。2.6 Mbps の FLRC レートはフレームレートではなく、画像サイズとフレームごとの処理が支配的です。

## リソース

### ファームウェア

- 🗃️ [**Wio-LR2021 Dev Kit FLRC Image Demo Firmware Set**](https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/res/demo_firmware/FLRC_Image_Demo_Firmware_Set.zip)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、お客様が製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる、複数のコミュニケーションチャネルをご用意しています。

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>
