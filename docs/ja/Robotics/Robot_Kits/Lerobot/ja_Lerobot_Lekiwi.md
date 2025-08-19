---
description: この Wiki は Lekiwi の組み立てとデバッグのチュートリアルを提供し、Lerobot フレームワーク内でのデータ収集とトレーニングを実現します。
title: Lerobot で Lekiwi を使用する方法
keywords:
- Lerobot
- Huggingface
- 車
- ロボティクス
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/lekiwi_cad_v1.png
slug: /ja/lerobot_lekiwi
last_update:
  date: 2025/5/28
  author: ZhuYaoHui
---

# Lerobot で Lekiwi を使用する方法

:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::
 
## はじめに

[Lekiwi](https://github.com/SIGRobotics-UIUC/LeKiwi) は [SIGRobotics-UIUC](https://github.com/SIGRobotics-UIUC) によって開始された完全オープンソースのロボットカーのプロジェクトです。このプロジェクトには詳細な3Dプリントファイルと操作ガイドが含まれており、[LeRobot](https://github.com/huggingface/lerobot/tree/main) 模倣学習フレームワークと互換性を持つよう設計されています。また、SO101ロボットアームをサポートし、完全な模倣学習パイプラインを可能にします。

  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/lekiwi_cad_v1.png" />
  </div>
<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
</a></div>


## 主な特徴
 
1. **オープンソースで低コスト**: [Lekiwi](https://github.com/SIGRobotics-UIUC/LeKiwi) によるオープンソースで低コストのロボットカーソリューション。
2. **LeRobotとの統合**: [LeRobotプラットフォーム](https://github.com/huggingface/lerobot) との統合を目的に設計。
3. **豊富な学習リソース**: 組み立てやキャリブレーションガイド、テスト、データ収集、トレーニング、デプロイメントのチュートリアルなど、包括的なオープンソース学習リソースを提供し、ユーザーが迅速に開始しロボットアプリケーションを開発できるよう支援。
4. **Nvidiaとの互換性**: reComputer Mini J4012 Orin NX 16 GB とともにこのアームキットをデプロイ可能。
5. **多場面での応用**: 教育、科学研究、自動化生産、ロボティクスなどの分野で適用可能で、ユーザーがさまざまな複雑なタスクにおいて効率的かつ正確なロボット操作を実現するのを支援。

:::caution

Seeed Studio はハードウェア自体の品質のみを保証します。チュートリアルは公式ドキュメントに厳密に従って更新されています。ソフトウェアの問題や環境依存性の問題が解決できない場合は、速やかに [LeRobotプラットフォーム](https://github.com/huggingface/lerobot) または [LeRobot Discordチャンネル](https://discord.gg/8TnwDdjFGU) に問題を報告してください。
:::

:::danger

- LeKiwiシャーシ内のすべてのサーボモーターは12V電源を必要とします。5Vロボットアームを使用するユーザーには、12Vから5Vへの降圧コンバータモジュールを提供します。ただし、回路の改造が必要となる点に注意してください。

- 12V電源 - 必要に応じてチェックアウト時にこのオプションを選択できます。すでに12V電源をお持ちの場合は、このオプションをスキップし、電源の出力コネクタを5521 DCプラグに変換するだけで済みます。

- Raspberry Piコントローラーとカメラ - これらは注文インターフェースを通じて別途購入する必要があります。
:::

## 仕様

| 種類 | Lekiwi | 
|--|--|
| サーボモーター | 3x 12v STS3215 1:345 ギア比 | 
| 電源 | 12V DC またはバッテリー |
| 角度センサー | 12ビット磁気エンコーダー | 
| 推奨動作温度範囲 | 0℃～40℃ | 
| 通信方法 | UART | 
| 制御方法 | PC |


## 部品表 (BOM)

| 部品 | 数量 | 含まれる |
|--|--|--|
| STS3215 1:345 12V サーボモーター | 3 | ✅ |
| 全方向ホイール/ユニバーサルホイール | 3 | ✅ |
| Lekiwi 3Dプリントケース | 1 | ✅ |
| DC-DC降圧電源モジュール - 24V/12Vから5V | 1 | ✅ |
| モーター制御ボード | 1 | ✅ |
| DCオスからデュアルDCオス 5521 Yケーブル | 1 | ✅ |
| USBケーブル;Type C 2.0 to Type C 2.0-ブラック;L150mm | 1 | ✅ |
| USB 3.1 Type C to A ケーブル 0.5メートル | 1 | ✅ |
| プラグ電源アダプター;ブラック-12V-2A AC/DC | 1 | ✅ |
| M2 M3 M4 アソートネジ | 十分な量 | ✅ |
| Raspberry Pi | 1 | オプション |
| USBカメラ | 1 | オプション |
| 深度カメラ | 2 | オプション |
| SO-ARM101 Pro | 1 | オプション |
| 12V 高容量リチウムイオンバッテリーパック E326S | 1 | オプション |

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

**Raspberry Piの場合:**
- Raspberry Pi5 4G～16G

## 目次
  [A. 3Dプリントガイド]

  [B. LeRobotのインストール]

  [C. モーターの設定]

  [D. 組み立て]

  [E. キャリブレーション]

  [F. 遠隔操作]

  [G. カメラの追加]

  [H. データセットの記録]

  [I. データセットの可視化]

  [J. エピソードの再生]

  [K. ポリシーのトレーニング]

  [L. ポリシーの評価]


## 3Dプリントガイド

### 部品
以下の3Dプリント部品用のSTLファイルを提供しています。これらは一般的なPLAフィラメントを使用して消費者向けFDMプリンターで印刷できます。Bambu Lab P1Sプリンターでテスト済みです。すべての部品について、bambuslicerにロードし、自動回転と自動配置を行い、推奨されるサポートを有効にして印刷します。

| アイテム | 数量 | 備考 | 
|:---|:---:|:---:|
| [ベースプレート上部](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/base_plate_layer2.stl) | 1 | |
| [ベースプレート下部](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/base_plate_layer1.stl) | 1 | |
| [駆動モーターマウント](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/drive_motor_mount_v2.stl) | 3 | |
| [サーボホイールハブ](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/servo_wheel_hub.stl) | 3 | サポートを使用 |
| [RasPiケース上部](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/pi_case_top.stl) | 1 | |
| [RasPiケース下部](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/pi_case_bottom.stl) | 1 | |
| Arducam [ベースマウント](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/base_camera_mount.stl) と [リストマウント](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/wrist_camera_mount.stl)| 1 | **[このカメラ](https://www.amazon.com/Arducam-Camera-Computer-Without-Microphone/dp/B0972KK7BC)と互換性あり** |
| ウェブカメラ [ベースマウント](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/webcam_mount/webcam_mount.stl)、[グリッパーインサート](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/webcam_mount/so100_gripper_cam_mount_insert.stl)、および [リストマウント](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/webcam_mount/webcam_mount_wrist.stl) | 1 | **[このカメラ](https://www.amazon.fr/Vinmooog-equipement-Microphone-Enregistrement-conférences/dp/B0BG1YJWFN/)と互換性あり** |


### 印刷パラメータ

提供されたSTLファイルは多くのFDMプリンターで印刷可能です。以下はテスト済みおよび推奨設定ですが、他の設定でも動作する可能性があります。
- 材料: PLA+ 
- ノズル径と精度: 0.2mmノズル径、0.2mm層高さ
- 充填密度: 15%  
- 印刷速度: 150 mm/s
- 必要に応じてGコード（スライスファイル）をプリンターにアップロードして印刷

## LeRobotをインストールする

Raspberry Piでの手順:

### 1. [Minicondaをインストールする](https://docs.anaconda.com/miniconda/install/#quick-command-line-install):
```bash
mkdir -p ~/miniconda3
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh -O ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
rm ~/miniconda3/miniconda.sh
```

### 2. シェルを再起動する
シェルに以下をコピー＆ペーストしてください: `source ~/.bashrc` または Macの場合: `source ~/.bash_profile`、zshellを使用している場合は `source ~/.zshrc`

### 3. LeRobot用の新しいconda環境を作成して有効化する

```bash
conda create -y -n lerobot python=3.10
```

その後、conda環境を有効化します（LeRobotを使用するたびにシェルを開いたらこれを実行してください!）:
```bash
conda activate lerobot
```

### 4. LeRobotをクローンする:
```bash
git clone https://github.com/huggingface/lerobot.git ~/lerobot
```

### 5. 環境にffmpegをインストールする:
`miniconda`を使用している場合、環境に`ffmpeg`をインストールします:
```bash
conda install ffmpeg -c conda-forge
```

### 6. feetechモーター用の依存関係とともにLeRobotをインストールする:
```bash
cd ~/lerobot && pip install -e ".[feetech]"
```

## C. ノートパソコンにLeRobotをインストールする
すでにノートパソコンにLeRobotをインストールしている場合、このステップをスキップできます。それ以外の場合は、Raspberry Piで行ったのと同じ手順に従ってください。

> [!TIP]
> コマンドプロンプト（cmd）を頻繁に使用します。cmdの使用に慣れていない場合や、コマンドラインの使い方を復習したい場合は、こちらを参照してください: [Command line crash course](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line)

コンピュータでの手順:

### 1. [Minicondaをインストールする](https://docs.anaconda.com/miniconda/install/#quick-command-line-install):

### 2. シェルを再起動する
シェルに以下をコピー＆ペーストしてください: `source ~/.bashrc` または Macの場合: `source ~/.bash_profile`、zshellを使用している場合は `source ~/.zshrc`

### 3. LeRobot用の新しいconda環境を作成して有効化する

```bash
conda create -y -n lerobot python=3.10
```

その後、conda環境を有効化します（LeRobotを使用するたびにシェルを開いたらこれを実行してください!）:
```bash
conda activate lerobot
```

### 4. LeRobotをクローンする:
```bash
git clone https://github.com/huggingface/lerobot.git ~/lerobot
```

### 5. 環境にffmpegをインストールする:
`miniconda`を使用している場合、環境に`ffmpeg`をインストールします:
```bash
conda install ffmpeg -c conda-forge
```

### 6. feetechモーター用の依存関係とともにLeRobotをインストールする:
```bash
cd ~/lerobot && pip install -e ".[feetech]"
```

## モーターを設定する

<div align="center">
    <img width={800}
    src="https://raw.githubusercontent.com/huggingface/lerobot/refs/heads/main/media/lekiwi/motor_ids.webp" />
</div>

**アームに関連付けられたUSBポートを見つける**
単一のモーター用に正しいポートを見つけるには、ユーティリティスクリプトを2回実行します:

```bash
python lerobot/scripts/find_motors_bus_port.py
```

ポートを特定する際の例（例: Macでは`/dev/tty.usbmodem575E0031751`、Linuxではおそらく`/dev/ttyACM0`）:

ポートを特定する際の例（例: `/dev/tty.usbmodem575E0032081`、またはLinuxではおそらく`/dev/ttyACM1`）:

トラブルシューティング: Linuxでは、以下を実行してUSBポートへのアクセス権を付与する必要がある場合があります:

```bash
sudo chmod 666 /dev/ttyACM0
sudo chmod 666 /dev/ttyACM1
```

**モーターを設定する**

最初のモーターを接続し、このスクリプトを実行してIDを7-9に設定します。また、現在の位置を2048に設定するため、モーターが回転することを予期してください:

```bash
python lerobot/scripts/configure_motor.py \
  --port /dev/ttyACM0 \
  --brand feetech \
  --model sts3215 \
  --baudrate 1000000 \
  --ID 7
```

注意: これらのモーターは現在制限があります。値は0から4096の範囲内でのみ取ることができ、これは1回転に対応します。それ以上回転することはできません。2048はこの範囲の中央に位置するため、-2048ステップ（反時計回りに180度）で最大範囲に到達するか、+2048ステップ（時計回りに180度）で最大範囲に到達します。設定ステップではホーミングオフセットも0に設定されるため、アームを誤って組み立てた場合でも、±2048ステップ（±180度）までのシフトを考慮してホーミングオフセットを更新できます。

その後、モーターを取り外し、2番目のモーターを接続してIDを8および9に設定します。

```bash
python lerobot/scripts/configure_motor.py \
  --port /dev/ttyACM0 \
  --brand feetech \
  --model sts3215 \
  --baudrate 1000000 \
  --ID 8
```

## 組み立て

<details>
<summary>Lekiwiの組み立て</summary>

公式の[組み立てチュートリアル](https://github.com/SIGRobotics-UIUC/LeKiwi)を参照してください。

印刷された部品を受け取ったら、すべての印刷部品は以下のようになります。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/1.jpg" />
</div>

**A. ドライブモーターをモーターマウントに4本のm2x5タップスクリューで取り付けます。**

| **ステップ 1** | **ステップ 2** |
|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/2.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/3.jpg) |

**B. ドライブモーターマウントを4本のm3x16マシンスクリューで底部ベースプレートに取り付けます。**

:::tip
IDの配置を覚えておいてください：8は後輪を表し、7と9はそれぞれ左前輪と右前輪に対応します。
:::

| **ステップ 1** | **ステップ 2** |
|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/4.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/5.jpg) |

**C. ホイールハブをオムニホイールに取り付けます。**

**ステップ 1とステップ 2**: 3本のスクリューを取り外します。

| **ステップ 1** | **ステップ 2** |
|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/7.jpg) |

**ステップ 3とステップ 4**: 2本のm4x16マシンスクリューを使用してホイールハブをオムニホイールに取り付けます。

| **ステップ 3** | **ステップ 4** |
|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/8.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/9.jpg) |

**D. サーボホーンを2本のm3x16マシンスクリューでホイールハブに取り付けます。**

| **ステップ 1** | **ステップ 2** |**ステップ 3** |
|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/10.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/11.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/12.jpg) |

**E. サーボホーンを1本のm3x6マシンスクリューでドライブモーターに取り付けます。**

| **ステップ 1** | **ステップ 2** |**ステップ 3** |
|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/13.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/14.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/15.jpg) |

**H. サーボドライバーを追加し、すべての回路を接続します。**

| **ステップ 1** | **ステップ 2** |**ステップ 3** |**ステップ 4** |
|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/16.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/17.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/18.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/19.jpg) |

