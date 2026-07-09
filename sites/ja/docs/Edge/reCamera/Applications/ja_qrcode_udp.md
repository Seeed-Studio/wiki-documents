---
description: このデモでは、reCamera 上でリアルタイム QR コード認識を実行し、認識結果とともにビデオフレームを UDP 経由で PC にストリーミングして表示する方法を示します。
title: reCamera でのリアルタイム QR コード認識
keywords:
  - reCamera
  - QR Code
  - QR Code Recognition
  - ZXing
  - UDP Streaming
  - Real-Time Recognition
image: https://files.seeedstudio.com/wiki/reCamera/recamera-qrcode-udp-show.gif
slug: /recamera_qrcode_udp
sku: 102991897, 100029708, 108990120
sidebar_position: 17
last_update:
  date: 06/12/2026
  author: Xuanjun Zhu
createdAt: '2026-06-15'
updatedAt: '2026-06-15'
url: https://wiki.seeedstudio.com/ja/recamera_qrcode_udp/
---

# reCamera でのリアルタイム QR コード認識

## はじめに

このサンプルでは、reCamera を使用して**リアルタイム QR コード認識システム**を構築する方法を示します。システムはカメラからライブビデオフレームを取得し、**ZXing** ライブラリを使用して QR コードをデコードし、ビデオフレーム（JPEG）と認識結果を **UDP** 経由で PC に送信して表示します。

**主な特長**:
- リアルタイムのカメラキャプチャと QR コード認識
- ビデオストリーミングモードと単一画像モードの両方をサポート
- JPEG フレーム + 認識結果を UDP 経由で PC に送信
- 詳細なパフォーマンス統計（キャプチャ FPS、デコード FPS、平均デコード時間）
- PC 上でリアルタイムにビデオと結果を表示する Python 受信スクリプト

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/qrcode_udp/testvideo.gif" /></div>

## 動作概要

### ビデオストリーミングモード（デフォルト）

リアルタイム認識のフローは次のとおりです：

1. **カメラキャプチャ**: `sscma-micro` カメラインターフェースを通じて RGB888 フレーム（デフォルト 640×480）をキャプチャ
2. **グレースケール変換**: QR コード認識に必要なため、RGB888 画像をグレースケールに変換
4. **ZXing デコード**: `MultiFormatReader` + `HybridBinarizer` を使用してバーコード検出とデコードを実行（リアルタイム性能を維持するため、`TryHarder` はデフォルトで無効）
5. **結果出力**: 新しい QR コードが検出されると、デコードされた内容をターミナルに出力
6. **UDP 送信**: `SeSg stream_udp` コンポーネントを介して、JPEG フレーム + 認識結果を PC に送信

ビデオシナリオでは、「コードが見つからない」場合に ZXing による探索のオーバーヘッドが大きくなります。リアルタイム性能を確保するため、このプログラムでは 150ms デコードスロットリング戦略を採用しており、毎フレームではなく 150ms ごとに 1 回だけデコードを実行します。これにより、認識体験を損なうことなく CPU 負荷を大幅に削減できます。

## デモのセットアップ

このデモをセットアップするには、次の手順を実行します：

1. PC 上で C++ プログラムをクロスコンパイルする
2. コンパイルされた実行ファイルを ReCamera 上で実行する
3. PC 上で Python 受信スクリプトを実行する

### 1. C++ プログラムをコンパイルする

