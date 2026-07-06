---
description: Lerobot の SO-ARM 用ステアリングギアデバッグツール。
title: Lerobot の SO-ARM 用ステアリングギアデバッグツール
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
updatedAt: '2026-06-29'
---

# Lerobot の SO-ARM 用ステアリングギアデバッグツール

## はじめに

Steering Gear Debugging Tool（Seeed_RoboController）は、Lerobot/SO-ARM ロボットアーム用のグラフィカルなデバッグツールです。このツールを使用すると、サーボの状態を素早く検出し、サーボ ID を再キャリブレーションし、ニュートラル値を書き込み、個々のサーボを制御し、ロボットアームのキャリブレーションファイルを管理できます。これにより、リーダーアームおよびフォロワーアームの組み立て、デバッグ、保守が容易になります。

## 1. インストール

Windows、Ubuntu、Mac システムに対応しています。

1\. まず、リポジトリをクローンします。

```Plain
git clone https://github.com/Seeed-Projects/Seeed_RoboController.git
```

2\. Lerobot の仮想環境内に本ツールをインストールすることを推奨します。スタンドアロンでインストールしたい場合は、システムの Python を汚染しないよう、新しい仮想環境を作成してください。

```Plain
pip install -r requirements.txt
```

3\. 環境をチェックします。`[OK] Environment check passed` と表示されれば、プロジェクトを実行する準備が整っています。

```Plain
python setup.py
```

4\. ツールを起動します。

次のコマンドを実行して、対話的なポート選択を開始します。

```Plain
python -m src.gui.factory_calibration_tool
```

（オプション）ポートが占有されている場合は、手動でポートを指定します。

```Plain
python -m src.gui.factory_calibration_tool --port1 /dev/ttyUSB0 --port2 /dev/ttyUSB1
```

## 2. クイックスタート（リーダーアームおよびフォロワーアームに適用）

### 1. サーボが正常かどうかを確認する

サーボ 1〜6 がすべて正常に検出されていれば、サーボが正しく認識されており、基本機能が動作していることを意味します。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/debug_tool.webp" />
</div>

一部のサーボが未検出と表示される場合は、まず配線が正しいかを確認し、ページを閉じて再度開いてください。それでも検出されない場合、サーボ ID が重複している可能性があります（ロボットアームのキャリブレーション用コマンドを誤ってサーボのキャリブレーション用コマンドとして入力した可能性があります）。この場合、これらのサーボの ID を再キャリブレーションする必要があります。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/02.png" />
</div>

### 2. サーボのワイヤハーネスを取り外す

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

### 3. サーボ ID を再キャリブレーションする

ロボットアームには、必ず 1 つのサーボだけが接続されている状態にしてください。

（サーボに ID を書き込む際、サーボはシリアルバスを共有しているため、重複した ID が存在すると、たとえば ID 4 を 6 に変更した場合、バス上の ID 4 を持つすべてのサーボが 6 に変更されてしまいます。そのため、すべてのサーボを取り外し、1 つずつ再書き込みする必要があります。）

例えば、以下のように #6 サーボをドライバボードに接続できます。他のサーボも同様の方法で接続できるため、ロボットアームを分解せずに作業できます。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/09.webp" />
</div>

図のように、認識されているのは #4 サーボだけですが、実際に接続されているのは #6 サーボです。これはサーボ ID が誤っており、6 に戻す必要があることを示しています。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/10.png" />
</div>

この時点で、#4 サーボをクリックして、その ID を 6 に変更できます。他のサーボについても同様の操作を繰り返します。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/11.png" />
</div>

サーボのキャリブレーションが完了したら、ワイヤを 1 本ずつ差し戻して作業完了です。

### 4. サーボにニュートラル値を書き込む

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/12.jpg" />
</div>

1\. **Serial Port Neutral Test** をクリックして、ロボットアームのニュートラル位置が上図のようになっているか確認します。おおよそ同じであれば、ロボットアームのニュートラル値は正常です。

2\. そうでない場合は、ロボットアームをニュートラル位置に動かしてから **Serial Port Neutral Calibration** をクリックします。ロボットアームは現在位置をニュートラル値としてサーボに書き込みます。

3\. **Serial Port Disable Motors** をクリックすると、ロボットアームの力が抜けるので、手で支える必要があります。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/13.png" />
</div>

### 5. 単一サーボの制御

デフォルトでは、ページ上のすべてのサーボは図のようにニュートラル位置にあります。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/14.png" />
</div>

まずトルクを有効にします。ワンクリックですべてのトルクを有効にすることも、単一サーボのトルクだけを有効にすることもできます。その後、スライダーを動かしてサーボを対応する位置まで移動させます。ただし、必ずゆっくり動かしてください。ロボットアームの 3D プリント部品が物理的に一部の位置を干渉するため、アームは実際には端の位置まで到達できません。可動範囲には最大値と最小値の制限があるので、スライダーを 0 や最大値まで動かさないでください。トルクを無効にすると、ロボットアームの力が抜けます。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/15.png" />
</div]

上図のように、トルクを有効にすると、対応するサーボの動きが変化します。

Pos: 位置

V: 電圧

T: 温度

Spd: 速度

Load: トルク

Cur: 電流

Mov: 動作状態

Model: モデル、権限

Status: 状態には Normal、Overcurrent、Overload が表示されます

### 6. 高度なツール

対応するレジスタアドレスのデータを読み取り、対応するデータを書き込むことができます。

ボーレートを変更できます。

工場出荷時設定に復元できます。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/16.png" />
</div>

### 7. ロボットアームキャリブレーションファイルの管理

対応するフォロワーアームのキャリブレーションファイルまたはリーダーアームのキャリブレーションファイルを選択して、実行・変更・削除ができます。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/17.png" />
</div>

### 8. 新しいロボットアームキャリブレーションファイルを作成する

**GUI Calibration Wizard** をクリックし、対応するロボットアームとポート番号を選択します。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/18.png" />
</div>

各サーボに対して、最小値、最大値、およびニュートラルのキャリブレーションを行うことができます。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/19.png" />
</div>

まず、各サーボのニュートラル値を記録します。各サーボを図のような位置に配置し、サーボ 1〜6 について順番に **Record Neutral Value** をクリックします。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/20.png" />
</div>

次に、各サーボについて **Start Recording Range** をクリックし、サーボを最大および最小の範囲まで回転させてから **Stop Recording Range** をクリックします。上記の操作を各サーボに対して繰り返し、最後にキャリブレーションファイルに名前を付けて保存します。