| **ステップ 5** | **ステップ 6** |**ステップ 7** |**ステップ 8** |
|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/20.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/20-1.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/21.jpg) | ![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/22.jpg) |

**Power IN**は電源に直接接続されます（ステップ8のように）。一方、**USB-Cポート**はRaspberry Piに5V電力を供給します。

追加の**2ピン端子（5V & 12V）**について：  
- **7.4V SO10xロボットアーム**を使用する場合、**5V出力**を介して**サーボモーターボード**に電力を供給します。  
- **12Vロボットアーム**を使用する場合、**DC電源スプリッター**から直接**サーボモーターボード**に電力を供給します（ステップ8のように）。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/23.jpg" />
</div>

**I. 車両の2層目のトッププレートにRaspberry Piを取り付ける準備をします。その前に、**USB-C電源ケーブル**と**USB-Cサーボモーター通信ケーブル**の両方を接続し、それらを車両のトップパネルから引き出します。**

**ステップ 1** Raspberry Piに電源ケーブルを接続し、トップパネルの中央の開口部を通して引き出します。

|  | | |
|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/24.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/25.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/26.jpg) |

**ステップ 2** シャーシ内の3つのサーボモーターのうち、1つのサーボには1本のケーブルしか接続されていません。SO10xロボットアームを取り付ける必要がある場合は、以下を行ってください：  
ロボットアームからID1ケーブルを取り外します。それをシャーシモーターに接続します。トップパネルを通して予備ケーブルとして引き出します。