:::note
このソリューションをビルドする前に、[メインプロジェクトドキュメント](https://wiki.seeedstudio.com/ja/recamera_develop_with_c_cpp/)に従って **ReCamera-OS** 環境（バージョン 0.2.1 以降）を設定し、SDK パスとクロスコンパイルツールチェーンを構成していることを確認してください。
:::

クロスコンパイルツールチェーン用の環境変数を設定します：

```bash
export PATH='current compile chain path'/host-tools/gcc/riscv64-linux-musl-x86_64/bin:$PATH
```

リポジトリをクローンし、ソリューションディレクトリに移動してコンパイルします。PC のターミナルで次のコマンドを順番に実行してください。すでに [Developing with C/C++](https://wiki.seeedstudio.com/ja/recamera_develop_with_c_cpp/) ドキュメントに従ってクロスコンパイル環境をダウンロードおよび構成済みの場合は、以下のコンパイルコマンドをそのまま実行できます。

```bash
git clone https://github.com/RobotXTeam/sscma-example-sg200x.git
cd sscma-example-sg200x/solutions/sesg-project/qrcode-udp
export SG200X_SDK_PATH='current clone path'/sg2002_recamera_emmc
## compile cmd
rm -rf build && mkdir build && cd build 
cmake -DCMAKE_BUILD_TYPE=Release -DCMAKE_CXX_FLAGS="-std=c++17" ..
make -j$(nproc)
```

コンパイル後、実行ファイルは `build/qrcode_udp` に生成されます。scp コマンドを使用して、これを ReCamera の `/home/recamera/` にアップロードします：

```bash
sudo scp qrcode_udp recamera@192.168.4.53:/home/recamera/  # Replace 192.168.4.53 with your reCamera's IP address
```
プロンプトが表示されたら、対応するプラットフォームのパスワードを入力して `qrcode_udp` の転送を完了します。
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/qrcode_udp/cppbuildlog.png" /></div>


### 2. ReCamera を構成する

:::warning
C++ プログラムを実行する前に、カメラリソースを占有しているデフォルトの Node-RED サービスを停止する必要があります。SSH 経由で次のコマンドを実行してください：
:::

```bash
sudo /etc/init.d/S03node-red stop
sudo /etc/init.d/S91sscma-node stop
sudo /etc/init.d/S93sscma-supervisor stop
```

### 3. ReCamera 上で実行ファイルを実行する

次に、実行権限を付与するために以下のコマンドを実行します：

```bash
chmod +x qrcode_udp
```

#### パラメータ

| Parameter | 説明 | デフォルト |
|-----------|-------------|---------|
| `udp_ip` | PC の IP アドレス（UDP ストリーミングを有効化） | `192.168.4.48` |
| `udp_port` | UDP ポート番号 | `5001` |

#### コマンド例

**ビデオストリーミングモード（UDP ストリーミングなし、ローカル認識のみ）**:
```bash
sudo ./qrcode_udp
```

**ビデオストリーミングモード + UDP ストリーミング**:
```bash
sudo ./qrcode_udp 192.168.4.48 5001
```

:::note
ReCamera と同じネットワーク上にある PC の実際の IP アドレスで `192.168.4.48` を置き換えてください。
:::
### ReCamera のターミナル上で

**ビデオストリーミングモード** — プログラムは 1 秒ごとにパフォーマンス統計を表示します：

```
[Performance] CaptureFPS=2.60 | DecodeFPS=2.60 | AvgDecodeTime=323.0ms | DecodeSuccess=0 | NewCode=0
[Performance] CaptureFPS=1.94 | DecodeFPS=1.94 | AvgDecodeTime=434.0ms | DecodeSuccess=0 | NewCode=0
[QRCode] https://wiki.seeedstudio.com/recamera_software_docs/
[Performance] CaptureFPS=4.45 | DecodeFPS=4.45 | AvgDecodeTime=174.8ms | DecodeSuccess=3 | NewCode=1
[Performance] CaptureFPS=4.62 | DecodeFPS=4.62 | AvgDecodeTime=163.6ms | DecodeSuccess=5 | NewCode=0
[Performance] CaptureFPS=4.86 | DecodeFPS=4.86 | AvgDecodeTime=165.4ms | DecodeSuccess=3 | NewCode=0
[Performance] CaptureFPS=4.60 | DecodeFPS=4.60 | AvgDecodeTime=169.8ms | DecodeSuccess=4 | NewCode=0
[Performance] CaptureFPS=4.33 | DecodeFPS=4.33 | AvgDecodeTime=184.4ms | DecodeSuccess=5 | NewCode=0
[Performance] CaptureFPS=2.78 | DecodeFPS=2.78 | AvgDecodeTime=305.8ms | DecodeSuccess=3 | NewCode=0
[Performance] CaptureFPS=1.96 | DecodeFPS=1.96 | AvgDecodeTime=404.0ms | DecodeSuccess=2 | NewCode=0
[Performance] CaptureFPS=4.72 | DecodeFPS=4.72 | AvgDecodeTime=166.0ms | DecodeSuccess=6 | NewCode=0
[Performance] CaptureFPS=4.56 | DecodeFPS=4.56 | AvgDecodeTime=178.5ms | DecodeSuccess=6 | NewCode=0
[QRCode] zxj
[Performance] CaptureFPS=5.32 | DecodeFPS=5.32 | AvgDecodeTime=145.3ms | DecodeSuccess=7 | NewCode=1
[Performance] CaptureFPS=5.30 | DecodeFPS=5.30 | AvgDecodeTime=149.1ms | DecodeSuccess=6 | NewCode=0
[Performance] CaptureFPS=4.70 | DecodeFPS=4.70 | AvgDecodeTime=170.8ms | DecodeSuccess=5 | NewCode=0
[Performance] CaptureFPS=1.85 | DecodeFPS=1.85 | AvgDecodeTime=455.0ms | DecodeSuccess=1 | NewCode=0
```

- **CaptureFPS**: カメラキャプチャのフレームレート
- **DecodeFPS**: 実際にデコードが実行されるフレームレート（150ms スロットルによって制限）
- **AvgDecodeTime**: 1 回の ZXing デコードに要する平均時間
- **DecodeSuccess**: QR コードの認識に成功した回数
- **NewCode**: QR コードのテキストが変化した回数


### 4. PC 上で Python 受信プログラムを実行する

PC 上で、必要なライブラリを含む Python がインストールされていることを確認します：

```bash
pip install opencv-python numpy
```

ソリューションディレクトリに移動して、次を実行します：

```bash
cd sscma-example-sg200x/solutions/sesg-project/qrcode-udp
python tools/udp_receiver.py --port 5001 --show --print-dets
```

#### Python 受信プログラムのパラメータ

| Parameter | 説明 | デフォルト |
|-----------|-------------|---------|
| `--ip` | 待ち受け IP アドレス | `0.0.0.0` |
| `--port` | 待ち受けポート | `5001` |
| `--show` | ビデオウィンドウを表示 | off |
| `--print-dets` | 認識された QR コードテキストを表示 | off |



### Python 受信ウィンドウ上で

PC には、次の内容を含むライブビデオウィンドウが表示されます：
- JPEG ビデオストリーム
- QR コードが認識されると、デコードされたテキストがフレーム左上にオーバーレイ表示される（黄色のフォント）
- フレーム番号（緑色のフォント）
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/qrcode_udp/pcpicture.png" /></div>


## 依存関係

| Dependency | 説明 | ソース |
|------------|-------------|--------|
| **sscma-micro** | カメラアクセス（デバイス、カメラインターフェース） | リポジトリコンポーネント `components/sscma-micro` |
| **stream_udp** | UDP ストリーミング（JPEG + 検出結果） | リポジトリコンポーネント `components/SeSg/stream_udp` |
| **OpenCV** (core, imgproc, imgcodecs) | 画像処理、グレースケール変換、ダウンサンプリング | SG200X SDK sysroot |
| **ZXing** (libzxing) | マルチフォーマットバーコード / QR コードデコード | SG200X SDK sysroot |
| **ReCameraOS ≥ 0.2.1** | 実行環境 | デバイスファームウェア |

## トラブルシューティング

### カメラアクセスエラー

"No camera device found" エラーが表示される場合：
- Node-RED サービスが停止していることを確認する（上記ステップ 2 を参照）
- カメラ接続を確認する

### UDP 接続失敗

PC がデータを受信しない場合：
- PC と ReCamera が同じネットワーク上にあることを確認する
- PC のファイアウォール設定を確認する
- UDP ポート 5001 がブロックされていないことを確認する
- `ping` を使用してデバイス間の接続性をテストする

### QR コード認識の失敗

カメラ映像内に QR コードがあるのに認識されない場合：
- QR コードがフレーム内で十分な大きさと鮮明さを持っていることを確認する
- 過度なブレ、回転、不均一な照明を避ける
- リアルタイム性能を優先するため、`TryHarder` モードはデフォルトで無効になっている点に注意する

### コンパイルエラー

ZXing または sscma-micro に関連するコンパイルエラーが発生した場合：
- `SG200X_SDK_PATH` 環境変数が正しく設定されていることを確認する
- ツールチェーンパスが `PATH` 環境変数に追加されていることを確認する
- リポジトリのサブモジュールが完全に取得されていることを確認する（`git submodule update --init --recursive`）

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただける複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>