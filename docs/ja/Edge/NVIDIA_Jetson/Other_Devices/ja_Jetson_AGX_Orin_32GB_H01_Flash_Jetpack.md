---
description: NVIDIA® Jetson AGX Orin 32GB H01 Kit に JetPack をフラッシュする方法
title: NVIDIA® Jetson AGX Orin 32GB H01 Kit
tags:
  - NVIDIA Jetson H01
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Jetson_AGX_Orin_32GB_H01_Flash_Jetpack
last_update:
  date: 05/15/2025
  author: Lakshantha
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<!-- # NVIDIA® Jetson AGX Orin 32GB H01 Kit に JetPack をフラッシュする方法 -->

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/6.png"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/AGX-Orin-32GB-H01-Kit-p-5569.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong></a>
</div>

:::info
以下の更新が2024年11月25日に製品に適用されました：

1. 5V電源供給方式が変更されました（電源ICがONNCP3020ADR2GからTI TPS53015DGSに置き換えられ、周辺部品もそれに応じて調整されました）。これにより、動的電流が高い一部のUSBデバイスを使用した際のデバイス再起動問題が解決されました。
2. ボードレイアウトが最適化され、ファンケーブル用スロットが拡大され、ファン配線が容易になりました。
3. アクセサリー供給の安定化のため、WiFiモジュールモデルが8265.NGWからBL-M8822CP1に変更され、ソフトウェアドライバーも更新されました。
:::

このWikiでは、Jetson AGX Orin 32GB H01 Kit に JetPack をインストールする方法を説明します。

## 必要条件