|  | | |
|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/27.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/28.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/29.jpg) |

**ステップ 3** サーボドライバーボードのUSB-CをRaspberry PiのUSBポートに接続します。

|  | |
|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/30.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/31.jpg) |

**J. Raspberry Piとトッププレートの残りの部分をM3×16スクリューで固定します。**

|  | ||
|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/32.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/33.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/34.jpg) |

**K. ここで、M3x16 および M5×25 のネジを使用して USB カメラとフォロワーアームを取り付けることができます**

|  |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/35.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/36.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/37.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/29.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/38.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/39.jpg) |

また、サーボ制御ケーブルと USB カメラの両方が Raspberry Pi に接続されていることを確認してください。

|  | 
|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/31.jpg) |

</details>

## 設定の更新
LeKiwi LeRobot とノートパソコンの両方の設定ファイルが同じである必要があります。まず、モバイルマニピュレータの Raspberry Pi の IP アドレスを見つける必要があります。これは SSH で使用されるのと同じ IP アドレスです。また、ノートパソコン上のリーダーアームの制御ボードの USB ポートと LeKiwi 上の制御ボードのポートも必要です。これらのポートは以下のスクリプトで確認できます。

Linux では、次のコマンドを実行して USB ポートへのアクセス権を付与する必要がある場合があります：
```bash
sudo chmod 666 /dev/ttyACM0
sudo chmod 666 /dev/ttyACM1
```

