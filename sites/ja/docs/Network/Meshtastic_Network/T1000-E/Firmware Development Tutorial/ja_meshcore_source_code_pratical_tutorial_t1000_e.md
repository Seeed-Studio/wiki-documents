---
description: MeshCore ファームウェアのソースコード環境を構築し、T1000-E をコンパイルしてファームウェアを書き込むための実践チュートリアルです。
title: MeshCore ソースコード開発チュートリアル
keywords:
  - MeshCore
  - ソースコード
  - PlatformIO
  - T1000-E
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/MeshcoreDevelopment.png
slug: /meshcore_source_code_pratical_tutorial_t1000_e
sidebar_position: 5
last_update:
  date: 3/27/2026
  author: Michelle Huang
url: https://wiki.seeedstudio.com/ja/meshcore_source_code_pratical_tutorial_t1000_e/
createdAt: '2026-03-27'
updatedAt: '2026-03-27'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 前提条件

### 必要なツール

始める前に、次のツールを準備してください：

1. [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
2. [Python 3](https://www.python.org/downloads/)
3. [VS Code](https://code.visualstudio.com/)

### PlatformIO のインストール

VS Code の拡張機能マーケットプレイスで `PlatformIO` を検索してインストールします。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image7.png)

インストール後、通常は左側のツールバーにアリの形をしたアイコンが表示されます。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image8.png)

### プロジェクトの準備

プロジェクトを配置したいフォルダを開きます。ターミナルでそのフォルダを開きます。[ここをクリック](https://github.com/meshcore-dev/MeshCore)してプロジェクトを git clone します。

VSCode を開き、PlatformIO アイコンをクリックして `select a folder` を選択します。クローンしたプロジェクトのフォルダを選択します。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/pickfolder.png)

PlatformIO は必要な依存関係を自動的にインストールします。インストールが成功すると、`Project has been successfully updated` と表示されます。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/SucessfullyUpdate.png)

## ファームウェア開発

### 開発チュートリアル

ターゲットボード用の environment を探します。ここでは Solar node repeater を例に説明します：

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/BoardSelection.png)

その後、PlatformIO がボードに必要な依存関係を準備します。

コードを変更します。ボード用の `variant.h` ファイルを変更することを推奨します。

コーディングが完了したら、次のコマンドを実行してコードをコンパイルし、uf2 ファイルに変換します。

``` bash
pio run -e SenseCap_Solar_repeater
pio run -e SenseCap_Solar_repeater -t create_uf2
```

次に RST ボタンをダブルクリックして DFU モードに入ります。ポップアップしたディスクに uf2 ファイルをドラッグします。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/Dragin.png)

### 例

#### ユーザー用ライト制御

この例では、ユーザー用ライトを点滅させるループの書き方を示します。次のコードを `/examples/simple_repeater/main.cpp` にコピーします。

``` python
#endif
#ifdef LED_WHITE
static void updateUserLightBlink() {
  static unsigned long lastLedPhaseChangeAt = 0;
  static bool lightIsOn = true;

  const unsigned long now = millis();
  if ((unsigned long)(now - lastLedPhaseChangeAt) >= 5000) {
    lightIsOn = !lightIsOn;
    lastLedPhaseChangeAt = now;
  }

  digitalWrite(LED_WHITE, lightIsOn ? LED_STATE_ON : !LED_STATE_ON);
}
```

そして、ループを書きます：

``` python
#ifdef LED_WHITE
  updateUserLightBlink();
#endif
```

コンパイルして、生成された uf2 ファイルを Solar node に書き込みます。