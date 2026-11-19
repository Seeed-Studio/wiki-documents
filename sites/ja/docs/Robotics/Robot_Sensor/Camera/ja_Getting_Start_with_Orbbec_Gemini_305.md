---
description: Orbbec Gemini 305 3D カメラの仕様と接続手順を確認し、Orbbec Viewer を使って深度およびカラーのストリームをプレビューします。
title: Orbbec Gemini 305 3D カメラ
keywords:
  - Orbbec
  - Gemini 305
  - Depth Camera
  - Stereo Vision
  - Robot Vision
image: https://new-orbbec3d-s3.s3.amazonaws.com/wp-content/uploads/2026/01/05024657/20260105Rectangle-431.webp
slug: /orbbec_gemini305
last_update:
  date: 11/19/2026
  author: Yang-Ci
---

<div align="center">
  <img src="https://new-orbbec3d-s3.s3.amazonaws.com/wp-content/uploads/2026/01/05024657/20260105Rectangle-431.webp" alt="Orbbec Gemini 305 3D camera" width={400} />
</div>

Orbbec Gemini 305 は、手首への取り付け、物体認識、把持など、近距離のロボットビジョン向けのステレオ深度カメラです。このページでは USB 版について説明します。Gemini 305g はインターフェース、電源要件、外形寸法が異なります。詳細は [Orbbec ドキュメント](https://doc.orbbec.com/documentation/Gemini%20305%20Documentation) を参照してください。

## 特長

- **近距離深度センシング:** 動作距離は 4～100 cm 以上、推奨距離は 7～50 cm です。
- **ステレオビジョン:** ステレオカメラにより、カラー画像とともに深度データを取得できます。
- **コンパクトな筐体:** 42 × 42 × 23 mm の筐体は、スペースに制約のある設置にも適合します。
- **同期およびトリガ:** 複数カメラの同期、ソフトウェアトリガおよびハードウェアトリガをサポートします。
- **USB 接続:** USB Type-C 接続で電源とデータを供給します。USB 3.0 の使用を推奨します。

## 仕様

これらの仕様は Gemini 305 の USB 版に適用されます。試験条件および最新の詳細については、[Orbbec 製品ページ](https://www.orbbec.com/gemini-305/) を参照してください。

| Category | Specification | Details |
| --- | --- | --- |
| Basic | Operating environment | 屋内および屋外 |
| | Operating range | 4～100 cm 以上 |
| | Recommended range | 7～50 cm |
| | Depth technology / baseline | ステレオビジョン / 18 mm |
| Depth | Spatial precision | ≤1%（1280 × 800、距離 50 cm、90% × 90% ROI） |
| | Depth field of view | 水平 88° × 垂直 65° ±3°（1280 × 800、距離 20 cm） |
| | Resolution and frame rate | 最大 1280 × 800、30 fps；848 × 480、60 fps |
| Color | Color field of view | 水平 94° × 垂直 68° ±3° |
| | Resolution and frame rate | 最大 1280 × 800、60 fps |
| | Sensors | ステレオカラー、グローバルシャッタ |
| Electrical | Power supply | 5 V DC、700 mA 以上 |
| | Average power consumption | 2 W 未満 |
| Physical | Dimensions / weight | 42 × 42 × 23 mm / 68 g ±10 g |
| | Interface | USB Type-C、USB 3.0 および USB 2.0 |
| | Ingress protection | 適切に保護された USB ケーブルを接続し固定した場合に IP54 |
| | Mounting | 底面：1/4-20 UNC ねじ穴 1 個および M3 ねじ穴 2 個、背面：M3 ねじ穴 2 個 |

## ハードウェア概要

カメラ前面には 2 つのレンズがあり、側面には USB Type-C ポートがあります。ロボットアームやブラケットに取り付ける前に、視野、ケーブルの取り回し、および想定される動作範囲全体でのクリアランスを確認してください。取り付け位置および寸法図は、[Gemini 305 ドキュメント](https://doc.orbbec.com/documentation/Gemini%20305%20Documentation) に記載されています。

[official Orbbec product page](https://store.orbbec.com/products/gemini-305) からの次の画像は、Gemini 305 の前面、USB Type-C ポート、底面および背面の取り付け穴を示しています。

<div align="center">
  <img src="https://store.orbbec.com/cdn/shop/files/Gemini_305_01.png?v=1783414201&amp;width=1600" alt="Front of the Gemini 305 showing its two lenses" width={360} />
  <p>前面：ステレオレンズ</p>
  <img src="https://store.orbbec.com/cdn/shop/files/Gemini_305_07.png?v=1783414277&amp;width=1600" alt="USB Type-C port on the side of the Gemini 305" width={360} />
  <p>側面：USB Type-C ポート</p>
  <img src="https://store.orbbec.com/cdn/shop/files/Gemini_305_08.png?v=1783414288&amp;width=1600" alt="1/4-20 UNC and M3 mounting holes on the bottom of the Gemini 305" width={360} />
  <p>底面の取り付け穴</p>
  <img src="https://store.orbbec.com/cdn/shop/files/Gemini_305_09.png?v=1783414301&amp;width=1600" alt="Two M3 mounting holes on the rear of the Gemini 305" width={360} />
  <p>背面の取り付け穴</p>
</div>

## クイックスタート

### 準備と接続

1. Gemini 305、データ通信に対応した USB Type-C ケーブル、およびカメラの電源要件を満たすホストを用意します。帯域幅を確保するため、USB 3.0 ポートとケーブルの使用を推奨します。
2. 用途に合わせてカメラを取り付け、USB Type-C ケーブルでホストに接続します。可動アームに取り付ける場合は、十分なケーブルの余裕を持たせ、ケーブルが引っ張られたり挟まれたりしないようにしてください。

### Orbbec Viewer のインストール

1. [Orbbec SDK v2 リリースページ](https://github.com/orbbec/OrbbecSDK_v2/releases) を開き、Gemini 305 をサポートするバージョンを選択し、ホストのオペレーティングシステムとアーキテクチャに対応したインストーラまたは Orbbec Viewer パッケージをダウンロードします。Jetson システムでは通常 Linux ARM64 を使用します。PC の場合は、適切な x86-64 または Windows パッケージを選択してください。
2. パッケージをインストールまたは展開し、リリースページの説明に従って Orbbec Viewer を起動します。ファイル名や手順はリリースによって変更される場合があります。Linux では、使用しているバージョンの手順に従って USB パーミッションを設定してください。

:::note
Gemini 305 は **Orbbec SDK v2** を使用します。SDK v1 はこのモデルをサポートしません。Viewer のインターフェースおよび利用可能な機能は、ソフトウェアバージョン、ファームウェア、デバイス構成によって異なります。インストールおよびデバイスパーミッションについては、[SDK v2 ドキュメント](https://github.com/orbbec/OrbbecSDK_v2) を参照してください。
:::

### 画像およびポイントクラウドのプレビュー

1. Orbbec Viewer のデバイスリストに Gemini 305 が表示されていることを確認し、選択します。
2. Depth と Color のストリームを有効にし、デバイスが提供する解像度とフレームレートを選択して、両方のプレビュウィンドウに画像が表示されることを確認します。
3. 推奨距離内に物体を配置し、距離の変化に伴う深度画像の変化を観察します。3D プレビュー用にポイントクラウドを有効にするか、カラー画像と深度画像を整列させる際には depth-to-color（D2C）アライメント設定を確認します。
4. カメラを取り外す前にストリームを停止します。詳細な操作については、[Orbbec Viewer ガイド](https://github.com/orbbec/OrbbecSDK_v2/blob/main/docs/tutorial/orbbecviewer.md) を参照してください。

次の画像は Orbbec の Viewer 2.6.2 ガイドからのもので、**Gemini 335Lg** を示しています。インターフェースの例であり、Gemini 305 のテスト結果ではありません。Gemini 305 には IMU が内蔵されていないため、例にある IMU パネルは Gemini 305 の機能を示すものではありません。インターフェースおよび利用可能なオプションは、デバイスとソフトウェアバージョンによって異なります。

<div align="center">
  <img src="https://raw.githubusercontent.com/orbbec/OrbbecSDK_v2/f5d59930ccb9a189f200e58fba4e2ae42664792d/docs/tutorial/images/image1.jpg" alt="Orbbec Viewer example showing the device list, stream controls, and image previews using a Gemini 335Lg" width={800} />
  <p>Viewer 例：上部にストリームコントロール、左側に設定、右側にプレビュー</p>
  <img src="https://raw.githubusercontent.com/orbbec/OrbbecSDK_v2/f5d59930ccb9a189f200e58fba4e2ae42664792d/docs/tutorial/images/image23.jpg" alt="Orbbec Viewer example showing a point cloud and depth-to-color alignment using a Gemini 335Lg" width={800} />
  <p>Viewer 例：ポイントクラウドと depth-to-color アライメント</p>
</div>

### トラブルシューティング

- **デバイスがリストに表示されない:** ケーブルを再接続し、給電専用ではなくデータ通信に対応していることを確認し、ホストの電源供給を確認します。Linux では、SDK v2 の手順に従って USB パーミッションも確認してください。
- **ストリームが開始できない、または不安定:** Depth または Color を単独で開始し、デバイスがサポートする他の解像度やフレームレートを試してください。USB ポート、ケーブル、ファームウェア、および SDK の互換性を確認します。
- **予期しない深度結果:** 被写体を推奨距離内に移動し、レンズが遮られていないことを確認し、シーンに合わせて Viewer のデバイス対応設定を調整します。

## ROS 2

カメラを ROS 2 で使用するには、[Orbbec SDK ROS 2 Wrapper v2 インストールガイド](https://orbbec.github.io/OrbbecSDK_ROS2/) に従ってワークスペースとデバイスパーミッションを設定します。Gemini 305 は `v2-main` ブランチを使用します。このモデルをサポートするバージョンをインストールしてワークスペースを source したら、同梱のファイルを起動します：

```bash
ros2 launch orbbec_camera gemini_301_series.launch.py
```

ROS 2 環境が設定された別のターミナルで `ros2 topic list` を使用し、利用可能なトピックを確認します。トピックおよびパラメータは、インストールしたバージョンと起動構成によって異なります。これらの手順は公式ドキュメントに基づくものであり、このページでは実機の Gemini 305 を用いた検証は行っていません。

## リソース

- [Gemini 305 ドキュメントおよびデータシート](https://doc.orbbec.com/documentation/Gemini%20305%20Documentation)
- [Orbbec SDK v2 および Viewer ダウンロード](https://github.com/orbbec/OrbbecSDK_v2/releases)
- [Orbbec Viewer ガイド](https://github.com/orbbec/OrbbecSDK_v2/blob/main/docs/tutorial/orbbecviewer.md)
- [Orbbec SDK ROS 2 Wrapper](https://github.com/orbbec/OrbbecSDK_ROS2)

## 関連リソース

- [Orbbec Gemini 336 3D カメラ](/ja/orbbec_gemini336/)
- [ROS 上の Orbbec 深度カメラ](/ja/orbbec_depth_camera_on_ros/)

## テクニカルサポートと製品ディスカッション

サポートが必要な場合は、[Seeed フォーラム](https://forum.seeedstudio.com/) を参照するか、[Seeed へお問い合わせ](https://www.seeedstudio.com/contacts)ください。