重要：リーダーアームとフォロワーアームのポート、およびモバイル manipulator の IP アドレスが判明したら、ネットワーク構成の **ip**、リーダーアームの **port**、および lekiwi の **port** を更新してください。これを [`LeKiwiRobotConfig`](https://github.com/huggingface/lerobot/blob/main/lerobot/common/robot_devices/robots/configs.py) ファイルで行います。このファイルには以下のような内容があります：
```python
@RobotConfig.register_subclass("lekiwi")
@dataclass
class LeKiwiRobotConfig(RobotConfig):
    # `max_relative_target` は安全のために相対位置ターゲットベクトルの大きさを制限します。
    # すべてのモーターに同じ値を設定するには正のスカラーを、フォロワーアームのモーター数と同じ長さのリストを設定するにはリストを使用します。
    max_relative_target: int | None = None

    # ネットワーク構成
    ip: str = "172.17.133.91"
    port: int = 5555
    video_port: int = 5556

    cameras: dict[str, CameraConfig] = field(
        default_factory=lambda: {
            "mobile": OpenCVCameraConfig(camera_index="/dev/video0", fps=30, width=640, height=480),
            "mobile2": OpenCVCameraConfig(camera_index="/dev/video2", fps=30, width=640, height=480),
        }
    )

    calibration_dir: str = ".cache/calibration/lekiwi"

    leader_arms: dict[str, MotorsBusConfig] = field(
        default_factory=lambda: {
            "main": FeetechMotorsBusConfig(
                port="/dev/tty.usbmodem585A0077581",
                motors={
                    # 名前: (インデックス, モデル)
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
                port="/dev/ttyACM0",
                motors={
                    # 名前: (インデックス, モデル)
                    "shoulder_pan": [1, "sts3215"],
                    "shoulder_lift": [2, "sts3215"],
                    "elbow_flex": [3, "sts3215"],
                    "wrist_flex": [4, "sts3215"],
                    "wrist_roll": [5, "sts3215"],
                    "gripper": [6, "sts3215"],
                    "left_wheel": (7, "sts3215"),
                    "back_wheel": (8, "sts3215"),
                    "right_wheel": (9, "sts3215"),
                },
            ),
        }
    )

    teleop_keys: dict[str, str] = field(
        default_factory=lambda: {
            # 移動
            "forward": "w",
            "backward": "s",
            "left": "a",
            "right": "d",
            "rotate_left": "z",
            "rotate_right": "x",
            # 速度制御
            "speed_up": "r",
            "speed_down": "f",
            # テレオペ終了
            "quit": "q",
        }
    )

    mock: bool = False
```

## 有線版

有線版のLeKiwiを使用する場合、設定されたIPアドレスは自身のラップトップ（127.0.0.1）を指す必要があります。これは、リーダーアームとLeKiwiがこの場合、自身のラップトップに接続されているためです。以下は、この有線セットアップの例の設定です：
```python
@RobotConfig.register_subclass("lekiwi")
@dataclass
class LeKiwiRobotConfig(RobotConfig):
    # `max_relative_target`は安全目的で相対位置ターゲットベクトルの大きさを制限します。
    # すべてのモーターに同じ値を設定する場合は正のスカラー値を設定するか、
    # フォロワーアームのモーター数と同じ長さのリストを設定してください。
    max_relative_target: int | None = None

    # ネットワーク設定
    ip: str = "127.0.0.1"
    port: int = 5555
    video_port: int = 5556

    cameras: dict[str, CameraConfig] = field(
        default_factory=lambda: {
            "front": OpenCVCameraConfig(
                camera_index=0, fps=30, width=640, height=480, rotation=90
            ),
            "wrist": OpenCVCameraConfig(
                camera_index=1, fps=30, width=640, height=480, rotation=180
            ),
        }
    )

    calibration_dir: str = ".cache/calibration/lekiwi"

    leader_arms: dict[str, MotorsBusConfig] = field(
        default_factory=lambda: {
            "main": FeetechMotorsBusConfig(
                port="/dev/tty.usbmodem585A0077581",
                motors={
                    # 名前: (インデックス, モデル)
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
                port="/dev/tty.usbmodem58760431061",
                motors={
                    # 名前: (インデックス, モデル)
                    "shoulder_pan": [1, "sts3215"],
                    "shoulder_lift": [2, "sts3215"],
                    "elbow_flex": [3, "sts3215"],
                    "wrist_flex": [4, "sts3215"],
                    "wrist_roll": [5, "sts3215"],
                    "gripper": [6, "sts3215"],
                    "left_wheel": (7, "sts3215"),
                    "back_wheel": (8, "sts3215"),
                    "right_wheel": (9, "sts3215"),
                },
            ),
        }
    )

    teleop_keys: dict[str, str] = field(
        default_factory=lambda: {
            # 移動
            "forward": "w",
            "backward": "s",
            "left": "a",
            "right": "d",
            "rotate_left": "z",
            "rotate_right": "x",
            # 速度制御
            "speed_up": "r",
            "speed_down": "f",
            # テレオペ終了
            "quit": "q",
        }
    )

    mock: bool = False
```


## キャリブレーション
次に、リーダーアームとフォロワーアームをキャリブレーションする必要があります。車輪モーターはキャリブレーションする必要はありません。

### フォロワーアームのキャリブレーション（モバイルベース上）

以下のコマンドをコンピュータで実行して、リーダーロボットアームをキャリブレーションしてください。注意：ここで示されている画像はSO101モデルのものです。

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=lekiwi \
  --robot.cameras='{}' \
  --control.type=calibrate \
  --control.arms='["main_leader"]'
```

| **リーダー中央位置** | **リーダーゼロ位置** | **リーダー回転位置** | **リーダー休止位置** |
|:---------:|:---------:|:---------:|:---------:|
| ![fig8](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/leader_middle.webp) | ![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/leader_zero.webp) | ![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/leader_rotated.webp) | ![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/leader_rest.webp) |

次に、以下のコマンドをRaspberry Piで実行して、LeKiwi上のフォロワーアームをキャリブレーションしてください。テーブル上の現在の配置は無視してください - 通常のキャリブレーションは車両に取り付けられた状態で行う必要があります。

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=lekiwi \
  --robot.cameras='{}' \
  --control.type=calibrate \
  --control.arms='["main_follower"]'
```

| **フォロワー中央位置** | **フォロワーゼロ位置** | **フォロワー回転位置** | **フォロワー休止位置** |
|:---------:|:---------:|:---------:|:---------:|
| ![fig7](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/follower_middle.webp) | ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/follower_zero.webp) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/follower_rotated.webp) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/follower_rest.webp) |