- [Ubuntu ホストPC](https://developer.nvidia.com/sdk-manager)（ネイティブまたは VMware Workstation Player を使用した仮想マシン）
- Jetson AGX Xavier H01 Kit
- USB Type-C データ転送ケーブル

## 強制リカバリモードに入る

- **ステップ 1:** ボードにはリカバリボタンがあり、以下の画像に示されている3つのボタンの中央にあります。リカバリボタンを押しながらボードを電源に接続すると、強制リカバリモードに入ります。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/4.jpg"/></div>

- **ステップ 2:** Jetson AGX Orin 32GB H01 Kit を USB Type-C データ転送ケーブルで Ubuntu ホストPCに接続します。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/5.jpg"/></div>

## 周辺機器ドライバーをダウンロードする

まず、このボード用の周辺機器ドライバーをインストールする必要があります。これらのドライバーは、ボード上の一部のハードウェア周辺機器を動作させるために必要です。以下のリンクをクリックして、JetPack バージョンに応じたドライバーをダウンロードしてください。

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>JetPack バージョン</th>
      <th>L4T バージョン</th>
      <th>ドライバーダウンロードリンク</th>
      <th>L4T ダウンロードリンク</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>5.0.2</td>
      <td>35.1</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/Jetson-AGX-Orin-32GB-H01-Kit/Driver-for-JP-5.0.2/AGX-Orin-32GB-H01-JP5.0.2.zip/download" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r351" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
    </tr>
    <tr>
      <td>5.1.1</td>
      <td>35.3.1</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/Jetson-AGX-Orin-32GB-H01-Kit/Driver-for-JP-5.1.1/AGX-Orin-32GB-H01-JP5.1.1.zip/download" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r3531" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
    </tr>
    <tr>
      <td>6.0</td>
      <td>36.3</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EfdaZCD6wMZPrW_LtMm3eQgBXnPq_8ri8WmKw3nsxXVf1Q?e=uvKRhE" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r363" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
    </tr>
    <tr>
      <td>6.1</td>
      <td>36.4</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EbYu41kk-LNNmsssNIuM5AoBLYjTFZo_mEUTUtIJlCCnyw?e=dvCgKk" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r3640" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
    </tr>
  </tbody>
</table>
</div>

## Jetsonへのフラッシュ

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="JP5.0.2/JP5.1.1" label="JP5.0.2/JP5.1.1">

ここでは、Jetson AGX Orin 32GB H01 Kitに**Jetpack 5.0.2**をインストールするために**NVIDIA L4T 35.1**を使用し、または**Jetpack 5.1.1**をインストールするために**NVIDIA L4T 35.3.1**を使用します。

- **ステップ 1:** ホストPCに適切なNVIDIAドライバーをダウンロードします。必要なドライバーは以下の通りです：

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"/></div>

- **ステップ 2:** ダウンロードした周辺機器ドライバーをNVIDIAドライバーと同じフォルダーに移動します。これで、同じフォルダーに3つの圧縮ファイルが表示されます。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/7.png"/></div>

- **ステップ 3:** **Jetson_Linux_R35.1.0_aarch64.tbz2**と**Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2**を解凍します。これらのファイルがあるフォルダーに移動し、変更を適用します。

```sh
cd <directory_where_the_files_are_located>
tar xf Jetson_Linux_R35.1.0_aarch64.tbz2
cd Linux_for_tegra/rootfs
sudo tar xfp ../../Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2
cd ..
sudo ./apply_binaries.sh
```

- **ステップ 4:** **AGX-Orin-32GB-H01-JP5.0.2.zip**を解凍します。ここでは、.zipファイルを解凍するために必要な**unzip**パッケージを追加でインストールします。

```sh
cd ..
sudo apt install unzip 
unzip AGX-Orin-32GB-H01-JP5.0.2.zip
```

ここでファイルを置き換えるかどうかを尋ねられます。**A**を入力して**ENTER**を押し、必要なファイルを置き換えます。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/3.jpg"/></div>

- **ステップ 5:** システムをeMMCにフラッシュします。

```sh
cd Linux_for_Tegra
sudo ./flash.sh jetson‐agx‐orin‐devkit mmcblk0p1
```

フラッシュプロセスが成功すると、以下の出力が表示されます。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/9.jpg"/></div>

### 発生したエラー:
- **ERROR: failed to read rcm_state** on **AGX Orin** and **NX Orin** for *Jetpack 5.1.1*
  - NVIDIAによるJetson AGX OrinのPCN変更がありますが、これはSeeedのPCN変更ではありません。
  - Wikiで言及されている資料に加えて、[Overlay_PCN210361_PCN210100_r35.3.1.tbz2](https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v3.1/overlay_pcn210361_pcn210100_r35.3.1.tbz2)をJetson Linux 35.3.1ページの下部からダウンロードしてください。
  - *Jetson_Linux*を解凍した後、バイナリを適用する前に*Overlay_PCN210361_PCN210100_r35.3.1.tbz2*を解凍してください。その後、すべてのファイルとフォルダーを*Linux_For_Tegra*にコピーします（スキップせずにマージ）。
  - その後、ガイダンスの残りの手順を続行してください。

</TabItem>

<TabItem value="JP6.0" label="JP6.0">

ここでは、Jetson AGX Orin 32GB H01 Kitに**Jetpack 6.0**をインストールするために**NVIDIA L4T 36.3**を使用します。

- **ステップ 1:** [NVIDIAドライバーをダウンロード](https://developer.nvidia.com/embedded/jetson-linux-r363)します。必要なドライバーは以下の通りです：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"/>
</div>

- **ステップ 2:** ダウンロードした周辺機器ドライバーをNVIDIAドライバーと同じフォルダーに移動します。これで、同じフォルダーに3つの圧縮ファイルが表示されます。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/files.png"/>
</div>

- **ステップ 3:** **Jetson_Linux_R36.3.0_aarch64.tbz2**と**Tegra_Linux_Sample-Root-Filesystem_R36.3.0_aarch64.tbz2**を解凍します。これらのファイルがあるフォルダーに移動し、変更を適用します：

```bash
cd < directory_where_the_files_are_located >
tar xf Jetson_Linux_R36.3.0_aarch64.tbz2
sudo tar xfp Tegra_Linux_Sample-Root-Filesystem_R36.3.0_aarch64.tbz2 -C Linux_for_tegra/rootfs
cd Linux_for_tegra
sudo ./tools/l4t_flash_prerequisites.sh
sudo ./apply_binaries.sh
```

- **ステップ 4:** **AGX-Orin-H01-JP6.0.zip**を解凍します。ここでは、.zipファイルを解凍するために必要な**unzip**パッケージを追加でインストールします。

```sh
cd ..
sudo apt install unzip 
sudo unzip AGX-Orin-H01-JP6.0.zip
```

ここでファイルを置き換えるかどうかを尋ねられます。**A**を入力して**ENTER**を押し、必要なファイルを置き換えます。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/extract_drivers.png"/>
</div>

- **ステップ 5:** システムをeMMCにフラッシュします。

```sh
cd Linux_for_Tegra
sudo ./flash.sh jetson-agx-orin-devkit internal
```

フラッシュプロセスが成功すると、以下の出力が表示されます：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/flash_successful.png"/>
</div>

</TabItem>

<TabItem value="JP6.1" label="JP6.1">

ここでは、Jetson AGX Orin 32GB H01 Kitに**Jetpack 6.1**をインストールするために**NVIDIA L4T 36.4**を使用します。

- **ステップ 1:** [NVIDIAドライバーをダウンロード](https://developer.nvidia.com/embedded/jetson-linux-r3640)します。必要なドライバーは以下の通りです：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"/>
</div>

- **ステップ 2:** ダウンロードした周辺機器ドライバーをNVIDIAドライバーと同じフォルダーに移動します。これで、同じフォルダーに3つの圧縮ファイルが表示されます。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/a605_jp6.1.png"/>
</div>

:::note
以下のコマンドを使用して、ダウンロードしたファイルが完全であることを確認できます。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/verify_download_file.webp"/>
</div>
:::

- **ステップ 3:** **Jetson_Linux_R36.4.0_aarch64.tbz2**と**Tegra_Linux_Sample-Root-Filesystem_R36.4.0_aarch64.tbz2**を解凍します。これらのファイルがあるフォルダーに移動し、変更を適用します：

```bash
cd <path_to_files>
tar xf Jetson_Linux_R36.4.0_aarch64.tbz2
sudo tar xfp Tegra_Linux_Sample-Root-Filesystem_R36.4.0_aarch64.tbz2 -C Linux_for_tegra/rootfs
cd Linux_for_tegra
sudo ./tools/l4t_flash_prerequisites.sh
sudo ./apply_binaries.sh
```

- **ステップ 4:** **A605_Jetpack_6.1.tar.gz** を展開します:

```bash
cd ..
tar xf A605_Jetpack_6.1.tar.gz
sudo cp -r 605_jetpack6.1/Linux_for_Tegra/* Linux_for_Tegra/
```

- **ステップ 5:** システムを eMMC にフラッシュします:

```bash
cd Linux_for_Tegra
sudo ./flash.sh jetson-agx-orin-devkit internal
```

フラッシュプロセスが成功すると、以下の出力が表示されます:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/flash_successful.png"/>
</div>

:::info
システムを SSD にインストールするには、以下のコマンドを実行することもできます:
```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml --showlogs --network usb0 jetson-agx-orin-devkit external
```
:::

</TabItem>

</Tabs>

## 開発者ツール
### 高速開発とエッジ AI 統合のためのプリインストール済み Jetpack
[Jetson ソフトウェア](https://developer.nvidia.com/embedded/develop/software) は NVIDIA JetPack™ SDK から始まり、完全な開発環境を提供します。この SDK には、CUDA-X による加速ライブラリやその他の NVIDIA 技術が含まれており、開発を迅速に開始できます。JetPack には、Linux カーネル、ブートローダー、NVIDIA ドライバー、フラッシュユーティリティ、サンプルファイルシステム、Jetson プラットフォーム用のツールチェーンを提供する Jetson Linux ドライバーパッケージが含まれています。また、セキュリティ機能、OTA アップデート機能なども含まれています。

### コンピュータビジョンと組み込み機械学習
- [Deepstream](https://developer.nvidia.com/deepstream-sdk): AI ベースのマルチセンサー処理およびビデオ・画像理解のための完全なストリーミング分析ツールキットを Jetson 上で提供します。
- [TAO](https://developer.nvidia.com/tao-toolkit): TensorFlow と PyTorch を基盤とした NVIDIA TAO フレームワークのローコード版で、モデルトレーニングを加速します。
- [alwaysAI](https://alwaysai.co/blog/getting-started-with-the-jetson-nano-using-alwaysai): reComputer 上で直接コンピュータビジョンアプリケーションを構築、トレーニング、デプロイします。100 以上の事前トレーニング済みコンピュータビジョンモデルに無料でアクセスし、エンタープライズサブスクリプションを通じてクラウドでカスタム AI モデルを数クリックでトレーニングできます。始め方については [wiki](https://wiki.seeedstudio.com/ja/alwaysAI-Jetson-Getting-Started/#object-detection-on-pre-loaded-video-file) ガイドをご覧ください。
- [edge impulse](https://www.edgeimpulse.com/): クラウド依存なしで、エッジでオーディオ、分類、物体検出アプリケーションをデプロイするための最も簡単な組み込み機械学習パイプライン。
- [Roboflow](https://blog.roboflow.com/deploy-to-nvidia-jetson/): 生の画像をカスタムトレーニング済みの物体検出および分類モデルに変換し、アプリケーションで使用するためにモデルをデプロイするツールを提供します。NVIDIA Jetson へのデプロイについては https://docs.roboflow.com/inference/nvidia-jetson を参照してください。
- [ultralytics yolo](https://github.com/ultralytics/yolov5): 転移学習を使用して、YOLOv5 による少数ショット物体検出を実現します。非常に少ないトレーニングサンプルで済みます。ステップバイステップの [wiki](https://wiki.seeedstudio.com/ja/YOLOv5-Object-Detection-Jetson/) チュートリアルをご覧ください。
- [Deep Learning](https://deci.ai/blog/jetson-machine-learning-inference/): NVIDIA Jetson Nano 上でモデルを最適化します。Deci の [こちら](https://info.deci.ai/benchmark-optimize-runtime-performance-nvidia-jetson) を参照して、NVIDIA Jetson Nano および Xavier NX デバイスでのランタイムパフォーマンスを自動的にベンチマークおよび最適化する方法をご確認ください。

### 音声 AI
- [Riva](https://developer.nvidia.com/riva): ユースケースに合わせてカスタマイズされた音声 AI アプリケーションを構築し、リアルタイムパフォーマンスを提供するための GPU 加速 SDK。

### リモートフリート管理
[allxon](https://www.allxon.com/) を使用して、安全な OTA およびリモートデバイス管理を有効化します。コード H4U-NMW-CPK を使用して 90 日間の無料トライアルを解除できます。

### ロボットおよび ROS 開発
- NVIDIA Isaac ROS GEMs は、NVIDIA ハードウェア上で高性能なソリューションを構築するために ROS 開発者を支援するハードウェアアクセラレーションパッケージです。[NVIDIA Isaac](https://developer.nvidia.com/embedded/develop/software) について詳しく学びましょう。
- [Cogniteam Nimbus](https://www.cogniteam.com/nimbus): 開発者が自律ロボットをより効果的に管理できるクラウドベースのソリューションです。Nimbus プラットフォームは NVIDIA® Jetson™ および ISAAC SDK と GEMs を標準でサポートしています。[ウェビナー](https://www.seeedstudio.com/blog/2022/04/21/webinar-connect-your-ros-project-to-the-cloud-with-nimbus/) をチェックして、Nimbus を使用して ROS プロジェクトをクラウドに接続する方法を学びましょう。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際に、できる限りスムーズな体験を提供するため、さまざまなサポートをご用意しております。お客様の好みやニーズに合わせた複数のコミュニケーションチャネルをご利用いただけます。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>