---
description: MeshCore ファームウェアのソースコード環境を構築し、T1000-E をコンパイルしてファームウェアを書き込むための実践チュートリアルです。
title: MeshCore ソースコード開発チュートリアル
keywords:
  - MeshCore
  - Source Code
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
updatedAt: '2026-04-02'
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

VSCode を開き、PlatformIO アイコンをクリックし、`select a folder` を選択します。クローンしたプロジェクトのフォルダを選択します。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/pickfolder.png)

PlatformIO は必要な依存関係を自動的にインストールします。インストールが成功すると、`Project has been successfully updated` と表示されます。


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/SucessfullyUpdate.png" style={{width:800, height:'auto'}}/></div>


## ファームウェア開発

### 開発チュートリアル

ターゲットボード用の environment を探します。ここでは T1000-E Bluetooth Companion を例に説明します：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000EBoard.jpg" style={{width:800, height:'auto'}}/></div>


その後、PlatformIO がボードに必要な依存関係を準備します。

コードを変更します。ボード用の `variant.h` ファイルを変更することを推奨します。

コーディングが完了したら、次のコマンドを実行してコードをコンパイルし、uf2 ファイルに変換します。

``` bash
pio run -e t1000e_companion_radio_ble
pio run -e t1000e_companion_radio_ble -t create_uf2
```

デバイスのボタンを押し続けたまま、素早く 2 回充電ケーブルを接続すると、緑色の LED が点灯し続けます。ポップアップしたディスクに uf2 ファイルをドラッグします。uf2 ファイルは `.pio\build\t1000e_companion_radio_ble` にあります。

### 例

#### ユーザーライトの制御

この例では、ユーザーライトを常時点灯させる方法を示します。次のコードを `/examples/companion_radio/ui-new/ui-orig/UITask.cpp` にコピーします。

``` python
void UITask::userLedHandler() {
#ifdef PIN_STATUS_LED
#ifdef T1000_E
  // T1000-E: keep status LED continuously on.
  digitalWrite(PIN_STATUS_LED, LED_STATE_ON);
  return;
#endif
  static int state = 0;
  static int next_change = 0;
  static int last_increment = 0;
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000ELight.jpg" style={{width:900, height:'auto'}}/></div>


コンパイルして、uf2 ファイルを T1000-E に書き込みます。

## （上級）PR の送信

MeshCore プロジェクトへの貢献をご検討いただきありがとうございます！どのように貢献できるでしょうか？
**1. バグ報告**

- Issues トラッカーを使用してください
- わかりやすいタイトルを使用してください（例："Crash when calling begin() with invalid pin"）
- 再現手順を正確に記述してください
- 使用しているボード、IDE のバージョン、ライブラリのバージョン、および関連するコードスニペットを含めてください
- 可能であれば、最小限かつ完全なサンプルスケッチを添付してください

**2. 機能拡張／新機能の提案**
- [Feature request] というプレフィックスを付けて issue を作成してください
- ユースケースを説明してください → どのような問題が解決されますか？
- 理想的な API ／挙動を記述してください（コード例があると非常に助かります）
**3. コード変更の送信（Pull Request）**
### 小さな修正
(誤字、コメント、サンプル、小さなバグ修正)
→ 事前に issue を立てる必要はありません。Pull Request を直接作成してください。

### 大きな変更／新機能
1. まず issue を作成してアイデアを議論します
2. メンテナーから大まかな 👍 をもらいます
3. 'dev' ブランチからリポジトリをフォークし、自分のブランチ（fix/xxx, feature/yyy, docs/whatever）を作成します
4. 変更を加えます
5. 必要に応じてサンプルを更新または追加します
6. コード内のコメントを追加／更新します
7. Pull Request を送信します

### Pull Request のガイドライン
- 1 つの機能／修正につき 1 つの Pull Request（小さい PR の方がレビューしやすく、早くマージされます）
- わかりやすいコミットメッセージを使用してください
  Good: Fix I2C timeout handling on ESP32
  Bad: update
- 関連する issue があれば参照してください（Fixes #123, Closes #89 など）
- 公開 API を変更した場合は、README.md と library.properties を更新してください
- 新機能には examples/ ディレクトリ内のサンプルスケッチを含めてください
### コーディングスタイル
.clang-format に従い、既存の C++ スタイルに従ってください

- インデントはスペース 2 つ（タブは使用しない）
- 関数および変数名は camelCase
- クラス名は UpperCamelCase / PascalCase
- #define 定数は ALL_CAPS
- 可能な範囲で 1 行あたり ~100 文字未満に抑える
(ただし、厳密な規則よりも既存コードとの一貫性を優先してください)