# F. 遠隔操作

> [!TIP]
> Mac を使用している場合、Terminal にキーボードへのアクセス許可を与える必要があるかもしれません。システム環境設定 > セキュリティとプライバシー > 入力監視 に移動し、Terminal のチェックボックスをオンにしてください。

Raspberry Pi に SSH 接続し、`conda activate lerobot` を実行して以下のスクリプトを実行します：
```bash
python lerobot/scripts/control_robot.py \
  --robot.type=lekiwi \
  --control.type=remote_robot
```

次に、ノートパソコンでも `conda activate lerobot` を実行し、以下のスクリプトを実行します：
```bash
python lerobot/scripts/control_robot.py \
  --robot.type=lekiwi \
  --control.type=teleoperate \
  --control.fps=30
```

> **注意:** データを可視化するには、`--control.display_data=true` を有効にしてください。これにより、`rerun` を使用してデータがストリーミングされます。`--control.type=remote_robot` を使用する場合、`--control.viewer_ip` と `--control.viewer_port` を設定する必要があります。

ノートパソコン上で以下のようなメッセージが表示されるはずです：
```[INFO] Connected to remote robot at tcp://172.17.133.91:5555 and video stream at tcp://172.17.133.91:5556.```  
これで、リーダーアームを動かし、キーボード (w, a, s, d) を使用して前進、左移動、後退、右移動が可能になります。また、(z, x) を使用して左回転または右回転ができます。(r, f) を使用してモバイルロボットの速度を増減させることもできます。速度モードは 3 種類あり、以下の表をご覧ください：

