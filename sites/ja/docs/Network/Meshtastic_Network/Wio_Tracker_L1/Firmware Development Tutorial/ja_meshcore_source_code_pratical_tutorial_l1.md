---
description: MeshCore ファームウェアのソースコード環境をセットアップし、Tracker L1 をコンパイルしてファームウェアを書き込むための実践チュートリアルです。
title: MeshCore ソースコード開発チュートリアル
keywords:
  - MeshCore
  - Source Code
  - PlatformIO
  - Wio Tracker L1
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/MeshcoreDevelopment.png
slug: /meshcore_source_code_pratical_tutorial_l1
sidebar_position: 5
last_update:
  date: 3/27/2026
  author: Michelle Huang
url: https://wiki.seeedstudio.com/ja/meshcore_source_code_pratical_tutorial_l1/
createdAt: '2026-03-27'
updatedAt: '2026-03-27'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 前提条件

### 必要なツール

始める前に、以下のツールを用意してください：

1. [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
2. [Python 3](https://www.python.org/downloads/)
3. [VS Code](https://code.visualstudio.com/)

### PlatformIO のインストール

VS Code の Extensions マーケットプレイスで `PlatformIO` を検索してインストールします。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image7.png)

インストール後、通常は左側のツールバーにアリの形をしたアイコンが表示されます。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image8.png)

### プロジェクトの準備

プロジェクトを配置したいフォルダーを開きます。ターミナルでそのフォルダーを開きます。[ここをクリック](https://github.com/meshcore-dev/MeshCore)してプロジェクトを git clone します。

VSCode を開き、platform IO アイコンをクリックし、`select a folder` を選択します。clone したプロジェクトのフォルダーを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/pickfolder.png" style={{width:700, height:'auto'}}/></div>


PlatformIO は必要な依存関係を自動的にインストールします。インストールが成功すると、`Project has been successfully updated` と表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/SucessfullyUpdate.png" style={{width:700, height:'auto'}}/></div>


## ファームウェア開発

### 開発チュートリアル

対象ボード用の environment（環境）を見つけます。ここでは L1 Pro companion を例にします：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/L1Board.jpg" style={{width:800, height:'auto'}}/></div>


その後、PlatformIO がそのボードに必要な依存関係を準備します。

コードを変更します。ボード用の `variant.h` ファイルを変更することを推奨します。

コーディングが完了したら、次のコマンドを実行してコードをコンパイルし、uf2 ファイルに変換します。

``` bash
pio run -e WioTrackerL1_companion_radio_ble
pio run -e WioTrackerL1_companion_radio_ble -t create_uf2
```

次に、RST ボタンを素早く 2 回クリックして DFU モードに入ります。ポップアップしたディスクに uf2 ファイルをドラッグします。uf2 ファイルは `.pio\build\WioTrackerL1_companion_radio_ble` にあります。

### 例

#### ユーザー表示の制御

この例では、L1 Pro の UI 表示をどのように変更するかを示します。画面上のメッセージ表示を削除し、「Test」を常に表示するようにします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Displayy.jpg" style={{width:500, height:'auto'}}/></div>

次のコードを `/examples/companion_radio/ui-new/UITask.cpp` にコピーします。

``` python
 if (_page == HomePage::FIRST) {
      display.setColor(DisplayDriver::YELLOW);
      display.setTextSize(2);
      display.drawTextCentered(display.width() / 2, 20, "Test");
```
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/L1Display.jpg" style={{width:800, height:'auto'}}/></div>

これをコンパイルし、生成された uf2 ファイルを L1 Pro に書き込みます。

## （上級）PR の提出

MeshCore プロジェクトへの貢献をご検討いただきありがとうございます！どのように貢献できますか？
**1. バグ報告**

- Issues トラッカーを使用してください
- わかりやすいタイトルを付けてください（例："Crash when calling begin() with invalid pin"）
- 再現するための手順を正確に記述してください
- 使用しているボード、IDE バージョン、ライブラリバージョン、および関連するコードスニペットを含めてください
- 可能であれば、最小限かつ完全なサンプルスケッチを添付してください

**2. 機能拡張・新機能の提案**
- [Feature request] というプレフィックスを付けて issue を作成してください
- ユースケースを説明してください → この提案はどのような問題を解決しますか？
- 理想的な API / 挙動を記述してください（コード例があると非常に助かります）
**3. コード変更の提出（Pull Request）**
### 小さな修正
（タイポ、コメント、サンプル、軽微なバグ修正）
→ 事前に issue を立てる必要はありません。直接 pull request を作成してください。

### 大きな変更・新機能
1. まず issue を立ててアイデアを議論します
2. メンテナーからおおまかな👍（賛同）を得ます
3. 'dev' ブランチからリポジトリを fork し、自分のブランチ（fix/xxx, feature/yyy, docs/whatever）を作成します
4. 変更を加えます
5. 必要に応じてサンプルコードを更新または追加します
6. コード内のコメントを追加・更新します
7. Pull request を送信します

### Pull Request のガイドライン
- 1 機能 / 1 修正につき 1 つの pull request（小さい PR の方がレビューしやすく、早くマージできます）
- 説明的なコミットメッセージを使用してください
  良い例: Fix I2C timeout handling on ESP32
  悪い例: update
- 関連する issue があれば参照してください（Fixes #123, Closes #89 など）
- 公開 API を変更した場合は、README.md と library.properties を更新してください
- 新機能には examples/ 内のサンプルスケッチを含めてください
### コーディングスタイル
.clang-format に従い、既存の C++ スタイルに従ってください

- インデントはスペース 2 つ（タブは使用しない）
- 関数名や変数名には camelCase を使用
- クラス名には UpperCamelCase / PascalCase を使用
- #define の定数は ALL_CAPS を使用
- 可能であれば 1 行はおおよそ 100 文字未満に抑える
（ただし、厳密なルールよりも既存コードとの一貫性を優先します）
