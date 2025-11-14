---
description: このwikiは、SO ARM100の組み立てとデバッグのチュートリアルを提供し、最新版のLerobotフレームワーク内でのデータ収集とトレーニングを実現します。
title: LerobotでのSoArm
keywords:
- Lerobot
- Huggingface
- Arm
- Robotics
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /ja/lerobot_so100m_new
last_update:
  date: 9/26/2025
  author: LiShanghang
translation:
  skip: [ zh-CN ]
---

# LeRobotを使用したSO-ARM100およびSO-ARM101ロボットアームの入門

:::tip
このチュートリアルのメンテナンスは最新版の[lerobot](https://huggingface.co/docs/lerobot/index)に更新されています。以前のバージョンのチュートリアルを参照したい場合は、[こちら](https://wiki.seeedstudio.com/ja/lerobot_so100m/)をクリックしてください。
:::

## はじめに

[SO-10xARM](https://github.com/TheRobotStudio/SO-ARM100)は、[TheRobotStudio](https://www.therobotstudio.com/)によって開始された完全オープンソースのロボットアームプロジェクトです。フォロワーアームとリーダーロボットアームが含まれており、詳細な3Dプリントファイルと操作ガイドも提供されています。[LeRobot](https://github.com/huggingface/lerobot/tree/main)は、PyTorchで実世界のロボティクス向けのモデル、データセット、ツールを提供することに取り組んでいます。その目的は、ロボティクスの参入障壁を下げ、誰もがデータセットと事前訓練済みモデルの共有に貢献し、恩恵を受けられるようにすることです。LeRobotは、模倣学習を中心とした実世界での応用に検証された最先端の方法論を統合しています。人間が収集したデモンストレーションを特徴とする事前訓練済みモデル、データセット、シミュレーション環境のスイートを提供し、ユーザーがロボットの組み立ての必要なしに開始できるようにしています。今後数週間で、現在利用可能な最もコスト効率的で有能なロボットでの実世界ロボティクスのサポートを拡張する予定です。

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/sD34HnAkGNc?si=hqKd_sH5Oc9sdcwd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## プロジェクト紹介

SO-ARM10xとreComputer Jetson AIインテリジェントロボットキットは、高精度ロボットアーム制御と強力なAIコンピューティングプラットフォームをシームレスに組み合わせ、包括的なロボット開発ソリューションを提供します。このキットは、Jetson OrinまたはAGX Orinプラットフォームをベースに、SO-ARM10xロボットアームとLeRobot AIフレームワークを組み合わせ、教育、研究、産業自動化などの複数のシナリオに適用可能なインテリジェントロボットシステムをユーザーに提供します。
このwikiは、SO ARM10xの組み立てとデバッグのチュートリアルを提供し、Lerobotフレームワーク内でのデータ収集とトレーニングを実現します。

  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.png" />
  </div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
</a></div>

## 主な特徴

1. **オープンソースで低コスト**：[TheRobotStudio](https://github.com/TheRobotStudio/SO-ARM100)からのオープンソース、低コストロボットアームソリューションです
2. **LeRobotとの統合**：[LeRobotプラットフォーム](https://github.com/huggingface/lerobot)との統合のために設計されています
3. **豊富な学習リソース**：組み立てと校正ガイド、テスト、データ収集、トレーニング、デプロイメントのチュートリアルなど、包括的なオープンソース学習リソースを提供し、ユーザーが迅速に開始してロボットアプリケーションを開発できるよう支援します。
4. **Nvidiaとの互換性**：このアームキットをreComputer Mini J4012 Orin NX 16 GBでデプロイします。
5. **マルチシーン応用**：教育、科学研究、自動化生産、ロボティクスなどの分野に適用可能で、ユーザーが様々な複雑なタスクで効率的で精密なロボット操作を実現するのを支援します。

## 新機能：

- 配線の最適化：SO-ARM100と比較して、SO-ARM101は改良された配線を特徴とし、以前にジョイント3で見られた切断問題を防ぎます。新しい配線設計により、ジョイントの可動範囲も制限されなくなりました。
- リーダーアームの異なるギア比：リーダーアームは最適化されたギア比のモーターを使用し、性能を向上させ、外部ギアボックスの必要性を排除しました。
- 新機能サポート：リーダーアームがフォロワーアームをリアルタイムで追従できるようになりました。これは、人間がロボットの動作に介入して修正できる今後の学習ポリシーにとって重要です。

:::caution

Seeed Studioは、ハードウェア自体の品質についてのみ責任を負います。チュートリアルは公式ドキュメントに厳密に従って更新されています。解決できないソフトウェアの問題や環境依存の問題に遭遇した場合は、このチュートリアルの最後にあるFAQセクションを確認することに加えて、[LeRobotプラットフォーム](https://github.com/huggingface/lerobot)または[LeRobot Discordチャンネル](https://discord.gg/8TnwDdjFGU)に速やかに問題を報告してください。

:::

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/JrF_ymUvrqc?si=vslu5NNI-ZIzVXLc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 仕様

<table>
  <thead>
    <tr>
      <th>タイプ</th>
      <th colSpan="2">SO-ARM100</th>
      <th colSpan="2">SO-ARM101</th>
    </tr>
    <tr>
      <th></th>
      <th><a href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html" target="_blank">アームキット</a></th>
      <th><a href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit-Pro-p-6343.html" target="_blank">アームキットPro</a></th>
      <th><a href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html" target="_blank">アームキット</a></th>
      <th><a href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit-Pro-p-6343.html" target="_blank">アームキットPro</a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>リーダーアーム</td>
      <td rowSpan="2">全ジョイント用の1:345ギア比を持つ12x ST-3215-C001（7.4V）モーター</td>
      <td rowSpan="2">全ジョイント用の1:345ギア比を持つ12x ST-3215-C018/ST-3215-C047（12V）モーター</td>
      <td colSpan="2">
        ジョイント2のみ用の1:345ギア比を持つ1x ST-3215-C001（7.4V）モーター<br />
        ジョイント1と3用の1:191ギア比を持つ2x ST-3215-C044（7.4V）モーター<br />
        ジョイント4、5、グリッパー（ジョイント6）用の1:147ギア比を持つ3x ST-3215-C046（7.4V）モーター
      </td>
    </tr>
    <tr>
      <td>フォロワーアーム</td>
      <td colSpan="2">SO-ARM100と同じ</td>
    </tr>
    <tr>
      <td>電源</td>
      <td>5.5 mm × 2.1 mm DC 5 V 4 A</td>
      <td>5.5 mm × 2.1 mm DC 12 V 2 A</td>
      <td>5.5 mm × 2.1 mm DC 5 V 4 A</td>
      <td>
        5.5 mm × 2.1 mm DC 12 V 2 A（フォロワーアーム）<br />
        5.5 mm × 2.1 mm DC 5 V 4 A（リーダーアーム）
      </td>
    </tr>
    <tr>
      <td>角度センサー</td>
      <td colSpan="4">12ビット磁気エンコーダー</td>
    </tr>
    <tr>
      <td>推奨動作温度</td>
      <td colSpan="4">0 °C から 40 °C</td>
    </tr>
    <tr>
      <td>通信</td>
      <td colSpan="4">UART</td>
    </tr>
    <tr>
      <td>制御方法</td>
      <td colSpan="4">PC</td>
    </tr>
  </tbody>
</table>

:::danger

アームキット版を購入した場合、両方の電源は5Vです。アームキットPro版を購入した場合は、リーダーロボットアームの校正とすべてのステップに5V電源を使用し、フォロワーロボットアームの校正とすべてのステップに12V電源を使用してください。

:::

## 部品表（BOM）

| 部品 | 数量 | 含まれる|
|--|--|--|
|  サーボモーター | 12 | ✅ |
| モーター制御ボード | 2 | ✅ |
| USB-Cケーブル 2本 | 1 | ✅ |
| 電源2 | 2 | ✅ |
| テーブルクランプ| 4 | ✅ |
| アームの3Dプリント部品 | 1 | オプション |

## 初期システム環境

**Ubuntu x86の場合：**

- Ubuntu 22.04  
- CUDA 12+  
- Python 3.10  
- Torch 2.6+  

**Jetson Orinの場合：**

- Jetson JetPack 6.0および6.1、6.1はサポートされていません
- Python 3.10  
- Torch 2.3+

## 目次

  [A. 3Dプリントガイド](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#install-lerobot)

  [B. LeRobotのインストール](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#install-lerobot)

  [C. モーターの設定](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#configure-the-motors)

  [D. 組み立て](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#assembly)

  [E. 校正](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#calibrate)

  [F. テレオペレーション](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#teleoperate)

  [G. カメラの追加](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#add-cameras)

  [H. データセットの記録](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#record-the-dataset)

  [I. データセットの可視化](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#visualize-the-dataset)

  [J. エピソードの再生](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#replay-an-episode)

  [K. ポリシーのトレーニング](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#train-a-policy)

  [L. ポリシーの評価](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#evaluate-your-policy)

## 3Dプリントガイド

:::caution
SO101の公式アップデートに伴い、SO100はサポートされなくなり、公式によるとソースファイルは削除されますが、ソースファイルは依然として私たちの[Makerworld](https://makerworld.com/zh/models/908660)で見つけることができます。ただし、以前にSO100を購入したユーザーについては、チュートリアルとインストール方法は引き続き互換性があります。SO101のプリントは、SO100のモーターキットインストールと完全に互換性があります。
:::

### ステップ1：プリンターを選択する

提供されるSTLファイルは、多くのFDMプリンターでプリント可能です。以下はテスト済みで推奨される設定ですが、他の設定でも動作する可能性があります。

- 材料：PLA+
- ノズル径と精度：0.4mmノズル径で0.2mmレイヤー高さ、または0.6mmノズルで0.4mmレイヤー高さ。
- インフィル密度：15%  

### ステップ2：プリンターをセットアップする

- プリンターが校正され、ベッドレベルがプリンター固有の指示に従って正しく設定されていることを確認してください。
- プリントベッドを清掃し、ほこりや油脂がないことを確認してください。水やその他の液体でベッドを清掃した場合は、ベッドを乾燥させてください。
- プリンターが推奨する場合は、標準的なグルースティックを使用し、ベッドのプリント領域全体に薄く均一な接着剤の層を塗布してください。塊や不均一な塗布は避けてください。
- プリンター固有の指示に従ってプリンターフィラメントをロードしてください。
- プリンター設定が上記で推奨されたものと一致することを確認してください（ほとんどのプリンターには複数の設定があるため、最も近いものを選択してください）。
- すべての場所でサポートを設定しますが、水平に対して45度を超える傾斜は無視してください。
- 水平軸を持つネジ穴にはサポートがないようにしてください。

### ステップ3：パーツを印刷する

リーダーまたはフォロワーのすべてのパーツは、簡単な3Dプリント用に既に単一ファイルに含まれており、サポートを最小限に抑えるためにz軸上向きに正しく配向されています。

- 220mmx220mmのプリンターベッドサイズ（Enderなど）の場合、これらのファイルを印刷してください：
  - [Follower](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Follower/Ender_Follower_SO101.stl)
  - [Leader](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Leader/Ender_Leader_SO101.stl)

- 205mm x 250mmのプリンターベッドサイズ（Prusa/Upなど）の場合：
  - [Follower](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Follower/Prusa_Follower_SO101.stl)
  - [Leader](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Leader/Prusa_Leader_SO101.stl)

## LeRobotをインストールする

pytorchやtorchvisionなどの環境は、お使いのCUDAに基づいてインストールする必要があります。

1. Minicondaをインストール：
Jetson用：

```bash
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh
chmod +x Miniconda3-latest-Linux-aarch64.sh
./Miniconda3-latest-Linux-aarch64.sh
source ~/.bashrc
```

または、X86 Ubuntu 22.04用：

```bash
mkdir -p ~/miniconda3
cd miniconda3
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
rm ~/miniconda3/miniconda.sh
source ~/miniconda3/bin/activate
conda init --all
```

2. lerobot用の新しいconda環境を作成してアクティベート

```bash
conda create -y -n lerobot python=3.10 && conda activate lerobot
```

3. Lerobotをクローン：

```bash
git clone https://github.com/Seeed-Projects/lerobot.git ~/lerobot
```

4. minicondaを使用する場合、環境にffmpegをインストール：

```bash
conda install ffmpeg -c conda-forge
```

:::tip
これは通常、libsvtav1エンコーダーでコンパイルされたプラットフォーム用のffmpeg 7.Xをインストールします。libsvtav1がサポートされていない場合（ffmpeg -encodersでサポートされているエンコーダーを確認）、以下を実行できます：

- [すべてのプラットフォーム] 以下を使用してffmpeg 7.Xを明示的にインストール：

```bash
conda install ffmpeg=7.1.1 -c conda-forge
```

- [Linuxのみ] ffmpegビルド依存関係をインストールし、libsvtav1でソースからffmpegをコンパイルし、which ffmpegでインストールに対応するffmpegバイナリを使用していることを確認してください。

このようなエラーが発生した場合も、このコマンドを使用できます。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/No valid stream.png" />
</div>

:::

5. feetechモーター用の依存関係を含むLeRobotをインストール：

```bash
cd ~/lerobot && pip install -e ".[feetech]"
```

Jetson Jetpack 6.0+デバイス用（このステップを実行する前に、ステップ5から[Pytorch-gpuとTorchvision](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/tree/main/3-Basic-Tools-and-Getting-Started/3.5-Pytorch)をインストールしていることを確認してください）：

```bash
conda install -y -c conda-forge "opencv>=4.10.0.84"  # Install OpenCV and other dependencies through conda, this step is only for Jetson Jetpack 6.0+
conda remove opencv   # Uninstall OpenCV 
pip3 install opencv-python==4.10.0.84  # Then install opencv-python via pip3
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
pip3 install numpy==1.26.0  # This should match torchvision
```

6. PytorchとTorchvisionを確認

pipを介してlerobot環境をインストールすると、元のPytorchとTorchvisionがアンインストールされ、PytorchとTorchvisionのCPUバージョンがインストールされるため、Pythonで確認を行う必要があります。

```python
import torch
print(torch.cuda.is_available())
```

印刷された結果がFalseの場合、[公式ウェブサイトのチュートリアル](https://pytorch.org/index.html)に従ってPytorchとTorchvisionを再インストールする必要があります。

Jetsonデバイスを使用している場合は、[このチュートリアル](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson)に従ってPytorchとTorchvisionをインストールしてください。

## モーターを設定する

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="SO101" label="SO101">

SO-ARM101のサーボ校正と初期化プロセスは、方法とコードの両方においてSO-ARM100と同じです。ただし、SO-ARM101リーダーアームの最初の3つの関節のギア比はSO-ARM100と異なるため、注意深く区別して校正することが重要です。

モーターを設定するには、リーダーアーム用に1つのバスサーボアダプターと6つのモーターを指定し、同様にフォロワーアーム用に他のバスサーボアダプターと6つのモーターを指定します。それらにラベルを付け、各モーターがフォロワーF用かリーダーL用か、そして1から6までのIDを書くと便利です。**フォロワーアーム**の関節1から6を表すために**F1–F6**を使用し、**リーダーアーム**の関節1から6を表すために**L1–L6**を使用します。対応するサーボモデル、関節の割り当て、ギア比の詳細は以下の通りです：

| サーボモデル                            | ギア比 | 対応する関節         |
|----------------------------------------|------------|------------------------------|
| ST-3215-C044(7.4V)                            | 1:191      | L1                           |
| ST-3215-C001(7.4V)                       | 1:345      | L2                           |
| ST-3215-C044(7.4V)                           | 1:191      | L3                           |
| ST-3215-C046(7.4V)                           | 1:147      | L4–L6                        |
| ST-3215-C001(7.4V) / C018(12V) / C047(12V)             | 1:345      | F1–F6                        |

:::danger
モーターバスに5Vまたは12Vの電源を接続する必要があります。STS3215 7.4Vモーター用には5V、STS3215 12Vモーター用には12Vです。リーダーアームは常に7.4Vモーターを使用するため、12Vと7.4Vモーターがある場合は正しい電源を接続するよう注意してください。そうしないとモーターを焼損する可能性があります！次に、USBを介してモーターバスをコンピューターに接続します。USBは電力を供給しないため、電源とUSBの両方を接続する必要があることに注意してください。
:::

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/all_motos.png" />
</div>

***以下はコード校正手順です。上記の画像の参照配線サーボで校正してください***

アームに関連するUSBポートを見つける
各アームの正しいポートを見つけるために、ユーティリティスクリプトを2回実行します：

```bash
lerobot-find-port
```

出力例：

```bash
Finding all available ports for the MotorBus.
['/dev/ttyACM0', '/dev/ttyACM1']
Remove the usb cable from your MotorsBus and press Enter when done.

[...Disconnect corresponding leader or follower arm and press Enter...]

The port of this MotorsBus is /dev/ttyACM1
Reconnect the USB cable.
```

:::tip
USBを取り外すことを忘れないでください。そうしないとインターフェースが検出されません。
:::

フォロワーアームのポートを識別する際の出力例（例：Macでは`/dev/tty.usbmodem575E0031751`、Linuxでは`/dev/ttyACM0`の可能性）：

リーダーアームのポートを識別する際の出力例（例：`/dev/tty.usbmodem575E0032081`、またはLinuxでは`/dev/ttyACM1`の可能性）：

以下を実行してUSBポートへのアクセス権を付与する必要がある場合があります：

```bash
sudo chmod 666 /dev/ttyACM0
sudo chmod 666 /dev/ttyACM1
```

**モーターを設定する**

:::danger
リーダーモーター（ST-3215-C046、C044、001）の校正には5V電源を使用してください。
:::

| **リーダーアーム関節6校正** | **リーダーアーム関節5校正** | **リーダーアーム関節4校正** | **リーダーアーム関節3校正** | **リーダーアーム関節2校正** | **リーダーアーム関節1校正** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L5.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L4.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L3.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L2.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L1.jpg) |

:::danger
アームキット版（ST-3215-C001）を購入した場合は、5V電源を使用してください。アームキットプロ版を購入した場合は、サーボ（ST-3215-C047/ST-3215-C018）の校正に12V電源を使用してください。
:::

| **フォロワーアーム関節6校正** | **フォロワーアーム関節5校正** | **フォロワーアーム関節4校正** | **フォロワーアーム関節3校正** | **フォロワーアーム関節2校正** | **フォロワーアーム関節1校正** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F5.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F4.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F3.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F2.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F1.jpg) |

:::tip
繰り返しになりますが、サーボジョイントIDとギア比がSO-ARM101のものと厳密に対応していることを確認してください。
:::

コンピュータからのUSBケーブルと電源をフォロワーアームのコントローラーボードに接続します。その後、以下のコマンドを実行してください。

```bash
lerobot-setup-motors \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0  # <- paste here the port found at previous step
```

以下の指示が表示されるはずです。

```bash
Connect the controller board to the 'gripper' motor only and press enter.
```

指示に従って、グリッパーのモーターを接続してください。ボードに接続されているモーターがそれだけであることを確認し、モーター自体がまだ他のモーターにデイジーチェーン接続されていないことを確認してください。[Enter]を押すと、スクリプトが自動的にそのモーターのIDとボーレートを設定します。

その後、以下のメッセージが表示されるはずです：

```bash
'gripper' motor id set to 6
```

続いて次の指示が表示されます：

```bash
Connect the controller board to the 'wrist_roll' motor only and press enter.
```

コントローラーボードから3ピンケーブルを取り外すことができますが、もう一方の端のグリッパーモーターには接続したままにしておくことができます。すでに正しい位置にあるからです。次に、別の3ピンケーブルを手首回転モーターに接続し、コントローラーボードに接続してください。前のモーターと同様に、ボードに接続されているモーターがそれだけであることを確認し、モーター自体が他のモーターに接続されていないことを確認してください。

:::caution
指示に従って、各モーターに対してこの操作を繰り返してください。
:::

:::tip
Enterを押す前に、各ステップでケーブル接続を確認してください。例えば、ボードを操作する際に電源ケーブルが外れる可能性があります。
:::

完了すると、スクリプトは単純に終了し、この時点でモーターは使用準備が整います。これで、各モーターから次のモーターへ3ピンケーブルを接続し、最初のモーター（id=1の「ショルダーパン」）からコントローラーボードへケーブルを接続できます。コントローラーボードはアームのベースに取り付けることができます。

リーダーアームについても同じ手順を実行してください。

```bash
lerobot-setup-motors \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM0  # <- paste here the port found at previous step
```

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/hbW6eFYkHTg?si=jKdpTyI8wRC-iHxO" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

</TabItem>

</Tabs>

## 組み立て

:::tip

- SO-ARM101のデュアルアーム組み立てプロセスは、SO-ARM100と同じです。唯一の違いは、SO-ARM101にケーブルクリップが追加されていることと、リーダーアームのジョイントサーボのギア比が異なることです。そのため、SO100とSO101の両方とも、以下の内容を参照して取り付けることができます
- 組み立て前に、モーターモデルと減速比を再度確認してください。SO100を購入した場合は、このステップを無視できます。SO101を購入した場合は、以下の表を確認してF1からF6、L1からL6を区別してください。

:::

  | サーボモデル                            | ギア比 | 対応ジョイント         |
|----------------------------------------|------------|------------------------------|
| ST-3215-C044(7.4V)                            | 1:191      | L1                           |
| ST-3215-C001(7.4V)                       | 1:345      | L2                           |
| ST-3215-C044(7.4V)                           | 1:191      | L3                           |
| ST-3215-C046(7.4V)                           | 1:147      | L4–L6                        |
| ST-3215-C001(7.4V) / C018(12V) / C047(12V)             | 1:345      | F1–F6                        |

:::danger
**SO101 Arm Kit Standard Edition**を購入した場合、すべての電源は5Vです。**SO101 Arm Kit Pro Edition**を購入した場合、リーダーアームは各ステップで5V電源を使用してキャリブレーションと操作を行い、フォロワーアームは各ステップで12V電源を使用してキャリブレーションと操作を行う必要があります。
:::

**リーダーアームの組み立て**

| **ステップ 1** | **ステップ 2** | **ステップ 3** | **ステップ 4** | **ステップ 5** | **ステップ 6** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L1.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L2.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L3.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L4.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L5.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L6.jpg) |
| **ステップ 7** | **ステップ 8** | **ステップ 9** | **ステップ 10** | **ステップ 11** | **ステップ 12** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L7.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L8.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L9.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L10.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L11.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L12.jpg) |
| **ステップ 13** | **ステップ 14** | **ステップ 15** | **ステップ 16** | **ステップ 17** | **ステップ 18** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L13.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L14.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L15.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L16.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L18.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L21.jpg) |
| **ステップ 19** | **ステップ 20** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L22.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L23.jpg) |

**フォロワーアームの組み立て**

:::tip

- フォロワーアームの組み立て手順は、基本的にリーダーアームと同じです。唯一の違いは、ステップ12以降のエンドエフェクター（グリッパーとハンドル）の取り付け方法です。

:::

| **ステップ 1** | **ステップ 2** | **ステップ 3** | **ステップ 4** | **ステップ 5** | **ステップ 6** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F1.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F2.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F3.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F3.5.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F4.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F5.jpg) |
| **ステップ 7** | **ステップ 8** | **ステップ 9** | **ステップ 10** | **ステップ 11** | **ステップ 12** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F7.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F8.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F9.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F11.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F12.jpg) |
| **ステップ 13** | **ステップ 14** | **ステップ 15** | **ステップ 16** | **ステップ 17** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F13.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F14.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F15.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F16.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F17.jpg) |

## キャリブレーション

:::tip
SO100とSO101のコードは互換性があります。SO100のユーザーは、SO101のパラメータとコードを直接利用して操作できます。
:::

:::danger
**SO101 Arm Kit Standard Edition**を購入した場合、すべての電源は5Vです。**SO101 Arm Kit Pro Edition**を購入した場合、リーダーアームは各ステップで5V電源を使用してキャリブレーションと操作を行い、フォロワーアームは各ステップで12V電源を使用してキャリブレーションと操作を行う必要があります。
:::

次に、SO-10xロボットに電源とデータケーブルを接続してキャリブレーションを行い、リーダーアームとフォロワーアームが同じ物理的位置にあるときに同じ位置値を持つようにする必要があります。このキャリブレーションは、1つのSO-10xロボットで訓練されたニューラルネットワークが別のロボットでも動作するようにするために不可欠です。ロボットアームを再キャリブレーションする必要がある場合は、`~/.cache/huggingface/lerobot/calibration/robots`または`~/.cache/huggingface/lerobot/calibration/teleoperators`の下のファイルを削除してから、ロボットアームを再キャリブレーションしてください。そうしないと、エラープロンプトが表示されます。ロボットアームのキャリブレーション情報は、このディレクトリの下のJSONファイルに保存されます。

**フォロワーアームの手動キャリブレーション**

6つのロボットサーボのインターフェースを3ピンケーブルで接続し、シャーシサーボをサーボドライブプレートに接続してから、以下のコマンドまたはAPIの例を実行してロボットアームをキャリブレーションしてください：

***最初にインターフェース権限を付与***

```bash
sudo chmod 666 /dev/ttyACM*
```

***次にフォロワーアームをキャリブレーション***

```python
lerobot-calibrate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \# <- The port of your robot
    --robot.id=my_awesome_follower_arm  # <- Give the robot a unique name
```

以下の動画はキャリブレーションの実行方法を示しています。まず、すべての関節が可動範囲の中央にある位置にロボットを移動させる必要があります。その後、Enterキーを押してから、各関節を可動範囲全体で動かす必要があります。

**リーダーアームの手動キャリブレーション**

リーダーアームをキャリブレーションするために同じ手順を実行し、以下のコマンドまたはAPIの例を実行してください：

```python
lerobot-calibrate \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \# <- The port of your robot
    --teleop.id=my_awesome_leader_arm  # <- Give the robot a unique name
```

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/22n6f5xH9Dk?si=2QTzn1CDbsSv6Y_H" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## テレオペレーション

**シンプルなテレオペレーション**
これでロボットをテレオペレーションする準備が整いました！この簡単なスクリプトを実行してください（カメラには接続せず、表示もしません）：

ロボットに関連付けられたIDは、キャリブレーションファイルを保存するために使用されることに注意してください。同じセットアップを使用してテレオペレーション、記録、評価を行う際は、同じIDを使用することが重要です。

```bash
sudo chmod 666 /dev/ttyACM*
```

```bash
lerobot-teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm
```

テレオペレーションコマンドは自動的に以下を実行します：

1. 不足しているキャリブレーションを特定し、キャリブレーション手順を開始します。
2. ロボットとテレオペレーションデバイスを接続し、テレオペレーションを開始します。

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/hnRwfcyX1ZI?si=RuzYjP_FUTK16lfs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## カメラの追加

<details>
<summary> Orbbec Gemini2 深度カメラを使用する場合 </summary>

<div align="center">
    <img width={800}
    src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/-/0-101090144--orbbec-gemini-2-3d-camera.jpg" />
</div>
<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html" target="_blank" rel="noopener noreferrer" >
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
</a></div>

- 🚀 ステップ1：Orbbec SDK依存環境のインストール

1. `pyorbbec`リポジトリをクローンします

   ```bash
   cd ~/
   git clone https://github.com/orbbec/pyorbbecsdk.git
   ```

2. SDKの対応する**.whlファイル**をダウンロードしてインストールします  
   [pyorbbecsdk Releases](https://github.com/orbbec/pyorbbecsdk/releases)にアクセスし、  
   Pythonバージョンに基づいて選択してインストールしてください。例：

   ```bash
   pip install pyorbbecsdk-x.x.x-cp310-cp310-linux_x86_64.whl
   ```

3. `pyorbbec`ディレクトリで依存関係をインストールします

   ```bash
   cd ~/pyorbbecsdk
   pip install -r requirements.txt
   ```

   `numpy`バージョンを`1.26.0`に強制ダウングレードします

    ```bash
    pip install numpy==1.26.0
    ```

  赤いエラーメッセージは無視できます。

4. Orbbec SDKを`~/lerobot/src/cameras`ディレクトリにクローンします

  ```bash
  cd ~/lerobot/src/cameras
  git clone https://github.com/ZhuYaoHui1998/orbbec.git
  ```

5. utils.pyと**init**.pyを修正します

- `~/lerobot/src/lerobot/cameras`ディレクトリの`utils.py`を見つけ、40行目に以下のコードを追加してください：

```python
elif cfg.type == "orbbec":
            from .orbbec.camera_orbbec import OrbbecCamera

            cameras[key] = OrbbecCamera(cfg)
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/utils.png" />
</div>

- `~/lerobot/src/lerobot/cameras`ディレクトリの`__init__.py`を見つけ、18行目に以下のコードを追加してください：

```python
from .orbbec.configuration_orbbec import OrbbecCameraConfig
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/init.png" />
</div>

- 🚀 ステップ2：関数呼び出しと例

以下のすべての例では、`so101_follower`を実際に使用しているロボットアームのモデル（例：`so100` / `so101`）に置き換えてください。

`focus_area`ハイパーパラメータを追加しました。遠すぎる深度データはロボットアームにとって意味がない（到達や把握ができない物体）ため、`focus_area`未満または超過の深度データは黒で表示されます。デフォルトの`focus_area`は(20, 600)です。  
現在サポートされている解像度は幅：640、高さ：880のみです。

```bash
lerobot-teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ up: {type: orbbec, width: 640, height: 880, fps: 30, focus_area:[60,300]}}" \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/orbbec_result.png" />
</div>

データ収集、トレーニング、評価などの後続タスクについては、通常のRGBコマンドと同じプロセスです。通常のRGBコマンドの関連部分を以下に置き換えるだけです：

```bash
  --robot.cameras="{ up: {type: orbbec, width: 640, height: 880, fps: 30, focus_area:[60,300]}}" \
```

その後、追加の単眼RGBカメラを追加することもできます。

</details>

:::tip
SO100とSO101のコードは互換性があります。SO100のユーザーは、SO101のパラメータとコードを直接利用して操作できます。
:::

カメラをインスタンス化するには、カメラ識別子が必要です。この識別子は、コンピュータを再起動したり、カメラを再接続したりすると変更される可能性があり、この動作は主にオペレーティングシステムに依存します。

システムに接続されているカメラのカメラインデックスを見つけるには、以下のスクリプトを実行してください：

```python
lerobot-find-cameras opencv # or realsense for Intel Realsense cameras
```

ターミナルに以下の情報が出力されます。

```markdown
--- Detected Cameras ---
Camera #0:
  Name: OpenCV Camera @ 0
  Type: OpenCV
  Id: 0
  Backend api: AVFOUNDATION
  Default stream profile:
    Format: 16.0
    Width: 1920
    Height: 1080
    Fps: 15.0
--------------------
(more cameras ...)
```

各カメラで撮影された写真は`outputs/captured_images`ディレクトリで確認できます。

:::warning
macOSでIntel RealSenseカメラを使用する際、このエラーが発生する可能性があります：Error finding RealSense cameras: failed to set power state。これはsudo権限で同じコマンドを実行することで解決できます。なお、macOSでのRealSenseカメラの使用は不安定です。
:::

その後、テレオペレーション中にコンピュータでカメラを表示できるようになります。以下のコードを実行してください。これは最初のデータセットを記録する前にセットアップを準備するのに役立ちます。

```bash
lerobot-teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true
```

より多くのカメラがある場合は、`--robot.cameras`を変更してカメラを追加できます。index_or_pathの形式に注意してください。これは`python -m lerobot.find_cameras opencv`で出力されるカメラIDの最後の桁によって決まります。

:::tip
`fourcc: "MJPG"`形式の画像は圧縮されています。より高い解像度を試すことができ、`YUYV`形式も試すことができます。ただし、後者は画像解像度とFPSを低下させ、ロボットアームの動作にラグを生じさせます。現在、`MJPG`形式では、`1920*1080`の解像度で3台のカメラを`30FPS`を維持しながらサポートできます。とはいえ、同じUSB HUBを介して2台のカメラをコンピュータに接続することは推奨されません。
:::


例えば、サイドカメラを追加したい場合：

```bash
lerobot-teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true
```

:::tip
`fourcc: "MJPG"`形式の画像は圧縮されています。より高い解像度を試すことができ、`YUYV`形式も試すことができます。ただし、後者は画像解像度とFPSを低下させ、ロボットアームの動作にラグを生じさせます。現在、`MJPG`形式では、`1920*1080`の解像度で3台のカメラを`30FPS`を維持しながらサポートできます。とはいえ、同じUSB HUBを介して2台のカメラをコンピュータに接続することは推奨されません。
:::


:::tip
このようなバグが見つかった場合。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/rerun-version.png" />
</div>

rerunバージョンをダウングレードして問題を解決できます。

```bash
pip3 install rerun-sdk==0.23
```

:::

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/EUcXlLlOjGE?si=6ncQ7o5ZFLR4PGTU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## データセットの記録

- データセットをローカルに保存したい場合は、直接実行できます：

```bash
lerobot-record \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true \
    --dataset.repo_id=seeedstudio123/test \
    --dataset.num_episodes=5 \
    --dataset.single_task="Grab the black cube" \
    --dataset.push_to_hub=false \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30 
```

この中で、`repo_id` は慣例的に変更でき、`push_to_hub=false` です。最終的に、データセットはホームフォルダの `~/.cache/huggingface/lerobot` ディレクトリに保存され、前述の `seeedstudio123/test` フォルダが作成されます。

- データセットをアップロードするために Hugging Face hub 機能を使用したい場合で、以前に行ったことがない場合は、[Hugging Face 設定](https://huggingface.co/settings/tokens)から生成できる書き込みアクセストークンを使用してログインしていることを確認してください：

```bash
huggingface-cli login --token ${HUGGINGFACE_TOKEN} --add-to-git-credential
```

これらのコマンドを実行するために、Hugging Face リポジトリ名を変数に保存します：

```bash
HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER
```

5つのエピソードを記録し、データセットをハブにアップロードします：

```bash
lerobot-record \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true \
    --dataset.repo_id=${HF_USER}/record-test \
    --dataset.num_episodes=5 \
    --dataset.single_task="Grab the black cube" \
    --dataset.push_to_hub=true \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30 
```

次のような多くの行が表示されます：

```bash
INFO 2024-08-10 15:02:58 ol_robot.py:219 dt:33.34 (30.0hz) dtRlead: 5.06 (197.5hz) dtWfoll: 0.25 (3963.7hz) dtRfoll: 6.22 (160.7hz) dtRlaptop: 32.57 (30.7hz) dtRphone: 33.84 (29.5hz)
```

**記録機能**

**record** 機能は、ロボット動作中のデータキャプチャと管理のためのツール群を提供します。

**1. データストレージ**

- データは `LeRobotDataset` 形式を使用して保存され、記録中にディスクに保存されます。
- デフォルトでは、記録後にデータセットが Hugging Face ページにプッシュされます。
- アップロードを無効にするには、`--dataset.push_to_hub=False` を使用します

**2. チェックポイントと再開**

- 記録中にチェックポイントが自動的に作成されます。
- 中断後に再開するには、同じコマンドを `--resume=true` で再実行します

⚠️ 重要な注意：再開時は、`--dataset.num_episodes` を記録する追加エピソード数に設定してください（データセット内の目標総エピソード数ではありません）。

- 最初から記録を開始するには、データセットディレクトリを**手動で削除**してください。

**3. 記録パラメータ**

コマンドライン引数を使用してデータ記録のフローを設定します：

| パラメータ | 説明 | デフォルト |
|-----------|-------------|---------|
| --dataset.episode_time_s | データエピソードあたりの持続時間（秒） | 60 |
| --dataset.reset_time_s | 各エピソード後の環境リセット時間（秒） | 60 |
| --dataset.num_episodes | 記録する総エピソード数 | 50 |

**4. 記録中のキーボード制御**

キーボードショートカットを使用してデータ記録フローを制御します：

| キー | アクション |
|-----|--------|
| → (右矢印) | 現在のエピソード/リセットを早期停止し、次に移動。 |
| ← (左矢印) | 現在のエピソードをキャンセルし、再記録。 |
| ESC | セッションを即座に停止し、動画をエンコードし、データセットをアップロード。 |

:::tip

キーボードが動作しない場合は、pynput の別のバージョンをインストールする必要があるかもしれません。

```bash
pip install pynput==1.6.8
```

:::

**データ収集のヒント**

- タスクの提案：異なる場所でオブジェクトを掴み、ビンに配置する。
- スケール：≥50エピソードを記録（場所あたり10エピソード）。
- 一貫性：
  - カメラを固定に保つ。
  - 同一の掴み動作を維持する。
  - 操作されるオブジェクトがカメラフィードで見えることを確認する。
- 進行：
  - バリエーション（新しい場所、技術、カメラ調整）を追加する前に、信頼性のある掴みから始める。
  - 失敗を防ぐために急激な複雑さの増加を避ける。

💡 経験則：カメラ画像だけを見てタスクを自分で実行できるようにする必要があります。

この重要なトピックについてより深く掘り下げたい場合は、良いデータセットとは何かについて書いた[ブログ記事](https://huggingface.co/blog/lerobot-datasets#what-makes-a-good-dataset)をチェックできます。

**トラブルシューティング**

Linux固有の問題：
記録中に右矢印/左矢印/ESCキーが応答しない場合：

- `$DISPLAY` 環境変数が設定されていることを確認してください（[pynput の制限](https://pynput.readthedocs.io/en/latest/limitations.html)を参照）。

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/wc-qh7UFkuQ?si=-eDB73KgUksyJXa-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## データセットの可視化

:::tip
SO100 と SO101 のコードは互換性があります。SO100 のユーザーは SO101 のパラメータとコードを直接利用して操作できます。
:::

`--control.push_to_hub=true` でデータセットをハブにアップロードした場合、以下で与えられるリポジトリIDをコピー＆ペーストして[データセットをオンラインで可視化](https://huggingface.co/spaces/lerobot/visualize_dataset)できます：

```bash
echo ${HF_USER}/so101_test  
```

`--dataset.push_to_hub=false` でアップロードしなかった場合も、以下でローカルで可視化できます：

```bash
lerobot-dataset-viz \
  --repo-id ${HF_USER}/so101_test \
```

`--dataset.push_to_hub=false` でアップロードした場合も、以下でローカルで可視化できます：

```bash
lerobot-dataset-viz \
  --repo-id seeed_123/so101_test \
```

**ここで、`seeed_123` はデータ収集時に定義されたカスタム `repo_id` 名です。**

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/visualize_datasets.png" />
</div>

## エピソードの再生

:::tip
SO100 と SO101 のコードは互換性があります。SO100 のユーザーは SO101 のパラメータとコードを直接利用して操作できます。
:::

便利な機能として `replay` 機能があり、記録したエピソードや外部のデータセットからのエピソードを再生できます。この機能は、ロボットの動作の再現性をテストし、同じモデルのロボット間での転移可能性を評価するのに役立ちます。

以下のコマンドまたは API の例を使用して、ロボットで最初のエピソードを再生できます：

```bash
lerobot-replay \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --dataset.repo_id=${HF_USER}/record-test \
    --dataset.episode=0
```

ロボットは記録した動きと似た動きを再現するはずです。

## 訓練と評価


<details>

<summary>[ACT](https://huggingface.co/docs/lerobot/act) </summary>

[ACT](https://huggingface.co/docs/lerobot/act)を参照

ロボットを制御するポリシーを訓練するには、[lerobot-train](https://github.com/huggingface/lerobot/blob/main/src/lerobot/scripts/train.py) スクリプトを使用します。

**訓練**


```bash
lerobot-train \
  --dataset.repo_id=${HF_USER}/so101_test \
  --policy.type=act \
  --output_dir=outputs/train/act_so101_test \
  --job_name=act_so101_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --steps=300000 
```

**ローカルデータセットで訓練したい場合は、`repo_id` がデータ収集時に使用したものと一致することを確認し、`--policy.push_to_hub=False` を追加してください。**

```bash
lerobot-train \
  --dataset.repo_id=seeedstudio123/test \
  --policy.type=act \
  --output_dir=outputs/train/act_so101_test \
  --job_name=act_so101_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --policy.push_to_hub=false\
  --steps=300000 
```

説明しましょう：

- **データセット指定**：パラメータ `--dataset.repo_id=${HF_USER}/so101_test` を通じてデータセットを提供します。
- **訓練ステップ**：`--steps=300000` を使用して訓練ステップ数を変更します。アルゴリズムはデフォルトで800000ステップですが、タスクの難易度と訓練中の損失を観察することで調整できます。
- **ポリシータイプ**：`policy.type=act` でポリシーを提供します。同様に、[`act`, `diffusion`, `pi0`, `pi0fast`, `pi0fast`, `sac`, `smolvla`] などのポリシー間で切り替えることができ、これにより `configuration_act.py` から設定が読み込まれます。重要なことに、この情報はすでにデータセットに保存されているため、このポリシーはロボット（例：`laptop` と `phone`）のモーター状態、モーターアクション、カメラ数に自動的に適応します。
- **デバイス選択**：Nvidia GPU で訓練しているため `policy.device=cuda` を提供しますが、Apple Silicon で訓練する場合は `policy.device=mps` を使用できます。
- **可視化ツール**：[Weights and Biases](https://docs.wandb.ai/quickstart) を使用して訓練チャートを可視化するために `wandb.enable=true` を提供します。これはオプションですが、使用する場合は `wandb login` を実行してログインしていることを確認してください。


**評価**

:::tip
SO100 と SO101 のコードは互換性があります。SO100 のユーザーは SO101 のパラメータとコードを直接利用して操作できます。
:::

[`lerobot/record.py`](https://github.com/huggingface/lerobot/blob/main/lerobot/record.py) の `record` 機能を使用できますが、入力としてポリシーチェックポイントを使用します。例えば、10の評価エピソードを記録するには次のコマンドを実行します：

```bash
lerobot-record \
  --robot.type=so100_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video10, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: intelrealsense, serial_number_or_name: 233522074606, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
  --robot.id=my_awesome_follower_arm \
  --display_data=false \
  --dataset.repo_id=${HF_USER}/eval_so100 \
  --dataset.single_task="Put lego brick into the transparent box" \
  --policy.path=${HF_USER}/my_policy
```

例えば：

```bash
lerobot-record \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"},   side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
  --robot.id=my_awesome_follower_arm \
  --display_data=false \
  --dataset.repo_id=seeed/eval_test123 \
  --dataset.single_task="Put lego brick into the transparent box" \
  --policy.path=outputs/train/act_so101_test/checkpoints/last/pretrained_model
```

1. `--policy.path` パラメータは、ポリシー訓練結果の重みファイルのパスを示します（例：`outputs/train/act_so101_test/checkpoints/last/pretrained_model`）。モデル訓練結果の重みファイルをHubにアップロードした場合は、モデルリポジトリも使用できます（例：`${HF_USER}/act_so100_test`）。

2. データセット名 `dataset.repo_id` は `eval_` で始まります。この操作により、評価中にビデオとデータが個別に記録され、`eval_` で始まるフォルダに保存されます（例：`seeed/eval_test123`）。

3. 評価フェーズで `File exists: 'home/xxxx/.cache/huggingface/lerobot/xxxxx/seeed/eval_xxxx'` エラーが発生した場合は、まず `eval_` で始まるフォルダを削除してから、プログラムを再実行してください。

4. `mean is infinity. You should either initialize with stats as an argument or use a pretrained model` エラーが発生した場合は、`--robot.cameras` パラメータ内のfrontやsideなどのキーワードが、データセット収集時に使用したものと厳密に一致している必要があることに注意してください。

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/wc-qh7UFkuQ?si=Y2SXU9T0DSmtz4ll" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


</details>


<details>
<summary> SmolVLA </summary>

[SmolVLA](https://huggingface.co/docs/lerobot/smolvla)は、Hugging Faceのロボティクス向け軽量基盤モデルです。LeRobotデータセットでの簡単なファインチューニングを目的として設計されており、開発を加速させます！

**環境のセットアップ**

以下を実行してSmolVLAの依存関係をインストールします：

```bash
pip install -e ".[smolvla]"
```

**データでSmolVLAをファインチューニング**

事前訓練済みの450Mモデル[smolvla_base](https://hf.co/lerobot/smolvla_base)を使用して、あなたのデータでファインチューニングします。20kステップでモデルを訓練するには、単一のA100 GPUで約4時間かかります。パフォーマンスとユースケースに基づいてステップ数を調整してください。

GPUデバイスがない場合は、[Google Colab](https://colab.research.google.com/github/huggingface/notebooks/blob/main/lerobot/training-smolvla.ipynb)のノートブックを使用して訓練できます。

`--dataset.repo_id`を使用してデータセットを訓練スクリプトに渡します。インストールをテストしたい場合は、[SmolVLA論文](https://huggingface.co/papers/2506.01844)用に収集したデータセットの1つを使用する以下のコマンドを実行してください。

```bash
lerobot-train \
  --policy.path=lerobot/smolvla_base \
  --dataset.repo_id=${HF_USER}/mydataset \
  --batch_size=64 \
  --steps=20000 \
  --output_dir=outputs/train/my_smolvla \
  --job_name=my_smolvla_training \
  --policy.device=cuda \
  --wandb.enable=true
```

:::tip
GPUが許可し、読み込み時間が短い限り、小さなバッチサイズから始めて段階的に増やすことができます。
:::

ファインチューニングは芸術です。ファインチューニングオプションの完全な概要については、以下を実行してください：

```bash
lerobot-train --help
```

**ファインチューニングされたモデルの評価とリアルタイム実行**

エピソードを記録する場合と同様に、HuggingFace Hubにログインすることをお勧めします。対応する手順に従ってください：[データセットの記録](https://huggingface.co/docs/lerobot/il_robots)。ログイン後、以下を実行してセットアップで推論を実行できます：

```bash
lerobot-record \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \ # <- Use your port
  --robot.id=my_blue_follower_arm \ # <- Use your robot id
  --robot.cameras="{ front: {type: opencv, index_or_path: 8, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \ # <- Use your cameras
  --dataset.single_task="Grasp a lego block and put it in the bin." \ # <- Use the same task description you used in your dataset recording
  --dataset.repo_id=${HF_USER}/eval_DATASET_NAME_test \  # <- This will be the dataset name on HF Hub
  --dataset.episode_time_s=50 \
  --dataset.num_episodes=10 \
  # <- Teleop optional if you want to teleoperate in between episodes \
  # --teleop.type=so100_leader \
  # --teleop.port=/dev/ttyACM0 \
  # --teleop.id=my_red_leader_arm \
  --policy.path=HF_USER/FINETUNE_MODEL_NAME # <- Use your fine-tuned model
```

評価セットアップに応じて、評価スイート用に記録する期間とエピソード数を設定できます。

</details>

<details>
<summary> LIBERO </summary>

[LIBERO](https://huggingface.co/docs/lerobot/libero)は、生涯ロボット学習を研究するために設計されたベンチマークです。ロボットは工場で一度だけ事前訓練されるのではなく、時間をかけて人間のユーザーと共に学習し適応し続ける必要があるという考えです。この継続的な適応は意思決定における生涯学習（LLDM）と呼ばれ、真にパーソナライズされたヘルパーとなるロボットの構築に向けた重要なステップです。

- 📄 [LIBERO論文](https://arxiv.org/abs/2306.03310)
- 💻 [元のLIBEROリポジトリ](https://github.com/Lifelong-Robot-Learning/LIBERO)

**LIBEROでの評価**

**LeRobot**では、LIBEROをフレームワークに移植し、主に軽量Vision-Language-Actionモデルである[SmolVLA](https://huggingface.co/docs/lerobot/en/smolvla)の**評価**に使用しました。

LIBEROは現在、**マルチ評価対応シミュレーション**の一部となっており、フラグ1つで**単一のタスクスイート**または**複数のスイートを同時に**ベンチマークできます。

LIBEROをインストールするには、LeRobotの公式手順に従った後、`pip install -e ".[libero]"`を実行してください。

***単一スイート評価***

1つのLIBEROスイートでポリシーを評価：

```bash
lerobot-eval \
  --policy.path="your-policy-id" \
  --env.type=libero \
  --env.task=libero_object \
  --eval.batch_size=2 \
  --eval.n_episodes=3
```

- `--env.task`はスイート（`libero_object`、`libero_spatial`など）を選択します。
- `--eval.batch_size`は並列実行する環境数を制御します。
- `--eval.n_episodes`は実行する総エピソード数を設定します。

***マルチスイート評価***

複数のスイートで同時にポリシーをベンチマーク：

```bash
lerobot-eval \
  --policy.path="your-policy-id" \
  --env.type=libero \
  --env.task=libero_object,libero_spatial \
  --eval.batch_size=1 \
  --eval.n_episodes=2
```

- マルチスイート評価には、`--env.task`にカンマ区切りのリストを渡します。

**訓練コマンドの例**

```bash
lerobot-train \
  --policy.type=smolvla \
  --policy.repo_id=${HF_USER}/libero-test \
  --dataset.repo_id=HuggingFaceVLA/libero \
  --env.type=libero \
  --env.task=libero_10 \
  --output_dir=./outputs/ \
  --steps=100000 \
  --batch_size=4 \
  --eval.batch_size=1 \
  --eval.n_episodes=1 \
  --eval_freq=1000 \
```

-----

**レンダリングに関する注意**

LeRobotはシミュレーションにMuJoCoを使用します。訓練または評価の前にレンダリングバックエンドを設定する必要があります：

- `export MUJOCO_GL=egl` → ヘッドレスサーバー用（例：HPC、クラウド）

</details>


<details>
<summary>[Pi0](https://huggingface.co/docs/lerobot/pi0) </summary>

[Pi0](https://huggingface.co/docs/lerobot/pi0)を参照してください

```bash
pip install -e ".[pi]"
```

**訓練**
```bash
lerobot-train \
  --policy.type=pi0 \
  --dataset.repo_id=seeed/eval_test123 \
  --job_name=pi0_training \
  --output_dir=outputs/pi0_training \
  --policy.pretrained_path=lerobot/pi0_base \
  --policy.compile_model=true \
  --policy.gradient_checkpointing=true \
  --policy.dtype=bfloat16 \
  --steps=20000 \
  --policy.device=cuda \
  --batch_size=32 \
  --wandb.enable=false 
```

**評価**

```bash
lerobot-record \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"},   side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30,fourcc: "MJPG"}}" \
  --robot.id=my_awesome_follower_arm \
  --display_data=false \
  --dataset.repo_id=seeed/eval_test123 \
  --dataset.single_task="Put lego brick into the transparent box" \
  --policy.path=outputs/pi0_training/checkpoints/last/pretrained_model
```


</details>


<details>
<summary>[Pi0.5](https://huggingface.co/docs/lerobot/pi05) </summary>

[Pi0.5](https://huggingface.co/docs/lerobot/pi05)を参照してください

```bash
pip install -e ".[pi]"
```

**訓練**
```bash
lerobot-train \
    --dataset.repo_id=seeed/eval_test123 \
    --policy.type=pi05 \
    --output_dir=outputs/pi05_training \
    --job_name=pi05_training \
    --policy.pretrained_path=lerobot/pi05_base \
    --policy.compile_model=true \
    --policy.gradient_checkpointing=true \
    --wandb.enable=false \
    --policy.dtype=bfloat16 \
    --steps=3000 \
    --policy.device=cuda \
    --batch_size=32
```

**評価**

```bash
lerobot-record \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"},   side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30,fourcc: "MJPG"}}" \
  --robot.id=my_awesome_follower_arm \
  --display_data=false \
  --dataset.repo_id=seeed/eval_test123 \
  --dataset.single_task="Put lego brick into the transparent box" \
  --policy.path=outputs/pi05_training/checkpoints/last/pretrained_model
```


</details>



<details>
<summary>[GR00T N1.5](https://huggingface.co/docs/lerobot/groot) </summary>

[GR00T N1.5](https://huggingface.co/docs/lerobot/groot)を参照してください


</details>



以下のエラーが発生した場合：

<div align="center">
    <img width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/stack_bug.png" />
</div>

以下のコマンドを実行して解決してください：

```bash
pip install datasets==2.19
```

トレーニングには数時間かかります。チェックポイントは `outputs/train/act_so100_test/checkpoints` に保存されます。

チェックポイントからトレーニングを再開するには、以下は `act_so101_test` ポリシーの `last` チェックポイントから再開するコマンドの例です：

```bash
lerobot-train \
  --config_path=outputs/train/act_so101_test/checkpoints/last/pretrained_model/train_config.json \
  --resume=true
```

**ポリシーチェックポイントのアップロード**

トレーニングが完了したら、最新のチェックポイントを以下でアップロードします：

```bash
huggingface-cli upload ${HF_USER}/act_so101_test \
  outputs/train/act_so101_test/checkpoints/last/pretrained_model
```

中間チェックポイントも以下でアップロードできます：

```bash
CKPT=010000
huggingface-cli upload ${HF_USER}/act_so101_test${CKPT} \
  outputs/train/act_so101_test/checkpoints/${CKPT}/pretrained_model
```



## FAQ

- このドキュメント/チュートリアルに従っている場合は、推奨されるGitHubリポジトリ `https://github.com/Seeed-Projects/lerobot.git` をgit cloneしてください。このドキュメントで推奨されるリポジトリは検証済みの安定版です。公式のLerobotリポジトリは最新版に継続的に更新されており、異なるデータセットバージョン、異なるコマンドなどの予期しない問題を引き起こす可能性があります。

- サーボIDのキャリブレーション時に以下のエラーが発生した場合：

  ```bash
  `Motor ‘gripper’ was not found, Make sure it is connected`
  ```

  通信ケーブルがサーボに正しく接続されているか、電源が正しい電圧を供給しているかを慎重に確認してください。

- 以下のエラーが発生した場合：

  ```bash
  Could not connect on port "/dev/ttyACM0"
  ```

  `ls /dev/ttyACM*` を実行してACM0が存在することが確認できる場合、シリアルポートの権限を付与し忘れています。ターミナルで `sudo chmod 666 /dev/ttyACM*` を入力して修正してください。

- 以下のエラーが発生した場合：

  ```bash
  No valid stream found in input file. Is -1 of the desired media type?
  ```

  `conda install ffmpeg=7.1.1 -c conda-forge` を使用してffmpeg 7.1.1をインストールしてください。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/No valid stream.png" />
</div>

- 以下のエラーが発生した場合：

  ```bash
  ConnectionError: Failed to sync read 'Present_Position' on ids=[1,2,3,4,5,6] after 1 tries. [TxRxResult] There is no status packet!
  ```

  対応するポートのロボットアームが電源オンになっているか、バスサーボのデータケーブルが緩んでいるか切断されていないかを確認する必要があります。サーボのライトが点灯していない場合、前のサーボのケーブルが緩んでいることを意味します。

- ロボットアームのキャリブレーション時に以下のエラーが発生した場合：

  ```bash
  Magnitude 30841 exceeds 2047 (max for sign_bit_index=11)
  ```

  ロボットアームの電源を切って再起動し、再度キャリブレーションを試してください。この方法は、キャリブレーション中にMAX角度が数万の値に達した場合にも使用できます。これで解決しない場合は、中央値キャリブレーションやID書き込みを含む対応するサーボの再キャリブレーションが必要です。

- 評価フェーズで以下のエラーが発生した場合：

  ```bash
  File exists: 'home/xxxx/.cache/huggingface/lerobot/xxxxx/seeed/eval_xxxx'
  ```

  まず `eval_` で始まるフォルダを削除してから、プログラムを再実行してください。

- 評価フェーズで以下のエラーが発生した場合：

  ```bash
  `mean` is infinity. You should either initialize with `stats` as an argument or use a pretrained model
  ```

  `--robot.cameras` パラメータの「front」や「side」などのキーワードは、データセット収集時に使用したものと厳密に一致している必要があることに注意してください。

- ロボットアームの部品を修理または交換した場合は、`~/.cache/huggingface/lerobot/calibration/robots` または `~/.cache/huggingface/lerobot/calibration/teleoperators` 下のファイルを完全に削除し、ロボットアームを再キャリブレーションしてください。そうしないと、これらのディレクトリのJSONファイルにキャリブレーション情報が保存されているため、エラーメッセージが表示される可能性があります。

- 50セットのデータでACTをトレーニングするには、RTX 3060（8GB）搭載のノートパソコンで約6時間、RTX 4090またはA100 GPUを搭載したコンピュータで約2-3時間かかります。

- データ収集中は、カメラの位置、角度、周囲の照明を安定させてください。カメラに映る不安定な背景や歩行者の量を減らしてください。展開環境の変化が過度になると、ロボットアームが適切に把握できなくなる可能性があります。

- データ収集コマンドでは、`num-episodes` パラメータが十分なデータを収集するように設定されていることを確認してください。途中で手動で一時停止しないでください。データの平均と分散はデータ収集完了後にのみ計算され、これらはトレーニングに必要です。

- プログラムがUSBカメラから画像データを読み取れないと表示される場合は、USBカメラがハブ経由で接続されていないことを確認してください。USBカメラは高速な画像転送速度を確保するため、デバイスに直接接続する必要があります。

- `AttributeError: module 'rerun' has no attribute 'scalar'. Did you mean: 'scalars'?` のようなバグが見つかった場合は、rerunのバージョンをダウングレードして問題を解決できます。

```bash
pip3 install rerun-sdk==0.23
```

:::tip
ソフトウェアの問題や環境依存の問題で解決できない場合は、このチュートリアルの最後のFAQセクションを確認することに加えて、[LeRobotプラットフォーム](https://github.com/huggingface/lerobot)または[LeRobot Discordチャンネル](https://discord.gg/8TnwDdjFGU)に速やかに問題を報告してください。
:::

## 引用

[中文文档](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/)

TheRobotStudio Project: [SO-ARM10x](https://github.com/TheRobotStudio/SO-ARM100)

Huggingface Project: [Lerobot](https://github.com/huggingface/lerobot/tree/main)

Dnsty: [Jetson Containers](https://github.com/dusty-nv/jetson-containers/tree/master/packages/robots/lerobot)

[Jetson AI Lab](https://www.jetson-ai-lab.com/lerobot.html)

[Diffusion Policy](https://diffusion-policy.cs.columbia.edu/)

[ACT or ALOHA](https://tonyzhaozh.github.io/aloha/)

[TDMPC](https://www.nicklashansen.com/td-mpc/)

[VQ-BeT](https://sjlee.cc/vq-bet/)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