| 速度モード | 直線速度 (m/s) | 回転速度 (度/s) |
| ---------- | -------------- | --------------- |
| 高速       | 0.4            | 90              |
| 中速       | 0.25           | 60              |
| 低速       | 0.1            | 30              |

| キー | アクション       |
| --- | -------------- |
| W   | 前進           |
| A   | 左移動         |
| S   | 後退           |
| D   | 右移動         |
| Z   | 左回転         |
| X   | 右回転         |
| R   | 速度を上げる   |
| F   | 速度を下げる   |

> [!TIP]
> 別のキーボードを使用している場合、`LeKiwiRobotConfig` 内で各コマンドのキーを変更できます。

### 有線バージョン
**有線** LeKiwi バージョンを使用している場合、これらの遠隔操作コマンドを含むすべてのコマンドをノートパソコン上で実行してください。

## 通信のトラブルシューティング

Mobile SO100 への接続に問題がある場合、以下の手順に従って診断および解決してください。

### 1. IP アドレス設定の確認
設定ファイルに正しい Raspberry Pi の IP アドレスが設定されていることを確認してください。Raspberry Pi の IP アドレスを確認するには、Pi のコマンドラインで以下を実行します：
```bash
hostname -I
```

### 2. ノートパソコン/PC から Pi が到達可能か確認
ノートパソコンから Raspberry Pi に ping を試みます：
```bash
ping <your_pi_ip_address>
```

