---
description: "Seeed_RoboController ツールを使用して SO-ARM サーボをデバッグする方法：Windows、Ubuntu、Mac 上でサーボの検出、ID 修正、ニュートラル値の書き込み、ステータスの読み取りを行います。"
title: SO-Arm デバッグツール
keywords:
  - Lerobot
  - SO-ARM
  - ロボティクス
  - サーボ
  - キャリブレーション
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /lerobot_steering_gear_debugging_tool
last_update:
  date: 6/29/2026
  author: ZhangJiaQuan
url: https://wiki.seeedstudio.com/ja/lerobot_steering_gear_debugging_tool/
createdAt: '2026-06-29'
updatedAt: '2026-09-16'
---

import '/src/css/rebot-wiki-style.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# LeRobot における SO-ARM 用ステアリングギアデバッグツール

<div align="center">
  <img
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp"
    width={800}
    height={600}
    style={{height: 'auto'}}
    alt="SO-ARM100 and SO-ARM101 robotic arm kits"
  />
</div>

<div className="rebot-buy-button-group">
  <span className="rebot-buy-button-glow" aria-hidden="true"></span>
  <a className="rebot-buy-button" href="https://www.seeedstudio.com/SO-101-Assembled-Kit-Pro-p-6691.html" target="_blank" rel="noopener noreferrer">
    <span>SO-ARM101 キットを入手</span>
    <svg className="rebot-buy-button-arrow" aria-hidden="true" viewBox="0 0 10 10" width="10" height="10" fill="none">
      <path className="rebot-buy-button-arrow-line" d="M0 5h7"></path>
      <path className="rebot-buy-button-arrow-head" d="M1 1l4 4-4 4"></path>
    </svg>
  </a>
</div>

<p align="center"><strong>対応プラットフォーム</strong> · Windows / Ubuntu / macOS</p>

## はじめに

ステアリングギアデバッグツール（Seeed_RoboController）は、LeRobot における SO-ARM ロボットアーム用のグラフィカルなデバッグツールです。このツールを使用すると、サーボの状態を素早く検出し、サーボ ID を再キャリブレーションし、ニュートラル値を書き込み、個々のサーボを制御し、ロボットアームのキャリブレーションファイルを管理できます。これにより、リーダーアームおよびフォロワーアームの組み立て、デバッグ、保守が容易になります。

## 1. インストール

<div className="rebot-step-flow">

<section className="rebot-step-item">
<span className="rebot-step-number">1</span>
<div className="rebot-step-content">

<h4>リポジトリをクローンする</h4>

<p className="rebot-step-label">Step 1</p>

```bash
git clone https://github.com/Seeed-Projects/Seeed_RoboController.git
```

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">2</span>
<div className="rebot-step-content">

<h4>依存関係をインストールする</h4>

<p className="rebot-step-label">Step 2</p>

既存の LeRobot 仮想環境内に依存関係をインストールします。スタンドアロンでインストールする場合は、新しい仮想環境を作成して、システムの Python に影響を与えないようにしてください。

```bash
pip install -r requirements.txt
```

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">3</span>
<div className="rebot-step-content">

<h4>環境を確認する</h4>

<p className="rebot-step-label">Step 3</p>

```bash
python setup.py
```

もし [OK] Environment check passed と表示されれば、プロジェクトを実行する準備が整っています。

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">4</span>
<div className="rebot-step-content">

<h4>ツールを起動する</h4>

<p className="rebot-step-label">Step 4</p>

<Tabs defaultValue="interactive">
<TabItem value="interactive" label="インタラクティブなポート選択">

起動後、インターフェースでシリアルポートを選択します。

```bash
python -m src.gui.factory_calibration_tool
```

</TabItem>
<TabItem value="manual" label="ポートを手動で指定">

ポートが占有されている場合は、手動で指定できます。以下のコマンドでは、Linux のデバイスパスの例を使用しています。

```bash
python -m src.gui.factory_calibration_tool --port1 /dev/ttyUSB0 --port2 /dev/ttyUSB1
```

</TabItem>
</Tabs>

</div>
</section>

</div>

## 2. クイックスタート（リーダーアームおよびフォロワーアームに適用）

まずサーボ検出を確認します。配線とシリアルポートを確認した後もサーボ ID の重複が疑われる場合のみ、次の 2 つのステップに進んでください。

<div className="rebot-step-flow">

<section className="rebot-step-item">
<span className="rebot-step-number">1</span>
<div className="rebot-step-content">

### サーボが正常かどうかを確認する {#1-サーボが正常かどうかを確認する}

<p className="rebot-step-label">Step 1</p>

