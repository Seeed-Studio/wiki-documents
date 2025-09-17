---
description: このwikiは、SO ARM100の組み立てとデバッグのチュートリアルを提供し、Lerobotフレームワーク内でのデータ収集とトレーニングを実現します。
title: LerobotでSO10xArmロボットアームを使用する方法
keywords:
- Lerobot
- Huggingface
- Arm
- Robotics
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /ja/lerobot_so100m
last_update:
  date: 12/24/2024
  author: ZhuYaoHui
---

# 旧バージョンLerobotでSO-ARM100およびSO-ARM101ロボットアームを使用する方法

:::tip
このチュートリアルリポジトリは、2025年6月5日時点で検証された安定版のLerobotを維持しています。現在、​Hugging Face​はLerobotの​大規模アップグレード​を展開し、多くの新機能を導入しています。最新のチュートリアルを体験したい場合は、[​公式ドキュメント​のガイダンス](https://huggingface.co/docs/lerobot/index)に従ってください。
:::

## はじめに

[SO-10xARM](https://github.com/TheRobotStudio/SO-ARM100)は、[TheRobotStudio](https://www.therobotstudio.com/)によって開始された完全オープンソースのロボットアームプロジェクトです。フォロワーアームとリーダーロボットアームを含み、詳細な3Dプリントファイルと操作ガイドも提供しています。[LeRobot](https://github.com/huggingface/lerobot/tree/main)は、PyTorchで実世界のロボティクス向けのモデル、データセット、ツールを提供することに取り組んでいます。その目的は、ロボティクスの参入障壁を下げ、誰もがデータセットと事前訓練済みモデルの共有に貢献し、恩恵を受けることを可能にすることです。LeRobotは、実世界での応用に検証された最先端の方法論を統合し、模倣学習を中心としています。事前訓練済みモデル、人間が収集したデモンストレーションを特徴とするデータセット、シミュレーション環境のスイートを提供し、ユーザーがロボットの組み立ての必要なしに開始できるようにしています。今後数週間で、現在利用可能な最もコスト効率的で有能なロボットでの実世界ロボティクスのサポートを拡張する意図があります。

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/sD34HnAkGNc?si=hqKd_sH5Oc9sdcwd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## プロジェクト紹介

SO-ARM10xとreComputer Jetson AIインテリジェントロボットキットは、高精度ロボットアーム制御と強力なAIコンピューティングプラットフォームをシームレスに組み合わせ、包括的なロボット開発ソリューションを提供します。このキットは、Jetson OrinまたはAGX Orinプラットフォームをベースとし、SO-ARM10xロボットアームとLeRobot AIフレームワークを組み合わせて、教育、研究、産業オートメーションなどの複数のシナリオに適用可能なインテリジェントロボットシステムをユーザーに提供します。
このwikiは、SO ARM10xの組み立てとデバッグのチュートリアルを提供し、Lerobotフレームワーク内でのデータ収集とトレーニングを実現します。

  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.png" />
  </div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
</a></div>

## 主な機能

1. **オープンソースで低コスト**: [TheRobotStudio](https://github.com/TheRobotStudio/SO-ARM100)によるオープンソースで低コストなロボットアームソリューションです
2. **LeRobotとの統合**: [LeRobotプラットフォーム](https://github.com/huggingface/lerobot)との統合を目的として設計されています
3. **豊富な学習リソース**: 組み立てとキャリブレーションガイド、テスト、データ収集、トレーニング、デプロイメントのチュートリアルなど、包括的なオープンソース学習リソースを提供し、ユーザーが迅速に開始してロボットアプリケーションを開発できるよう支援します。
4. **Nvidiaとの互換性**: このアームキットをreComputer Mini J4012 Orin NX 16 GBと組み合わせてデプロイできます。
5. **マルチシーンアプリケーション**: 教育、科学研究、自動化生産、ロボティクスなどの分野に適用可能で、様々な複雑なタスクにおいて効率的で精密なロボット操作の実現をユーザーに支援します。

## 新機能：

- 配線の最適化: SO-ARM100と比較して、SO-ARM101は配線が改良され、以前にジョイント3で見られた接続切断の問題を防ぎます。新しい配線設計により、ジョイントの可動範囲も制限されなくなりました。
- リーダーアームの異なるギア比: リーダーアームは最適化されたギア比のモーターを使用するようになり、性能が向上し、外部ギアボックスが不要になりました。
- 新機能サポート: リーダーアームがフォロワーアームをリアルタイムで追従できるようになりました。これは、人間がロボットの動作に介入して修正できる今後の学習ポリシーにとって重要です。

:::caution

Seeed Studioはハードウェア自体の品質についてのみ責任を負います。チュートリアルは公式ドキュメントに厳密に従って更新されます。解決できないソフトウェアの問題や環境依存の問題が発生した場合は、このチュートリアルの最後にあるFAQセクションを確認することに加えて、[LeRobotプラットフォーム](https://github.com/huggingface/lerobot)または[LeRobot Discordチャンネル](https://discord.gg/8TnwDdjFGU)に速やかに問題を報告してください。

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
      <th><a href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html" target="_blank">Arm Kit</a></th>
      <th><a href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit-Pro-p-6343.html" target="_blank">Arm Kit Pro</a></th>
      <th><a href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html" target="_blank">Arm Kit</a></th>
      <th><a href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit-Pro-p-6343.html" target="_blank">Arm Kit Pro</a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>リーダーアーム</td>
      <td rowSpan="2">全ジョイントに1:345ギア比の12x ST-3215- C001 (7.4V) モーター</td>
      <td rowSpan="2">全ジョイントに1:345ギア比の12x ST-3215-C018/ST-3215-C047 (12V) モーター</td>
      <td colSpan="2">
        ジョイント2のみに1:345ギア比の1x ST-3215- C001 (7.4V) モーター<br />
        ジョイント1と3に1:191ギア比の2x ST-3215-C044 (7.4V) モーター<br />
        ジョイント4、5、グリッパー（ジョイント6）に1:147ギア比の3x ST-3215-C046 (7.4V) モーター
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
        5.5 mm × 2.1 mm DC 12 V 2 A (フォロワーアーム)<br />
        5.5 mm × 2.1 mm DC 5 V 4 A (リーダーアーム)
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

Arm Kitバージョンを購入した場合、両方の電源は5Vです。Arm Kit Proバージョンを購入した場合は、Leaderロボットアームの校正とすべてのステップに5V電源を使用し、Followerロボットアームの校正とすべてのステップに12V電源を使用してください。

:::

## 部品表(BOM)

| 部品 | 数量 | 含まれる|
|--|--|--|
|  サーボモーター | 12 | ✅ |
| モーター制御ボード | 2 | ✅ |
| USB-Cケーブル 2本 | 1 | ✅ |
| 電源2 | 2 | ✅ |
| テーブルクランプ| 4 | ✅ |
| アームの3Dプリント部品 | 1 | オプション |

## 初期システム環境

**Ubuntu x86の場合:**

- Ubuntu 22.04  
- CUDA 12+  
- Python 3.10  
- Torch 2.6  

**Jetson Orinの場合:**

- Jetson JetPack 6.2  
- Python 3.10  
- Torch 2.6  

## 目次

  [A. 3Dプリンティングガイド](https://wiki.seeedstudio.com/lerobot_so100m/#install-lerobot)

  [B. LeRobotのインストール](https://wiki.seeedstudio.com/lerobot_so100m/#install-lerobot)

  [C. モーターの設定](https://wiki.seeedstudio.com/lerobot_so100m/#configure-the-motors)

  [D. 組み立て](https://wiki.seeedstudio.com/lerobot_so100m/#assembly)

  [E. キャリブレーション](https://wiki.seeedstudio.com/lerobot_so100m/#calibrate)

  [F. テレオペレーション](https://wiki.seeedstudio.com/lerobot_so100m/#teleoperate)

  [G. カメラの追加](https://wiki.seeedstudio.com/lerobot_so100m/#add-cameras)

  [H. データセットの記録](https://wiki.seeedstudio.com/lerobot_so100m/#record-the-dataset)

  [I. データセットの可視化](https://wiki.seeedstudio.com/lerobot_so100m/#visualize-the-dataset)

  [J. エピソードの再生](https://wiki.seeedstudio.com/lerobot_so100m/#replay-an-episode)

  [K. ポリシーの訓練](https://wiki.seeedstudio.com/lerobot_so100m/#train-a-policy)

  [L. ポリシーの評価](https://wiki.seeedstudio.com/lerobot_so100m/#evaluate-your-policy)

## 3Dプリンティングガイド

:::caution
SO101の公式アップデートに伴い、SO100は公式によりサポートが終了し、ソースファイルが削除される予定ですが、ソースファイルは引き続き当社の[Makerworld](https://makerworld.com/zh/models/908660)で見つけることができます。ただし、以前にSO100を購入されたユーザーの場合、チュートリアルとインストール方法は引き続き互換性があります。SO101のプリントはSO100のモーターキットインストールと完全に互換性があります。
:::

### ステップ1: プリンターの選択

提供されるSTLファイルは、多くのFDMプリンターで印刷可能です。以下はテスト済みで推奨される設定ですが、他の設定でも動作する可能性があります。

- 材料: PLA+
- ノズル径と精度: 0.4mmノズル径で0.2mmレイヤー高さ、または0.6mmノズルで0.4mmレイヤー高さ。
- 充填密度: 15%  

### ステップ2: プリンターのセットアップ

- プリンターが校正され、プリンター固有の指示に従ってベッドレベルが正しく設定されていることを確認してください。
- プリントベッドを清掃し、ほこりや油脂がないことを確認してください。水やその他の液体でベッドを清掃する場合は、ベッドを乾燥させてください。
- プリンターが推奨する場合は、標準的なグルースティックを使用し、ベッドのプリント領域全体に薄く均等にグルーを塗布してください。塊や不均等な塗布は避けてください。
- プリンター固有の指示に従ってプリンターフィラメントをロードしてください。
- プリンター設定が上記の推奨設定と一致することを確認してください（ほとんどのプリンターには複数の設定があるため、最も近い設定を選択してください）。
- 全体的にサポートを設定しますが、水平面に対して45度を超える傾斜は無視してください。
- 水平軸を持つネジ穴にはサポートがないようにしてください。

### ステップ3: パーツの印刷

リーダーまたはフォロワーのすべてのパーツは、簡単な3D印刷のために単一ファイルに含まれており、サポートを最小限に抑えるためにz軸上向きに正しく配向されています。

- 220mmx220mmのプリンターベッドサイズ（Enderなど）の場合、以下のファイルを印刷してください:
  - [フォロワー](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Follower/Ender_Follower_SO101.stl)
  - [リーダー](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Leader/Ender_Leader_SO101.stl)

- 205mm x 250mmのプリンターベッドサイズ（Prusa/Upなど）の場合:
  - [フォロワー](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Follower/Prusa_Follower_SO101.stl)
  - [リーダー](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Leader/Prusa_Leader_SO101.stl)

## LeRobotのインストール

pytorchやtorchvisionなどの環境は、お使いのCUDAに基づいてインストールする必要があります。

1. Minicondaのインストール:
Jetsonの場合:

```bash
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh
chmod +x Miniconda3-latest-Linux-aarch64.sh
./Miniconda3-latest-Linux-aarch64.sh
source ~/.bashrc
```

または、X86 Ubuntu 22.04の場合：

```bash
mkdir -p ~/miniconda3
cd miniconda3
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
rm ~/miniconda3/miniconda.sh
source ~/miniconda3/bin/activate
conda init --all
```

2. Create and activate a fresh conda environment for lerobot

```bash
conda create -y -n lerobot python=3.10 && conda activate lerobot
```

3. Lerobotをクローンする：

```bash
git clone https://github.com/ZhuYaoHui1998/lerobot.git ~/lerobot
```

**私たちはOrbbec Gemini2深度カメラを適応させ、単一の深度カメラが2つのRGBカメラよりも優れた性能を発揮することを発見しました。このカメラを使用している場合は、変換リポジトリブランチをOrbbecにクローンし、以下の手順に従ってカメラを設定してください。**  

```bash  
cd ~/lerobot  
git checkout orbbec  
```  

**RGBのみを使用している場合は、ブランチを切り替えないでください。そうしないと依存関係に関連するエラーが発生する可能性があります。すでに`orbbec`に切り替えており、元のバージョンに戻したい場合：**  

```bash  
cd ~/lerobot  
git checkout main  
```

4. minicondaを使用する場合は、環境にffmpegをインストールしてください：

```bash
conda install ffmpeg -c conda-forge
```

:::tip
これは通常、libsvtav1エンコーダーでコンパイルされたあなたのプラットフォーム用のffmpeg 7.Xをインストールします。libsvtav1がサポートされていない場合（ffmpeg -encodersでサポートされているエンコーダーを確認）、以下の方法があります：

- [任意のプラットフォーム] 以下を使用してffmpeg 7.Xを明示的にインストール：

```bash
conda install ffmpeg=7.1.1 -c conda-forge
```

- [Linuxのみ] ffmpegのビルド依存関係をインストールし、libsvtav1を使用してffmpegをソースからコンパイルし、`which ffmpeg`でインストールに対応するffmpegバイナリを使用していることを確認してください。

:::

5. feetechモーター用の依存関係を含むLeRobotをインストールします：

```bash
cd ~/lerobot && pip install -e ".[feetech]"
```

6. (この手順はX86 Ubuntuコンピュータ側ではスキップできます。) Jetson Jetpackデバイスの場合（この手順を実行する前に、手順5から[Pytorch-gpuとTorchvision](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson)をインストールしていることを確認してください）：

```bash
conda install -y -c conda-forge "opencv>=4.10.0.84"  # Install OpenCV and other dependencies through conda, this step is only for Jetson Jetpack 6.0+
conda remove opencv   # Uninstall OpenCV 
pip3 install opencv-python==4.10.0.84  # Then install opencv-python via pip3
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
pip3 install numpy==1.26.0  # This should match torchvision
```

7. PytorchとTorchvisionの確認

pipを使用してlerobotの環境をインストールすると、元のPytorchとTorchvisionがアンインストールされ、PytorchとTorchvisionのCPU版がインストールされるため、Pythonで確認を行う必要があります。

```python
import torch
print(torch.cuda.is_available())
```

印刷結果がFalseの場合、[公式ウェブサイトのチュートリアル](https://pytorch.org/index.html)に従ってPytorchとTorchvisionを再インストールする必要があります。

Jetsonデバイスを使用している場合は、[このチュートリアル](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson)に従ってPytorchとTorchvisionをインストールしてください。

## モーターの設定

:::danger  
公式コードとサーボメーカーのファームウェア更新により、2025年6月30日以前のユーザーは、まず[Feetech公式ホストコンピューターソフトウェア](https://gitee.com/ftservo/fddebug/blob/master/FD1.9.8.5(250706).7z)（Windowsシステム用）をダウンロードしてください。すべてのサーボに電源を入れて接続し、対応する`Port Number` -> `Baudrate 1000000` -> `Open` -> `Search`を選択します。すべてのサーボを検出した後、`Upgrade` -> `Online Detection` -> `Upgrade Firmware`をクリックして、ファームウェアバージョンが3.9から3.10に更新されていることを確認し、後続の問題を回避してください。
:::

:::note
ファームウェア更新に失敗した後にサーボが再認識されない場合は、検出可能な別のサーボを直接ホストコンピューターに接続し、モータースキャンとファームウェアオンライン検出を実行できます。現在のウィンドウを開いたままにし、すぐに現在のサーボを切断して、認識されないサーボに接続し直してください。1秒以内に「オンラインアップグレード」をクリックしてください。失敗した場合は、複数回再試行できます。
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="SO101" label="SO101">

SO-ARM101のサーボキャリブレーションと初期化プロセスは、方法とコードの両方においてSO-ARM100と同じです。ただし、SO-ARM101リーダーアームの最初の3つの関節のギア比はSO-ARM100のものと異なるため、注意深く区別してキャリブレーションすることが重要です。

モーターを設定するには、リーダーアーム用に1つのバスサーボアダプターと6つのモーターを指定し、同様にフォロワーアーム用に他のバスサーボアダプターと6つのモーターを指定します。それらにラベルを付け、各モーターがフォロワーF用かリーダーL用か、そして1から6までのIDを書き込むと便利です。**フォロワーアーム**の関節1から6を表すために**F1–F6**を使用し、**リーダーアーム**の関節1から6を表すために**L1–L6**を使用します。対応するサーボモデル、関節の割り当て、およびギア比の詳細は以下の通りです：

| サーボモデル                            | ギア比 | 対応する関節         |
|----------------------------------------|------------|------------------------------|
| ST-3215-C044(7.4V)                            | 1:191      | L1                           |
| ST-3215-C001(7.4V)                       | 1:345      | L2                           |
| ST-3215-C044(7.4V)                           | 1:191      | L3                           |
| ST-3215-C046(7.4V)                           | 1:147      | L4–L6                        |
| ST-3215-C001(7.4V) / C018(12V) / C047(12V)             | 1:345      | F1–F6                        |

:::danger
モーターバスに5Vまたは12Vの電源を接続してください。STS3215 7.4Vモーター用には5V、STS3215 12Vモーター用には12Vを使用します。リーダーアームは常に7.4Vモーターを使用するため、12Vと7.4Vモーターを混在させている場合は、正しい電源を接続するよう注意してください。間違った電源を接続するとモーターを破損する可能性があります！次に、USBを介してモーターバスをコンピューターに接続します。USBは電力を供給しないため、電源とUSBの両方を接続する必要があることに注意してください。
:::

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/all_motos.png" />
</div>

**アームに関連するUSBポートを見つける**
各アームの正しいポートを見つけるには、ユーティリティスクリプトを2回実行します：

```bash
python lerobot/scripts/find_motors_bus_port.py
```

リーダーアームのポートを識別する際の出力例（例：Macでは `/dev/tty.usbmodem575E0031751`、Linuxでは `/dev/ttyACM0` の可能性）：

フォロワーアームのポートを識別する際の出力例（例：`/dev/tty.usbmodem575E0032081`、またはLinuxでは `/dev/ttyACM1` の可能性）：

トラブルシューティング：Linuxでは、以下を実行してUSBポートへのアクセス権限を付与する必要がある場合があります：

```bash
sudo chmod 666 /dev/ttyACM0
sudo chmod 666 /dev/ttyACM1
```

**モーターを設定する**

:::danger
Leaderモーター（ST-3215-C046、C044、001）のキャリブレーションには5V電源を使用してください。
:::

| **Leader Arm Joint 6 キャリブレーション** | **Leader Arm Joint 5 キャリブレーション** | **Leader Arm Joint 4 キャリブレーション** | **Leader Arm Joint 3 キャリブレーション** | **Leader Arm Joint 2 キャリブレーション** | **Leader Arm Joint 1 キャリブレーション** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L5.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L4.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L3.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L2.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L1.jpg) |

:::danger
Arm Kit版（ST-3215-C001）を購入した場合は、5V電源を使用してください。Arm Kit Pro版を購入した場合は、12V電源を使用してサーボを校正してください（ST-3215-C047/ST-3215-C018）。
:::

| **フォロワーアーム関節6校正** | **フォロワーアーム関節5校正** | **フォロワーアーム関節4校正** | **フォロワーアーム関節3校正** | **フォロワーアーム関節2校正** | **フォロワーアーム関節1校正** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F5.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F4.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F3.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F2.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F1.jpg) |

SO-ARM100サーボ校正ビデオも参照できますが、サーボ関節IDとギア比がSO-ARM101のものと厳密に対応していることを確認してください。

最初のモーターを接続し、このスクリプトを実行してIDを1に設定します。また、現在位置を2048に設定するため、モーターが回転することが予想されます：

```bash
python lerobot/scripts/configure_motor.py \
  --port /dev/ttyACM0 \
  --brand feetech \
  --model sts3215 \
  --baudrate 1000000 \
  --ID 1
```

注意：これらのモーターは現在制限があります。0から4096の値のみを取ることができ、これは1回転に相当します。それ以上回転することはできません。2048はこの範囲の中央にあるため、-2048ステップ（反時計回りに180度）を取って最大範囲に到達するか、+2048ステップ（時計回りに180度）を取って最大範囲に到達することができます。設定ステップでは、ホーミングオフセットも0に設定されるため、アームを誤って組み立てた場合でも、常にホーミングオフセットを更新して±2048ステップ（±180度）までのシフトを考慮することができます。

次に、モーターを取り外し、2番目のモーターを接続してIDを2に設定します。

```bash
python lerobot/scripts/configure_motor.py \
  --port /dev/ttyACM0 \
  --brand feetech \
  --model sts3215 \
  --baudrate 1000000 \
  --ID 2
```

ID 6まですべてのモーターに対してこのプロセスを繰り返してください。リーダーアームの6つのモーターについても同様に行ってください。
</TabItem>

<TabItem value="SO100" label="SO100">

リーダーアーム用に1つのバスサーボアダプターと6つのモーターを指定し、同様にフォロワーアーム用にもう1つのバスサーボアダプターと6つのモーターを指定してください。それらにラベルを付けて、各モーターがフォロワーF用かリーダーL用か、そして1から6までのIDを書いておくと便利です（F1...F6とL1...L6）。

以下のスクリプトの使用方法を説明している[組み立て動画](https://www.youtube.com/watch?v=FioA2oeFZ5I)のステップ1に従ってください。

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/FioA2oeFZ5I?si=GjudmAovwF_X5m2f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

**アームに関連するUSBポートを見つける**
各アームの正しいポートを見つけるために、ユーティリティスクリプトを2回実行してください：

```bash
python lerobot/scripts/find_motors_bus_port.py
```

リーダーアームのポートを識別する際の出力例（例：Macでは `/dev/tty.usbmodem575E0031751`、Linuxでは `/dev/ttyACM0` の可能性）：

フォロワーアームのポートを識別する際の出力例（例：`/dev/tty.usbmodem575E0032081`、またはLinuxでは `/dev/ttyACM1` の可能性）：

トラブルシューティング：Linuxでは、以下を実行してUSBポートへのアクセス権限を付与する必要がある場合があります：

```bash
sudo chmod 666 /dev/ttyACM0
sudo chmod 666 /dev/ttyACM1
```

**モーターを設定する**

最初のモーターを接続し、このスクリプトを実行してIDを1に設定します。また、現在位置を2048に設定するため、モーターが回転することが予想されます：

```bash
python lerobot/scripts/configure_motor.py \
  --port /dev/ttyACM0 \
  --brand feetech \
  --model sts3215 \
  --baudrate 1000000 \
  --ID 1
```

:::note
注意：これらのモーターは現在制限があります。0から4096の値のみを取ることができ、これは1回転に相当します。それ以上回転することはできません。2048はこの範囲の中間にあるため、-2048ステップ（反時計回りに180度）を取って最大範囲に到達するか、+2048ステップ（時計回りに180度）を取って最大範囲に到達することができます。設定ステップでは、ホーミングオフセットも0に設定されるため、アームを誤って組み立てた場合でも、常にホーミングオフセットを更新して±2048ステップ（±180度）までのシフトを考慮することができます。
:::

次に、モーターのプラグを抜いて2番目のモーターを接続し、そのIDを2に設定します。

```bash
python lerobot/scripts/configure_motor.py \
  --port /dev/ttyACM0 \
  --brand feetech \
  --model sts3215 \
  --baudrate 1000000 \
  --ID 2
```

ID 6まですべてのモーターに対してこのプロセスを繰り返してください。リーダーアームの6つのモーターについても同様に行ってください。
</TabItem>
</Tabs>

## 組み立て

:::tip

- SO-ARM101のデュアルアーム組み立てプロセスは、SO-ARM100と同じです。唯一の違いは、SO-ARM101にケーブルクリップが追加されていることと、リーダーアームの関節サーボのギア比が異なることです。そのため、SO100とSO101の両方とも、以下の内容を参照して取り付けることができます
- サーボを校正した後、ネジを締める前にサーボを回転させないでください。3Dプリント部品の向きが画像の参照方向と一致し、モーターが中央位置にあることを確認してください。

- 組み立て前に、モーターモデルと減速比を再度確認してください。SO100を購入した場合は、このステップを無視できます。SO101を購入した場合は、以下の表を確認してF1からF6、L1からL6を区別してください。

:::

  | サーボモデル                            | ギア比 | 対応する関節         |
|----------------------------------------|------------|------------------------------|
| ST-3215-C044(7.4V)                            | 1:191      | L1                           |
| ST-3215-C001(7.4V)                       | 1:345      | L2                           |
| ST-3215-C044(7.4V)                           | 1:191      | L3                           |
| ST-3215-C046(7.4V)                           | 1:147      | L4–L6                        |
| ST-3215-C001(7.4V) / C018(12V) / C047(12V)             | 1:345      | F1–F6                        |

:::danger
**SO101 Arm Kit Standard Edition**を購入した場合、すべての電源は5Vです。**SO101 Arm Kit Pro Edition**を購入した場合、リーダーアームはすべてのステップで5V電源を使用して校正・操作し、フォロワーアームはすべてのステップで12V電源を使用して校正・操作する必要があります。
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

**Follower Armの組み立て**

:::tip

- Follower Armの組み立て手順は、基本的にLeader Armと同じです。唯一の違いは、ステップ12以降のエンドエフェクター（グリッパーとハンドル）の取り付け方法にあります。

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
**SO101 Arm Kit Standard Edition**を購入した場合、すべての電源は5Vです。**SO101 Arm Kit Pro Edition**を購入した場合、Leader Armは5V電源を使用して各ステップでキャリブレーションと操作を行い、Follower Armは12V電源を使用して各ステップでキャリブレーションと操作を行う必要があります。
:::

次に、SO-10xロボットに電源とデータケーブルを接続してキャリブレーションを行い、リーダーアームとフォロワーアームが同じ物理的位置にあるときに同じ位置値を持つようにする必要があります。このキャリブレーションは、1つのSO-10xロボットで訓練されたニューラルネットワークが別のロボットでも動作するようにするために不可欠です。ロボットアームを再キャリブレーションする必要がある場合は、`~/lerobot/.cache/huggingface/calibration/so101`フォルダを削除してください。

**フォロワーアームの手動キャリブレーション**

重要：ポートを取得したら、[SO101RobotConfig](https://github.com/huggingface/lerobot/blob/main/lerobot/common/robot_devices/robots/configs.py)（`lerobot/lerobot/common/robot_devices/robots/configs.py`）のポートデフォルト値を更新してください。以下のようなものが見つかります：

```python
@RobotConfig.register_subclass("so101")
@dataclass
class So101RobotConfig(ManipulatorRobotConfig):
    calibration_dir: str = ".cache/calibration/so101"
    # `max_relative_target` limits the magnitude of the relative positional target vector for safety purposes.
    # Set this to a positive scalar to have the same value for all motors, or a list that is the same length as
    # the number of motors in your follower arms.
    max_relative_target: int | None = None

    leader_arms: dict[str, MotorsBusConfig] = field(
        default_factory=lambda: {
            "main": FeetechMotorsBusConfig(
                port="/dev/ttyACM0",  <-- UPDATE HERE
                motors={
                    # name: (index, model)
                    "shoulder_pan": [1, "sts3215"],
                    "shoulder_lift": [2, "sts3215"],
                    "elbow_flex": [3, "sts3215"],
                    "wrist_flex": [4, "sts3215"],
                    "wrist_roll": [5, "sts3215"],
                    "gripper": [6, "sts3215"],
                },
            ),
        }
    )

    follower_arms: dict[str, MotorsBusConfig] = field(
        default_factory=lambda: {
            "main": FeetechMotorsBusConfig(
                port="/dev//dev/ttyACM1",  <-- UPDATE HERE
                motors={
                    # name: (index, model)
                    "shoulder_pan": [1, "sts3215"],
                    "shoulder_lift": [2, "sts3215"],
                    "elbow_flex": [3, "sts3215"],
                    "wrist_flex": [4, "sts3215"],
                    "wrist_roll": [5, "sts3215"],
                    "gripper": [6, "sts3215"],
                },
            ),
        }
    )
```

<details>

<summary> デュアルアーム遠隔操作（オプション） </summary>

デュアルアーム遠隔操作を実装したい場合、2つのリーダーロボットアームと2つのフォロワーロボットアームが必要になります。そのため、`leader_arms dick`と`follower_arms dick`にロボットアームのクラス名と対応するポート番号を追加する必要があります。例えば：

```python
@RobotConfig.register_subclass("so101")
@dataclass
class So101RobotConfig(ManipulatorRobotConfig):
    calibration_dir: str = ".cache/calibration/so101"
    # `max_relative_target` limits the magnitude of the relative positional target vector for safety purposes.
    # Set this to a positive scalar to have the same value for all motors, or a list that is the same length as
    # the number of motors in your follower arms.
    max_relative_target: int | None = None

    leader_arms: dict[str, MotorsBusConfig] = field(
        default_factory=lambda: {
            "left": FeetechMotorsBusConfig(
                port="/dev/ttyACM0",  <-- UPDATE HERE
                motors={
                    # name: (index, model)
                    "shoulder_pan": [1, "sts3215"],
                    "shoulder_lift": [2, "sts3215"],
                    "elbow_flex": [3, "sts3215"],
                    "wrist_flex": [4, "sts3215"],
                    "wrist_roll": [5, "sts3215"],
                    "gripper": [6, "sts3215"],
                },
            ),
            "right": FeetechMotorsBusConfig(
                port="/dev/ttyACM1",  <-- UPDATE HERE
                motors={
                    # name: (index, model)
                    "shoulder_pan": [1, "sts3215"],
                    "shoulder_lift": [2, "sts3215"],
                    "elbow_flex": [3, "sts3215"],
                    "wrist_flex": [4, "sts3215"],
                    "wrist_roll": [5, "sts3215"],
                    "gripper": [6, "sts3215"],
                },
            ),
        }
    )

    follower_arms: dict[str, MotorsBusConfig] = field(
        default_factory=lambda: {
            "left": FeetechMotorsBusConfig(
                port="/dev//dev/ttyACM2",  <-- UPDATE HERE
                motors={
                    # name: (index, model)
                    "shoulder_pan": [1, "sts3215"],
                    "shoulder_lift": [2, "sts3215"],
                    "elbow_flex": [3, "sts3215"],
                    "wrist_flex": [4, "sts3215"],
                    "wrist_roll": [5, "sts3215"],
                    "gripper": [6, "sts3215"],
                },
            ),
            "right": FeetechMotorsBusConfig(
                port="/dev//dev/ttyACM3",  <-- UPDATE HERE
                motors={
                    # name: (index, model)
                    "shoulder_pan": [1, "sts3215"],
                    "shoulder_lift": [2, "sts3215"],
                    "elbow_flex": [3, "sts3215"],
                    "wrist_flex": [4, "sts3215"],
                    "wrist_roll": [5, "sts3215"],
                    "gripper": [6, "sts3215"],
                },
            ),
        }
    )

```

:::caution
デュアルアームの左右の名前を正しく一致させ、デバイス上の各ロボットアームのシリアルポート番号が正しく割り当てられていることを確認する必要があります。
:::

次のステップでは、ロボットアームをキャリブレーションする際に、4つのアーム全てを個別にキャリブレーションする必要があります。コマンドは以下の通りです：

```bash
sudo chmod 666 /dev/ttyACM*
```

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=so101 \
  --robot.cameras='{}' \
  --control.type=calibrate \
  --control.arms='["left_follower"]'
  #  --control.arms='["right_follower"]'
  #  --control.arms='["left_leader"]'
  #  --control.arms='["right_leader"]'
```

キャリブレーションが完了すると、.cache/calibration/so101 ディレクトリで結果を確認できます。

```bash
`-- calibration
    `-- so101
        |-- left_follower.json
        |-- left_leader.json
        |-- right_follower.json
        `-- right_leader.json
```

後続のステップは、シングルアーム設定と同じです。

</details>

```bash
sudo chmod 666 /dev/ttyACM*
```

**フォロワーアームの手動キャリブレーション**

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=so101 \
  --robot.cameras='{}' \
  --control.type=calibrate \
  --control.arms='["main_follower"]'
```

**リーダーアームの手動キャリブレーション**

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=so101 \
  --robot.cameras='{}' \
  --control.type=calibrate \
  --control.arms='["main_leader"]'
```

| **フォロワー中間位置** | **フォロワーゼロ位置** | **フォロワー回転位置** | **フォロワー休止位置** |
|:---------:|:---------:|:---------:|:---------:|
| ![fig7](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/follower_middle.webp) | ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/follower_zero.webp) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/follower_rotated.webp) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/follower_rest.webp) |
| **リーダー中間位置** | **リーダーゼロ位置** | **リーダー回転位置** | **リーダー休止位置** |
| ![fig8](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/leader_middle.webp) | ![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/leader_zero.webp) | ![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/leader_rotated.webp) | ![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/leader_rest.webp) |

## テレオペレート

**シンプルなテレオペ**
これでロボットをテレオペレートする準備が整いました！この簡単なスクリプトを実行してください（カメラに接続して表示することはありません）：

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=so101 \
  --robot.cameras='{}' \
  --control.type=teleoperate
```

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/hnRwfcyX1ZI?si=RuzYjP_FUTK16lfs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## カメラの追加

:::tip
SO100とSO101のコードは互換性があります。SO100のユーザーは、SO101のパラメータとコードを直接利用して操作できます。
:::

2台のUSBカメラを挿入した後、以下のスクリプトを実行してカメラのポート番号を確認してください。カメラはUSBハブに接続してはならず、デバイスに直接接続する必要があることを覚えておくことが重要です。USBハブの低速度により、画像データの読み取りができなくなる可能性があります。

```bash
python lerobot/common/robot_devices/cameras/opencv.py \
    --images-dir outputs/images_from_opencv_cameras
```

ターミナルには以下の情報が出力されます。

```markdown
Mac or X86 Ubuntu detected. Finding available camera indices through scanning all indices from 0 to 60
[...]
Camera found at index 2
Camera found at index 4
[...]
Connecting cameras
OpenCVCamera(2, fps=30.0, width=640, height=480, color_mode=rgb)
OpenCVCamera(4, fps=30.0, width=640, height=480, color_mode=rgb)
Saving images to outputs/images_from_opencv_cameras
Frame: 0000 Latency (ms): 39.52
[...]
Frame: 0046 Latency (ms): 40.07
Images have been saved to outputs/images_from_opencv_cameras
```

`outputs/images_from_opencv_cameras` ディレクトリで各カメラが撮影した画像を確認し、異なる位置のカメラに対応するポートインデックス情報を確認できます。その後、`lerobot/lerobot/common/robot_devices/robots/configs.py` ファイルでカメラパラメータの調整を完了してください。

```python
@RobotConfig.register_subclass("so101")
@dataclass
class So101RobotConfig(ManipulatorRobotConfig):
    calibration_dir: str = ".cache/calibration/so101"
    ''''''''''''''''
          .
          .
    ''''''''''''''''
    cameras: dict[str, CameraConfig] = field(
        default_factory=lambda: {
            "laptop": OpenCVCameraConfig(
                camera_index=0,             ##### UPDATE HEARE
                fps=30,
                width=640,
                height=480,
            ),
            "phone": OpenCVCameraConfig(
                camera_index=1,             ##### UPDATE HEARE
                fps=30,
                width=640,
                height=480,
            ),
        }
    )

    mock: bool = False
  
```

<details>

<summary> 2台以上の追加カメラを追加する。（オプション） </summary>
より多くのカメラを追加したい場合は、USBの入力が許可する限り、カメラ辞書に異なるカメラ名と`camera_index`値を追加し続けることができます。カメラにUSBハブを使用することは推奨されないことにご注意ください。

```python
@RobotConfig.register_subclass("so101")
@dataclass
class So101RobotConfig(ManipulatorRobotConfig):
    calibration_dir: str = ".cache/calibration/so101"
    ''''''''''''''''
          .
          .
    ''''''''''''''''
    cameras: dict[str, CameraConfig] = field(
        default_factory=lambda: {
            "laptop": OpenCVCameraConfig(
                camera_index=0,             ##### UPDATE HEARE
                fps=30,
                width=640,
                height=480,
            ),
            "phone": OpenCVCameraConfig(
                camera_index=1,             ##### UPDATE HEARE
                fps=30,
                width=640,
                height=480,
            ),
            "new_camera": OpenCVCameraConfig( ##### UPDATE HEARE
                camera_index=3,             ##### UPDATE HEARE
                fps=30,
                width=640,
                height=480,
            ),
        }
    )

    mock: bool = False
  
```

</details>

<details>

<summary>単一のOrbbec Gemini 2深度カメラの使用</summary>

:::tip
このプロジェクトはOrbbecによって開始され、貴重な指導を受け、華南師範大学の張家全、王文昭、黄金鵬によって実装されました。これにより、Orbbecカメラを使用してlerobotフレームワーク内で深度データを収集することが可能になり、ロボットアームの環境認識を豊かにします。
すでにOrbbec Gemini2深度カメラをお持ちの場合、現在のテスト構成では深度カメラを前方上部位置に配置しています。以下のインストール手順に従ってください。
:::

**Gemini 2深度カメラPython SDKのインストールとコンパイル**

1. pyOrbbecsdk をクローンする

```bash
cd ~/
git clone https://github.com/orbbec/pyorbbecsdk.git
cd pyorbbecsdk
```

2. 依存関係をインストールし、pyOrbbecsdk をコンパイルする

```bash
conda activate lerobot
sudo apt-get install python3-dev python3-venv python3-pip python3-opencv
pip3 install -r requirements.txt
mkdir build
cd build
cmake -Dpybind11_DIR=`pybind11-config --cmakedir` ..
make -j4
make install
cd ~/pyorbbecsdk
pip install -e .
```

3. 深度カメラが正常に動作するかテストする

```bash
cd ~/pyorbbecsdk 
pip install -e .
export PYTHONPATH=$PYTHONPATH:~/pyorbbecsdk/install/lib/
sudo bash ./scripts/install_udev_rules.sh
sudo udevadm control --reload-rules && sudo udevadm trigger
python3 examples/depth.py
```

However, you need to run these commands again when opening a new terminal:

```bash
cd ~/pyorbbecsdk 
export PYTHONPATH=$PYTHONPATH:~/pyorbbecsdk/install/lib/
sudo bash ./scripts/install_udev_rules.sh
sudo udevadm control --reload-rules && sudo udevadm trigger
```

`.bashrc` ファイルの末尾に以下を追加することもできます：

```bash
export PYTHONPATH=$PYTHONPATH:~/pyorbbecsdk/install/lib/
sudo bash ~/pyorbbecsdk/scripts/install_udev_rules.sh
sudo udevadm control --reload-rules && sudo udevadm trigger
```

これにより、ターミナル起動時に深度カメラ環境が自動的に読み込まれます。

Orbbec深度カメラを接続した後、以下のスクリプトを実行して深度データストリームとカラーデータストリームを確認してください。2つのウィンドウがポップアップし、カメラの位置を調整できます。終了するにはターミナルでCtrl+Cを使用してください。重要：カメラは必ずデバイスに直接接続し、USBハブを経由しないでください。ハブの帯域幅が画像データ転送には遅すぎる可能性があります。

カメラを調整した後、`lerobot/lerobot/common/robot_devices/robots/configs.py`にある設定ファイルでカメラパラメータを調整してください。

```python
@RobotConfig.register_subclass("so101")  # Also compatible with so100
@dataclass
class So101RobotConfig(ManipulatorRobotConfig):
    calibration_dir: str = ".cache/calibration/so101"
    ''''''''''''''''
          .
          .
    ''''''''''''''''
    cameras: dict[str, CameraConfig] = field(
        default_factory=lambda: {
            "Orbbec":OrbbecCameraConfig(    # Add Orbbec camera configuration here
                fps=30,
                use_depth=True,             # Whether to use depth
                width = 640,                # Resolution automatically adapts to width. Only 640 or 1280 (untested) are valid values
                Hi_resolution_mode = False, # High resolution mode (may reduce visualization quality but improves depth data resolution)
            ),

        }
    )

    mock: bool = False
```

</details>

その後、以下のコードを実行することで、テレオペレーション中にコンピュータ上でカメラを表示できるようになります。これは最初のデータセットを記録する前にセットアップを準備するのに役立ちます。

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=so101 \
  --control.type=teleoperate \
  --control.display_data=true
```

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/EUcXlLlOjGE?si=6ncQ7o5ZFLR4PGTU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## データセットの記録

:::tip
SO100とSO101のコードは互換性があります。SO100のユーザーは、SO101のパラメータとコードを直接利用して操作できます。
:::

テレオペレーションに慣れたら、SO-10xで最初のデータセットを記録できます。

データセットのアップロードにHugging Face hubの機能を使用したい場合で、以前に行ったことがない場合は、書き込みアクセストークンを使用してログインしていることを確認してください。このトークンは[Hugging Face設定](https://huggingface.co/settings/tokens)から生成できます：

```bash
huggingface-cli login --token ${HUGGINGFACE_TOKEN} --add-to-git-credential
```

これらのコマンドを実行するために、Hugging Face リポジトリ名を変数に保存してください：

```bash
HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER
```

2つのエピソードを記録し、データセットをハブにアップロードします：

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=so101 \
  --control.type=record \
  --control.fps=30 \
  --control.single_task="Grasp a lego block and put it in the bin." \
  --control.repo_id=${HF_USER}/so101_test \
  --control.tags='["so101","tutorial"]' \
  --control.warmup_time_s=5 \
  --control.episode_time_s=30 \
  --control.reset_time_s=30 \
  --control.num_episodes=2 \
  --control.display_data=true \
  --control.push_to_hub=true
```

次のような行が多数表示されます：

```bash
INFO 2024-08-10 15:02:58 ol_robot.py:219 dt:33.34 (30.0hz) dtRlead: 5.06 (197.5hz) dtWfoll: 0.25 (3963.7hz) dtRfoll: 6.22 (160.7hz) dtRlaptop: 32.57 (30.7hz) dtRphone: 33.84 (29.5hz)
```

**パラメータの説明**

- wormup-time-s: 初期化時間を指します。
- episode-time-s: 各回のデータ収集時間を表します。
- reset-time-s: 各データ収集間の準備時間です。
- num-episodes: 収集予定のデータグループ数を示します。
- push-to-hub: データをHuggingFace Hubにアップロードするかどうかを決定します。

:::tip

- "データをローカルに保存したい場合（`--control.push_to_hub=false`）、`--control.repo_id=${HF_USER}/so101_test`をカスタムローカルフォルダ名に置き換えてください。例：`--control.repo_id=seeed_123/so101_test`。データはシステムのホームディレクトリの`~/.cache/huggingface/lerobot`に保存されます。"

- `--control.push_to_hub=true`でデータセットをhubにアップロードした場合、以下で提供されるrepo idをコピー＆ペーストして[データセットをオンラインで可視化](https://huggingface.co/spaces/lerobot/visualize_dataset)できます：

- エピソード記録中はいつでも右矢印→を押すと早期停止してリセットに移行します。リセット中も同様に、早期停止して次のエピソード記録に移行します。

- エピソード記録中またはリセット中はいつでも左矢印←を押すと早期停止し、現在のエピソードをキャンセルして再記録します。

- エピソード記録中はいつでもESCキーを押すとセッションを早期終了し、直接ビデオエンコーディングとデータセットアップロードに移行します。

- 注意：--control.resume=trueを追加することで記録を再開できます。また、データセットをまだpushしていない場合は、--control.local_files_only=trueを追加してください。最初から記録を開始したい場合は、データセットディレクトリを手動で削除する必要があります。

- データ記録に慣れたら、トレーニング用のより大きなデータセットを作成できます。良い開始タスクは、異なる位置でオブジェクトを掴み、ビンに置くことです。少なくとも50エピソード、位置ごとに10エピソードの記録を推奨します。カメラを固定し、記録全体を通して一貫した掴み動作を維持してください。また、操作するオブジェクトがカメラに映っていることを確認してください。良い経験則として、カメラ画像のみを見てタスクを自分で実行できるようにすることです。

- 以下のセクションでは、ニューラルネットワークをトレーニングします。信頼性の高い掴み性能を達成した後、追加の掴み位置、異なる掴み技術、カメラ位置の変更など、データ収集中により多くのバリエーションを導入できます。

- 結果に悪影響を与える可能性があるため、あまりにも早く多くのバリエーションを追加することは避けてください。

- Linuxでは、データ記録中に左右の矢印キーとESCキーが効果がない場合、$DISPLAY環境変数が設定されていることを確認してください。[pynputの制限事項](https://pynput.readthedocs.io/en/latest/limitations.html#linux)を参照してください。

:::

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/wc-qh7UFkuQ?si=-eDB73KgUksyJXa-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## データセットの可視化

:::tip
SO100とSO101のコードは互換性があります。SO100のユーザーは、SO101のパラメータとコードを直接利用して操作できます。
:::

```bash
echo ${HF_USER}/so101_test  
```

`--control.push_to_hub=false`でアップロードしなかった場合は、以下のコマンドでローカルで可視化することもできます：

```bash
python lerobot/scripts/visualize_dataset_html.py \
  --repo-id ${HF_USER}/so101_test \
```

`--control.push_to_hub=false` でアップロードした場合、以下のコマンドでローカルでも可視化できます：

```bash
python lerobot/scripts/visualize_dataset_html.py \
  --repo-id seeed_123/so101_test \
```

**ここで、`seeed_123` はデータ収集時に定義されたカスタムの `repo_id` 名です。**

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/visualize_datasets.png" />
</div>

## エピソードの再生

:::tip
SO100とSO101のコードは互換性があります。SO100のユーザーは、SO101のパラメータとコードを直接利用して操作できます。
:::

それでは、ロボットで最初のエピソードを再生してみましょう：

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=so101 \
  --control.type=replay \
  --control.fps=30 \
  --control.repo_id=${HF_USER}/so101_test \
  --control.episode=0
```

注意：データセットをまだプッシュしていない場合は、`--control.local_files_only=true` を追加してください。

## ポリシーの訓練

:::tip
SO100とSO101のコードは互換性があります。SO100のユーザーは、SO101のパラメータとコードを直接利用して操作できます。
:::

ロボットを制御するポリシーを訓練するには、`python lerobot/scripts/train.py` スクリプトを使用します。いくつかの引数が必要です。以下はコマンドの例です：

```bash
python lerobot/scripts/train.py \
  --dataset.repo_id=${HF_USER}/so101_test \
  --policy.type=act \
  --output_dir=outputs/train/act_so101_test \
  --job_name=act_so101_test \
  --policy.device=cuda \
  --wandb.enable=true
```

**ローカルデータセットでトレーニングを行う場合は、`repo_id` がデータ収集時に使用したものと一致していることを確認してください。**

説明します：

1. `--dataset.repo_id=${HF_USER}/so101_test` でデータセットを引数として提供しました。
2. `policy.type=act` を使用してポリシーを提供します。これにより [`lerobot/lerobot/common/policies/act/configuration_act.py`](https://github.com/huggingface/lerobot/blob/main/lerobot/common/policies/act/configuration_act.py) から設定が読み込まれます。現在、ACT はテスト済みですが、diffusion、pi0、pi0fast、tdmpc、vqbet などの他のポリシーも試すことができます。
3. Nvidia GPU でトレーニングを行うため `policy.device=cuda` を提供しましたが、Apple silicon でトレーニングする場合は `policy.device=mps` を使用できます。
5. トレーニングプロットを可視化するために [Weights and Biases](https://docs.wandb.ai/quickstart) を使用する `wandb.enable=true` を提供しました。これはオプションですが、使用する場合は `wandb login` を実行してログインしていることを確認してください。

トレーニングには数時間かかります。チェックポイントは `outputs/train/act_so100_test/checkpoints` に保存されます。

チェックポイントからトレーニングを再開するには、以下は act_so101_test ポリシーの最後のチェックポイントから再開するコマンドの例です：

```bash
python lerobot/scripts/train.py \
  --config_path=outputs/train/act_so101_test/checkpoints/last/pretrained_model/train_config.json \
  --resume=true
```

**ポリシーチェックポイントのアップロード**
トレーニングが完了したら、最新のチェックポイントを以下でアップロードします：

```bash
huggingface-cli upload ${HF_USER}/act_so101_test \
  outputs/train/act_so101_test/checkpoints/last/pretrained_model
```

## ポリシーを評価する

:::tip
SO100とSO101のコードは互換性があります。SO100のユーザーは、SO101のパラメータとコードを直接利用して操作できます。
:::

[`lerobot/scripts/control_robot.py`](https://github.com/huggingface/lerobot/blob/main/lerobot/scripts/control_robot.py)の`record`関数を使用できますが、ポリシーチェックポイントを入力として使用します。例えば、10回の評価エピソードを記録するには、次のコマンドを実行します：

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=so101 \
  --control.type=record \
  --control.fps=30 \
  --control.single_task="Grasp a lego block and put it in the bin." \
  --control.repo_id=${HF_USER}/eval_act_so101_test \
  --control.tags='["tutorial"]' \
  --control.warmup_time_s=5 \
  --control.episode_time_s=30 \
  --control.reset_time_s=30 \
  --control.num_episodes=10 \
  --control.push_to_hub=true \
  --control.policy.path=outputs/train/act_so101_test/checkpoints/last/pretrained_model
```

ご覧のとおり、これは以前にトレーニングデータセットを記録するために使用したコマンドとほぼ同じです。2つの点が変更されました：

1. 追加の `--control.policy.path` 引数があり、これはポリシーチェックポイントへのパス（例：`outputs/train/eval_act_so100_test/checkpoints/last/pretrained_model`）を示します。モデルチェックポイントをハブにアップロードした場合は、モデルリポジトリも使用できます（例：`${HF_USER}/act_so100_test`）。
2. データセット名は推論を実行していることを反映するために `eval` で始まります（例：`${HF_USER}/eval_act_so100_test`）。

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/wc-qh7UFkuQ?si=Y2SXU9T0DSmtz4ll" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## FAQ

- このドキュメント/チュートリアルに従っている場合は、推奨されるGitHubリポジトリ `https://github.com/ZhuYaoHui1998/lerobot.git` をgit cloneしてください。このドキュメントで推奨されているリポジトリは検証済みの安定版です。公式のLerobotリポジトリは最新版に継続的に更新されており、異なるデータセットバージョン、異なるコマンドなどの予期しない問題を引き起こす可能性があります。

- 以下のエラーが発生した場合は、対応するポートに接続されているロボットアームの電源が入っているか、バスサーボのケーブルに緩みや断線がないかを確認する必要があります。

  ```bash
  ConnectionError: Read failed due to comunication eror on port /dev/ttyACM0 for group key Present_Position_Shoulder_pan_Shoulder_lift_elbow_flex_wrist_flex_wrist_roll_griper: [TxRxResult] There is no status packet!
  ```

- ロボットアームの部品を修理または交換した場合は、`~/lerobot/.cache/huggingface/calibration/so100` フォルダを完全に削除し、ロボットアームを再キャリブレーションしてください。

- リモートコントロールは正常に機能するが、Camera付きリモートコントロールで画像インターフェースが表示されない場合は、[こちら](https://github.com/huggingface/lerobot/pull/757/files)で確認できます。

- データセットのリモート操作中にlibtiffの問題が発生した場合は、libtiffのバージョンを更新してください。

  ```bash
  conda install libtiff==4.5.0  #for Ubuntu 22.04 is libtiff==4.5.1
  ```

- [Lerobot Installation](https://wiki.seeedstudio.com/lerobot_so100m/#install-lerobot)を実行した後、pytorchのGPU版が自動的にアンインストールされる可能性があるため、torch-gpuを手動でインストールする必要があります。

- Jetsonの場合は、`conda install -y -c conda-forge ffmpeg`を実行する前に、まず[Pytorch and Torchvsion](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson)をインストールしてください。そうしないと、torchvisionをコンパイルする際にffmpegのバージョン不一致の問題が発生する可能性があります。

- 以下の問題が発生した場合、お使いのコンピュータがこのビデオコーデック形式をサポートしていないことを意味します。`lerobot/lerobot/common/datasets/video_utils.py`ファイルの134行目を修正し、`vcodec: str = "libsvtav1"`の値を`libx264`または`libopenh264`に変更する必要があります。異なるコンピュータでは異なるパラメータが必要な場合があるため、様々なオプションを試すことができます。[Issues 705](https://github.com/huggingface/lerobot/issues/705)
  
  ```bash
  [vost#0:0 @ 0x13207240] Unknown encoder 'libsvtav1' [vost#0:0 @ 0x13207240] Error selecting an encoder Error opening output file /home/han/.cache/huggingface/lerobot/lyhhan/so100_test/videos/chunk-000/observation.images.laptop/episode_000000.mp4. Error opening output files: Encoder not found
  ```

- 重要！！！実行中にサーボのケーブルが緩んだ場合は、サーボを初期位置に戻してからサーボケーブルを再接続してください。[サーボ初期化コマンド](https://wiki.seeedstudio.com/lerobot_so100m/#configure-the-motors)を使用して個別にサーボを校正することもできます。個別校正時は、サーボとドライバーボード間に1本のケーブルのみが接続されていることを確認してください。もし遭遇した場合

  ```bash
  Auto-correct calibration of motor 'wrist roll' by shifting value by 1 full turns, from '-270 < -312.451171875 < 270degrees' to'-270<-312.451171875 < 270 degrees'.
  ```

  ロボットアームのキャリブレーション過程で角度や制限値超過に関連するその他のエラーが発生した場合でも、この方法は依然として適用可能です。

- 8G 3060ノートパソコンで50セットのACTデータを訓練するには約6時間かかりますが、4090またはA100コンピューターでは50セットのデータを訓練するのに約2〜3時間かかります。

- データ収集中は、カメラの位置、角度、環境照明を安定に保ち、過度に不安定な背景や歩行者の撮影を最小限に抑えてください。そうしないと、展開時の大幅な環境変化によりロボットアームが適切に把握できなくなる可能性があります。

- データ収集コマンドの`num-episodes`パラメータが十分なデータを収集するよう設定されていることを確認し、途中で手動で一時停止しないでください。これは、データの平均と分散がデータ収集完了後にのみ計算されるためで、これは訓練に必要です。

- プログラムがUSBカメラの画像データを読み取れないと表示される場合は、USBカメラがハブに接続されていないことを確認してください。USBカメラは高速な画像伝送レートを確保するため、デバイスに直接接続する必要があります。

:::tip
ソフトウェアの問題や環境依存関係の問題で解決できない場合は、このチュートリアルの最後にあるFAQセクションを確認することに加えて、[LeRobotプラットフォーム](https://github.com/huggingface/lerobot)または[LeRobot Discordチャンネル](https://discord.gg/8TnwDdjFGU)に速やかに問題を報告してください。
:::

## 引用

[中文文档](https://wiki.seeedstudio.com/cn/lerobot_so100m/)

TheRobotStudio Project: [SO-ARM10x](https://github.com/TheRobotStudio/SO-ARM100)

Huggingface Project: [Lerobot](https://github.com/huggingface/lerobot/tree/main)

Dnsty: [Jetson Containers](https://github.com/dusty-nv/jetson-containers/tree/master/packages/robots/lerobot)

[Jetson AI Lab](https://www.jetson-ai-lab.com/lerobot.html)

[Diffusion Policy](https://diffusion-policy.cs.columbia.edu/)

[ACT or ALOHA](https://tonyzhaozh.github.io/aloha/)

[TDMPC](https://www.nicklashansen.com/td-mpc/)

[VQ-BeT](https://sjlee.cc/vq-bet/)

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