ping が失敗した場合：
- Pi の電源が入っており、同じネットワークに接続されていることを確認してください。
- Pi で SSH が有効になっているか確認してください。

### 3. SSH 接続を試す
Pi に SSH 接続できない場合、適切に接続されていない可能性があります。以下を使用してください：
```bash
ssh <your_pi_user_name>@<your_pi_ip_address>
```
接続エラーが発生した場合：
- Pi で SSH が有効になっていることを確認するには、以下を実行します：
  ```bash
  sudo raspi-config
  ```
  次に、**Interfacing Options -> SSH** に移動して有効にしてください。

### 4. 同じ設定ファイル
ノートパソコン/PC と Raspberry Pi の両方で設定ファイルが同じであることを確認してください。

# G. データセットを記録する
テレオペレーションに慣れたら、LeKiwiを使って最初のデータセットを記録することができます。

LeKiwiでプログラムを開始するには、Raspberry PiにSSHで接続し、以下のコマンドを実行してください：
```bash
conda activate lerobot
python lerobot/scripts/control_robot.py \
  --robot.type=lekiwi \
  --control.type=remote_robot
```

データセットをアップロードするためにHugging Face hubの機能を使用したい場合、以前にログインしていない場合は、書き込みアクセス可能なトークンを使用してログインしてください。このトークンは[Hugging Face設定](https://huggingface.co/settings/tokens)から生成できます：
```bash
huggingface-cli login --token ${HUGGINGFACE_TOKEN} --add-to-git-credential
```

Hugging Faceリポジトリ名を変数に保存して、以下のコマンドを実行します：
```bash
HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER
```
その後、ラップトップで以下のコマンドを実行して2つのエピソードを記録し、データセットをHubにアップロードします：
```bash
python lerobot/scripts/control_robot.py \
  --robot.type=lekiwi \
  --control.type=record \
  --control.fps=30 \
  --control.single_task="レゴブロックを掴んでゴミ箱に入れる。" \
  --control.repo_id=${HF_USER}/lekiwi_test \
  --control.tags='["tutorial"]' \
  --control.warmup_time_s=5 \
  --control.episode_time_s=30 \
  --control.reset_time_s=30 \
  --control.num_episodes=2 \
  --control.push_to_hub=true
```

注意：`--control.resume=true`を追加することで記録を再開することができます。

### 有線版
**有線**のLeKiwiバージョンを使用している場合は、これらのデータセット記録コマンドを含むすべてのコマンドをラップトップで実行してください。

# H. データセットを可視化する

`--control.push_to_hub=true`を使用してデータセットをHubにアップロードした場合、[オンラインでデータセットを可視化](https://huggingface.co/spaces/lerobot/visualize_dataset)できます。以下のコマンドでリポジトリIDをコピーして貼り付けます：
```bash
echo ${HF_USER}/lekiwi_test
```

`--control.push_to_hub=false`を使用してアップロードしなかった場合でも、以下のコマンドでローカルで可視化できます（ブラウザで`http://127.0.0.1:9090`を開くことで可視化ツールが表示されます）：
```bash
python lerobot/scripts/visualize_dataset_html.py \
  --repo-id ${HF_USER}/lekiwi_test \
  --local-files-only 1
```

# I. エピソードを再生する
次に、ロボットで最初のエピソードを再生してみましょう：
```bash
python lerobot/scripts/control_robot.py \
  --robot.type=lekiwi \
  --control.type=replay \
  --control.fps=30 \
  --control.repo_id=${HF_USER}/lekiwi_test \
  --control.episode=0
```

## J. ポリシーを訓練する

ロボットを制御するポリシーを訓練するには、`python lerobot/scripts/train.py`スクリプトを使用します。いくつかの引数が必要です。以下は例のコマンドです：
```bash
python lerobot/scripts/train.py \
  --dataset.repo_id=${HF_USER}/lekiwi_test \
  --policy.type=act \
  --output_dir=outputs/train/act_lekiwi_test \
  --job_name=act_lekiwi_test \
  --policy.device=cuda \
  --wandb.enable=true
```

これを説明します：
1. `--dataset.repo_id=${HF_USER}/lekiwi_test`でデータセットを引数として指定しました。
2. `policy.type=act`でポリシーを指定しました。この設定は`configuration_act.py`から読み込まれます。このポリシーは、データセットに保存されたロボットのモーターステート、モーターアクション、カメラ（例：`laptop`と`phone`）の数に自動的に適応します。
3. `policy.device=cuda`を指定しました。これはNvidia GPUで訓練するためですが、Appleシリコンで訓練する場合は`policy.device=mps`を使用できます。
4. `wandb.enable=true`を指定して[Weights and Biases](https://docs.wandb.ai/quickstart)を使用し、訓練プロットを可視化します。これはオプションですが、使用する場合は`wandb login`を実行してログインしてください。

訓練には数時間かかるはずです。チェックポイントは`outputs/train/act_lekiwi_test/checkpoints`に保存されます。

## K. ポリシーを評価する

`lerobot/scripts/control_robot.py` の `record` 関数を使用して、ポリシーチェックポイントを入力として評価を行うことができます。例えば、以下のコマンドを実行して10回の評価エピソードを記録します：
```bash
python lerobot/scripts/control_robot.py \
  --robot.type=lekiwi \
  --control.type=record \
  --control.fps=30 \
  --control.single_task="Drive to the red block and pick it up" \
  --control.repo_id=${HF_USER}/eval_act_lekiwi_test \
  --control.tags='["tutorial"]' \
  --control.warmup_time_s=5 \
  --control.episode_time_s=30 \
  --control.reset_time_s=30 \
  --control.num_episodes=10 \
  --control.push_to_hub=true \
  --control.policy.path=outputs/train/act_lekiwi_test/checkpoints/last/pretrained_model
```

ご覧の通り、これは以前にトレーニングデータセットを記録するために使用したコマンドとほぼ同じです。変更点は以下の2つです：
1. `--control.policy.path` 引数が追加されており、ポリシーチェックポイントのパスを指定します（例：`outputs/train/eval_act_lekiwi_test/checkpoints/last/pretrained_model`）。モデルチェックポイントをハブにアップロードした場合は、モデルリポジトリを使用することもできます（例：`${HF_USER}/act_lekiwi_test`）。
2. データセット名が `eval` で始まるようになり、推論を実行していることを反映しています（例：`${HF_USER}/eval_act_lekiwi_test`）。

## ヘルプ 🙋‍

ハードウェアに関する問題については、カスタマーサービスにお問い合わせください。使用方法に関する質問は、Discordに参加してください。

[LeRobot プラットフォーム](https://github.com/huggingface/lerobot) 

[LeRobot Discord チャンネル](https://discord.gg/8TnwDdjFGU)

## 技術サポート & 製品ディスカッション

弊社製品をご利用いただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>