シリアルポートピッカーでポートを選択します。ツールがサーボ 1〜6 を認識すれば、検出チェックは合格です。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/debug_tool.webp" />
</div>

サーボが 1 つ欠けている場合は、その配線を確認し、ツールを一度閉じてから再度開いてください。それでも表示されない場合は、サーボ ID の重複を確認します。例えば、誤ってサーボキャリブレーションコマンドを実行すると、サーボ ID が変更されることがあります。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/02.png" />
</div>

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">2</span>
<div className="rebot-step-content">

### サーボのワイヤハーネスを取り外す {#2-サーボのワイヤハーネスを取り外す}

<p className="rebot-step-label">Step 2</p>

まず、サーボ 6 とサーボ 5 の間の接続ワイヤハーネスを取り外します。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/03.webp" />
</div>

次に、サーボ 5 とサーボ 4 の間の接続ワイヤハーネスを取り外します。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/04.webp" />
</div>

サーボ 4 とサーボ 3 の間の接続ワイヤハーネスを取り外します。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/05.webp" />
</div>

サーボ 3 とサーボ 2 の間の接続ワイヤハーネスを取り外します。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/06.webp" />
</div>

サーボ 2 とサーボ 1 の間の接続ワイヤハーネスを取り外します。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/07.webp" />
</div>

サーボ 1 と制御ボードの間の接続ワイヤハーネスを取り外します。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/08.webp" />
</div>

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">3</span>
<div className="rebot-step-content">

### サーボ ID を再キャリブレーションする {#3-サーボ-id-を再キャリブレーションする}

<p className="rebot-step-label">Step 3</p>

:::caution サーボ ID は 1 つずつ書き込む
ID を書き込むときは、対象のサーボ 1 台だけをシリアルバスに接続してください。例えば、ID 4 を 6 に変更すると、そのバス上の ID 4 を持つすべてのサーボが変更されます。
:::

サーボ 6 を、図のようにドライバボードに直接接続します。他のサーボも同じ方法で、アームを分解せずに行います。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/09.webp" />
</div>

接続されているサーボがサーボ 6 なのに、ツール上では ID 4 のみが表示される場合は、そのサーボの ID を 6 に戻します。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/10.png" />
</div>

インターフェースで ID 4 を選択し、6 に変更します。残りのサーボも 1 台ずつ確認して修正してください。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/11.png" />
</div>

ID を修正したら、サーボのハーネスを 1 本ずつ再接続します。

</div>
</section>

</div>

### サーボにニュートラル値を書き込む {#4-サーボにニュートラル値を書き込む}

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/12.jpg" />
</div>

1. **Serial Port Neutral Test** をクリックし、アームの位置を上の画像と比較します。おおよそ一致していれば、ニュートラル値は正しいです。
2. 一致しない場合は、アームをニュートラル位置に動かし、**Serial Port Neutral Calibration** をクリックして、現在位置をサーボのニュートラル値として保存します。
3. **Serial Port Disable Motors** をクリックする前に、アームを支えてください。サーボの保持トルクが失われます。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/13.png" />
</div>

### 単一サーボ制御 {#5-単一サーボ制御}

インターフェースには、各サーボがデフォルトでニュートラル位置として表示されます。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/14.png" />
</div>

#### サーボの位置を調整する

1. 選択したサーボのトルクを有効にするか、すべてのサーボのトルクを有効にするコントロールを使用します。
2. 選択したサーボのスライダーをゆっくり動かし、対応する関節の動きを確認します。

:::caution 機械的な可動範囲に注意
アームの構造上、関節の可動範囲には制限があります。スライダーはゆっくり動かし、0 や最大値に設定することは避けてください。トルクを無効にする前に、アームを支えてください。
:::

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/21.png" />
</div>

個々のサーボのニュートラル位置をキャリブレーションしたり、保存されているニュートラル位置、最小位置、最大位置をクリアしたりすることもできます。

#### サーボステータスフィールド

| フィールド | 意味 |
| --- | --- |
| `Pos` | 位置 |
| `V` | 電圧 |
| `T` | 温度 |
| `Spd` | 速度 |
| `Load` | トルク |
| `Cur` | 電流 |
| `Mov` | 動作ステータス |
| `Model` | モデルと権限 |
| `Status` | Normal、Overcurrent、Overload のいずれか |

### 高度なツール {#6-高度なツール}

| ツール | 目的 |
| --- | --- |
| レジスタ読み書き | 指定したレジスタアドレスのデータを読み書きします。 |
| ボーレート変更 | サーボのシリアル通信速度を調整します。 |
| 工場出荷時設定に復元 | サーボを工場出荷時設定にリセットします。 |

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/16.png" />
</div>
